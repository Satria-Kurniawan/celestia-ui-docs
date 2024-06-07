import * as React from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import TextInput from "./ui/TextInput";
import TextInputArea from "./ui/TextInputArea";
import {
  FaFaceFlushed,
  FaFaceFrown,
  FaFaceFrownOpen,
  FaFaceGrinBeam,
  FaFaceGrinHearts,
  FaFaceGrinStars,
} from "react-icons/fa6";
import Button from "./ui/Button";
import Loader from "./ui/Loader";

const expressions = [
  { icon: <FaFaceFrown size={20} />, value: "Sangat Kecewa" },
  { icon: <FaFaceFrownOpen size={20} />, value: "Kecewa" },
  { icon: <FaFaceFlushed size={20} />, value: "Netral" },
  { icon: <FaFaceGrinBeam size={20} />, value: "Senang" },
  { icon: <FaFaceGrinHearts size={20} />, value: "Suka" },
  { icon: <FaFaceGrinStars size={20} />, value: "Perfect" },
];

export default function FormFeedback({ onClose }: { onClose: () => void }) {
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const [selectedExpression, setSelectedExpression] =
    React.useState<string>("");
  const [isFetching, setIsFetching] = React.useState<boolean>(false);

  React.useEffect(() => {
    const feedbackButton = document.getElementById("feedbackButton");

    const handleClickOutside = (event: MouseEvent) => {
      if (
        formRef.current &&
        !formRef.current.contains(event.target as Node) &&
        event.target !== feedbackButton
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const sendEmail = async () => {
    if (!formRef.current) return;

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    setIsFetching(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      formRef.current.reset();
      setSelectedExpression("");
      onClose();
    } catch (error) {
      console.log("FAILED...", error);
    } finally {
      setIsFetching(false);
    }
  };

  const sendEmailWithToast = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    toast.promise(sendEmail(), {
      loading: "Sending...",
      success: <b>Feedback sent!</b>,
      error: <b>Could not send feedback.</b>,
    });
  };

  return (
    <motion.form
      ref={formRef}
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      transition={{ duration: 0.5 }}
      className="p-5 w-[25rem] rounded-lg bg-white border absolute top-10 right-0 flex flex-col gap-y-3 overflow-hidden"
      onSubmit={sendEmailWithToast}
    >
      <TextInput
        required
        type="email"
        placeholder="Your email.."
        className="w-full"
        name="email"
      />
      <TextInputArea
        required
        className="w-full"
        placeholder="Your feedback..."
        rows={4}
        name="message"
      />
      <div className="flex gap-x-1">
        {expressions.map(({ icon, value }, index) => {
          return (
            <span
              key={index}
              className={`p-2 rounded-full hover:bg-light duration-300 cursor-pointer ${
                value == selectedExpression ? "text-link" : ""
              }`}
              onClick={() => setSelectedExpression(value)}
            >
              {icon}
            </span>
          );
        })}
      </div>
      <input
        type="text"
        name="expression"
        value={selectedExpression}
        hidden
        readOnly
      />
      <div className="w-fit ml-auto">
        {isFetching ? <Loader /> : <Button variant="MAIN" text="Send" />}
      </div>
    </motion.form>
  );
}
