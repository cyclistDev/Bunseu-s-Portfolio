"use client";

import React, { useState, useEffect } from "react";
import { profile } from "@/data/profile";

export const Footer: React.FC = () => {
  const [year, setYear] = useState(2024);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-surface border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-foreground-muted">
              © {year} {profile.name}. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-muted hover:text-primary transition-colors duration-normal"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
