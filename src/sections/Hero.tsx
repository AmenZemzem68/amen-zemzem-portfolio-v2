"use client";

import memojiImage from "@/assets/images/my-avatar.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

type OrbitItem = {
  size: number;
  rotation: number;
  type: "star" | "sparkle" | "dot";
  className: string;
  shouldOrbit?: boolean;
  orbitDuration?: string;
  shoudlSpin?: boolean;
  spinDuration?: string;
};

const orbitItems: OrbitItem[] = [
  {
    size: 260,
    rotation: -115,
    type: "sparkle",
    className: "size-3 text-[#49b79e]/20",
    shouldOrbit: true,
    orbitDuration: "22s",
    shoudlSpin: true,
    spinDuration: "3s",
  },
  {
    size: 300,
    rotation: 42,
    type: "sparkle",
    className: "size-4 text-[#49b79e]/25",
    shouldOrbit: true,
    orbitDuration: "24s",
    shoudlSpin: true,
    spinDuration: "3s",
  },
  {
    size: 325,
    rotation: 95,
    type: "star",
    className: "size-4 text-[#804DEE]/35",
    shouldOrbit: true,
    orbitDuration: "25s",
    shoudlSpin: true,
    spinDuration: "4s",
  },
  {
    size: 340,
    rotation: -92,
    type: "sparkle",
    className: "size-5 text-[#804DEE]/30",
    shouldOrbit: true,
    orbitDuration: "26s",
    shoudlSpin: true,
    spinDuration: "4s",
  },
  {
    size: 360,
    rotation: 12,
    type: "dot",
    className: "size-1.5 bg-[#49b79e]/30",
    shouldOrbit: true,
    orbitDuration: "27s",
  },
  {
    size: 380,
    rotation: 132,
    type: "dot",
    className: "size-1.5 bg-[#49b79e]/30",
    shouldOrbit: true,
    orbitDuration: "28s",
  },
  {
    size: 410,
    rotation: -58,
    type: "star",
    className: "size-5 text-[#49b79e]/60",
    shouldOrbit: true,
    orbitDuration: "29s",
    shoudlSpin: true,
    spinDuration: "4s",
  },
  {
    size: 430,
    rotation: -14,
    type: "sparkle",
    className: "size-8 text-[#49b79e]/20",
    shouldOrbit: true,
    orbitDuration: "30s",
    shoudlSpin: true,
    spinDuration: "3s",
  },
  {
    size: 440,
    rotation: 79,
    type: "sparkle",
    className: "size-5 text-[#49b79e]/20",
    shouldOrbit: true,
    orbitDuration: "32s",
    shoudlSpin: true,
    spinDuration: "3s",
  },
  {
    size: 455,
    rotation: 112,
    type: "star",
    className: "size-4 text-[#49b79e]/40",
    shouldOrbit: true,
    orbitDuration: "32s",
    shoudlSpin: true,
    spinDuration: "5s",
  },
  {
    size: 470,
    rotation: 155,
    type: "sparkle",
    className: "size-7 text-[#804DEE]/25",
    shouldOrbit: true,
    orbitDuration: "33s",
    shoudlSpin: true,
    spinDuration: "5s",
  },
  {
    size: 490,
    rotation: -128,
    type: "dot",
    className: "size-2 bg-[#804DEE]/25",
    shouldOrbit: true,
    orbitDuration: "35s",
  },
  {
    size: 520,
    rotation: -41,
    type: "dot",
    className: "size-2 bg-[#49b79e]/20",
    shouldOrbit: true,
    orbitDuration: "34s",
  },
  {
    size: 530,
    rotation: 178,
    type: "sparkle",
    className: "size-10 text-[#49b79e]/20",
    shouldOrbit: true,
    orbitDuration: "36s",
    shoudlSpin: true,
    spinDuration: "3s",
  },
  {
    size: 550,
    rotation: 20,
    type: "star",
    className: "size-12 text-[#49b79e]",
    shouldOrbit: true,
    orbitDuration: "38s",
    shoudlSpin: true,
    spinDuration: "6s",
  },
  {
    size: 575,
    rotation: -165,
    type: "sparkle",
    className: "size-6 text-[#49b79e]/30",
    shouldOrbit: true,
    orbitDuration: "39s",
    shoudlSpin: true,
    spinDuration: "5s",
  },
  {
    size: 590,
    rotation: 98,
    type: "star",
    className: "size-8 text-[#49b79e]",
    shouldOrbit: true,
    orbitDuration: "40s",
    shoudlSpin: true,
    spinDuration: "6s",
  },
  {
    size: 610,
    rotation: -18,
    type: "sparkle",
    className: "size-4 text-[#804DEE]/30",
    shouldOrbit: true,
    orbitDuration: "40s",
    shoudlSpin: true,
    spinDuration: "4s",
  },
  {
    size: 620,
    rotation: 64,
    type: "star",
    className: "size-6 text-[#804DEE]/70",
    shouldOrbit: true,
    orbitDuration: "41s",
    shoudlSpin: true,
    spinDuration: "7s",
  },
  {
    size: 650,
    rotation: -5,
    type: "dot",
    className: "size-2 bg-[#49b79e]/20",
    shouldOrbit: true,
    orbitDuration: "42s",
  },
  {
    size: 665,
    rotation: 38,
    type: "star",
    className: "size-5 text-[#49b79e]/45",
    shouldOrbit: true,
    orbitDuration: "43s",
    shoudlSpin: true,
    spinDuration: "5s",
  },
  {
    size: 680,
    rotation: -104,
    type: "sparkle",
    className: "size-9 text-[#804DEE]/25",
    shouldOrbit: true,
    orbitDuration: "43s",
    shoudlSpin: true,
    spinDuration: "4s",
  },
  {
    size: 710,
    rotation: 144,
    type: "sparkle",
    className: "size-14 text-[#49b79e]/20",
    shouldOrbit: true,
    orbitDuration: "44s",
    shoudlSpin: true,
    spinDuration: "3s",
  },
  {
    size: 720,
    rotation: 85,
    type: "dot",
    className: "size-3 bg-[#49b79e]/20",
    shouldOrbit: true,
    orbitDuration: "46s",
  },
  {
    size: 740,
    rotation: -155,
    type: "sparkle",
    className: "size-5 text-[#804DEE]/25",
    shouldOrbit: true,
    orbitDuration: "46s",
    shoudlSpin: true,
    spinDuration: "5s",
  },
  {
    size: 760,
    rotation: -36,
    type: "star",
    className: "size-10 text-[#49b79e]/80",
    shouldOrbit: true,
    orbitDuration: "47s",
    shoudlSpin: true,
    spinDuration: "5s",
  },
  {
    size: 790,
    rotation: 8,
    type: "dot",
    className: "size-2 bg-[#804DEE]/25",
    shouldOrbit: true,
    orbitDuration: "48s",
  },
  {
    size: 800,
    rotation: -72,
    type: "star",
    className: "size-28 text-[#49b79e]",
    shouldOrbit: true,
    orbitDuration: "48s",
    shoudlSpin: true,
    spinDuration: "6s",
  },
  {
    size: 820,
    rotation: 152,
    type: "sparkle",
    className: "size-6 text-[#49b79e]/25",
    shouldOrbit: true,
    orbitDuration: "49s",
    shoudlSpin: true,
    spinDuration: "5s",
  },
  {
    size: 840,
    rotation: 118,
    type: "dot",
    className: "size-2.5 bg-[#804DEE]/30",
    shouldOrbit: true,
    orbitDuration: "50s",
  },
  {
    size: 880,
    rotation: -142,
    type: "sparkle",
    className: "size-11 text-[#49b79e]/25",
    shouldOrbit: true,
    orbitDuration: "52s",
    shoudlSpin: true,
    spinDuration: "6s",
  },
  {
    size: 910,
    rotation: 74,
    type: "star",
    className: "size-7 text-[#49b79e]/40",
    shouldOrbit: true,
    orbitDuration: "53s",
    shoudlSpin: true,
    spinDuration: "6s",
  },
  {
    size: 930,
    rotation: 34,
    type: "star",
    className: "size-16 text-[#804DEE]/50",
    shouldOrbit: true,
    orbitDuration: "54s",
    shoudlSpin: true,
    spinDuration: "8s",
  },
  {
    size: 960,
    rotation: -22,
    type: "sparkle",
    className: "size-8 text-[#49b79e]/20",
    shouldOrbit: true,
    orbitDuration: "55s",
    shoudlSpin: true,
    spinDuration: "7s",
  },
  {
    size: 980,
    rotation: 172,
    type: "dot",
    className: "size-3 bg-[#49b79e]/25",
    shouldOrbit: true,
    orbitDuration: "56s",
  },
  {
    size: 1040,
    rotation: -88,
    type: "sparkle",
    className: "size-12 text-[#804DEE]/20",
    shouldOrbit: true,
    orbitDuration: "58s",
    shoudlSpin: true,
    spinDuration: "7s",
  },
  {
    size: 1080,
    rotation: 138,
    type: "star",
    className: "size-9 text-[#49b79e]/35",
    shouldOrbit: true,
    orbitDuration: "60s",
    shoudlSpin: true,
    spinDuration: "8s",
  },
  {
    size: 1120,
    rotation: 56,
    type: "star",
    className: "size-20 text-[#49b79e]/50",
    shouldOrbit: true,
    orbitDuration: "62s",
    shoudlSpin: true,
    spinDuration: "9s",
  },
  {
    size: 1180,
    rotation: -128,
    type: "sparkle",
    className: "size-10 text-[#804DEE]/20",
    shouldOrbit: true,
    orbitDuration: "64s",
    shoudlSpin: true,
    spinDuration: "9s",
  },
];

