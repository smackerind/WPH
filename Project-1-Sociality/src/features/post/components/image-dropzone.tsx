"use client";

import Image from "next/image";
import { Trash2, Upload } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { MAX_IMAGE_BYTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ImageDropzoneProps {
  file: File | null;
  onChange: (file: File | null) => void;
  error?: string;
}

/**
 * Kotak unggah foto: klik atau seret-dan-lepas.
 *
 * react-dropzone dipakai karena desainnya memang meminta drag & drop
 * lengkap dengan keadaan error — menulis sendiri penanganan dragenter,
 * dragover, dan drop beserta aksesibilitasnya jauh lebih panjang.
 *
 * Berkas divalidasi dua kali: di sini saat dijatuhkan (supaya pesannya
 * muncul seketika) dan sekali lagi oleh Zod saat formulir dikirim.
 */
export const ImageDropzone = ({
  file,
  onChange,
  error,
}: ImageDropzoneProps) => {
  const [localError, setLocalError] = useState<string | null>(null);

  /**
   * URL pratinjau dihitung dari file, bukan disimpan sebagai state —
   * supaya tidak ada setState di dalam effect yang memicu render beruntun.
   */
  const preview = useMemo(
    () => (file ? URL.createObjectURL(file) : null),
    [file],
  );

  // Lepaskan URL lama agar tidak menumpuk di memori
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const onDrop = useCallback(
    (accepted: File[], rejected: { file: File }[]) => {
      if (rejected.length > 0) {
        const bad = rejected[0].file;
        setLocalError(
          bad.size > MAX_IMAGE_BYTES
            ? "Photo must be under 5MB"
            : "Photo must be a PNG, JPG, or WEBP file",
        );
        return;
      }

      setLocalError(null);
      onChange(accepted[0] ?? null);
    },
    [onChange],
  );

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
      "image/webp": [".webp"],
    },
    maxSize: MAX_IMAGE_BYTES,
    multiple: true,
    maxFiles: 1,
    noClick: Boolean(file),
    noKeyboard: Boolean(file),
  });

  const message = localError ?? error;

  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm font-bold text-neutral-25">Photo</span>

      {file && preview ? (
        /* ---------- Sudah ada foto: pratinjau + tombol ubah/hapus ---------- */
        <div className="flex flex-col gap-3 rounded-xl border border-neutral-800 bg-neutral-950 p-3">
          <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-neutral-900">
            <Image
              src={preview}
              alt="Preview of the photo you are about to post"
              fill
              unoptimized
              sizes="(min-width: 640px) 452px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex justify-center gap-3">
            <button
              type="button"
              onClick={open}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-neutral-800 px-4 py-2 text-sm font-bold text-neutral-25 transition-colors hover:bg-neutral-900"
            >
              <Upload className="size-4" />
              Change Image
            </button>

            <button
              type="button"
              onClick={() => onChange(null)}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-neutral-800 px-4 py-2 text-sm font-bold text-accent-red transition-colors hover:bg-neutral-900"
            >
              <Trash2 className="size-4" />
              Delete Image
            </button>
          </div>

          {/* Input tetap dipasang supaya tombol "Change Image" bisa memakainya */}
          <div {...getRootProps()} className="hidden">
            <input {...getInputProps()} />
          </div>
        </div>
      ) : (
        /* ---------- Belum ada foto: kotak putus-putus ---------- */
        <div
          {...getRootProps()}
          className={cn(
            "flex cursor-pointer flex-col items-center gap-3 rounded-xl border border-dashed bg-neutral-950 px-6 py-5 text-center transition-colors",
            message
              ? "border-accent-red"
              : isDragActive
                ? "border-primary-200 bg-neutral-900"
                : "border-neutral-800 hover:border-neutral-700",
          )}
        >
          <input {...getInputProps()} />

          <span className="flex size-10 items-center justify-center rounded-lg border border-neutral-800">
            <Image
              src="/icons/upload-cloud-02.png"
              alt=""
              width={20}
              height={20}
              className="size-5"
            />
          </span>

          <div className="flex flex-col gap-0.5">
            <p className="text-sm text-neutral-400">
              <span className="font-bold text-primary-200">
                Click to upload
              </span>{" "}
              or drag and drop
            </p>
            <p className="text-xs text-neutral-500">PNG or JPG (max. 5mb)</p>
          </div>
        </div>
      )}

      {message && (
        <p role="alert" className="text-xs text-accent-red">
          {message}
        </p>
      )}
    </div>
  );
};
