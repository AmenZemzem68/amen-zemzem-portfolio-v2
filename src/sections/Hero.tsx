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
    <section className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]"
      >
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>

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
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shoudlSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-[#49b79e]" />
        </HeroOrbit>

        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-[#49b79e]/20" />
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
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shoudlSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-[#49b79e]" />
        </HeroOrbit>
      </motion.div>

      <div className="container">
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
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl"
          >
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </motion.button>

          <motion.button
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl"
          >
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
