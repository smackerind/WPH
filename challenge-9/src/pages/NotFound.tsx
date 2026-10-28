import { Link } from "react-router-dom";
import StateMessage from "@/components/movie/StateMessage";
import PageTransition from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";

const NotFound = () => (
  <PageTransition>
    <section className="container-page py-6">
      <StateMessage
        title="Halaman tidak ditemukan"
        description="Halaman yang kamu tuju tidak ada atau sudah dipindahkan."
        action={
          <Button asChild className="w-[200px]">
            <Link to="/">Back to Home</Link>
          </Button>
        }
      />
    </section>
  </PageTransition>
);

export default NotFound;
