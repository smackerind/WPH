"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ImageDropzone } from "@/features/post/components/image-dropzone";
import { useCreatePost } from "@/features/post/hooks/use-post";
import {
  postSchema,
  type PostFormValues,
} from "@/features/post/schemas/post-schema";
import { useMe } from "@/features/profile/hooks/use-me";

/**
 * Halaman Add Post: satu foto dan satu caption.
 *
 * Field foto diurus Controller karena nilainya berupa File — bukan sesuatu
 * yang bisa dipasang langsung lewat `register`.
 */
export const AddPostForm = () => {
  const router = useRouter();
  const { data: me } = useMe();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormValues>({
    resolver: zodResolver(postSchema),
    mode: "onSubmit",
    // String kosong (bukan undefined) supaya pesan "Please write a caption"
    // yang muncul, bukan pesan bawaan zod soal tipe data
    defaultValues: { caption: "" },
  });

  const { mutate: submitPost, isPending } = useCreatePost();

  return (
    <div className="mx-auto w-full max-w-[520px] px-4 pb-10">
      {/* ---------- Kepala halaman ---------- */}
      <div className="flex items-center gap-3 py-4">
        <button
          type="button"
          onClick={() => router.back()}
          aria-label="Go back"
          className="cursor-pointer text-neutral-25 transition-opacity hover:opacity-70"
        >
          <ArrowLeft className="size-5" />
        </button>

        <h1 className="text-lg font-bold text-neutral-25">Add Post</h1>

        <div className="ml-auto">
          <Avatar src={me?.avatarUrl} name={me?.name} size={36} />
        </div>
      </div>

      <form
        onSubmit={handleSubmit((values) =>
          submitPost({ image: values.image, caption: values.caption }),
        )}
        className="flex flex-col gap-5"
        noValidate
      >
        <Controller
          control={control}
          name="image"
          render={({ field }) => (
            <ImageDropzone
              file={field.value ?? null}
              onChange={field.onChange}
              error={errors.image?.message}
            />
          )}
        />

        <Textarea
          label="Caption"
          placeholder="Create your caption"
          error={errors.caption?.message}
          {...register("caption")}
        />

        <Button type="submit" full size="lg" isLoading={isPending}>
          Share
        </Button>
      </form>
    </div>
  );
};
