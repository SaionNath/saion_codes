import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import city1 from "../../assets/city_1.png";
import city2 from "../../assets/city_2.png";
import city3 from "../../assets/city_3.png";
import travel1 from "../../assets/travel_1.png";
import travel2 from "../../assets/travel_2.png";
import travel3 from "../../assets/travel_3.png";

const projects = [
  {
    title: "City Resolve",
    subtitle: "Issue Reporting System",
    description:
      "A public infrastructure issue reporting system that connects citizens, staff, and administrators to manage city problems efficiently.",
    tags: ["Node.js", "MongoDB", "React Js"],
    color: "#6366f1", // indigo accent
    images: [city1, city2, city3],
    link: "https://city-resolve-client.web.app",
  },
  {
    title: "Travel Ease",
    subtitle: "Vehicle Rental System",
    description:
      "A tourism platform designed to help users explore destinations and plan their trips easily with an interactive interface.",
    tags: ["React Js", "Firebase Auth", "MongoDB"],
    color: "#10b981", // emerald accent
    images: [travel1, travel2, travel3],
    link: "https://travel-ease-a32b9.web.app",
  },
];

function ProjectCard({ project, isActive, index }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto-slide images every 2.5s when card is active
  useEffect(() => {
    if (!isActive) return;
    const timer = setInterval(() => {
      setDirection(1);
      setImgIndex((prev) => (prev + 1) % project.images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [isActive, project.images.length]);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden"
      style={{
        boxShadow: isActive
          ? `0 0 0 1px ${project.color}33, 0 20px 60px ${project.color}15`
          : undefined,
      }}
    >
      {/* Image Carousel */}
      <div className="relative w-full aspect-video overflow-hidden bg-black/40">
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.img
            key={imgIndex}
            src={project.images[imgIndex]}
            alt={`${project.title} screenshot ${imgIndex + 1}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </AnimatePresence>

        {/* Gradient overlay on image */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

        {/* Dot indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {project.images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > imgIndex ? 1 : -1);
                setImgIndex(i);
              }}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{
                background:
                  i === imgIndex ? project.color : "rgba(255,255,255,0.35)",
                transform: i === imgIndex ? "scale(1.4)" : "scale(1)",
              }}
            />
          ))}
        </div>

        {/* Arrow nav */}
        <button
          onClick={() => {
            setDirection(-1);
            setImgIndex(
              (prev) =>
                (prev - 1 + project.images.length) % project.images.length,
            );
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-black/50 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
        >
          <ChevronLeft size={14} className="text-white" />
        </button>
        <button
          onClick={() => {
            setDirection(1);
            setImgIndex((prev) => (prev + 1) % project.images.length);
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-black/50 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
        >
          <ChevronRight size={14} className="text-white" />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Title */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-white leading-snug">
            {project.title} —{" "}
            <span className="text-gray-300">{project.subtitle}</span>
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium border"
              style={{
                borderColor: `${project.color}44`,
                color: project.color,
                background: `${project.color}11`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View Details */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors group/link"
          style={{ color: project.color }}
        >
          View Details
          <ArrowUpRight
            size={15}
            className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          />
        </a>
      </div>

      {/* Accent border glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at var(--mx,50%) var(--my,50%), ${project.color}08, transparent 60%)`,
        }}
      />
    </motion.div>
  );
}

export default function Work() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Cycle active card for auto-slide trigger
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen bg-black text-white px-6 py-24">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-14">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-gray-500 uppercase tracking-widest mb-3"
        ></motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-3"
        >
          &gt; A selection of my recent work
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="h-px w-full bg-white/10 origin-left"
        />
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.title + activeIndex}
            project={project}
            isActive={activeIndex === i}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
