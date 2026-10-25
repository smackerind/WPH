"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRegister } from "@/features/auth/hooks/use-auth";
import {
  registerSchema,
  type RegisterFormValues,
} from "@/features/auth/schemas/auth-schema";

/**
 * Form pendaftaran.
 *
 * Urutan field mengikuti desain (Name, Username, Number Phone, Password,
 * Confirm Password) dengan satu tambahan: Email, diletakkan setelah Name.
 * Tanpa email, POST /api/auth/register akan ditolak server — lihat catatan
 * lengkapnya di schemas/auth-schema.ts.
 */
export const RegisterForm = () => {
  const {
    register: field,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    mode: "onSubmit",
  });

  const { mutate: createAccount, isPending } = useRegister();

  return (
    <>
      <h1 className="text-center text-xl font-bold text-neutral-25">
        Register
      </h1>

      <form
        onSubmit={handleSubmit((values) =>
          // confirmPassword hanya untuk validasi di form, tidak dikirim ke API
          createAccount({
            name: values.name,
            username: values.username,
            email: values.email,
            phone: values.phone,
            password: values.password,
          }),
        )}
        className="flex flex-col gap-4"
        noValidate
      >
        <Input
          label="Name"
          placeholder="Enter your name"
          autoComplete="name"
          error={errors.name?.message}
          {...field("name")}
        />

        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          autoComplete="email"
          error={errors.email?.message}
          {...field("email")}
        />

        <Input
          label="Username"
          placeholder="Enter your username"
          autoComplete="username"
          error={errors.username?.message}
          {...field("username")}
        />

        <Input
          label="Number Phone"
          type="tel"
          placeholder="Enter your number phone"
          autoComplete="tel"
          error={errors.phone?.message}
          {...field("phone")}
        />

        <Input
          label="Password"
          type="password"
          revealable
          placeholder="Enter your password"
          autoComplete="new-password"
          error={errors.password?.message}
          {...field("password")}
        />

        <Input
          label="Confirm Password"
          type="password"
          revealable
          placeholder="Enter your confirm password"
          autoComplete="new-password"
          error={errors.confirmPassword?.message}
          {...field("confirmPassword")}
        />

        <Button type="submit" full size="lg" isLoading={isPending}>
          Submit
        </Button>
      </form>

      <p className="text-center text-sm text-neutral-25">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-bold text-primary-200 hover:underline"
        >
          Log in
        </Link>
      </p>
    </>
  );
};
