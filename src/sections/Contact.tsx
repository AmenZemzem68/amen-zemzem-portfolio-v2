"use client";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { motion } from "framer-motion";

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

export const ContactSection = () => {
  return (
    <section className="py-16 pt-12 lg:py-24 lg:pt-20 overflow-x-clip">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
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
          }}
          className="bg-gradient-to-r from-[#49b79e] to-[#804DEE] py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.05 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute inset-0 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          />

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: 0.15,
              }}
            >
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>

              <p className="text-sm md:text-base mt-2">
                Have a project in mind, a website to build, or a design that
                needs to come alive? I can help you create a modern, responsive,
                and polished digital experience that looks great, works
                smoothly, and reflects your vision.
              </p>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: 0.3,
              }}
            >
              <motion.a
                href="https://www.linkedin.com/in/amenzemzem/"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
              >
                <span className="font-semibold">Contact Me</span>

                <ArrowUpRightIcon className="size-4 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
