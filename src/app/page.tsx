import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      {/* Tech Stack Marquee */}
      <div className="py-6 border-y border-[rgba(58,42,26,0.3)] bg-[#0a0705] overflow-hidden">
        <div className="marquee-track">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="text-[10px] font-mono tracking-[0.25em] text-[rgba(232,221,208,0.4)] uppercase px-8 whitespace-nowrap"
            >
              NEXT.JS &nbsp;&bull;&nbsp; TYPESCRIPT &nbsp;&bull;&nbsp; PYTHON &nbsp;&bull;&nbsp; LANGGRAPH &nbsp;&bull;&nbsp; CLAUDE_API &nbsp;&bull;&nbsp; MCP_PROTOCOL &nbsp;&bull;&nbsp; TAILWIND_CSS &nbsp;&bull;&nbsp; RUST &nbsp;&bull;&nbsp; POSTGRESQL
            </span>
          ))}
        </div>
      </div>
      <Testimonials />
      <Contact />
    </>
  );
}
