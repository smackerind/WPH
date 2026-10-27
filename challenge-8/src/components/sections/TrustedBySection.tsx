import { companyInfo } from "../../data/company";

const TrustedBySection = () => {
  const { trustedBy } = companyInfo;

  return (
    <section aria-labelledby="trusted-title" className="pt-11 lg:pt-0">
      <h2
        id="trusted-title"
        className="container-page text-center text-md font-bold tracking-[-0.02em] text-neutral-950 lg:font-display lg:text-display-xs lg:tracking-normal dark:text-neutral-25"
      >
        {trustedBy.title}
      </h2>

      <div className="relative flex h-[114px] items-center justify-center overflow-hidden lg:h-[200px]">
        <img
          src={trustedBy.image}
          alt={trustedBy.alt}
          width={1440}
          height={128}
          loading="lazy"
          className="h-[114px] w-auto max-w-none opacity-90 lg:h-32"
        />
        {/* Fade di kiri & kanan */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent lg:w-[260px] dark:from-black" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent lg:w-[260px] dark:from-black" />
      </div>
    </section>
  );
};

export default TrustedBySection;
