import React from "react";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-neutral-500 text-sm flex items-center gap-1.5">
          Crafted with{" "}
          <Heart size={14} className="text-emerald-500 fill-emerald-500" /> by
          Setulal Chowhan
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-500 hover:text-white transition-colors"
          >
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-500 hover:text-white transition-colors"
          >
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-500 hover:text-white transition-colors"
          >
            <Twitter size={20} />
            <span className="sr-only">Twitter</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
