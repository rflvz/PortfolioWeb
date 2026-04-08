"use client";

import { motion } from "framer-motion";
import { type FormEvent, useRef, useState } from "react";
import { Warp } from "@paper-design/shaders-react";
import { StaggerContainer, StaggerItem, MotionContainer } from "@/components/ui/MotionContainer";
import { LiquidMetalButton } from "@/components/ui/LiquidMetalButton";
import { InputField } from "@/components/ui/InputField";
import { content } from "@/content";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const lastSubmitAtRef = useRef(0);

  const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  const cooldownMs = content.contact.form.cooldownMs;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (status === "sending") {
      return;
    }

    const now = Date.now();
    if (now - lastSubmitAtRef.current < cooldownMs) {
      setStatus("error");
      setStatusMessage(content.contact.form.feedback.cooldownError);
      return;
    }

    const formData = new FormData(e.currentTarget);
    const trap = (formData.get("company") || "").toString().trim();
    if (trap.length > 0) {
      setStatus("error");
      setStatusMessage(content.contact.form.feedback.spamError);
      return;
    }

    if (!formEndpoint) {
      setStatus("error");
      setStatusMessage(content.contact.form.feedback.endpointMissingError);
      return;
    }

    setStatus("sending");
    setStatusMessage(content.contact.form.feedback.sending);

    try {
      const identity = (formData.get("identity") || "").toString().trim();
      const transmission = (formData.get("transmission") || "").toString().trim();
      const payload = new FormData();
      payload.append("_subject", `Signal from ${identity || "Unknown sender"}`);
      payload.append("identity", identity);
      payload.append("transmission", transmission);
      payload.append("_replyto", content.meta.author.email);

      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });

      if (!response.ok) {
        throw new Error("Form submit failed");
      }

      lastSubmitAtRef.current = now;
      e.currentTarget.reset();
      setStatus("success");
      setStatusMessage(content.contact.form.feedback.success);
    } catch {
      setStatus("error");
      setStatusMessage(content.contact.form.feedback.networkError);
    }
  };

  return (
    <section id="contact" className="py-28" style={{ background: "transparent" }}>
      <div className="mx-auto max-w-3xl px-6">
        <StaggerContainer className="mb-12" delay={0.1}>
          <StaggerItem>
            <MotionContainer animation="fadeInUp">
              <div className="text-[10px] font-mono tracking-[0.3em] text-[#d94f3d] uppercase mb-3">
                {"// " + content.contact.section.label}
              </div>
              <h2 className="font-heading text-4xl font-bold text-[#e8ddd0] chiseled mb-3">
                {content.contact.section.title}
              </h2>
              <p className="text-sm font-mono text-[rgba(232,221,208,0.6)] max-w-xl">
                {content.contact.section.description}
              </p>
            </MotionContainer>
          </StaggerItem>
        </StaggerContainer>

        <MotionContainer animation="fadeInUp" delay={0.2}>
          <div className="relative overflow-hidden rounded-xl border border-[rgba(196,31,58,0.42)]">
            <div className="absolute inset-0 bg-[linear-gradient(160deg,#0d0708_0%,#0a0607_52%,#060304_100%)]" />
            <div className="absolute inset-0 overflow-hidden">
              <Warp
                style={{ height: "100%", width: "100%" }}
                proportion={0.4}
                softness={1.0}
                distortion={0.18}
                swirl={0.75}
                swirlIterations={10}
                shape="checks"
                shapeScale={0.09}
                scale={1}
                rotation={0}
                speed={0.4}
                colors={["hsl(350, 60%, 5%)", "hsl(352, 70%, 10%)", "hsl(348, 50%, 7%)", "hsl(354, 80%, 15%)"]}
              />
            </div>
            <div className="relative z-10 p-6 sm:p-10">
              <form
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <InputField
                  id="identity"
                  name="identity"
                  label={content.contact.form.identityLabel}
                  placeholder={content.contact.form.identityPlaceholder}
                  required
                />

                <InputField
                  id="transmission"
                  name="transmission"
                  label={content.contact.form.transmissionLabel}
                  placeholder={content.contact.form.transmissionPlaceholder}
                  type="textarea"
                  required
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: 0.45 }}
                  className="pt-2 flex justify-center"
                >
                  <LiquidMetalButton
                    label={status === "sending" ? content.contact.form.sendingLabel : content.contact.form.submitLabel}
                    type="submit"
                    width={220}
                  />
                </motion.div>
              </form>
              {status !== "idle" ? (
                <p
                  className={`mt-4 text-center text-xs font-mono tracking-[0.08em] ${
                    status === "success" ? "text-[rgba(112,206,165,0.95)]" : "text-[rgba(217,79,61,0.95)]"
                  }`}
                >
                  {statusMessage}
                </p>
              ) : null}

              {/* Social icons */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center justify-center gap-6 mt-10 pt-8 border-t border-[rgba(196,31,58,0.32)]"
              >
                {[
                  { href: content.meta.author.socials.github, label: "GitHub", icon: <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /> },
                  { href: content.meta.author.socials.linkedin, label: "LinkedIn", icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /> },
                  { href: `mailto:${content.meta.author.email}`, label: "Email", icon: <><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" /></> },
                ].map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    whileHover={{ y: -3, color: "#d94f3d" }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="text-[rgba(232,221,208,0.7)] transition-colors duration-300"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={link.href.includes("github") || link.href.includes("linkedin") ? "currentColor" : "none"} stroke={link.href.includes("mailto") ? "currentColor" : undefined} strokeWidth={link.href.includes("mailto") ? 1.5 : undefined}>
                      {link.icon}
                    </svg>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </MotionContainer>

        <p className="mt-8 text-center text-[10px] font-mono tracking-[0.2em] text-[rgba(232,221,208,0.72)] uppercase">
          {content.contact.footerNote}
        </p>
      </div>
    </section>
  );
}