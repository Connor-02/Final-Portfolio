"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/site.config";
import { Download, Printer, Mail, Github, Linkedin, MapPin, Calendar } from "lucide-react";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // In a real implementation, you'd generate a PDF here
    // For now, we'll just trigger print
    window.print();
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      {/* Print Instructions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-xl no-print"
      >
        <div className="flex items-start gap-3">
          <Printer className="w-5 h-5 text-blue-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-blue-900 mb-1">Print to PDF</h3>
            <p className="text-sm text-blue-700 mb-3">
              Use your browser's print function (Ctrl+P / Cmd+P) to save as PDF. The page is optimized for A4 printing.
            </p>
            <div className="flex gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                <Printer className="w-4 h-4" />
                Print
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Resume Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 print:shadow-none print:border-none"
      >
        {/* Header */}
        <div className="text-center mb-8 pb-8 border-b border-gray-200">
          <h1 className="text-3xl font-bold gradient-text mb-2">{siteConfig.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{siteConfig.role}</p>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">{siteConfig.summary}</p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href={siteConfig.links.email} className="hover:text-brand-pink transition-colors">
                connor@example.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              <a href={siteConfig.links.github} className="hover:text-brand-pink transition-colors">
                github.com/Connor-02
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              <a href={siteConfig.links.linkedin} className="hover:text-brand-pink transition-colors">
                linkedin.com/in/connor-murray
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{siteConfig.location}</span>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Programming Languages</h3>
              <p className="text-gray-600">Python, JavaScript/TypeScript, SQL</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Frameworks & Tools</h3>
              <p className="text-gray-600">React, Next.js, PySide6, Tailwind CSS</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Security & Testing</h3>
              <p className="text-gray-600">Cybersecurity, Penetration Testing, Unit Testing</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Other</h3>
              <p className="text-gray-600">Git, Docker, Linux, Agile Development</p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Professional Experience</h2>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-800">Software Engineer</h3>
                  <p className="text-gray-600">Tech Company • Newcastle, NSW</p>
                </div>
                <div className="text-sm text-gray-500 text-right">
                  <div>2023 - Present</div>
                </div>
              </div>
              <ul className="text-gray-700 text-sm space-y-1 ml-4">
                <li>• Developed secure web applications using React and Next.js</li>
                <li>• Implemented cybersecurity best practices and conducted security audits</li>
                <li>• Collaborated with cross-functional teams using Agile methodologies</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-800">Junior Developer</h3>
                  <p className="text-gray-600">Startup • Sydney, NSW</p>
                </div>
                <div className="text-sm text-gray-500 text-right">
                  <div>2022 - 2023</div>
                </div>
              </div>
              <ul className="text-gray-700 text-sm space-y-1 ml-4">
                <li>• Built Python applications with PySide6 for desktop automation</li>
                <li>• Created educational tools for cybersecurity training</li>
                <li>• Maintained and improved existing codebase</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Key Projects</h2>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-gray-800">Cyber Safety Training Module</h3>
                <div className="text-sm text-gray-500">2023</div>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                Interactive web application for phishing education with instant feedback and detailed explainers.
              </p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 bg-brand-pink/10 text-brand-pink rounded-full">Security</span>
                <span className="text-xs px-2 py-1 bg-brand-blue/10 text-brand-blue rounded-full">Web</span>
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">Education</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-gray-800">Cute Budget Planner</h3>
                <div className="text-sm text-gray-500">2023</div>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                Python desktop application with PySide6 for personal finance management, featuring recurring income tracking and reminders.
              </p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 bg-brand-pink/10 text-brand-pink rounded-full">Python</span>
                <span className="text-xs px-2 py-1 bg-brand-blue/10 text-brand-blue rounded-full">Desktop</span>
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">Finance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Education</h2>
          
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-gray-800">Bachelor of Computer Science</h3>
              <p className="text-gray-600">University of Newcastle</p>
            </div>
            <div className="text-sm text-gray-500 text-right">
              <div>2019 - 2022</div>
              <div>GPA: 3.8/4.0</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
