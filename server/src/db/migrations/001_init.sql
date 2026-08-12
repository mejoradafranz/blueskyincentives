CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "citext";

-- ---------- Companies ----------
CREATE TABLE client_companies (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name          TEXT NOT NULL,
  status        TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active','inactive')),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ---------- Users (auth identity for admins AND employees) ----------
CREATE TABLE users (
  id                 UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email              CITEXT NOT NULL UNIQUE,
  password_hash      TEXT NOT NULL,
  role               TEXT NOT NULL CHECK (role IN ('client_admin','employee','superadmin')),
  client_company_id  UUID REFERENCES client_companies(id) ON DELETE CASCADE,
  first_name         TEXT NOT NULL,
  last_name          TEXT NOT NULL,
  status             TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active','invited','disabled')),
  created_at         TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT role_company_check CHECK (
    (role = 'superadmin' AND client_company_id IS NULL) OR
    (role IN ('client_admin','employee') AND client_company_id IS NOT NULL)
  )
);
CREATE INDEX idx_users_company ON users(client_company_id);

-- ---------- Programs ----------
CREATE TABLE programs (
  id                 UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_company_id  UUID NOT NULL REFERENCES client_companies(id) ON DELETE CASCADE,
  name               TEXT NOT NULL,
  description        TEXT,
  status             TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active','paused','archived')),
  budget_cents       BIGINT NOT NULL DEFAULT 0,
  points_per_dollar  INTEGER NOT NULL DEFAULT 100,
  start_date         DATE,
  end_date           DATE,
  created_at         TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_programs_company ON programs(client_company_id);

-- ---------- Participants ----------
CREATE TABLE participants (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  program_id      UUID NOT NULL REFERENCES programs(id) ON DELETE CASCADE,
  user_id         UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  points_balance  INTEGER NOT NULL DEFAULT 0,
  enrolled_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
  status          TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active','removed')),
  UNIQUE (program_id, user_id)
);
CREATE INDEX idx_participants_user ON participants(user_id);
CREATE INDEX idx_participants_program ON participants(program_id);

-- ---------- Points Transactions (append-only ledger) ----------
CREATE TABLE points_transactions (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  participant_id      UUID NOT NULL REFERENCES participants(id) ON DELETE CASCADE,
  type                TEXT NOT NULL CHECK (type IN ('award','adjustment','redemption')),
  points              INTEGER NOT NULL,
  note                TEXT,
  created_by_user_id  UUID REFERENCES users(id),
  created_at          TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_txn_participant ON points_transactions(participant_id, created_at DESC);

-- ---------- Rewards Catalog ----------
CREATE TABLE rewards_catalog (
  id                 UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_company_id  UUID REFERENCES client_companies(id) ON DELETE CASCADE,
  name               TEXT NOT NULL,
  description        TEXT,
  category           TEXT NOT NULL DEFAULT 'gift_card' CHECK (category IN ('gift_card','merchandise','experience','other')),
  points_cost        INTEGER NOT NULL CHECK (points_cost > 0),
  is_active          BOOLEAN NOT NULL DEFAULT true,
  created_at         TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_rewards_company ON rewards_catalog(client_company_id);

-- ---------- Redemptions ----------
CREATE TABLE redemptions (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  participant_id  UUID NOT NULL REFERENCES participants(id) ON DELETE CASCADE,
  reward_id       UUID NOT NULL REFERENCES rewards_catalog(id),
  points_spent    INTEGER NOT NULL,
  status          TEXT NOT NULL DEFAULT 'completed' CHECK (status IN ('completed','pending','cancelled')),
  transaction_id  UUID REFERENCES points_transactions(id),
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_redemptions_participant ON redemptions(participant_id, created_at DESC);

-- ---------- Contact form submissions (public site) ----------
CREATE TABLE contact_submissions (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,
  email       TEXT NOT NULL,
  company     TEXT,
  message     TEXT NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
