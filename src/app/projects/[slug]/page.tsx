import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Reveal>
          <Link
            href="/#projects"
            className="inline-flex items-center text-accent hover:underline mb-8 transition-colors duration-normal"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-8">
            <div className="flex items-start justify-between mb-4">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground font-display">
                {project.title}
              </h1>
              {project.builtWithAI && (
                <Badge variant="ai">Built with AI assistance</Badge>
              )}
            </div>
            <p className="text-xl text-foreground-muted mb-4">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="default">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="space-y-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-3 font-display">
              Role
            </h2>
            <p className="text-foreground-muted">{project.role}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-3 font-display">
              Features
            </h2>
            <ul className="list-disc list-inside space-y-2 text-foreground-muted">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-3 font-display">
              Challenge Solved
            </h2>
            <p className="text-foreground-muted">{project.challenge}</p>
          </div>

          {project.builtWithAI && project.aiNotes && (
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-3 font-display">
                AI Assistance Notes
              </h2>
              <p className="text-foreground-muted">{project.aiNotes}</p>
            </div>
          )}
        </div>

        {project.images.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4 font-display">
              Screenshots
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.map((image, index) => (
                <div key={index} className="relative aspect-video bg-surface rounded-lg overflow-hidden border border-border">
                  <Image
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {project.videoUrl && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4 font-display">
              Demo Video
            </h2>
            <div className="relative aspect-video bg-surface rounded-lg overflow-hidden border border-border">
              <video
                src={project.videoUrl}
                controls
                className="w-full h-full"
              />
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-4">
          {project.githubUrl && (
            <Button href={project.githubUrl} variant="primary">
              View on GitHub
            </Button>
          )}
          {project.demoUrl && (
            <Button href={project.demoUrl} variant="secondary">
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
