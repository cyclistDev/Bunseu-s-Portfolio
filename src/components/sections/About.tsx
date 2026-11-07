"use client";

import React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/data/profile";

export const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2 space-y-6">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-display">
              About Me
            </h2>
          </Reveal>
          
          <div className="space-y-6">
            {profile.about.map((paragraph, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <p className="text-lg text-foreground-muted leading-relaxed">
                  {paragraph}
                </p>
              </Reveal>
            ))}
            
            {profile.interests && profile.interests.length > 0 && (
              <Reveal delay={0.5}>
                <div className="pt-6 border-t border-border">
                  <h3 className="text-sm font-semibold text-foreground-subtle mb-3 uppercase tracking-wide">
                    Interests
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.interests.map((interest) => (
                      <Badge key={interest} variant="default">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            {profile.location && (
              <Reveal delay={0.6}>
                <p className="text-foreground-muted">
                  <span className="font-medium text-foreground">Location:</span> {profile.location}
                </p>
              </Reveal>
            )}
          </div>
          
          <Reveal delay={0.7}>
            <div className="mt-12">
              <p className="text-2xl sm:text-3xl font-bold text-foreground font-display">
                {profile.heroHeadline}
              </p>
            </div>
          </Reveal>
        </div>

        {profile.photo && (
          <Reveal delay={0.3} className="lg:col-span-1">
            <div className="relative aspect-square rounded-lg overflow-hidden border border-border">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </Reveal>
        )}
      </div>
    </Section>
  );
};
