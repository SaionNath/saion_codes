import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const jsonLines = [
  { type: "brace", text: "{" },
  {
    type: "field",
    key: "name",
    value: '"Saion Deb Nath"',
    valueColor: "#e2c08d",
  },
  {
    type: "field",
    key: "role",
    value: '"Full-Stack Developer"',
    valueColor: "#e2c08d",
  },
  {
    type: "field",
    key: "location",
    value: '"Chattogram, Bangladesh"',
    valueColor: "#e2c08d",
  },
  {
    type: "field",
    key: "education",
    value: '"B.Sc. Computer Science"',
    valueColor: "#e2c08d",
  },
  { type: "field", key: "experience", value: "3", valueColor: "#79c0ff" },
  { type: "field", key: "projects", value: "10", valueColor: "#79c0ff" },
  { type: "field", key: "available", value: "true", valueColor: "#56d364" },
  { type: "array-open", key: "stack" },
  { type: "array-item", value: '"React", "Next.js"' },
  { type: "array-item", value: '"Node.js", "Express"' },
  { type: "array-item", value: '"MongoDB", "Firebase"' },
  { type: "array-close" },
  { type: "brace", text: "}" },
];

const skills = [
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Express",
  "JavaScript",
  "Tailwind CSS",
  "Firebase",
  "REST API",
];

function TerminalLine({ line, index, visible }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={visible ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.3 }}
      className="flex items-start leading-6"
    >
      {line.type === "brace" && (
        <span className="text-gray-300">{line.text}</span>
      )}
      {line.type === "field" && (
        <span className="ml-4">
          <span className="text-gray-400">"{line.key}"</span>
          <span className="text-gray-400">: </span>
          <span style={{ color: line.valueColor }}>{line.value}</span>
          <span className="text-gray-400">,</span>
        </span>
      )}
      {line.type === "array-open" && (
        <span className="ml-4">
          <span className="text-gray-400">"{line.key}"</span>
          <span className="text-gray-400">: [</span>
        </span>
      )}
      {line.type === "array-item" && (
        <span className="ml-8 text-gray-300">
          <span style={{ color: "#e2c08d" }}>{line.value}</span>
          <span className="text-gray-400">,</span>
        </span>
      )}
      {line.type === "array-close" && (
        <span className="ml-4 text-gray-400">]</span>
      )}
    </motion.div>
  );
}

export default function About() {
  const [linesVisible, setLinesVisible] = useState(false);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLinesVisible(true), 400);
    const cursorTimer = setInterval(() => setCursor((c) => !c), 530);
    return () => {
      clearTimeout(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  return (
    <section id="about" className="min-h-screen bg-black text-white px-6 py-24">
      {" "}
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-14"
        >
          About <span className="text-gray-400">Me</span>
        </motion.h2>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT — Terminal window */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden border border-white/10"
            style={{ background: "#0d1117" }}
          >
            {/* Terminal title bar */}
            <div
              className="flex items-center justify-between px-4 py-3 border-b border-white/10"
              style={{ background: "#161b22" }}
            >
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-gray-500 font-mono">
                saion.json
              </span>
              <div className="w-14" />
            </div>

            {/* Terminal body */}
            <div className="p-5 font-mono text-sm">
              {/* Command line */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 mb-3"
              >
                <span style={{ color: "#56d364" }}>$</span>
                <span className="text-gray-300">saion.json</span>
                <span
                  className={`inline-block w-2 h-4 ml-0.5 bg-gray-400 ${cursor ? "opacity-100" : "opacity-0"} transition-opacity`}
                />
              </motion.div>

              {/* JSON lines */}
              <div className="space-y-0.5">
                {jsonLines.map((line, i) => (
                  <TerminalLine
                    key={i}
                    line={line}
                    index={i}
                    visible={linesVisible}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-6 pt-2"
          >
            <h3 className="text-2xl font-bold text-white">Hello!</h3>

            <p className="text-gray-400 leading-relaxed">
              My name is <strong className="text-white">Saion</strong> and I
              specialise in web development. I'm a highly motivated individual
              dedicated to writing clean, robust, reusable code — striving to
              never stop learning and improving.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I hold a{" "}
              <strong className="text-white">
                Bachelor's degree in Computer Science
              </strong>{" "}
              and have worked across full-stack projects — fields that sharpened
              my analytical thinking and problem-solving mindset.
            </p>

            <p className="text-gray-400 leading-relaxed">
              When I'm not coding, I enjoy reading blogs, learning or picking up
              some new hands-on side projects.
            </p>

            <motion.a
              href="https://drive.google.com/file/d/1rPHtlzPuJjHf9zDMnhnhO5nXPRqQvzq4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 mt-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-white hover:bg-white/10 transition-all duration-300 w-fit"
            >
              Resume ↗
            </motion.a>

            {/* Skill tags */}
            <motion.div
              className="flex flex-wrap gap-2 mt-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.06 } },
              }}
            >
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={{
                    hidden: { opacity: 0, scale: 0.85 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  className="px-3 py-1 rounded-full text-xs font-medium border border-gray-400/20 text-gray-400 bg-gray-400/5 transition-colors duration-200 cursor-default hover:border-gray-300 hover:text-gray-300"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {[
                { label: "Years Experience", value: "3+" },
                { label: "Projects Built", value: "10+" },
                { label: "Status", value: "Available" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <p className="text-xl font-bold text-gray-400">{value}</p>
                  <p className="text-xs text-gray-500 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
