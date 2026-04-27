import { motion } from "framer-motion";
import { useState } from "react";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiCopy, FiCheck } from "react-icons/fi";

const EMAIL = "saionnath@gmail.com";

const socials = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/SaionNath" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/" },
  { icon: FaTwitter, label: "Twitter", href: "https://twitter.com/" },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="bg-black text-white px-6 py-24 flex items-center justify-center min-h-screen"
    >
      {" "}
      {/* Outer glow ring */}
      <div className="relative w-full max-w-4xl">
        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 px-8 py-20 md:px-20 text-center"
          style={{ background: "#0e0e0e" }}
        >
          {/* Dot grid background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />

          {/* Radial vignette to fade dot grid edges */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, #0e0e0e 100%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight max-w-2xl"
            >
              Let's build something amazing together.
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed"
            >
              Whether you have a specific project in mind, need help navigating
              the complexities of modern web development, or just want to
              connect — my inbox is always open.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              {/* Say Hello */}
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-100 transition-colors"
              >
                <MdEmail size={16} />
                Say Hello
              </a>

              {/* Copy Email */}
              <button
                onClick={handleCopy}
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-all"
              >
                {copied ? (
                  <>
                    <FiCheck size={16} className="text-green-400" />
                    <span className="text-green-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <FiCopy size={16} />
                    Copy Email
                  </>
                )}
              </button>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex gap-4 mt-2"
            >
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/40 transition-all hover:bg-white/5 hover:scale-110"
                >
                  <Icon size={17} />
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
