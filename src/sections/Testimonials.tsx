"use client";

import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { feedbacks } from "@/constants";

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

export const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-24 overflow-x-clip">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeader
            title="What Clients Say About Me"
            eyebrow="Happy Clients"
            description="Discover the experiences and feedback from those who have worked with me. Their words reflect the trust and satisfaction I strive to achieve every day."
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4"
        >
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {feedbacks.map((feedback) => (
                  <Tilt
                    key={`${feedback.id}-${idx}`}
                    tiltMaxAngleX={15}
                    tiltMaxAngleY={15}
                    scale={1.02}
                    transitionSpeed={900}
                    glareEnable
                    glareMaxOpacity={0.12}
                    glareColor="#ffffff"
                    glarePosition="all"
                    className="max-w-xs md:max-w-md flex-none"
                  >
                    <Card className="p-6 md:p-8 h-full">
                      <div className="flex gap-4 items-center">
                        <div className="size-14 bg-gray-700 inline-flex rounded-full flex-shrink-0 overflow-hidden">
                          <Image
                            src={feedback.image}
                            alt={feedback.title}
                            className="size-full object-cover"
                          />
                        </div>

                        <div>
                          <div className="font-semibold">{feedback.title}</div>
                          <div className="text-sm text-white/40">
                            {feedback.subtitle}
                          </div>
                        </div>
                      </div>

                      <p className="mt-4 md:mt-6 text-sm md:text-base text-white/80">
                        {feedback.comment}
                      </p>
                    </Card>
                  </Tilt>
                ))}
              </Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
