"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I build responsive and dynamic websites that not only look great but also function seamlessly across all devices. Utilizing the latest technologies and frameworks, I ensure a smooth user experience while adhering to best coding practices.",
    href: "/contact",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I create intuitive user interfaces and engaging user experiences that enhance interaction and satisfaction. By focusing on user research and design principles, I craft solutions that meet the needs of users and drive business goals.",
    href: "/contact",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "I design unique and memorable logos that capture the essence of your brand. Through a thoughtful process of research and creativity, I ensure that each logo communicates your brand's identity and resonates with your target audience.",
    href: "/contact",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "I implement effective SEO strategies to improve your website's visibility and ranking on search engines. By optimizing content and utilizing keyword research, I help attract organic traffic and enhance your online presence.",
    href: "/contact",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-gradient-text  hover:transition-all hover:duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* heading */}
                <h2 className="text-[42px] font-bold leading-none text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-accent/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-accent/40 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
