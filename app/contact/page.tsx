"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/site.config";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you'd handle form submission here
    alert("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="gradient-text text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg text-black/70 max-w-2xl mx-auto">
          I'm always interested in new opportunities, collaborations, or just a friendly chat about technology and security.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink transition-colors"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink transition-colors"
                placeholder="What's this about?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink transition-colors resize-none"
                placeholder="Tell me about your project, opportunity, or just say hello!"
              />
            </div>
            
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 font-medium text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              style={{ backgroundImage: "linear-gradient(135deg, hsl(var(--brand-pink)), hsl(var(--brand-blue)))" }}
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Other Ways to Connect</h2>
            <p className="text-gray-600 mb-6">
              Prefer a different approach? Here are some other ways to reach out:
            </p>
          </div>

          <div className="space-y-6">
            <a
              href={siteConfig.links.email}
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-brand-pink/30 hover:shadow-md transition-all duration-200 group"
            >
              <div className="p-3 rounded-full bg-brand-pink/10 group-hover:bg-brand-pink/20 transition-colors">
                <Mail className="w-6 h-6 text-brand-pink" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 group-hover:text-brand-pink transition-colors">Email</h3>
                <p className="text-gray-600">connor@example.com</p>
                <p className="text-sm text-gray-500">I typically respond within 24 hours</p>
              </div>
            </a>

            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-brand-pink/30 hover:shadow-md transition-all duration-200 group"
            >
              <div className="p-3 rounded-full bg-brand-pink/10 group-hover:bg-brand-pink/20 transition-colors">
                <Github className="w-6 h-6 text-brand-pink" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 group-hover:text-brand-pink transition-colors">GitHub</h3>
                <p className="text-gray-600">github.com/Connor-02</p>
                <p className="text-sm text-gray-500">Check out my latest projects</p>
              </div>
            </a>

            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-brand-pink/30 hover:shadow-md transition-all duration-200 group"
            >
              <div className="p-3 rounded-full bg-brand-pink/10 group-hover:bg-brand-pink/20 transition-colors">
                <Linkedin className="w-6 h-6 text-brand-pink" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 group-hover:text-brand-pink transition-colors">LinkedIn</h3>
                <p className="text-gray-600">linkedin.com/in/connor-murray</p>
                <p className="text-sm text-gray-500">Connect professionally</p>
              </div>
            </a>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-brand-pink/5 to-brand-blue/5 border border-brand-pink/20">
            <h3 className="font-semibold text-gray-800 mb-2">What I'm Looking For</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Full-time software engineering roles</li>
              <li>• Cybersecurity consulting opportunities</li>
              <li>• Open source project collaborations</li>
              <li>• Speaking engagements and workshops</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
