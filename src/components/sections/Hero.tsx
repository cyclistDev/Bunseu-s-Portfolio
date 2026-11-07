"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { Float } from "@/components/ui/Float";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { profile } from "@/data/profile";

export const Hero: React.FC = () => {
  const githubLink = profile.socials.find((s) => s.label === "GitHub")?.url;
  const linkedinLink = profile.socials.find((s) => s.label === "LinkedIn")?.url;

  const headlineLines = profile.heroHeadline.split('. ');

  return (
    <section className="min-h-[90vh] flex items-center px-4 sm:px-6 lg:px-8 pt-16 relative">
      <HeroBackground />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column */}
        <div className="space-y-8">
          {/* Status pill */}
          <Reveal delay={0} duration={0.4}>
            <div className="flex items-center gap-2">
              <div className="relative">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: 'var(--color-accent)',
                    animation: 'pulse 2s ease-in-out infinite',
                  }}
                />
                <style jsx>{`
                  @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                  }
                `}</style>
              </div>
              <span className="text-sm font-mono text-foreground-subtle">
                {profile.availability}
              </span>
            </div>
          </Reveal>

          {/* Headline */}
          <div className="space-y-2">
            {headlineLines.map((line, index) => (
              <Reveal key={index} delay={0.08 * (index + 1)} duration={0.5}>
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight"
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    letterSpacing: '-0.02em',
                    color: index === headlineLines.length - 1 
                      ? 'var(--color-accent)' 
                      : 'var(--color-foreground)',
                  }}
                >
                  {line}{index < headlineLines.length - 1 ? '.' : ''}
                </h1>
              </Reveal>
            ))}
          </div>

          {/* Subtext */}
          <Reveal delay={0.4} duration={0.5}>
            <p
              className="text-lg max-w-[44ch] leading-relaxed"
              style={{
                color: 'var(--color-foreground-muted)',
              }}
            >
              {profile.heroSubtext}
            </p>
          </Reveal>

          {/* Buttons */}
          <Reveal delay={0.5} duration={0.5}>
            <div className="flex flex-wrap gap-4">
              <Button href="#projects" variant="primary">
                View projects
              </Button>
              <Button href={profile.cvUrl} variant="outline">
                Download CV
              </Button>
              
              {/* Social links */}
              <div className="flex items-center gap-4 ml-4">
                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground-muted hover:text-accent transition-colors duration-normal"
                    aria-label="GitHub"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                )}
                {linkedinLink && (
                  <a
                    href={linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground-muted hover:text-accent transition-colors duration-normal"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </Reveal>

          {/* Tech chips */}
          <Reveal delay={0.6} duration={0.5}>
            <div className="flex flex-wrap gap-2">
              {profile.heroTech.map((tech) => (
                <Badge key={tech} variant="default">
                  {tech}
                </Badge>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right column - Phone mockup */}
        <div className="relative flex justify-center lg:justify-end">
          <Reveal delay={0.3} duration={0.6} yOffset={40}>
            <Float duration={6} yOffset={8}>
              <PhoneMockup image={profile.heroImage} alt="App screenshot" />
            </Float>
          </Reveal>

          {/* Floating chips */}
          {profile.heroChips.map((chip, index) => (
            <Float key={chip} delay={1 + index * 0.5} duration={7} yOffset={6}>
              <div
                className="absolute text-xs font-mono px-3 py-1.5 rounded border"
                style={{
                  borderColor: 'var(--color-border)',
                  backgroundColor: 'var(--color-surface)',
                  color: 'var(--color-foreground-muted)',
                  top: index === 0 ? '10%' : '70%',
                  right: index === 0 ? '10%' : '80%',
                }}
              >
                {chip}
              </div>
            </Float>
          ))}
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
};
