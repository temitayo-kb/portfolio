import Image from "next/image";
import { SectionObserver } from "./section-observer";

export function Hero() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 md:px-12 lg:px-24">
      <div className="flex w-full max-w-2xl flex-col items-center gap-8 md:flex-row md:gap-12">
        {/* Profile Photo */}
        <SectionObserver className="shrink-0">
          <div className="relative h-36 w-36 md:h-44 md:w-44">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, #00d4ff, #a855f7, #ec4899)",
                padding: "3px",
              }}
            >
              <div className="h-full w-full rounded-full bg-background" />
            </div>
            <div className="absolute inset-1.25 overflow-hidden rounded-full">
              <Image
                src="/images/profile1.jpeg"
                alt="Temitayo Olawoye - Frontend Developer"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </SectionObserver>

        {/* Text Content */}
        <SectionObserver
          className="flex flex-1 flex-col items-center md:items-start"
          delay={150}
        >
          <h1 className="text-light-gray font-bold text-[25px] tracking-[0.03em] relative text-center md:text-left">
            <span className="text-white">Hi, I'm Temitayo.</span>{" "}
            <span className="text-cyan">I'm a Frontend</span>{" "}
            <br className="hidden md:block" />
            <span className="text-cyan">Software Developer.</span>
            <div className="bg-green-600/20 md:absolute max-md:mt-3 max-md:mx-auto max-md:w-fit relative right-0 bottom-1.5 whitespace-nowrap text-green-600 hover:bg-green-500/20 text-sm px-3 py-1 rounded-full inline-block hover:text-green-500">
              <span className="p-1 mb-px mr-1.5 inline-block bg-green-600 rounded-full"></span>
              Open to work
            </div>
          </h1>

          <div className="mt-5 flex w-full flex-col items-center gap-3 md:flex-row md:justify-between">
            {/* Email */}
            <a
              href="mailto:olawoyetemitayo@gmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>olawoyetemitayo@gmail.com</span>
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/temitayo-olawoye-464396198"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="#0A66C2"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/temitayo-kb"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="#e5e5e5"
                  aria-hidden="true"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </SectionObserver>
      </div>
    </section>
  );
}
