import path from "node:path";
import { fileURLToPath } from "node:url";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import { env } from "./config/env.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { authRoutes } from "./modules/auth/auth.routes.js";
import { companiesRoutes } from "./modules/companies/companies.routes.js";
import { contactRoutes } from "./modules/contact/contact.routes.js";
import { participantsRoutes } from "./modules/participants/participants.routes.js";
import { programsRoutes } from "./modules/programs/programs.routes.js";
import { redemptionsRoutes } from "./modules/redemptions/redemptions.routes.js";
import { reportsRoutes } from "./modules/reports/reports.routes.js";
import { rewardsRoutes } from "./modules/rewards/rewards.routes.js";
import { meRoutes } from "./modules/participants/me.routes.js";
import { setupRoutes } from "./modules/setup/setup.routes.js";

export function createApp() {
  const app = express();

  app.use(helmet());
  app.use(
    cors({
      origin: env.clientOrigin,
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(cookieParser());

  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  app.use("/api/auth", authRoutes);
  app.use("/api/contact", contactRoutes);
  app.use("/api/companies", companiesRoutes);
  app.use("/api/programs", programsRoutes);
  app.use("/api/participants", participantsRoutes);
  app.use("/api/rewards", rewardsRoutes);
  app.use("/api/redemptions", redemptionsRoutes);
  app.use("/api/reports", reportsRoutes);
  app.use("/api/me", meRoutes);
  app.use("/api/setup", setupRoutes);

  if (env.isProduction) {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const clientDist = path.join(__dirname, "../../client/dist");
    app.use(express.static(clientDist));
    app.get(/^(?!\/api).*/, (_req, res) => {
      res.sendFile(path.join(clientDist, "index.html"));
    });
  }

  app.use(errorHandler);

  return app;
}
