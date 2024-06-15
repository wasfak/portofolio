import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import Image from "next/image";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row xl:pt-4 xl:pb-12 items-center justify-between">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Nextjs Dev</span>
            <h1 className="h1 mb-2">
              Hello Im <br />
              <span className="text-accent">Ahmed Wasfy</span>
            </h1>
            <p className="max-w-[700px] mt-4 text-white/80">
              As a passionate software developer specializing in Next.js,
              Tailwind CSS, and TypeScript, I bring a wealth of experience and a
              keen eye for detail to every project I undertake. My journey in
              web development has been driven by a commitment to staying at the
              forefront of technology and best practices, ensuring that my
              solutions are not only efficient but also innovative. Whether Im
              creating dynamic user experiences or optimizing performance, Lets
              build something amazing together!
            </p>

            {/* btn and socials */}
            <div className="my-4 xl:mb-0 flex items-center justify-center xl:my-2">
              <Socials
                containerStyles="flex gap-x-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>
          {/* photos */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
