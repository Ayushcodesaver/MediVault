import { useState } from "react";
import { Shield, Mail, Lock, User, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export default function Register() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [role, setRole] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Registration", description: "Backend will be connected with Lovable Cloud." });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 gradient-hero items-center justify-center p-12">
        <div className="max-w-md">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-12 w-12 rounded-xl bg-accent/20 flex items-center justify-center">
              <Shield className="h-6 w-6 text-teal" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-foreground">MediVault</h2>
              <p className="text-xs text-primary-foreground/60 uppercase tracking-widest">Immutable Medical Dossier</p>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-primary-foreground mb-4">
            Join the decentralized health network.
          </h1>
          <p className="text-primary-foreground/60">
            Create your digital identity on the blockchain. Whether you're a patient, doctor, or administrator — your data integrity starts here.
          </p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <Shield className="h-6 w-6 text-accent" />
            <span className="font-bold text-lg text-primary">MediVault</span>
          </div>

          <h2 className="text-2xl font-bold mb-1">Create Account</h2>
          <p className="text-muted-foreground text-sm mb-8">Register your clinical identity on the ledger</p>

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
                <div className="relative mt-1.5">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="+1 (555) ..." className="pl-10" />
                </div>
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
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger className="mt-1.5">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
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

            <Button type="submit" className="w-full gradient-hero text-primary-foreground">
              Create Identity <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Already have an account?{" "}
            <button onClick={() => navigate("/login")} className="text-accent font-medium hover:underline">
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
