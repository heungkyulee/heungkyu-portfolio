"use client";

import Link from "next/link";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { useI18n } from "@/components/i18n-provider";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export default function ProjectsList() {
  const { t } = useI18n();

  return (
    <section className="px-6 md:px-12 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group block rounded-3xl border border-zinc-800/60 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-indigo-500/30 transition-all p-8"
            >
              <div className="flex items-center justify-between gap-4 mb-6">
                <Badge
                  variant="outline"
                  className="border-zinc-700/60 text-zinc-400 bg-zinc-950/30"
                >
                  {project.category}
                </Badge>
                <span className="text-xs font-mono text-zinc-600 group-hover:text-indigo-300 transition-colors flex items-center gap-2">
                  {t({ ko: "자세히 보기", en: "View case study" })}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 group-hover:text-white transition-colors leading-tight">
                {t(project.title)}
              </h2>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                {t(project.description)}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.techStack.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-zinc-400 bg-zinc-950/40 border border-zinc-800/60 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 6 && (
                  <span className="text-xs text-zinc-600 px-2 py-1">
                    +{project.techStack.length - 6}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


