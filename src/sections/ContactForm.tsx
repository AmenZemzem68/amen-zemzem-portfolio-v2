"use client";

import { ChangeEvent, FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaBehance,
  FaGithub,
  FaLinkedinIn,
  FaDiscord,
} from "react-icons/fa6";

const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "#",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "#",
  },
  {
    name: "Behance",
    icon: FaBehance,
    href: "#",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/AmenZemzem68",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "#",
  },
  {
    name: "Discord",
    icon: FaDiscord,
    href: "#",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast.error("Email service is not configured yet.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Amen Zemzem",
          from_email: form.email,
          to_email: "zemzemamen68@gmail.com",
          subject: form.subject,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY,
      );

      toast.success("Thank you. I will get back to you as soon as possible.");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Ahh, something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 pt-12 lg:py-24 lg:pt-20 overflow-x-clip"
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeader
            eyebrow="Contact"
            title="Let's Work Together"
            description="Have a project in mind, a collaboration idea, or just want to say hello? Send me a message and I will get back to you."
          />
        </motion.div>

        <div className="mt-12 lg:mt-20 grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 items-start">
          <motion.div
            initial={{
              opacity: 0,
              x: -32,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.1,
            }}
            className="relative"
          >
            <div className="absolute -left-20 -top-20 size-64 rounded-full bg-[#49b79e]/20 blur-3xl -z-10" />
            <div className="absolute -bottom-24 -right-24 size-72 rounded-full bg-[#804DEE]/20 blur-3xl -z-10" />

            <div className="inline-flex rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-[#49b79e] border border-white/10">
              Available for freelance work
            </div>

            <h3 className="font-serif text-2xl md:text-4xl mt-6">
              Let&apos;s create something amazing together.
            </h3>

            <p className="mt-4 max-w-xl text-sm md:text-base text-white/60 leading-relaxed">
              Tell me about your project, your idea, or the kind of website you
              need. I&apos;ll help you turn it into a clean, modern, and
              functional digital experience.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-white/40">Don&apos;t like forms?</p>
              <a
                href="mailto:zemzemamen68@gmail.com"
                className="mt-1 inline-flex text-sm md:text-base font-semibold text-white hover:text-[#49b79e] transition"
              >
                zemzemamen68@gmail.com
              </a>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:-translate-y-1 hover:border-[#49b79e]/50 hover:bg-white/10 hover:text-[#49b79e]"
                    >
                      <Icon className="size-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.15,
            }}
          >
            <Card className="relative overflow-hidden p-8 md:p-10">
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-5">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="What's your name?"
                    className="h-14 rounded-2xl border border-white/10 bg-white/5 px-5 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#49b79e]/60 focus:bg-white/10"
                  />

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="What's your email address?"
                    className="h-14 rounded-2xl border border-white/10 bg-white/5 px-5 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#49b79e]/60 focus:bg-white/10"
                  />

                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's the subject?"
                    className="h-14 rounded-2xl border border-white/10 bg-white/5 px-5 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#49b79e]/60 focus:bg-white/10"
                  />

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={7}
                    placeholder="What do you want to say?"
                    className="resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#49b79e]/60 focus:bg-white/10"
                  />

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{
                      y: loading ? 0 : -3,
                      scale: loading ? 1 : 1.02,
                    }}
                    whileTap={{
                      scale: loading ? 1 : 0.97,
                    }}
                    className="inline-flex h-12 w-full md:w-max items-center justify-center gap-2 rounded-xl bg-white px-6 font-semibold text-gray-950 transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <span>{loading ? "Sending..." : "Send Message"}</span>
                    <ArrowUpRightIcon className="size-4" />
                  </motion.button>
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        theme="dark"
        autoClose={3000}
        hideProgressBar={false}
      />
    </section>
  );
};
