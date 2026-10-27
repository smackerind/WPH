import Button from "./Button";

interface ConsultationCardProps {
  ctaHref: string;
}

const ConsultationCard = ({ ctaHref }: ConsultationCardProps) => {
  return (
    <aside className="flex flex-col gap-4 rounded-2xl bg-primary-300 p-5 lg:gap-6 lg:rounded-3xl lg:p-6">
      <div className="flex flex-col gap-1">
        <h3 className="font-display text-display-sm font-bold text-white">
          Let’s talk it through
        </h3>
        <p className="text-sm font-medium text-white/90">
          book a free consultation with our team.
        </p>
      </div>
      <img
        src="/images/consultation-photo.png"
        alt="Our team discussing a project in a meeting room"
        loading="lazy"
        className="aspect-[309/166] w-full rounded-xl object-cover lg:aspect-auto lg:h-[215px]"
      />
      <Button href={ctaHref} variant="light" fullWidth className="lg:h-12 lg:text-md">
        Free Consultation
      </Button>
    </aside>
  );
};

export default ConsultationCard;
