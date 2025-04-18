"use client";

import { easeIn, motion } from "framer-motion";
import Image from "next/image";

import Spline from "@splinetool/react-spline";
const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[250px] xl:w-[498px] xl:h-[398px] mix-blend-lighten absolute"
        >
          {/* <Image
            src="" // add your hero image here
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
          /> */}
          <Spline className="mt-[40px]"
            scene="https://prod.spline.design/2OCbT1T9STkcVTCE/scene.splinecode"
          />
          <div className="absolute bottom-[-25px] right-[10px] bg-primary w-[150px] h-[50px] pointer-events-none"></div>

        </motion.div>

        {/* circle */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="white" // adjust the color of circle
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
