import React from "react";
import { Section } from "@/components/ui/Section";
import { skills } from "@/data/skills";

export const Skills: React.FC = () => {
  return (
    <Section id="skills" className="bg-surface">
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-display">
        Skills
      </h2>
      <p className="text-lg text-foreground-muted mb-12">
        Technologies and tools I work with.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillGroup) => (
          <div key={skillGroup.group}>
            <h3 className="text-xl font-semibold text-foreground mb-4 font-display">
              {skillGroup.group}
            </h3>
            <ul className="space-y-2">
              {skillGroup.items.map((item) => (
                <li
                  key={item}
                  className="text-foreground-muted flex items-center font-mono text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};
