import { motion } from "framer-motion";
import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Work", id: "work" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  //   const { resolvedTheme, setTheme } = useTheme();

  //   const toggleTheme = () => {
  //     setTheme(resolvedTheme === "dark" ? "light" : "dark");
  //   };

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const activeLink = links.find((l) => l.id === id);
            if (activeLink) {
              setActive(activeLink.id);
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.6, // adjust sensitivity
      },
    );

    sections.forEach((sec) => {
      if (sec) observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-lg">
        {/* Links */}
        <div className="flex items-center gap-2">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setActive(link.id);
                document.getElementById(link.id)?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="relative px-4 py-1.5 text-sm text-gray-300"
            >
              {active === link.id && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </button>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 pl-3 border-l border-white/10">
          <span className="text-white/70 text-lg">+</span>

          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Available
          </div>

          {/* 🌗 Theme Toggle */}
          {/* <button
            onClick={toggleTheme}
            className="text-white/70 hover:text-white transition"
          >
            {resolvedTheme === "dark" ? "🌙" : "☀️"}
          </button> */}
        </div>
      </div>
    </div>
  );
}
