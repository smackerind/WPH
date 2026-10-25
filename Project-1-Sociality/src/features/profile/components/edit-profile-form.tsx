"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { ErrorState } from "@/components/shared/error-state";
import { useMe, useUpdateMe } from "@/features/profile/hooks/use-me";
import {
  profileSchema,
  type ProfileFormValues,
} from "@/features/profile/schemas/profile-schema";
import { ACCEPTED_IMAGE_TYPES, MAX_IMAGE_BYTES } from "@/lib/constants";

/**
 * Form Edit Profile.
 *
 * Field Email ditampilkan karena ada di desain, tetapi dinonaktifkan: PATCH
 * /api/me tidak menerima email, jadi membuatnya bisa diketik hanya akan
 * membohongi user. Keterangan singkat diberikan di bawah kolomnya.
 */
export const EditProfileForm = () => {
  const router = useRouter();
  const me = useMe();
  const { mutate: saveProfile, isPending } = useUpdateMe();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: { name: "", username: "", phone: "", bio: "" },
  });

  // Isi form begitu profil dari server tiba
  useEffect(() => {
    if (!me.data) return;
    reset({
      name: me.data.name,
      username: me.data.username,
      phone: me.data.phone ?? "",
      bio: me.data.bio ?? "",
    });
  }, [me.data, reset]);

  // Bersihkan URL pratinjau supaya tidak menumpuk di memori
  useEffect(() => {
    return () => {
      if (avatarPreview) URL.revokeObjectURL(avatarPreview);
    };
  }, [avatarPreview]);

  const pickAvatar = (file: File | undefined) => {
    if (!file) return;

    if (!(ACCEPTED_IMAGE_TYPES as readonly string[]).includes(file.type)) {
      toast.error("Photo must be a PNG, JPG, or WEBP file");
      return;
    }
    if (file.size > MAX_IMAGE_BYTES) {
      toast.error("Photo must be under 5MB");
      return;
    }

    setAvatarFile(file);
    setAvatarPreview(URL.createObjectURL(file));
  };

  if (me.isLoading) {
    return (
      <div className="flex flex-col gap-4 p-4">
        <Skeleton className="h-20 w-20 rounded-full" />
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  if (me.isError || !me.data) {
    return (
      <ErrorState message={me.error?.message} onRetry={() => me.refetch()} />
    );
  }

  return (
    <div className="mx-auto w-full max-w-[520px] px-4 pb-10">
      <div className="flex items-center gap-3 py-4">
        <button
          type="button"
          onClick={() => router.back()}
          aria-label="Go back"
          className="cursor-pointer text-neutral-25 transition-opacity hover:opacity-70"
        >
          <ArrowLeft className="size-5" />
        </button>
        <h1 className="text-lg font-bold text-neutral-25">Edit Profile</h1>
      </div>

      <form
        onSubmit={handleSubmit((values) =>
          saveProfile(
            { ...values, avatar: avatarFile ?? undefined },
            { onSuccess: () => router.push("/me") },
          ),
        )}
        className="flex flex-col gap-5"
        noValidate
      >
        {/* ---------- Avatar ---------- */}
        <div className="flex flex-col items-center gap-3">
          <Avatar
            src={avatarPreview ?? me.data.avatarUrl}
            name={me.data.name}
            size={96}
          />

          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
          >
            Change Photo
          </Button>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/webp"
            className="hidden"
            onChange={(event) => pickAvatar(event.target.files?.[0])}
          />
        </div>

        <Input
          label="Name"
          error={errors.name?.message}
          {...register("name")}
        />

        <Input
          label="Username"
          error={errors.username?.message}
          {...register("username")}
        />

        <div className="flex flex-col gap-1">
          <Input
            label="Email"
            type="email"
            value={me.data.email}
            readOnly
            disabled
            className="cursor-not-allowed opacity-60"
          />
          <p className="text-xs text-neutral-500">
            Email cannot be changed from here.
          </p>
        </div>

        <Input
          label="Number Phone"
          type="tel"
          error={errors.phone?.message}
          {...register("phone")}
        />

        <Textarea
          label="Bio"
          placeholder="Create your bio"
          error={errors.bio?.message}
          {...register("bio")}
        />

        <Button type="submit" full size="lg" isLoading={isPending}>
          Save Changes
        </Button>
      </form>
    </div>
  );
};
