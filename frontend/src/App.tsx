import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import HealthRecords from "./pages/HealthRecords";
import PartnerNetwork from "./pages/PartnerNetwork";
import AccountSettings from "./pages/AccountSettings";
import SecurityLogs from "./pages/SecurityLogs";
import ConsentManager from "./pages/ConsentManager";
import IssueRecords from "./pages/IssueRecords";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/records" element={<HealthRecords />} />
          <Route path="/partners" element={<PartnerNetwork />} />
          <Route path="/settings" element={<AccountSettings />} />
          <Route path="/security-settings" element={<AccountSettings />} />
          <Route path="/verification" element={<SecurityLogs />} />
          <Route path="/vault" element={<ConsentManager />} />
          <Route path="/analytics" element={<IssueRecords />} />
          <Route path="/issue-records" element={<IssueRecords />} />
          <Route path="/support" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
