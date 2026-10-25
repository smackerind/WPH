"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLogin } from "@/features/auth/hooks/use-auth";
import {
  loginSchema,
  type LoginFormValues,
} from "@/features/auth/schemas/auth-schema";

export const LoginForm = () => {
  // proxy.ts menitipkan tujuan semula di ?redirect=
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") ?? "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
  });

  const { mutate: signIn, isPending } = useLogin(redirectTo);

  return (
    <>
      <h1 className="text-center text-xl font-bold text-neutral-25">
        Welcome Back!
      </h1>

      <form
        onSubmit={handleSubmit((values) => signIn(values))}
        className="flex flex-col gap-4"
        noValidate
      >
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          autoComplete="email"
          error={errors.email?.message}
          {...register("email")}
        />

        <Input
          label="Password"
          type="password"
          revealable
          placeholder="Enter your password"
          autoComplete="current-password"
          error={errors.password?.message}
          {...register("password")}
        />

        <Button type="submit" full size="lg" isLoading={isPending}>
          Login
        </Button>
      </form>

      <p className="text-center text-sm text-neutral-25">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-bold text-primary-200 hover:underline"
        >
          Register
        </Link>
      </p>
    </>
  );
};
