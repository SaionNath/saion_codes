import { motion } from "framer-motion";

const techStack = [
  "React",
  "Next.js",
  "Docker",
  "MongoDB",
  "Express",
  "Python",
  "JavaScript",
  "Node.js",
];

// duplicate for seamless loop
const loopItems = [...techStack, ...techStack];

export default function TechTicker() {
  return (
    <div className="relative mt-16 overflow-hidden">
      
      {/* Fade edges */}
      <div className="absolute left-0 top-0 h-full w-24 bg-linear-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-24 bg-linear-to-l from-black to-transparent z-10" />

      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loopItems.map((tech, i) => (
          <span
            key={i}
            className="text-gray-400 text-lg font-medium hover:text-white transition"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}