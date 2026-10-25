"use client";

import Link from "next/link";
import { useState } from "react";
import { CAPTION_PREVIEW_LENGTH } from "@/lib/constants";

interface PostCaptionProps {
  username: string;
  caption: string;
}

/**
 * Nama pengguna diikuti caption, dengan tautan "Show More" bila captionnya
 * panjang — persis seperti di desain. Teks dipotong di sisi client saja,
 * jadi tidak ada permintaan tambahan ke server saat dibentangkan.
 */
export const PostCaption = ({ username, caption }: PostCaptionProps) => {
  const [expanded, setExpanded] = useState(false);

  const isLong = caption.length > CAPTION_PREVIEW_LENGTH;
  const shown =
    expanded || !isLong
      ? caption
      : `${caption.slice(0, CAPTION_PREVIEW_LENGTH).trimEnd()} ...`;

  return (
    <div className="flex flex-col gap-1 px-4 pb-4">
      <Link
        href={`/profile/${encodeURIComponent(username)}`}
        className="text-sm font-bold text-neutral-25 hover:underline"
      >
        {username}
      </Link>

      <p className="text-sm whitespace-pre-wrap text-neutral-25">{shown}</p>

      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="w-fit cursor-pointer text-sm font-bold text-primary-200 hover:underline"
        >
          {expanded ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};
