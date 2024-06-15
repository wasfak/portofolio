"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

export default function Blog() {
  const services = [
    {
      num: "01",
      title: "Web Development",
      description: "",
      href: "",
    },
    {
      num: "02",
      title: "UI/UX Design",
      description: "",
      href: "",
    },
    {
      num: "03",
      title: "Back End",
      description: "",
      href: "",
    },
    {
      num: "04",
      title: "Python",
      description: "",
      href: "",
    },
  ];

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-accent">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white hover:bg-accent transition-all duration-500 flex items-center justify-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>

                <h2 className="text-[42px] font-bold leading-none text-white hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="">{service.description}</p>
                <div className="border-white/20 w-full border-b"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
