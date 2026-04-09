import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import {
  buildWebPageSchema,
  buildCollectionPageSchema,
  buildArticleSchema,
  PROJECTS_DATA,
  buildReviewSchema,
  TESTIMONIALS_DATA,
} from "@/lib/seo/schemas";

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    buildWebPageSchema(),
    buildCollectionPageSchema(),
    ...PROJECTS_DATA.map(buildArticleSchema),
    ...TESTIMONIALS_DATA.map(buildReviewSchema),
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdData).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <About />
      <Services />
      <Projects />
      {/* Tech Stack Marquee */}
      <div className="py-6 border-y border-[rgba(58,42,26,0.3)] bg-[#140c0f] overflow-hidden">
        <div className="marquee-track">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="text-[10px] font-mono tracking-[0.25em] text-[rgba(232,221,208,0.7)] uppercase px-8 whitespace-nowrap"
            >
              NEXT.JS &nbsp;&bull;&nbsp; TYPESCRIPT &nbsp;&bull;&nbsp; REACT &nbsp;&bull;&nbsp; TAILWIND &nbsp;&bull;&nbsp; SUPABASE &nbsp;&bull;&nbsp; RUST &nbsp;&bull;&nbsp; PYTHON
            </span>
          ))}
        </div>
      </div>
      <Testimonials />
      <Contact />
    </>
  );
}
