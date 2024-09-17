'use client'
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container h-full mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1">
              Hello I am <br /> <span className="text-accent">Noor Nabi</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am a megician who can bring your ideas to life P.S I also code.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <Button variant="outline" onClick={() => { window.open('/noor_nabi_resume.pdf') }} size="lg" className="flex items-center gap-2 uppercase">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
