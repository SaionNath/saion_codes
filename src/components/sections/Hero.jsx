import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import TechTicker from "../ui/TechTicker";

const EMAIL = "saionnath@gmail.com";

const nameWords = ["Saion", "Deb", "Nath"];

export default function Hero() {
  const [visible, setVisible] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setVisible(true);
      }, 1200); // match exit duration
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-black">
      {/* Dot Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-size:[20px_20px] opacity-20"></div>

      {/* Left floating dots */}
      <div className="absolute left-20 top-1/2 -translate-y-1/2 grid grid-cols-5 gap-3 opacity-40">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1 mb-6 text-sm border border-white/10 rounded-full bg-white/5"
        >
          Based in Bangladesh
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hello, I'm
        </motion.h1>

        {/* Animated Name */}
        <div className="flex justify-center gap-4 text-5xl md:text-7xl font-bold h-22.5 overflow-hidden">
          <AnimatePresence mode="wait">
            {visible && (
              <motion.div
                key="name"
                className="flex gap-4"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.4,
                    },
                  },
                  exit: {
                    transition: {
                      staggerChildren: 0.2,
                      staggerDirection: -1,
                    },
                  },
                }}
              >
                {nameWords.map((word, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 60 },
                      visible: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -60 },
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Subtitle */}
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-gray-400 mt-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Full Stack Developer.
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mt-6 text-gray-400 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          I build{" "}
          <span className="text-white font-medium">
            accessible, pixel-perfect
          </span>{" "}
          and scalable web apps. Specializing in React, Next.js, and modern
          UI/UX.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <button className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition">
            Connect now ↗
          </button>

          <a
            href="https://github.com/SaionNath"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition inline-block"
          >
            GitHub
          </a>

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
      </div>
      <div className="absolute bottom-0 left-0 w-full pt-10 pb-6 bg-linear-to-t from-black to-transparent pointer-events-none">
        <TechTicker />
      </div>
    </section>
  );
}
