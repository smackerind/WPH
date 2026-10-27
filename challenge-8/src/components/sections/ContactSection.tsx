import { useCallback, useState } from "react";
import type { FormEvent } from "react";
import type { ContactFormData } from "../../types";
import Button from "../ui/Button";
import Checkbox from "../ui/Checkbox";
import SectionHeader from "../ui/SectionHeader";
import SuccessModal from "../ui/SuccessModal";
import TextField from "../ui/TextField";

interface ContactSectionProps {
  serviceOptions: string[];
}

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

const initialForm: ContactFormData = {
  name: "",
  email: "",
  message: "",
  services: ["Web Development"],
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (data: ContactFormData): FormErrors => {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Please enter your name.";
  if (!EMAIL_PATTERN.test(data.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!data.message.trim()) errors.message = "Please tell us a bit about your project.";
  return errors;
};

const ContactSection = ({ serviceOptions }: ContactSectionProps) => {
  const [formData, setFormData] = useState<ContactFormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  // Update satu field teks + hapus error-nya saat user mengetik
  const updateField = (field: "name" | "email" | "message", value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const toggleService = (service: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      services: checked
        ? [...prev.services, service]
        : prev.services.filter((item) => item !== service),
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      const firstInvalid = Object.keys(validationErrors)[0];
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    // Belum ada backend — anggap terkirim, tampilkan popup sukses
    setFormData(initialForm);
    setIsSuccessOpen(true);
  };

  const closeSuccess = useCallback(() => setIsSuccessOpen(false), []);

  const backToHome = () => {
    setIsSuccessOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="container-page py-10 lg:py-20"
    >
      <div className="mx-auto flex max-w-[720px] flex-col gap-6 lg:gap-12">
        <SectionHeader
          titleId="contact-title"
          title="Ready to Start? Let’s Talk."
          subtitle="Tell us what you need, and we’ll get back to you soon."
        />

        <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <TextField
              id="contact-name"
              label="Name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(value) => updateField("name", value)}
              error={errors.name}
              required
            />
            <TextField
              id="contact-email"
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(value) => updateField("email", value)}
              error={errors.email}
              required
            />
            <TextField
              id="contact-message"
              label="Message"
              placeholder="Enter your message"
              multiline
              value={formData.message}
              onChange={(value) => updateField("message", value)}
              error={errors.message}
              required
            />

            <fieldset className="flex flex-col gap-3.5">
              <legend className="mb-3.5 text-sm font-bold text-neutral-950 dark:text-neutral-25">
                Services
              </legend>
              <div className="grid gap-4 md:w-fit md:grid-flow-col md:grid-cols-[232px_213px] md:grid-rows-3 md:gap-x-[37px]">
                {serviceOptions.map((service) => (
                  <Checkbox
                    key={service}
                    label={service}
                    checked={formData.services.includes(service)}
                    onChange={(checked) => toggleService(service, checked)}
                  />
                ))}
              </div>
            </fieldset>
          </div>

          <Button type="submit" fullWidth className="lg:h-12 lg:text-md">
            Send
          </Button>
        </form>
      </div>

      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={closeSuccess}
        onBackHome={backToHome}
      />
    </section>
  );
};

export default ContactSection;
