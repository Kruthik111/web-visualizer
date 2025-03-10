"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

export default function Home() {
  const features: Feature[] = [
    {
      icon: "🎨",
      title: "Visual Customization",
      description:
        "Intuitive controls for colors, shadows, borders, and more with real-time preview.",
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description:
        "Fully responsive interface that works seamlessly across all devices.",
    },
    {
      icon: "⚡",
      title: "Real-time Preview",
      description:
        "See your changes instantly with smooth animations and transitions.",
    },
    {
      icon: "📋",
      title: "Code Export",
      description: "Generate and copy React-ready code with a single click.",
    },
    {
      icon: "🎚️",
      title: "Advanced Controls",
      description:
        "Fine-tune margins, padding, and dimensions with precise controls.",
    },
    {
      icon: "🎯",
      title: "Easy to Use",
      description:
        "User-friendly interface designed for both beginners and professionals.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-black text-white">
      <main>
        {/* Hero Section - Full Height */}
        <section className="h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
            >
              Web Visualizer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12"
            >
              A powerful tool for developers to visually customize and generate
              div elements with real-time preview and code export.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link
                href="/customizer"
                className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-colors text-lg"
              >
                Try Now
              </Link>
              <a
                href="https://github.com/Kruthik111/web-visualizer.git"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-colors text-lg"
              >
                View on GitHub
              </a>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-800 bg-opacity-50 rounded-xl hover:bg-opacity-70 transition-all"
                >
                  <div className="text-blue-400 mb-4 text-2xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="bg-gray-900 py-12 mt-auto">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                  Web Visualizer
                </h3>
                <p className="text-gray-400">
                  A modern tool for visual div customization
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/customizer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Try Now
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#features"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Features
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">
                  Connect
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://github.com/yourusername/web-visualizer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>Built with Next.js and Tailwind CSS</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
