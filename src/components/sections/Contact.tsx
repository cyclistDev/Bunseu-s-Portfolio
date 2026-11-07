import React from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";

export const Contact: React.FC = () => {
  const githubLink = profile.socials.find((s) => s.label === "GitHub")?.url;
  const linkedinLink = profile.socials.find((s) => s.label === "LinkedIn")?.url;

  return (
    <Section id="contact" className="bg-surface">
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-display">
        Contact
      </h2>
      <p className="text-lg text-foreground-muted mb-12">
        I'm currently looking for opportunities. Feel free to reach out!
      </p>

      <div className="max-w-2xl">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2 font-display">
              Email
            </h3>
            <a
              href={`mailto:${profile.email}`}
              className="text-accent hover:underline transition-colors duration-normal"
            >
              {profile.email}
            </a>
          </div>

          {linkedinLink && (
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2 font-display">
                LinkedIn
              </h3>
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline transition-colors duration-normal"
              >
                {linkedinLink}
              </a>
            </div>
          )}

          {githubLink && (
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2 font-display">
                GitHub
              </h3>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline transition-colors duration-normal"
              >
                {githubLink}
              </a>
            </div>
          )}
        </div>

        <div className="mt-12">
          <Button href={`mailto:${profile.email}`} variant="primary" size="lg">
            Send Me an Email
          </Button>
        </div>
      </div>
    </Section>
  );
};
