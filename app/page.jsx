import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"

//components
import Social from "@/components/Social";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container h-full mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I'm <br /> <span className="text-accent">Luke Coleman</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting digital experiences and I am proficient in various programming languages and technologies.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <Button variant="outline" size="lg" className="flex items-center gap-2 uppercase">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social />
              </div>
            </div>
          </div>
          {/* photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
