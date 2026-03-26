import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Shield, Bell, Key, Fingerprint, AlertTriangle, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function AccountSettings() {
  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Account Settings</h1>
          <p className="text-muted-foreground text-sm mt-1">Manage your secure identity and clinical credentials.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile */}
          <div className="lg:col-span-2 card-medical space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold flex items-center gap-2">
                <Shield className="h-4 w-4" /> Profile Information
              </h2>
              <span className="badge-verified"><CheckCircle className="h-3 w-3" /> VERIFIED PROVIDER</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label className="text-xs uppercase tracking-wider text-muted-foreground">Full Name</Label>
                <Input defaultValue="Dr. Julian Sterling" className="mt-1.5" />
              </div>
              <div>
                <Label className="text-xs uppercase tracking-wider text-muted-foreground">Medical ID (NPI)</Label>
                <Input defaultValue="9283746510" className="mt-1.5" />
              </div>
            </div>

            <div>
              <Label className="text-xs uppercase tracking-wider text-muted-foreground">Clinical Specialization</Label>
              <Input defaultValue="Neurological Oncology & Data Genetics" className="mt-1.5" />
            </div>

            <div className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
              <Avatar className="h-16 w-16">
                <AvatarFallback className="bg-primary text-primary-foreground">JS</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm">Identity Avatar</p>
                <p className="text-xs text-muted-foreground">Recommended size: 400×400px. JPG or PNG.</p>
                <div className="flex gap-2 mt-2">
                  <Button variant="outline" size="sm">Update Image</Button>
                  <Button variant="ghost" size="sm" className="text-destructive">Remove</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Etheric Wallet */}
          <div className="space-y-4">
            <div className="gradient-accent rounded-xl p-5">
              <h3 className="font-semibold flex items-center gap-2 mb-2">
                <Key className="h-4 w-4" /> Etheric Wallet
              </h3>
              <p className="text-xs text-accent-foreground/70 mb-3">
                Your decentralized identifier (DID) used for signing clinical transactions.
              </p>
              <div className="bg-accent-foreground/10 rounded-lg p-3 mb-3">
                <p className="hash-text text-accent-foreground/90 break-all">
                  6x71C7656EC7ab88b098defB751B7401b5f6d8976F
                </p>
              </div>
              <Button variant="outline" className="w-full border-accent-foreground/30 text-accent-foreground">
                <Key className="h-4 w-4 mr-2" /> Rotate Keys
              </Button>
              <div className="flex items-center justify-between mt-4 text-xs text-accent-foreground/60">
                <span>Last Synced: 2 mins ago</span>
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-verified" /> Network Live
                </span>
              </div>
            </div>

            {/* Notifications */}
            <div className="card-medical">
              <h3 className="font-semibold flex items-center gap-2 mb-4">
                <Bell className="h-4 w-4" /> Notifications
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Checkbox defaultChecked />
                  <div>
                    <p className="text-sm font-medium">Emergency Alerts</p>
                    <p className="text-xs text-muted-foreground">Instant push for critical patient data shifts.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox defaultChecked />
                  <div>
                    <p className="text-sm font-medium">Vault Sync Reports</p>
                    <p className="text-xs text-muted-foreground">Weekly digest of blockchain ledger activity.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox />
                  <div>
                    <p className="text-sm font-medium">Network Governance</p>
                    <p className="text-xs text-muted-foreground">Updates on protocol changes and DAO votes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="card-medical">
            <h2 className="font-semibold flex items-center gap-2 mb-4">
              <Shield className="h-4 w-4" /> Security & Access
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center">
                    <Shield className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Two-Factor Authentication</p>
                    <p className="text-xs text-muted-foreground">Add an extra layer of security.</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center">
                    <Key className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Vault Password</p>
                    <p className="text-xs text-muted-foreground">Last updated 4 months ago.</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Change Password</Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center">
                    <Fingerprint className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Biometric Sentinel</p>
                    <p className="text-xs text-muted-foreground">Use FaceID or TouchID for rapid access.</p>
                  </div>
                </div>
                <Switch />
              </div>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="card-medical border-destructive/30">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-destructive font-semibold flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" /> Danger Zone
              </h3>
              <p className="text-sm text-muted-foreground mt-1">Permanent actions regarding your clinical identity.</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="border-destructive/50 text-destructive hover:bg-destructive/5">
                Deactivate Account
              </Button>
              <Button variant="destructive">Purge Local Cache</Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
