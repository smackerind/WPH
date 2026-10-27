import { companyInfo } from "../../data/company";
import Button from "../ui/Button";

interface HeroSectionProps {
  ctaHref: string;
}

const HeroSection = ({ ctaHref }: HeroSectionProps) => {
  const { hero } = companyInfo;

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-16 lg:h-[747px] lg:pt-0"
    >
      <div className="container-page relative z-10 pt-[61px] lg:pt-[230px]">
        {/* Tablet: blok & teks di tengah agar sejajar dengan ilustrasi di bawahnya */}
        <div className="flex max-w-[653px] flex-col gap-10 md:mx-auto md:text-center lg:mx-0 lg:text-left">
          <div className="flex flex-col gap-2">
            <h1
              id="hero-title"
              className="font-display text-display-lg font-bold tracking-[-0.02em] text-neutral-950 lg:text-display-3xl dark:text-neutral-25"
            >
              {hero.title}{" "}
              <span className="text-primary-200">{hero.highlight}</span>
            </h1>
            <p className="text-md font-semibold text-neutral-950 lg:text-xl dark:text-neutral-25">
              {hero.description}
            </p>
          </div>

          <Button
            href={ctaHref}
            className="w-full lg:h-12 lg:w-[200px] lg:text-md"
          >
            Let’s Talk
          </Button>
        </div>
      </div>

      {/* Ilustrasi + gradient hitam di kiri & bawah agar menyatu dengan background */}
      <div className="relative mx-auto mt-[43px] aspect-square w-full max-w-[391px] lg:absolute lg:top-0 lg:right-0 lg:mt-0 lg:w-[52%] lg:max-w-[747px]">
        <img
          src={hero.image}
          alt=""
          width={747}
          height={747}
          fetchPriority="high"
          className="size-full object-cover"
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-white to-transparent dark:from-black" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-white to-transparent dark:from-black" />
      </div>
    </section>
  );
};

export default HeroSection;
