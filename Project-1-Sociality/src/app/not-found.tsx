import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { EmptyState } from "@/components/shared/empty-state";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <EmptyState
        title="Page not found"
        description="The page you are looking for doesn't exist or has moved."
        action={
          <Link href="/" className={buttonVariants()}>
            Back to Timeline
          </Link>
        }
      />
    </main>
  );
}
