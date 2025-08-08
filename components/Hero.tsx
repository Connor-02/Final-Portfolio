"use client";
import { siteConfig } from "@/site.config";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-brand-radial" />
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-lg font-medium text-brand-pink mb-2">{siteConfig.role}</h2>
          <p className="text-sm text-black/60">{siteConfig.location}</p>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-tight gradient-text mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-black/80 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {siteConfig.summary}
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {siteConfig.skills.map((skill, index) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm font-medium rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm"
              style={{
                backgroundImage: "linear-gradient(135deg, hsl(var(--brand-pink) / .1), hsl(var(--brand-blue) / .1))"
              }}
            >
              {skill}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link
            href="/projects"
            className="rounded-xl px-6 py-3 font-medium text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            style={{ backgroundImage: "linear-gradient(135deg, hsl(var(--brand-pink)), hsl(var(--brand-blue)))" }}
          >
            View Projects
          </Link>
          <Link
            href="/resume"
            className="rounded-xl px-6 py-3 font-medium border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200 bg-white/50 backdrop-blur-sm"
          >
            Download Résumé
          </Link>
        </motion.div>

        <motion.div
          className="mt-12 flex items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a
            href={siteConfig.links.github}
            className="p-2 rounded-full border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 bg-white/50 backdrop-blur-sm"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-gray-600" />
          </a>
          <a
            href={siteConfig.links.linkedin}
            className="p-2 rounded-full border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 bg-white/50 backdrop-blur-sm"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-gray-600" />
          </a>
          <a
            href={siteConfig.links.email}
            className="p-2 rounded-full border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 bg-white/50 backdrop-blur-sm"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-gray-600" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
