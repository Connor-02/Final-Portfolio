"use client";

import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Page() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <div>
      <Hero />
      
      <section className="mx-auto max-w-6xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="gradient-text text-3xl font-bold mb-4">Featured Work</h2>
          <p className="text-lg text-black/70 mb-8 max-w-2xl">
            Two projects that capture my focus on security and delightful user experiences.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 font-medium text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            style={{ backgroundImage: "linear-gradient(135deg, hsl(var(--brand-pink)), hsl(var(--brand-blue)))" }}
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
