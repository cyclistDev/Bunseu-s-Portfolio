"use client";

import React from "react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Section } from "@/components/ui/Section";
import { RouteLine } from "@/components/ui/RouteLine";
import { projects } from "@/data/projects";

export const Projects: React.FC = () => {
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.category === "android" && b.category !== "android") return -1;
    if (a.category !== "android" && b.category === "android") return 1;
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  return (
    <Section id="projects">
      <div className="mb-12">
        <p className="text-xs font-mono text-foreground-subtle uppercase tracking-widest mb-4">
          01 / projects
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-display">
          Projects
        </h2>
        <p className="text-lg text-foreground-muted">
          A selection of my work in Android development, fullstack applications, and web projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {sortedProjects.map((project) => (
          <div 
            key={project.slug} 
            className={project.featured ? 'md:col-span-2' : ''}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </Section>
  );
};
