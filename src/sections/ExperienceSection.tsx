"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { timelineData } from "@/constants";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa6";

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

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-16 lg:py-24 relative isolate overflow-x-clip"
    >
      <div className="absolute -left-40 top-20 size-[520px] rounded-full bg-[#49b79e]/10 blur-3xl -z-10" />
      <div className="absolute -right-40 bottom-20 size-[620px] rounded-full bg-[#804DEE]/10 blur-3xl -z-10" />

      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeader
            eyebrow="My Journey"
            title="Education & Experience"
            description="A quick look at my academic background, internships, freelance work, and the experiences that shaped my skills as a developer and designer."
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="mt-12 lg:mt-20"
        >
          <VerticalTimeline animate={false} lineColor="rgba(255,255,255,0.12)">
            {timelineData.map((item) => {
              const isEducation = item.category === "education";
              const Icon = isEducation ? FaGraduationCap : FaBriefcase;

              return (
                <VerticalTimelineElement
                  key={item.id}
                  visible={true}
                  date={item.year}
                  dateClassName="text-white/50"
                  icon={<Icon />}
                  iconStyle={{
                    background: isEducation ? "#49b79e" : "#804DEE",
                    color: "#ffffff",
                    boxShadow: "0 0 0 4px rgba(255,255,255,0.08)",
                  }}
                  contentStyle={{
                    background: "rgba(255,255,255,0.05)",
                    color: "#ffffff",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "1.5rem",
                    boxShadow: "0 18px 60px rgba(0,0,0,0.25)",
                    backdropFilter: "blur(16px)",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <div>
                    <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#49b79e]">
                      {isEducation ? "Education" : "Experience"}
                    </span>

                    <h3 className="mt-4 font-serif text-xl md:text-2xl">
                      {item.title}
                    </h3>

                    <ul className="mt-4 flex flex-col gap-3">
                      {item.desc.map((description) => (
                        <li
                          key={description}
                          className="flex gap-3 text-sm leading-relaxed text-white/60"
                        >
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#49b79e] to-[#804DEE]" />
                          <span>{description}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </motion.div>
      </div>
    </section>
  );
};
