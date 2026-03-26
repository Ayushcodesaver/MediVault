import { useState } from "react";
import { Shield, Mail, Lock, ArrowRight, Eye, EyeOff, Stethoscope, User, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export default function Login() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<"doctor" | "patient">("doctor");
  const [regRole, setRegRole] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Authenticating", description: "Backend will be connected with Lovable Cloud." });
    navigate("/dashboard");
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Identity created", description: "Welcome to MediVault." });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left branding */}
      <div className="hidden lg:flex lg:w-[45%] gradient-hero flex-col justify-between p-12">
        <div>
          <div className="flex items-center gap-2 mb-16">
            <Shield className="h-6 w-6 text-teal" />
            <span className="text-xl font-bold text-primary-foreground">MediVault</span>
          </div>
          <h1 className="text-4xl xl:text-5xl font-black text-primary-foreground leading-tight mb-6">
            Your Health,<br />
            <span className="text-teal">Immutably</span><br />
            Secured.
          </h1>
          <p className="text-primary-foreground/50 text-sm max-w-sm leading-relaxed">
            The next generation of clinical data integrity. Leverage decentralized verification to ensure your medical records are private, permanent, and always accessible to you.
          </p>
          <div className="grid grid-cols-2 gap-3 mt-10 max-w-sm">
            <div className="rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 p-4">
              <CheckCircle className="h-5 w-5 text-teal mb-2" />
              <p className="text-sm font-semibold text-primary-foreground">Blockchain Verified</p>
              <p className="text-xs text-primary-foreground/40 mt-1">Every entry is cryptographically signed and stored.</p>
            </div>
            <div className="rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 p-4">
              <Shield className="h-5 w-5 text-teal mb-2" />
              <p className="text-sm font-semibold text-primary-foreground">Clinical Precision</p>
              <p className="text-xs text-primary-foreground/40 mt-1">Standardized formats for universal medical clarity.</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between text-xs text-primary-foreground/30">
          <span>EST. 2024</span>
          <span>ISO 27001 CERTIFIED</span>
          <span className="badge-verified bg-teal/20 text-teal text-[10px]">
            <Shield className="h-3 w-3" /> ENCRYPTED NODE 042X
          </span>
        </div>
      </div>

      {/* Right form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-8 bg-card">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <Shield className="h-6 w-6 text-accent" />
            <span className="font-bold text-lg text-primary">MediVault</span>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>

            {/* LOGIN TAB */}
            <TabsContent value="login">
              <h2 className="text-2xl font-bold mb-1">Welcome Back</h2>
              <p className="text-muted-foreground text-sm mb-6">Access your immutable medical dashboard.</p>

              {/* Role Toggle */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <button
                  type="button"
                  onClick={() => setRole("doctor")}
                  className={`flex items-center justify-center gap-2 py-3 rounded-lg border-2 text-sm font-medium transition-colors ${
                    role === "doctor" ? "border-primary bg-primary/5" : "border-border hover:border-muted-foreground/30"
                  }`}
                >
                  <Stethoscope className="h-4 w-4" /> Doctor
                </button>
                <button
                  type="button"
                  onClick={() => setRole("patient")}
                  className={`flex items-center justify-center gap-2 py-3 rounded-lg border-2 text-sm font-medium transition-colors ${
                    role === "patient" ? "border-primary bg-primary/5" : "border-border hover:border-muted-foreground/30"
                  }`}
                >
                  <User className="h-4 w-4" /> Patient
                </button>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label>Institutional Email</Label>
                  <div className="relative mt-1.5">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input type="email" placeholder="dr.smith@hospital.com" className="pl-10" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <Label>Security Key</Label>
                    <button type="button" className="text-xs text-accent hover:underline">Forgot Key?</button>
                  </div>
                  <div className="relative mt-1.5">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input type={showPassword ? "text" : "password"} placeholder="••••••••••" className="pl-10 pr-10" />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox id="trust" />
                  <label htmlFor="trust" className="text-sm text-muted-foreground">Trust this device for 30 days</label>
                </div>

                <Button type="submit" className="w-full gradient-hero text-primary-foreground h-12 text-base">
                  Authenticate Access <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>

              <div className="my-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-border" />
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Web3 Verification</span>
                <div className="h-px flex-1 bg-border" />
              </div>

              <Button variant="outline" className="w-full h-12">
                <Shield className="h-4 w-4 mr-2 text-accent" /> Connect Medical Wallet
              </Button>

              <div className="mt-6 text-center">
                <p className="text-xs text-muted-foreground">
                  By accessing MediVault, you agree to our{" "}
                  <a href="#" className="text-accent font-medium hover:underline">Protocol Terms</a> and{" "}
                  <a href="#" className="text-accent font-medium hover:underline">Data Encryption Policy</a>.
                </p>
                <p className="text-[10px] text-muted-foreground/60 mt-1">
                  All sessions are logged and cryptographically hashed.
                </p>
              </div>
            </TabsContent>

            {/* REGISTER TAB */}
            <TabsContent value="register">
              <h2 className="text-2xl font-bold mb-1">Create Identity</h2>
              <p className="text-muted-foreground text-sm mb-6">Register your clinical identity on the ledger.</p>

              <form onSubmit={handleRegister} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label>Full Name</Label>
                    <div className="relative mt-1.5">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Dr. Jane Doe" className="pl-10" />
                    </div>
                  </div>
                  <div>
                    <Label>Phone</Label>
                    <Input placeholder="+1 (555)..." className="mt-1.5" />
                  </div>
                </div>

                <div>
                  <Label>Email Address</Label>
                  <div className="relative mt-1.5">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input type="email" placeholder="you@example.com" className="pl-10" />
                  </div>
                </div>

                <div>
                  <Label>Role</Label>
                  <Select value={regRole} onValueChange={setRegRole}>
                    <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select your role" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="patient">Patient</SelectItem>
                      <SelectItem value="doctor">Doctor / Provider</SelectItem>
                      <SelectItem value="admin">Administrator</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Password</Label>
                  <div className="relative mt-1.5">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input type="password" placeholder="••••••••" className="pl-10" />
                  </div>
                </div>

                <Button type="submit" className="w-full gradient-hero text-primary-foreground h-12 text-base">
                  Create Identity <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
