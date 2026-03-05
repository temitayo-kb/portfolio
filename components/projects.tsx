import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { SectionObserver } from "./section-observer";

const projects = [
  {
    title: "Netflip",
    description:
      "Netflip is a Netflix clone built with React and Firebase, featuring user authentication, multi-profile management, and dynamic content browsing",
    image: "/images/project-1.png",
    tech: ["React", "Javascript", "CSS", "Firebase"],
    liveUrl: "https://netflip-app.vercel.app/",
    githubUrl: "https://github.com/temitayo-kb/Netflip",
  },
  {
    title: "CryptoPulse",
    description:
      "A real-time cryptocurrency tracker with price monitoring, favorites management, side-by-side coin comparison, and interactive charts powered by the CoinGecko API.",
    image: "/images/project-2.png",
    tech: ["React", "Javascript", "Chart.js", "CSS"],
    liveUrl: "https://crypto-pulse-mu-one.vercel.app/",
    githubUrl: "https://github.com/temitayo-kb/crypto-pulse",
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24 md:px-12 lg:px-24">
      <SectionObserver className="mx-auto max-w-2xl">
        <h2 className="mb-12 text-left text-2xl font-semibold tracking-tight text-foreground">
          Projects
        </h2>

        <div className="grid grid-cols-1 gap-15">
          {projects.map((project, i) => (
            <article
              key={i}
              className="glass-card glass-card-hover group flex h-full flex-col overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02]"
            >
              {/* 16:9 image container */}
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  // className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  className="object-cover object-top transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-3 pt-5">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-all hover:opacity-90"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-xs font-medium text-foreground transition-all hover:border-primary hover:text-primary"
                  >
                    <Github className="h-3.5 w-3.5" />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionObserver>
    </section>
  );
}
