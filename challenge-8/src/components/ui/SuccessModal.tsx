import Button from "./Button";
import Modal from "./Modal";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBackHome: () => void;
}

/** Popup "Message Received!" setelah form berhasil dikirim */
const SuccessModal = ({ isOpen, onClose, onBackHome }: SuccessModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} labelledBy="success-title">
      <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
        <div className="flex justify-center bg-neutral-50 p-2 dark:bg-neutral-950">
          <img
            src="/icon/Message.png"
            alt="message received illustration"
            width={228}
            height={228}
            className="size-[140px] lg:size-[228px]"
          />
        </div>

        <div className="flex flex-col items-center gap-4 bg-white px-6 pt-6 pb-10 lg:gap-8 lg:px-8 lg:pt-8 dark:bg-black">
          <div className="flex flex-col gap-0.5 text-center lg:gap-2">
            <h3 id="success-title" className="text-lg font-bold text-neutral-950 lg:text-xl dark:text-neutral-25">
              Message Received!
            </h3>
            <p className="text-sm font-medium text-neutral-600 lg:text-md dark:text-neutral-400">
              Thanks for reaching out — we’ll get back to you as soon as possible.
            </p>
          </div>
          <Button onClick={onBackHome} fullWidth className="lg:h-12 lg:max-w-[361px] lg:text-md">
            Back to Home
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default SuccessModal;
