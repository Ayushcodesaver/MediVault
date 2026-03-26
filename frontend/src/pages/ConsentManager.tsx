import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Shield, Building2, Plus, CheckCircle, AlertTriangle, Lock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const stats = [
  { label: "Active Consents", value: "12", sub: "Authorized providers & institutions", borderColor: "border-b-accent" },
  { label: "Pending Requests", value: "03", sub: "Require your immediate attention", borderColor: "border-b-destructive" },
  { label: "Integrity Status", value: "Secure", sub: "Last audit 14 minutes ago", borderColor: "border-b-primary" },
];

const requests = [
  {
    org: "Global Health Insurance Co.",
    icon: Building2,
    urgent: true,
    records: "Radiology, Lab Results",
    reason: "Claim Processing (#4421)",
    expires: "Oct 24, 2023",
  },
  {
    org: "Saint Jude's Cardiac Wing",
    icon: Plus,
    urgent: false,
    records: "Full Medical History",
    reason: "Pre-operative Assessment",
    expires: "Dec 12, 2023",
  },
];

const permissions = [
  { org: "City General Hospital", date: "Aug 12, 2023" },
  { org: "Dr. Sarah Chen (PCP)", date: "Jan 05, 2023" },
];

export default function ConsentManager() {
  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Hero */}
        <div className="gradient-hero rounded-2xl p-8 md:p-10">
          <span className="badge-verified bg-verified/20 text-verified mb-3 inline-flex">
            <CheckCircle className="h-3 w-3" /> Blockchain Verified
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">Consent Manager</h1>
          <p className="text-primary-foreground/60 max-w-lg">
            You are in total control of your medical dossier. Grant, manage, and revoke access to your private data with immutable transparency.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label} className={`card-medical border-b-4 ${s.borderColor}`}>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</p>
              <p className="text-3xl font-bold mt-1">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-2">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Incoming Requests */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Incoming Requests</h2>
            <span className="text-sm text-muted-foreground">Review and verify requests</span>
          </div>
          <div className="space-y-4">
            {requests.map((req, i) => (
              <motion.div
                key={req.org}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="card-medical flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <req.icon className="h-5 w-5 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-sm">{req.org}</h3>
                    {req.urgent && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-destructive/10 text-destructive border border-destructive/20 uppercase">
                        Urgent
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mt-1">
                    <span className="flex items-center gap-1"><Shield className="h-3 w-3" /> {req.records}</span>
                    <span>• {req.reason}</span>
                  </div>
                  <p className={`text-xs mt-1 flex items-center gap-1 ${req.urgent ? "text-destructive" : "text-muted-foreground"}`}>
                    <Calendar className="h-3 w-3" /> Expires: {req.expires}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Button size="sm" className="gradient-hero text-primary-foreground">Grant Access</Button>
                  <Button size="sm" variant="outline">Reject Request</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Encryption Status */}
        <div className="card-medical bg-muted/50 flex items-start gap-3 max-w-sm ml-auto">
          <div className="h-2.5 w-2.5 rounded-full bg-verified mt-1 shrink-0" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Encryption Status</p>
            <p className="text-sm mt-1">All consents are stored on an immutable, AES-256 encrypted ledger.</p>
          </div>
        </div>

        {/* Existing Permissions */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Existing Permissions</h2>
            <Button variant="ghost" size="sm" className="text-xs">View access logs</Button>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {permissions.map((p) => (
              <div key={p.org} className="card-medical flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Lock className="h-5 w-5 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm">{p.org}</p>
                  <p className="text-xs text-muted-foreground">Granted on: {p.date}</p>
                </div>
                <Button variant="ghost" size="sm" className="text-destructive font-bold text-xs uppercase tracking-wider">
                  Revoke
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
