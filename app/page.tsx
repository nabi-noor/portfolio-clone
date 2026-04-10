import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import FocusAreas from "@/components/FocusAreas";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <PageLoader />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <FocusAreas />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
