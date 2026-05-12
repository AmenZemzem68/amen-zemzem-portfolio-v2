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
        className="absolute -bottom-62 -right-32 size-[460px] md:size-[650px] lg:size-[820px] rounded-full bg-[#804DEE]/10 blur-3xl -z-20"
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

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <div className="size-[620px] hero-ring"></div>
          <div className="size-[820px] hero-ring"></div>
          <div className="size-[1020px] hero-ring"></div>
          <div className="size-[1220px] hero-ring"></div>
        </motion.div>

        <HeroOrbit
          size={300}
          rotation={42}
          shouldOrbit
          orbitDuration="24s"
          shoudlSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-4 text-[#49b79e]/25" />
        </HeroOrbit>

        <HeroOrbit
          size={340}
          rotation={-92}
          shouldOrbit
          orbitDuration="26s"
          shoudlSpin
          spinDuration="4s"
        >
          <SparkleIcon className="size-5 text-[#804DEE]/30" />
        </HeroOrbit>

        <HeroOrbit size={380} rotation={132} shouldOrbit orbitDuration="28s">
          <div className="size-1.5 rounded-full bg-[#49b79e]/30" />
        </HeroOrbit>

        <HeroOrbit
          size={410}
          rotation={-58}
          shouldOrbit
          orbitDuration="29s"
          shoudlSpin
          spinDuration="4s"
        >
          <StarIcon className="size-5 text-[#49b79e]/60" />
        </HeroOrbit>

        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shoudlSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-[#49b79e]/20" />
        </HeroOrbit>

        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shoudlSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-[#49b79e]/20" />
        </HeroOrbit>

        <HeroOrbit
          size={470}
          rotation={155}
          shouldOrbit
          orbitDuration="33s"
          shoudlSpin
          spinDuration="5s"
        >
          <SparkleIcon className="size-7 text-[#804DEE]/25" />
        </HeroOrbit>

        <HeroOrbit size={490} rotation={-128} shouldOrbit orbitDuration="35s">
          <div className="size-2 rounded-full bg-[#804DEE]/25" />
        </HeroOrbit>

        <HeroOrbit
          size={520}
          rotation={-41}
          shouldOrbit
          orbitDuration="34s"
          shoudlSpin
          spinDuration="3s"
        >
          <div className="size-2 rounded-full bg-[#49b79e]/20" />
        </HeroOrbit>

        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shoudlSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-[#49b79e]/20" />
        </HeroOrbit>

        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shoudlSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-[#49b79e]" />
        </HeroOrbit>

        <HeroOrbit
          size={575}
          rotation={-165}
          shouldOrbit
          orbitDuration="39s"
          shoudlSpin
          spinDuration="5s"
        >
          <SparkleIcon className="size-6 text-[#49b79e]/30" />
        </HeroOrbit>

        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shoudlSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-[#49b79e]" />
        </HeroOrbit>

        <HeroOrbit
          size={620}
          rotation={64}
          shouldOrbit
          orbitDuration="41s"
          shoudlSpin
          spinDuration="7s"
        >
          <StarIcon className="size-6 text-[#804DEE]/70" />
        </HeroOrbit>

        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-[#49b79e]/20" />
        </HeroOrbit>

        <HeroOrbit
          size={680}
          rotation={-104}
          shouldOrbit
          orbitDuration="43s"
          shoudlSpin
          spinDuration="4s"
        >
          <SparkleIcon className="size-9 text-[#804DEE]/25" />
        </HeroOrbit>

        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shoudlSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-14 text-[#49b79e]/20" />
        </HeroOrbit>

        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-[#49b79e]/20" />
        </HeroOrbit>

        <HeroOrbit
          size={760}
          rotation={-36}
          shouldOrbit
          orbitDuration="47s"
          shoudlSpin
          spinDuration="5s"
        >
          <StarIcon className="size-10 text-[#49b79e]/80" />
        </HeroOrbit>

        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shoudlSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-[#49b79e]" />
        </HeroOrbit>

        <HeroOrbit size={840} rotation={118} shouldOrbit orbitDuration="50s">
          <div className="size-2.5 rounded-full bg-[#804DEE]/30" />
        </HeroOrbit>

        <HeroOrbit
          size={880}
          rotation={-142}
          shouldOrbit
          orbitDuration="52s"
          shoudlSpin
          spinDuration="6s"
        >
          <SparkleIcon className="size-11 text-[#49b79e]/25" />
        </HeroOrbit>

        <HeroOrbit
          size={930}
          rotation={34}
          shouldOrbit
          orbitDuration="54s"
          shoudlSpin
          spinDuration="8s"
        >
          <StarIcon className="size-16 text-[#804DEE]/50" />
        </HeroOrbit>

        <HeroOrbit size={980} rotation={172} shouldOrbit orbitDuration="56s">
          <div className="size-3 rounded-full bg-[#49b79e]/25" />
        </HeroOrbit>

        <HeroOrbit
          size={1040}
          rotation={-88}
          shouldOrbit
          orbitDuration="58s"
          shoudlSpin
          spinDuration="7s"
        >
          <SparkleIcon className="size-12 text-[#804DEE]/20" />
        </HeroOrbit>

        <HeroOrbit
          size={1120}
          rotation={56}
          shouldOrbit
          orbitDuration="62s"
          shoudlSpin
          spinDuration="9s"
        >
          <StarIcon className="size-20 text-[#49b79e]/50" />
        </HeroOrbit>
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
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
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
          <motion.button
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="group relative isolate inline-flex h-12 items-center gap-2 overflow-hidden rounded-xl border border-white/15 px-6 transition-all duration-300 hover:border-[#49b79e]/70 hover:shadow-lg hover:shadow-[#49b79e]/20"
          >
            <span className="absolute inset-0 -z-10 -translate-x-full bg-gradient-to-r from-[#49b79e] to-[#804DEE] transition-transform duration-500 ease-out group-hover:translate-x-0" />

            <span className="font-semibold text-white transition-colors duration-300">
              Explore My Work
            </span>

            <ArrowDown className="size-4 text-white transition-transform duration-300 group-hover:translate-y-0.5" />
          </motion.button>

          <motion.button
            variants={fadeUp}
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
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
