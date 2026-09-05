interface LessonPlaceholderProps {
  fileName: string;
}

function LessonPlaceholder({ fileName }: LessonPlaceholderProps) {
  return (
    <section className="rounded-xl border border-dashed border-slate-300 bg-white p-6 text-center shadow-sm">
      <p className="text-sm font-semibold text-blue-600">SIAP UNTUK LIVE CODING</p>
      <p className="mt-2 text-slate-600">
        Tulis implementasi lesson di <code>{fileName}</code>.
      </p>
    </section>
  );
}

export default LessonPlaceholder;
