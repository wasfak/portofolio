"use client";
import CountUp from "react-countup";
export default function Stats() {
  const stats = [
    {
      num: 2,
      text: "Years of experience",
    },
    {
      num: 12,
      text: "Projects completed",
    },

    {
      num: 6,
      text: "Technologies mastered",
    },
  ];

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-x-6 max-w-[90vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-2xl xl:text-4xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15
                      ? "max-w-[100px]"
                      : "max-w-[150px] leading-snug text-white/80"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
