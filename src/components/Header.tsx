import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
          >
            Web Visualizer
          </Link>
          <nav className="flex gap-6">
            <Link
              href="/customizer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Try Now
            </Link>
            <Link
              href="/#features"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </Link>
            <a
              href="https://github.com/yourusername/web-visualizer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
