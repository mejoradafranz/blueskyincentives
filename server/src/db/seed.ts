import { pool } from "./pool.js";
import { hashPassword } from "../utils/password.js";

const DEMO_PASSWORD = "password123";

async function seed() {
  const passwordHash = await hashPassword(DEMO_PASSWORD);

  const { rows: companyRows } = await pool.query<{ id: string }>(
    `INSERT INTO client_companies (name) VALUES ($1) RETURNING id`,
    ["Acme Corp"]
  );
  const companyId = companyRows[0].id;

  await pool.query(
    `INSERT INTO users (email, password_hash, role, client_company_id, first_name, last_name)
     VALUES ($1, $2, 'client_admin', $3, $4, $5)`,
    ["admin@acme.demo", passwordHash, companyId, "Alex", "Admin"]
  );

  const { rows: programRows } = await pool.query<{ id: string }>(
    `INSERT INTO programs (client_company_id, name, description, budget_cents, points_per_dollar, start_date)
     VALUES ($1, $2, $3, $4, $5, CURRENT_DATE) RETURNING id`,
    [
      companyId,
      "Acme Recognition Program",
      "Peer-to-peer recognition and milestone rewards for Acme employees.",
      5_000_000, // $50,000.00 budget, in cents
      100,
    ]
  );
  const programId = programRows[0].id;

  const employees = [
    { email: "employee@acme.demo", first: "Emma", last: "Employee" },
    { email: "jordan@acme.demo", first: "Jordan", last: "Kim" },
    { email: "priya@acme.demo", first: "Priya", last: "Shah" },
  ];

  for (const emp of employees) {
    const { rows: userRows } = await pool.query<{ id: string }>(
      `INSERT INTO users (email, password_hash, role, client_company_id, first_name, last_name)
       VALUES ($1, $2, 'employee', $3, $4, $5) RETURNING id`,
      [emp.email, passwordHash, companyId, emp.first, emp.last]
    );
    const userId = userRows[0].id;

    const startingPoints = 1000;
    const { rows: participantRows } = await pool.query<{ id: string }>(
      `INSERT INTO participants (program_id, user_id, points_balance)
       VALUES ($1, $2, $3) RETURNING id`,
      [programId, userId, startingPoints]
    );
    const participantId = participantRows[0].id;

    await pool.query(
      `INSERT INTO points_transactions (participant_id, type, points, note)
       VALUES ($1, 'award', $2, 'Welcome bonus')`,
      [participantId, startingPoints]
    );
  }

  const rewards = [
    { name: "$25 Gift Card", category: "gift_card", cost: 2500 },
    { name: "$50 Gift Card", category: "gift_card", cost: 5000 },
    { name: "Branded Hoodie", category: "merchandise", cost: 3500 },
    { name: "Wireless Earbuds", category: "merchandise", cost: 8000 },
    { name: "Team Lunch Voucher", category: "experience", cost: 1500 },
    { name: "Extra PTO Day", category: "other", cost: 12000 },
  ];

  for (const reward of rewards) {
    await pool.query(
      `INSERT INTO rewards_catalog (client_company_id, name, category, points_cost)
       VALUES ($1, $2, $3, $4)`,
      [companyId, reward.name, reward.category, reward.cost]
    );
  }

  console.log("Seed complete.");
  console.log("Demo login credentials (password for all: %s)", DEMO_PASSWORD);
  console.log("  client_admin: admin@acme.demo");
  console.log("  employee:     employee@acme.demo");

  await pool.end();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
