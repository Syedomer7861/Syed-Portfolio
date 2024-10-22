"use client";

import { FaHtml5, FaCss3, FaJs, FaFigma } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiAdobephotoshop,
  SiMicrosoftexcel,
  SiMicrosoftword,
  SiMicrosoftpowerpoint,
  SiMicrosoftaccess,
} from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "Hi! I'm a front-end developer skilled in HTML5, CSS3, and JavaScript. I focus on creating visually appealing and user-friendly digital experiences, delivering high-quality work through clean, responsive code. I'm always eager to learn and stay updated with the latest trends to provide innovative solutions.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Syed Omer",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+971) 566 786 201",
    },
    {
      fieldName: "Experience",
      fieldValue: "01+ Years",
    },
    {
      fieldName: "Email",
      fieldValue: "Farrukhmehdi10@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi & Urdu",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "I possess a diverse background in customer support, quality analysis, and accounting, which has refined my problem-solving and communication skills. This multifaceted experience enables me to understand user needs comprehensively and deliver effective, user-centered solutions in my role as a front-end developer.",
  items: [
    {
      company: "Shadab Restaurant LLC | Dubai, UAE",
      position: "Accountant cum Cashier",
      duration: "Dec 2020 - Present",
    },
    {
      company: "HRH NEXT Pvt Ltd | India",
      position: "Customer Support Executive",
      duration: "Jan 2019 - Sep 2020",
    },
    {
      company: "Spectrum and Wireless Technologies | India",
      position: "Quality Analyst",
      duration: "July 2017 - Dec 2018",
    },
    {
      company: "MMH Computers | India",
      position: "MS Office Instructor",
      duration: "2015 - 2017 (Part-Time)",
    },
    {
      company: "Fiverr",
      position: "Freelancer Web Developer",
      duration: "2017 - Present",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "My academic background includes a Bachelor's degree in Computer Applications, along with a foundation in commerce and technology. This blend of education has provided me with both technical expertise and a strong understanding of business principles.",
  items: [
    {
      institution:
        "Institute Of Basic And Vocational Education | govt. of karnataka",
      degree: "B.com Computers Application",
      duration: "2020",
    },
    {
      institution:
        "Institute Of Basic And Vocational Education | govt. of karnataka",
      degree: "CEC",
      duration: "2017",
    },
    {
      institution: "Down high school",
      degree: "SSC",
      duration: "2015",
    },
  ],
};

//  skills data
const skills = {
  title: "My skills",
  description:
    "My skill set includes a strong foundation in front-end development, with expertise in HTML5, CSS3, and JavaScript. I am proficient in creating responsive, user-friendly websites that deliver seamless digital experiences. Additionally, I have experience in UI/UX design, focusing on creating intuitive interfaces, as well as logo design and branding. I also have a solid understanding of SEO principles, optimizing websites to enhance search engine visibility and improve overall performance.",
  skilllist: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <SiAdobephotoshop />,
      name: "adobe photoshop",
    },
    {
      icon: <SiMicrosoftexcel />,
      name: "MS Excel",
    },
    {
      icon: <SiMicrosoftword />,
      name: "MS Word",
    },
    {
      icon: <SiMicrosoftpowerpoint />,
      name: "MS PowerPoint",
    },
    {
      icon: <SiMicrosoftaccess />,
      name: "MS Access",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 ">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 ">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skilllist.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul
                  className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
                mx-auto xl:mx-0"
                >
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60 ">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
