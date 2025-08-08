"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export function ProjectCard({
  title,
  summary,
  tags = [],
  links,
  image = "/projects/placeholder.svg",
  slug
}: {
  title: string;
  summary: string;
  tags?: string[];
  links: { github?: string; live?: string };
  image?: string;
  slug: string;
}) {
  return (
    <motion.article 
      className="group card p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/5 to-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="aspect-video mb-6 overflow-hidden rounded-xl bg-gray-100 group-hover:rounded-2xl transition-all duration-300">
          <Image 
            src={image} 
            alt={title} 
            width={1280} 
            height={720} 
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" 
          />
        </div>
        
        <h3 className="text-xl font-semibold mb-3 group-hover:text-brand-pink transition-colors duration-200">
          {title}
        </h3>
        
        <p className="text-sm text-black/70 mb-4 leading-relaxed">
          {summary}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full border border-gray-200 font-medium"
              style={{ 
                backgroundImage: "linear-gradient(135deg, hsl(var(--brand-pink) / .08), hsl(var(--brand-blue) / .08))",
                borderColor: "hsl(var(--brand-pink) / .2)"
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 text-sm">
          {links.github && (
            <Link 
              href={links.github} 
              className="flex items-center gap-2 text-gray-600 hover:text-brand-pink transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </Link>
          )}
          {links.live && (
            <Link 
              href={links.live} 
              className="flex items-center gap-2 text-gray-600 hover:text-brand-pink transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
