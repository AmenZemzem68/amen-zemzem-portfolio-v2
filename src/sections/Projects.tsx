"use client";

import Image from "next/image";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { mProjects } from "@/constants";
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

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24 overflow-x-clip">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeader
            title="Featured Projects"
            eyebrow="Real-world Results"
            description="A selection of real projects I have designed and developed, combining clean interfaces, modern technologies, and practical business goals."
          />
        </motion.div>

        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {mProjects.map((project, projectIndex) => (
            <div
              key={project.name}
              className="sticky"
              style={{
                top: `calc(64px + ${projectIndex * 15}px)`,
              }}
            >
              <Card className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 overflow-hidden">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="lg:pb-16"
                  >
                    <motion.div
                      variants={fadeUp}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="bg-gradient-to-r from-[#49b79e] to-[#804DEE] inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text"
                    >
                      <span>{project.type ?? "Client Project"}</span>
                      <span>&bull;</span>
                      <span>{project.tags[0]?.name}</span>
                    </motion.div>

                    <motion.h3
                      variants={fadeUp}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl"
                    >
                      {project.name}
                    </motion.h3>

                    <motion.hr
                      variants={fadeUp}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="border-t-2 border-white/5 mt-4 md:mt-5"
                    />

                    <motion.p
                      variants={fadeUp}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="mt-4 md:mt-5 text-sm md:text-base text-white/60 leading-relaxed"
                    >
                      {project.description}
                    </motion.p>

                    <motion.div
                      variants={staggerContainer}
                      className="flex flex-wrap gap-3 mt-5"
                    >
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag.name}
                          variants={fadeUp}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="text-xs md:text-sm rounded-full px-3 py-1 border border-white/10 bg-white/5"
                          style={{
                            color: tag.color,
                          }}
                        >
                          #{tag.name}
                        </motion.span>
                      ))}
                    </motion.div>

                    {(project.liveLink || project.githubLink) && (
                      <motion.div
                        variants={fadeUp}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mt-8 flex flex-col md:flex-row gap-3"
                      >
                        {project.liveLink && (
                          <motion.a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{
                              y: -3,
                              scale: 1.02,
                            }}
                            whileTap={{
                              scale: 0.97,
                            }}
                            className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2"
                          >
                            <span>Live Site</span>
                            <ArrowUpRight className="size-4" />
                          </motion.a>
                        )}

                        {project.githubLink && (
                          <motion.a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{
                              y: -3,
                              scale: 1.02,
                            }}
                            whileTap={{
                              scale: 0.97,
                            }}
                            className="bg-gray-950 text-white h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 border border-white/15"
                          >
                            <span>GitHub</span>
                            <GithubIcon className="size-4" />
                          </motion.a>
                        )}
                      </motion.div>
                    )}
                  </motion.div>

                  <div className="relative">
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: 60,
                        scale: 0.96,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        scale: 1,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.15,
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={project.name}
                        className="mt-8 -mb-4 rounded-t-2xl md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                      />
                    </motion.div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
