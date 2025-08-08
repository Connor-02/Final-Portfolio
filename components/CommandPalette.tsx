"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { Search, Github, ExternalLink, FolderOpen } from "lucide-react";
import { projects } from "@/data/projects";
import { siteConfig } from "@/site.config";

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => unknown) => {
    setOpen(false);
    command();
  };

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed inset-0 z-50"
    >
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
      <div className="fixed inset-0 flex items-start justify-center p-4 pt-[20vh]">
        <Command className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="flex items-center border-b border-gray-200 px-4">
            <Search className="w-4 h-4 text-gray-400 mr-3" />
            <Command.Input
              placeholder="Search projects, navigate pages..."
              className="flex-1 py-4 text-gray-900 placeholder-gray-400 bg-transparent border-none outline-none text-sm"
            />
            <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-gray-500 bg-gray-100 rounded border border-gray-200">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
          <Command.List className="max-h-96 overflow-y-auto p-2">
            <Command.Empty className="py-8 text-center text-gray-500">
              No results found.
            </Command.Empty>
            
            {/* Navigation */}
            <Command.Group heading="Navigation">
              <Command.Item
                onSelect={() => runCommand(() => window.location.href = "/")}
                className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <FolderOpen className="w-4 h-4 text-gray-500" />
                <span>Home</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => window.location.href = "/projects")}
                className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <FolderOpen className="w-4 h-4 text-gray-500" />
                <span>Projects</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => window.location.href = "/resume")}
                className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <FolderOpen className="w-4 h-4 text-gray-500" />
                <span>Resume</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => window.location.href = "/contact")}
                className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <FolderOpen className="w-4 h-4 text-gray-500" />
                <span>Contact</span>
              </Command.Item>
            </Command.Group>

            {/* Projects */}
            <Command.Group heading="Projects">
              {projects.map((project) => (
                <div key={project.slug}>
                  <Command.Item
                    onSelect={() => runCommand(() => window.open(project.links.github, "_blank"))}
                    className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <Github className="w-4 h-4 text-gray-500" />
                    <div className="flex-1">
                      <div className="font-medium">{project.title}</div>
                      <div className="text-xs text-gray-500">{project.summary}</div>
                    </div>
                    <span className="text-xs text-gray-400">GitHub</span>
                  </Command.Item>
                  {project.links.live && (
                    <Command.Item
                      onSelect={() => runCommand(() => window.open(project.links.live, "_blank"))}
                      className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-pointer hover:bg-gray-100 transition-colors ml-6"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-500" />
                      <div className="flex-1">
                        <div className="text-xs text-gray-500">Live Demo</div>
                      </div>
                      <span className="text-xs text-gray-400">External</span>
                    </Command.Item>
                  )}
                </div>
              ))}
            </Command.Group>

            {/* External Links */}
            <Command.Group heading="External">
              <Command.Item
                onSelect={() => runCommand(() => window.open(siteConfig.links.github, "_blank"))}
                className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <Github className="w-4 h-4 text-gray-500" />
                <span>GitHub Profile</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => window.open(siteConfig.links.linkedin, "_blank"))}
                className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-gray-500" />
                <span>LinkedIn</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => window.open(siteConfig.links.email, "_blank"))}
                className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-gray-500" />
                <span>Email</span>
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </Command.Dialog>
  );
}
