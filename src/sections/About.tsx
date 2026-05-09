"use client";

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import ReactIcon from "@/assets/icons/react.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/map.png";
import smileMimoji from "@/assets/images/my-avatar.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "ReactJS",
    iconType: ReactIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Graphic Design",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "45%",
    top: "5%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "8%",
    top: "24%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♀️",
    left: "35%",
    top: "26%",
  },
  {
    title: "Movies",
    emoji: "🍿",
    left: "67%",
    top: "25%",
  },
  {
    title: "Reading",
    emoji: "📖",
    left: "5%",
    top: "46%",
  },
  {
    title: "Chilling",
    emoji: "☕",
    left: "42%",
    top: "48%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "70%",
    top: "48%",
  },
  {
    title: "UI Design",
    emoji: "🧩",
    left: "25%",
    top: "8%",
  },
  {
    title: "Coding",
    emoji: "💻",
    left: "24%",
    top: "66%",
  },
  {
    title: "Travel",
    emoji: "✈️",
    left: "68%",
    top: "70%",
  },
  {
    title: "Anime",
    emoji: "🌙",
    left: "7%",
    top: "72%",
  },
  {
    title: "Football",
    emoji: "⚽",
    left: "58%",
    top: "36%",
  },
  {
    title: "Branding",
    emoji: "✨",
    left: "76%",
    top: "8%",
  },
  {
    title: "Learning",
    emoji: "📚",
    left: "30%",
    top: "43%",
  },
  {
    title: "Illustration",
    emoji: "✏️",
    left: "53%",
    top: "62%",
  },
  {
    title: "Tech",
    emoji: "🚀",
    left: "82%",
    top: "60%",
  },
  {
    title: "Coffee",
    emoji: "☕",
    left: "18%",
    top: "84%",
  },
  {
    title: "Cars",
    emoji: "🏎️",
    left: "44%",
    top: "82%",
  },
  {
    title: "Sneakers",
    emoji: "👟",
    left: "76%",
    top: "84%",
  },
  {
    title: "3D Design",
    emoji: "🧊",
    left: "52%",
    top: "17%",
  },
  {
    title: "Web Animations",
    emoji: "⚡",
    left: "14%",
    top: "58%",
  },
  {
    title: "Content Creation",
    emoji: "🎬",
    left: "58%",
    top: "78%",
  },
  {
    title: "Problem Solving",
    emoji: "🧠",
    left: "32%",
    top: "56%",
  },
  {
    title: "Creative Coding",
    emoji: "🪄",
    left: "64%",
    top: "12%",
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

const cardReveal = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export const AboutSection = () => {
  const constrainRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 lg:py-28">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeader
            eyebrow="About Me"
            title="A Glimpse Into My World"
            description="Learn more about who I am, what I do and what inspires me"
          />
        </motion.div>

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <motion.div
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="md:col-span-2 lg:col-span-1"
            >
              <Card className="h-[320px]">
                <CardHeader
                  title="My Reads"
                  description="Explore the books shaping my perspectives."
                />

                <motion.div
                  initial={{ opacity: 0, y: 20, rotate: -4 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                  whileHover={{ y: -8, rotate: 2, scale: 1.03 }}
                  className="w-40 mx-auto mt-2 md:mt-0"
                >
                  <Image src={bookImage} alt="Book" />
                </motion.div>
              </Card>
            </motion.div>

            <motion.div
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
              className="md:col-span-3 lg:col-span-2"
            >
              <Card className="h-[320px] overflow-hidden">
                <CardHeader
                  title="My Toolbox"
                  description="Explore the technologies and tools I use to craft my projects."
                />

                <motion.div
                  initial={{ opacity: 0, x: -32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                >
                  <ToolBoxItems
                    items={toolboxItems}
                    itemsWrapperClassName="animate-move-left [animation-duration:30s]"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
                >
                  <ToolBoxItems
                    items={toolboxItems}
                    className="mt-6"
                    itemsWrapperClassName="animate-move-right [animation-duration:15s]"
                  />
                </motion.div>
              </Card>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <motion.div
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="md:col-span-3 lg:col-span-2"
            >
              <Card className="h-[320px] p-0 flex flex-col">
                <CardHeader
                  title="Beyond the Code"
                  className="px-6 py-6"
                  description="Explore my interests and hobbies beyond the code."
                />

                <div className="relative flex-1" ref={constrainRef}>
                  {hobbies.map((hobby, index) => (
                    <motion.div
                      key={hobby.title}
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                        y: 16,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        ease: "easeOut",
                        delay: index * 0.08,
                      }}
                      whileTap={{
                        scale: 0.95,
                        cursor: "grabbing",
                      }}
                      className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-[#49b79e] to-[#804DEE] rounded-full py-1.5 absolute cursor-grab"
                      style={{
                        left: hobby.left,
                        top: hobby.top,
                      }}
                      drag
                      dragConstraints={constrainRef}
                    >
                      <span className="font-medium text-white">
                        {hobby.title}
                      </span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
              className="md:col-span-2 lg:col-span-1"
            >
              <Card className="h-[320px] p-0 relative overflow-hidden">
                <motion.div
                  initial={{ scale: 1.08, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="h-full w-full"
                >
                  <Image
                    src={mapImage}
                    alt="map"
                    className="h-full w-full object-cover object-left-top"
                  />
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                    x: "-50%",
                    y: "-50%",
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    x: "-50%",
                    y: "-50%",
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    ease: "easeOut",
                    delay: 0.25,
                  }}
                  className="absolute top-1/2 left-1/2 size-20"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#49b79e] to-[#804DEE] -z-20 animate-ping [animation-duration:2s]"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#49b79e] to-[#804DEE] -z-10"></div>

                  <Image
                    src={smileMimoji}
                    alt="smile avatar"
                    className="size-20 rounded-full"
                  />
                </motion.div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
