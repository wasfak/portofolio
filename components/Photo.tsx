"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
  return (
    <div className="w-full h-full flex items-center justify-center ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2,
            duration: 0.4,
            ease: "easeIn",
          },
        }}
        className="relative w-[200px] h-[200px] xl:w-[350px] xl:h-[350px] xl:mr-14"
      >
        {/* image */}
        <motion.div
          className="absolute w-full h-full mix-blend-lighten "
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
        >
          <Image
            src="/bg.png"
            alt="ahmed"
            priority
            fill
            quality={100}
            className="object-contain"
          />
        </motion.div>
        {/* circle */}
        <motion.svg
          className="w-full h-full"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinejoin="round"
            strokeLinecap="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 255", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
