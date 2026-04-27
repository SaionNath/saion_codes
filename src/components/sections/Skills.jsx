import { motion } from "framer-motion";

const skills = [
  { name: "React", category: "Frontend", level: 90 },
  { name: "Next.js", category: "Frontend", level: 70 },
  { name: "JavaScript", category: "Language", level: 81 },
  { name: "Python", category: "Language", level: 60 },
  { name: "Node.js", category: "Backend", level: 73 },
  { name: "Firebase", category: "Backend", level: 75 },
  { name: "Express", category: "Backend", level: 75 },
  { name: "MongoDB", category: "Database", level: 80 },
  { name: "Tailwind CSS", category: "Styling", level: 92 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white px-6 py-20"
    >
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        &gt; The Secret Sauce
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
          >
            {/* Top */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  {skill.category}
                </p>
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>

              <span className="text-sm text-gray-400">{skill.level}%</span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: i * 0.05 }}
                className="h-full bg-white rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
