"use client";

import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem, MotionContainer } from "@/components/ui/MotionContainer";
import { LiquidMetalButton } from "@/components/ui/LiquidMetalButton";

export function Contact() {
  return (
    <section id="contact" className="py-28" style={{ background: "transparent" }}>
      <div className="mx-auto max-w-3xl px-6">
        <StaggerContainer className="mb-12" delay={0.1}>
          <StaggerItem>
            <MotionContainer animation="fadeInUp">
              <div className="text-[10px] font-mono tracking-[0.3em] text-[#c41e3a] uppercase mb-3">
                // SIGNAL
              </div>
              <h2 className="font-heading text-4xl font-bold text-[#e8ddd0] chiseled mb-3">
                Open for Connection
              </h2>
              <p className="text-sm font-mono text-[rgba(232,221,208,0.6)] max-w-xl">
                Interested in collaboration or have a project in mind? Send the signal.
              </p>
            </MotionContainer>
          </StaggerItem>
        </StaggerContainer>

        <MotionContainer animation="fadeInUp" delay={0.2}>
          <div className="iron-plate p-10">
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const identity = formData.get("identity");
                const transmission = formData.get("transmission");
                window.location.href = `mailto:rafaceitunoalvarez@gmail.com?subject=Signal from ${identity}&body=${encodeURIComponent(transmission as string)}`;
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.25 }}
              >
                <label
                  htmlFor="identity"
                  className="block text-[10px] font-mono tracking-[0.2em] text-[rgba(232,221,208,0.5)] uppercase mb-3"
                >
                  _IDENTITY
                </label>
                <motion.input
                  type="text"
                  id="identity"
                  name="identity"
                  required
                  placeholder="Your name or company"
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="w-full bg-[#1c1510] border border-[rgba(58,42,26,0.4)] text-[rgba(232,221,208,0.75)] font-mono text-sm px-4 py-3 placeholder:text-[rgba(232,221,208,0.25)] focus:outline-none focus:border-[#c41e3a] transition-colors"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.35 }}
              >
                <label
                  htmlFor="transmission"
                  className="block text-[10px] font-mono tracking-[0.2em] text-[rgba(232,221,208,0.5)] uppercase mb-3"
                >
                  _TRANSMISSION
                </label>
                <motion.textarea
                  id="transmission"
                  name="transmission"
                  required
                  rows={5}
                  placeholder="Describe your project or idea..."
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="w-full bg-[#1c1510] border border-[rgba(58,42,26,0.4)] text-[rgba(232,221,208,0.75)] font-mono text-sm px-4 py-3 placeholder:text-[rgba(232,221,208,0.25)] focus:outline-none focus:border-[#c41e3a] transition-colors resize-none"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.45 }}
                className="pt-2 flex justify-center"
              >
                <LiquidMetalButton label="SEND_MESSAGE" type="submit" width={210} />
              </motion.div>
            </form>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center justify-center gap-6 mt-10 pt-8 border-t border-[rgba(58,42,26,0.2)]"
            >
              {[
                { href: "https://github.com/rflvz", label: "GitHub", icon: <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /> },
                { href: "https://linkedin.com/in/rflvz", label: "LinkedIn", icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /> },
                { href: "mailto:rafaceitunoalvarez@gmail.com", label: "Email", icon: <><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" /></> },
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ y: -3, color: "#c41e3a" }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="text-[rgba(232,221,208,0.4)] transition-colors duration-300"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill={link.href.includes("github") || link.href.includes("linkedin") ? "currentColor" : "none"} stroke={link.href.includes("mailto") ? "currentColor" : undefined} strokeWidth={link.href.includes("mailto") ? 1.5 : undefined}>
                    {link.icon}
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </MotionContainer>

        <p className="mt-8 text-center text-[10px] font-mono tracking-[0.2em] text-[rgba(232,221,208,0.5)] uppercase">
          Response within 48h &mdash; All signals received
        </p>
      </div>
    </section>
  );
}
