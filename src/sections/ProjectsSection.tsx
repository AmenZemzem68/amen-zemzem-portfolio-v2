"use client";

import Image from "next/image";
import Tilt from "react-parallax-tilt";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { mProjects } from "@/constants";

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

export const Projects = () => {
  return (
    <section id="projects" className="py-16 lg:py-24">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeader
            title="Featured Projects"
            eyebrow="Real-world Results"
            description="A selection of real projects I have designed and developed, combining clean interfaces, modern technologies, and practical business goals."
          />
        </motion.div>

        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {mProjects.map((project, index) => (
            <motion.div
              layout
              key={project.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: Math.min(index * 0.05, 0.25),
              }}
            >
              <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                scale={1.02}
                transitionSpeed={900}
                glareEnable
                glareMaxOpacity={0.08}
                glareColor="#ffffff"
                glarePosition="all"
                className="h-full"
              >
                <Card className="h-full overflow-hidden p-0">
                  <div className="relative h-[220px] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {(project.liveLink || project.githubLink) && (
                      <div className="absolute right-5 top-0 z-10 flex gap-2">
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open live website for ${project.name}`}
                            className="rounded-b-2xl bg-gradient-to-r from-[#49b79e] to-[#804DEE] px-3 py-2 text-white shadow-lg transition hover:scale-105"
                          >
                            <ArrowUpRight className="size-5" />
                          </a>
                        )}

                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open GitHub repository for ${project.name}`}
                            className="rounded-b-2xl bg-gray-950 px-3 py-2 text-white shadow-lg transition hover:scale-105"
                          >
                            <GithubIcon className="size-5" />
                          </a>
                        )}
                      </div>
                    )}

                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-gray-950/80 to-transparent" />
                  </div>

                  <div className="p-6">
                    <div className="text-xs font-bold uppercase tracking-widest text-[#49b79e]">
                      {project.type ?? "Client Project"}
                    </div>

                    <h3 className="mt-2 font-serif text-xl md:text-2xl">
                      {project.name}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag.name}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium"
                          style={{
                            color: tag.color,
                          }}
                        >
                          #{tag.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
