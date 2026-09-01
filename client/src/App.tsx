import { Route, Routes } from "react-router-dom";
import { MarketingLayout } from "./layouts/MarketingLayout";
import { AdminPortalLayout } from "./layouts/AdminPortalLayout";
import { EmployeePortalLayout } from "./layouts/EmployeePortalLayout";
import { ProtectedRoute } from "./auth/ProtectedRoute";

import { Home } from "./pages/marketing/Home";
import { About } from "./pages/marketing/About";
import { Programs } from "./pages/marketing/Programs";
import { Industries } from "./pages/marketing/Industries";
import { IndustryDetail } from "./pages/marketing/IndustryDetail";
import { InsuranceAgents } from "./pages/marketing/InsuranceAgents";
import { RealEstate } from "./pages/marketing/RealEstate";
import { TravelAgencies } from "./pages/marketing/TravelAgencies";
import { Integrations } from "./pages/marketing/Integrations";
import { Demo } from "./pages/marketing/Demo";
import { HowItWorks } from "./pages/marketing/HowItWorks";
import { Pricing } from "./pages/marketing/Pricing";
import { Contact } from "./pages/marketing/Contact";
import { Login } from "./pages/marketing/Login";
import { NotFound } from "./pages/marketing/NotFound";

import { AdminDashboard } from "./pages/admin/Dashboard";
import { Participants } from "./pages/admin/Participants";
import { ProgramConfig } from "./pages/admin/ProgramConfig";
import { Reports } from "./pages/admin/Reports";

import { EmployeeDashboard } from "./pages/employee/Dashboard";
import { RewardsCatalog } from "./pages/employee/RewardsCatalog";
import { TransactionHistory } from "./pages/employee/TransactionHistory";
import { RedemptionHistory } from "./pages/employee/RedemptionHistory";

export default function App() {
  return (
    <Routes>
      <Route element={<MarketingLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/industries/insurance-agents" element={<InsuranceAgents />} />
        <Route path="/industries/real-estate" element={<RealEstate />} />
        <Route path="/industries/travel-agencies" element={<TravelAgencies />} />
        <Route path="/industries/:slug" element={<IndustryDetail />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route
        path="/admin"
        element={<ProtectedRoute allowedRoles={["client_admin", "superadmin"]} />}
      >
        <Route element={<AdminPortalLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="participants" element={<Participants />} />
          <Route path="programs" element={<ProgramConfig />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Route>

      <Route path="/portal" element={<ProtectedRoute allowedRoles={["employee"]} />}>
        <Route element={<EmployeePortalLayout />}>
          <Route path="dashboard" element={<EmployeeDashboard />} />
          <Route path="rewards" element={<RewardsCatalog />} />
          <Route path="history" element={<TransactionHistory />} />
          <Route path="redemptions" element={<RedemptionHistory />} />
        </Route>
      </Route>
    </Routes>
  );
}
