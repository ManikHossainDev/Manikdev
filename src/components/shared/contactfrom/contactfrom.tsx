"use client"
/* eslint-disable react/no-unescaped-entities */
import { sendEmail } from "@/app/_actions/send-email";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { CustomInput } from "../form/custom-input";
import { CustomTextArea } from "../form/custom-text-area";
import { Button } from "@/components/ui/button";

const Contactfrom = () => {
  const [loading, setLoading] = useState(false);

  const onEmailSubmission = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement & {
      email: { value: string };
      name: { value: string };
      subject: { value: string };
      message: { value: string };
    };

    const email = form.email.value.trim();
    const name = form.name.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (name === "") return toast.error("Name can not be empty");
    else if (subject === "") return toast.error("Subject can not be empty");
    else if (message === "") return toast.error("Message can not be empty");

    const toastId = toast.loading("Sending Message ...");

    try {
      setLoading(true);
      const response = await sendEmail({ email, message, subject, name });
      if (!response.ok) throw new Error(response.message);

      toast.success(response.message, { id: toastId });
    } catch (err: any) {
      toast.error(err.message, { id: toastId });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="rounded-3xl p-5 md:p-10 bg-gray-100 bg-opacity-55 border border-black/25 relative">
      <div className="text-2xl md:text-4xl font-[700] leading-tight font-butler">
        <p>
          Let's work <span className="text-[#00BBA6]">together.</span>
        </p>
      </div>

      <form className="md:mt-8 mt-14" onSubmit={onEmailSubmission}>
        <div className="mt-5">
          <CustomInput
            label="Your Name"
            name="name"
            placeholder="Enter Your Name"
            type="text"
          />
        </div>
        <div className="mt-5">
          <CustomInput
            label="Email"
            name="email"
            placeholder="Enter Your Email"
            type="email"
          />
        </div>
        <div className="mt-5">
          <CustomInput
            label="Subject"
            name="subject"
            placeholder="Subject"
            type="text"
          />
        </div>
        <div className="mt-5">
          <CustomTextArea
            label="Message"
            placeholder="Enter Your Message"
            name="message"
            rows={4}
            required
          />
        </div>
        <div className="mt-3">
          <Button
            disabled={loading}
            className="w-full  flex items-center justify-center px-5 py-2.5 md:py-3 bg-[#00BBA6] hover:bg-[#21DC62] text-white font-medium rounded-lg transition ease-linear duration-200"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="-rotate-45 group-hover:rotate-0 transition-all ease-linear duration-200"
              height="18"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M48 448l416-192L48 64v149.333L346 256 48 298.667z"></path>
            </svg>
            <span className=" group-hover:translate-x-1 transform transition-all ease-linear duration-200">
              Send
            </span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contactfrom;
