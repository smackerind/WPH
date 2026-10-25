import { Suspense } from "react";
import type { Metadata } from "next";
import { AuthShell } from "@/features/auth/components/auth-shell";
import { LoginForm } from "@/features/auth/components/login-form";

export const metadata: Metadata = { title: "Login — Sociality" };

export default function LoginPage() {
  return (
    <AuthShell>
      {/* Suspense dibutuhkan karena form membaca ?redirect= dari URL */}
      <Suspense fallback={null}>
        <LoginForm />
      </Suspense>
    </AuthShell>
  );
}
