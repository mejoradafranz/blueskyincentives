export type UserRole = "client_admin" | "employee" | "superadmin";

export interface AuthUser {
  id: string;
  email: string;
  role: UserRole;
  companyId: string | null;
  firstName: string;
  lastName: string;
}

export type ProgramStatus = "active" | "paused" | "archived";

export interface Program {
  id: string;
  name: string;
  description: string | null;
  status: ProgramStatus;
  budgetCents: number;
  pointsPerDollar: number;
  startDate: string | null;
  endDate: string | null;
  createdAt: string;
}

export interface Participant {
  id: string;
  programId: string;
  pointsBalance: number;
  enrolledAt: string;
  status: "active" | "removed";
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
}

export interface PointsTransaction {
  id: string;
  type: "award" | "adjustment" | "redemption";
  points: number;
  note: string | null;
  created_at: string;
}

export interface ProgramOverview {
  totalPointsAwarded: number;
  totalPointsRedeemed: number;
  activeParticipants: number;
  budgetCents: number;
  budgetUsedCents: number;
  budgetRemainingCents: number;
}

export interface RewardCatalogItem {
  id: string;
  name: string;
  description: string | null;
  category: "gift_card" | "merchandise" | "experience" | "other";
  pointsCost: number;
  isActive: boolean;
}

export interface Redemption {
  id: string;
  pointsSpent: number;
  status: "completed" | "pending" | "cancelled";
  createdAt: string;
  reward: {
    id: string;
    name: string;
    category: string;
  };
}
