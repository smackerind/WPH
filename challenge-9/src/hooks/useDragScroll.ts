import { useEffect, useRef } from "react";

// Jarak minimal (px) sebelum gerakan dianggap drag, bukan klik
const DRAG_THRESHOLD = 5;

/**
 * Membuat container overflow-x bisa digeser dengan click + drag mouse di desktop.
 * Touch tetap memakai scroll bawaan browser.
 * Klik setelah drag dibatalkan supaya kartu film tidak ikut terbuka.
 */
export const useDragScroll = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let isDown = false;
    let hasDragged = false;
    let startX = 0;
    let startScrollLeft = 0;

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      isDown = true;
      hasDragged = false;
      startX = e.clientX;
      startScrollLeft = el.scrollLeft;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDown) return;
      const deltaX = e.clientX - startX;

      if (!hasDragged) {
        if (Math.abs(deltaX) < DRAG_THRESHOLD) return;
        hasDragged = true;
        el.style.cursor = "grabbing";
        el.style.userSelect = "none";
      }

      el.scrollLeft = startScrollLeft - deltaX;
    };

    const onPointerUp = () => {
      if (!isDown) return;
      isDown = false;
      el.style.cursor = "";
      el.style.userSelect = "";
    };

    // Batalkan navigasi Link kalau barusan drag
    const onClickCapture = (e: MouseEvent) => {
      if (!hasDragged) return;
      e.preventDefault();
      e.stopPropagation();
      hasDragged = false;
    };

    // Cegah gambar/link ikut ter-drag oleh browser (ghost image)
    const onDragStart = (e: DragEvent) => e.preventDefault();

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("click", onClickCapture, true);
    el.addEventListener("dragstart", onDragStart);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("click", onClickCapture, true);
      el.removeEventListener("dragstart", onDragStart);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  return ref;
};