export const HeroSection = () => {
  return (
    <section className="py-32 md:py-48 lg:py-60 relative isolate z-0 overflow-x-clip">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute -left-32 -top-32 size-[420px] md:size-[600px] lg:size-[760px] rounded-full bg-[#49b79e]/10 blur-3xl -z-20"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.15 }}
        className="absolute -bottom-64 -right-32 size-[460px] md:size-[650px] lg:size-[820px] rounded-full bg-[#804DEE]/10 blur-3xl -z-20"
      />

      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 -z-10 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      >
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        />

        <div>
          <div className="size-[620px] hero-ring" />
          <div className="size-[820px] hero-ring" />
          <div className="size-[1020px] hero-ring" />
          <div className="size-[1220px] hero-ring" />
        </div>

        {orbitItems.map((item) => (
          <HeroOrbit
            key={`${item.size}-${item.rotation}`}
            size={item.size}
            rotation={item.rotation}
            shouldOrbit={item.shouldOrbit}
            orbitDuration={item.orbitDuration}
            shoudlSpin={item.shoudlSpin}
            spinDuration={item.spinDuration}
          >
            {item.type === "star" ? (
              <StarIcon className={item.className} />
            ) : item.type === "sparkle" ? (
              <SparkleIcon className={item.className} />
            ) : (
              <div className={`rounded-full ${item.className}`} />
            )}
          </HeroOrbit>
        ))}
      </motion.div>

      <div className="container relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.14, delayChildren: 0.2 }}
          className="flex flex-col items-center"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.04 }}
          >
            <Image
              src={memojiImage}
              className="size-[200px] rounded-full mb-2"
              alt="My avatar"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-[#050816] border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg"
          >
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large" />
            </div>

            <div className="text-sm font-semibold">
              Available for new projects
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.16, delayChildren: 0.45 }}
          className="max-w-lg mx-auto"
        >
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide"
          >
            Amen Zemzem
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mt-4 text-center text-white/60 md:text-lg"
          >
            Web Developer with a Designer&apos;s Touch.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12, delayChildren: 0.7 }}
          className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4"
        >
          <motion.a
            variants={fadeUp}
            href="#projects"
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="group relative isolate inline-flex h-12 items-center gap-2 overflow-hidden rounded-xl border border-white/15 px-6 transition-all duration-300 hover:border-[#49b79e]/70 hover:shadow-lg hover:shadow-[#49b79e]/20"
          >
            <span className="absolute inset-0 -z-10 -translate-x-full bg-gradient-to-r from-[#49b79e] to-[#804DEE] transition-transform duration-500 ease-out group-hover:translate-x-0" />

            <span className="font-semibold text-white transition-colors duration-300">
              Explore My Work
            </span>

            <ArrowDown className="size-4 text-white transition-transform duration-300 group-hover:translate-y-0.5" />
          </motion.a>

          <motion.a
            variants={fadeUp}
            href="#contact"
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="group relative isolate inline-flex h-12 items-center gap-2 overflow-hidden rounded-xl border border-white bg-white px-6 text-gray-900 transition-all duration-300 hover:border-[#804DEE]/70 hover:shadow-lg hover:shadow-[#804DEE]/20"
          >
            <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-gradient-to-r from-[#804DEE] to-[#49b79e] transition-transform duration-500 ease-out group-hover:scale-x-100" />

            <span className="relative z-10 transition-transform duration-300 group-hover:rotate-12">
              👋
            </span>

            <span className="relative z-10 font-semibold transition-colors duration-300 group-hover:text-white">
              Let&apos;s Connect
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
