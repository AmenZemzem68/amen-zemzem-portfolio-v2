import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import ReactIcon from "@/assets/icons/react.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMimoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxItems";

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
    left: "50%",
    top: "5%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "10%",
    top: "35%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♀️",
    left: "35%",
    top: "40%",
  },
  {
    title: "Movies",
    emoji: "🍿",
    left: "70%",
    top: "45%",
  },
  {
    title: "Reading",
    emoji: "📖",
    left: "5%",
    top: "65%",
  },
  {
    title: "Chilling",
    emoji: "☕",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do and what inspires me"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 ">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Exlosre the books shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                className=""
                description="Explore the technologies and tools i use to craft my projects."
              />
              <ToolBoxItems items={toolboxItems} className="" />
              <ToolBoxItems
                items={toolboxItems}
                className="mt-6 "
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the code"
                className="px-6 py-6"
                description="Explore my interests and hobbies beyond the code."
              />

              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-[#49b79e] to-[#804DEE] rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className="font-medium text-white">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20">
                <Image
                  src={smileMimoji}
                  alt="smile avatar"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
