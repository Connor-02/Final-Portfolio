"use client";

import { useState, useMemo } from "react";
import { projects } from "@/data/projects";
import { siteConfig } from "@/site.config";
import { ProjectCard } from "@/components/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (!selectedTag) return projects;
    return projects.filter(project => project.tags.includes(selectedTag));
  }, [selectedTag]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach(project => {
      project.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="gradient-text text-4xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-black/70 mb-8">
          A collection of my work focused on security, automation, and delightful user experiences.
        </p>
      </motion.div>

      {/* Tag Filter */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedTag(null)}
            className={`tag-filter ${!selectedTag ? 'active' : ''}`}
          >
            All Projects
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`tag-filter ${selectedTag === tag ? 'active' : ''}`}
            >
              {tag}
            </button>
          ))}
        </div>
        {selectedTag && (
          <p className="mt-4 text-sm text-black/60">
            Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} tagged with "{selectedTag}"
          </p>
        )}
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTag || 'all'}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-lg text-black/60">No projects found with the selected tag.</p>
          <button
            onClick={() => setSelectedTag(null)}
            className="mt-4 text-brand-pink hover:underline"
          >
            View all projects
          </button>
        </motion.div>
      )}
    </div>
  );
}
