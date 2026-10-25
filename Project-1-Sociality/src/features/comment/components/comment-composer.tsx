"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useAddComment } from "@/features/comment/hooks/use-comment";
import { useAuth } from "@/features/auth/hooks/use-auth";
import { COMMENT_EMOJIS } from "@/lib/constants";

interface CommentComposerProps {
  postId: number;
}

/**
 * Kotak tulis komentar: tombol emoji, kolom teks, dan tombol Post.
 *
 * Pemilih emoji dibuat sendiri — desain hanya menampilkan satu grid kecil
 * berisi belasan emoji, jadi memasang library emoji picker (±200KB) tidak
 * sebanding. Daftarnya ada di lib/constants.ts.
 */
export const CommentComposer = ({ postId }: CommentComposerProps) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const [text, setText] = useState("");
  const [emojiOpen, setEmojiOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const pickerRef = useRef<HTMLDivElement>(null);

  const { mutate: addComment, isPending } = useAddComment(postId);

  // Tutup pemilih emoji saat mengklik di luar area-nya
  useEffect(() => {
    if (!emojiOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!pickerRef.current?.contains(event.target as Node)) {
        setEmojiOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [emojiOpen]);

  const submit = () => {
    const trimmed = text.trim();
    if (!trimmed || isPending) return;

    if (!isAuthenticated) {
      router.push(`/login?redirect=/posts/${postId}`);
      return;
    }

    addComment(trimmed, { onSuccess: () => setText("") });
  };

  return (
    <div ref={pickerRef} className="relative">
      {/* ---------- Pemilih emoji ---------- */}
      {emojiOpen && (
        <div className="absolute bottom-14 left-0 z-10 grid w-[232px] grid-cols-6 gap-1 rounded-xl border border-neutral-800 bg-neutral-900 p-2">
          {COMMENT_EMOJIS.map((emoji) => (
            <button
              key={emoji}
              type="button"
              onClick={() => {
                setText((value) => value + emoji);
                setEmojiOpen(false);
                inputRef.current?.focus();
              }}
              aria-label={`Add ${emoji}`}
              className="cursor-pointer rounded-md p-1 text-xl transition-colors hover:bg-neutral-800"
            >
              {emoji}
            </button>
          ))}
        </div>
      )}

      <form
        onSubmit={(event) => {
          event.preventDefault();
          submit();
        }}
        className="flex items-center gap-3 px-4 py-3"
      >
        <button
          type="button"
          onClick={() => setEmojiOpen((open) => !open)}
          aria-label="Add emoji"
          aria-expanded={emojiOpen}
          className="shrink-0 cursor-pointer transition-opacity hover:opacity-70"
        >
          <Image
            src="/icons/EmojiSmile.png"
            alt=""
            width={28}
            height={28}
            className="size-7"
          />
        </button>

        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Add Comment"
          aria-label="Add a comment"
          maxLength={500}
          className="h-11 flex-1 rounded-full border border-neutral-900 bg-neutral-900/60 px-4 text-sm text-neutral-25 outline-none placeholder:text-neutral-500 focus:border-neutral-700"
        />

        <button
          type="submit"
          disabled={!text.trim() || isPending}
          className="shrink-0 cursor-pointer text-sm font-bold text-primary-200 transition-opacity hover:opacity-70 disabled:cursor-not-allowed disabled:text-neutral-600"
        >
          Post
        </button>
      </form>
    </div>
  );
};
