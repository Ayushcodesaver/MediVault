import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Building2, Stethoscope, Heart, Landmark, Search, MapPin, UserPlus, CheckCircle, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  { icon: Building2, label: "Hospitals", active: true },
  { icon: Stethoscope, label: "Diagnostic Centers", active: false },
  { icon: Heart, label: "Insurance", active: false },
  { icon: Landmark, label: "Gov Agencies", active: false },
];

const filters = ["All Partners", "Nearby", "Recently Added"];

const partners = [
  { name: "St. Augustine Central Hospital", address: "884 Medical Plaza, San Francisco, CA", verified: true, hasRecords: true },
  { name: "Nexus Diagnostics Center", address: "42 Innovation Way, Boston, MA", verified: true, hasRecords: true },
  { name: "Apex Health Insurance Group", address: "Financial District, New York, NY", verified: true, hasRecords: false },
  { name: "Department of Public Health", address: "Constitution Ave, Washington, DC", verified: true, hasRecords: true },
  { name: "Northwestern Medical Center", address: "251 E Huron St, Chicago, IL", verified: true, hasRecords: true },
  { name: "Genome Bio-Lab Inc.", address: "99 Research Blvd, Austin, TX", verified: true, hasRecords: false },
];

export default function PartnerNetwork() {
  const [activeFilter, setActiveFilter] = useState("All Partners");

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Verified Partner Network</h1>
          <p className="text-muted-foreground text-sm mt-1">Access verified medical entities across the blockchain network.</p>
        </div>

        {/* Categories */}
        <div>
          <h2 className="font-semibold mb-3">Explore Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <button
                key={cat.label}
                className={`card-medical flex flex-col items-start gap-3 transition-colors ${
                  cat.active ? "gradient-hero" : "hover:bg-secondary"
                }`}
              >
                <cat.icon className={`h-8 w-8 ${cat.active ? "text-accent" : "text-muted-foreground"}`} />
                <span className={`text-sm font-medium ${cat.active ? "text-primary-foreground" : ""}`}>
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Find a hospital or diagnostic lab..." className="pl-10" />
          </div>
          <div className="flex gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === f
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Partner Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="card-medical"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-muted-foreground" />
                </div>
                <span className="badge-verified"><CheckCircle className="h-3 w-3" /> VERIFIED</span>
              </div>
              <h3 className="font-semibold text-sm mb-2">{partner.name}</h3>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
                <MapPin className="h-3 w-3" />
                {partner.address}
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" className={partner.hasRecords ? "gradient-hero text-primary-foreground flex-1" : "gradient-accent text-accent-foreground flex-1"}>
                  {partner.hasRecords ? "Request Records" : "Add to My Network"}
                </Button>
                <Button size="sm" variant="outline"><UserPlus className="h-4 w-4" /></Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="gradient-hero rounded-2xl p-8">
          <div className="flex items-center gap-2 text-accent text-xs mb-2">
            <div className="h-2 w-2 rounded-full bg-accent animate-pulse-teal" />
            <span className="uppercase tracking-widest font-medium">Network Status: Immutable & Active</span>
          </div>
          <h2 className="text-2xl font-bold text-primary-foreground mb-2">Can't find your primary provider?</h2>
          <p className="text-primary-foreground/60 text-sm mb-4 max-w-md">
            Invite your healthcare provider to the MediVault ecosystem to ensure your medical records remain in your control.
          </p>
          <Button className="gradient-accent text-accent-foreground">
            <Send className="h-4 w-4 mr-2" /> Send Network Invitation
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
