import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24 lg:flex lg:gap-16">
      <Sidebar />
      <main
        className="animate-enter lg:w-[58%] lg:py-24 pb-16"
        style={{ animationDelay: "300ms" }}
      >
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
