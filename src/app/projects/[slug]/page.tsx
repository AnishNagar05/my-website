import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, FileText, PlayCircle } from "lucide-react";
import { getProject, projectData } from "@/lib/projects";
import { ProjectDiagram } from "@/components/project-diagram";

const palette = {
  background: "#EAF6E5",
  accent: "#8DC89A",
  ink: "#0C1708",
};

export function generateStaticParams() {
  return projectData.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Anish Nagar`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const stages = "stages" in project ? project.stages : undefined;

  return (
    <main
      className="min-h-screen px-5 py-8 sm:px-8"
      style={{ backgroundColor: palette.background, color: palette.ink }}
    >
      <div className="mx-auto grid max-w-6xl gap-8">
        <nav>
          <Link href="/#projects" className="inline-flex items-center gap-2 font-bold hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </nav>

        <header
          className="rounded-lg p-7 shadow-lg sm:p-9"
          style={{ backgroundColor: palette.accent }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.16em] opacity-70">
            {project.type}
          </p>
          <h1 className="mt-3 text-3xl font-bold sm:text-5xl">{project.title}</h1>
          <div className="mt-6 flex items-center gap-3">
            <span className="text-sm font-bold uppercase tracking-[0.12em] opacity-70">
              Difficulty
            </span>
            <div className="flex gap-1.5" aria-label={`Difficulty ${project.difficulty} out of 5`}>
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className="h-3 w-3 rounded-full border"
                  style={{
                    backgroundColor: index < project.difficulty ? palette.ink : "transparent",
                    borderColor: palette.ink,
                  }}
                />
              ))}
            </div>
          </div>
        </header>

        <section className="grid gap-6">
          <article
            className="rounded-lg border p-6 shadow-sm sm:p-8"
            style={{ borderColor: `${palette.ink}22`, backgroundColor: palette.background }}
          >
            <h2 className="text-2xl font-bold">Project Description</h2>
            <div className="mt-4 grid gap-4 text-lg leading-8">
              {project.description.split("\n\n").map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <h3 className="mt-8 text-xl font-bold">Highlights</h3>
            <ul className="mt-4 grid gap-3 leading-7">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="border-l-2 pl-3" style={{ borderColor: palette.accent }}>
                  {highlight}
                </li>
              ))}
            </ul>
          </article>

          {project.diagram ? (
            <aside
              className="rounded-lg p-5 shadow-sm"
              style={{ backgroundColor: palette.ink, color: palette.background }}
            >
              <h2 className="text-xl font-bold">Diagram</h2>
              <ProjectDiagram src={project.diagram} alt={`${project.title} diagram`} />
            </aside>
          ) : null}

          {stages ? (
            <section
              className="overflow-hidden rounded-lg shadow-sm"
              style={{ backgroundColor: palette.ink, color: palette.background }}
            >
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-[#EAF6E5]/15">
                      <th className="w-[17%] px-5 py-4 text-sm font-bold">Stage</th>
                      <th className="w-[32%] px-5 py-4 text-sm font-bold">Main structures involved</th>
                      <th className="px-5 py-4 text-sm font-bold">Main role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stages.map((row) => (
                      <tr key={row.stage} className="border-b border-[#EAF6E5]/10 last:border-b-0">
                        <td className="align-top px-5 py-4 font-bold">{row.stage}</td>
                        <td className="align-top px-5 py-4 leading-7">{row.structures}</td>
                        <td className="align-top px-5 py-4 leading-7">{row.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ) : null}
        </section>

        {project.pdf ? (
          <section
            className="rounded-lg border p-5 shadow-sm"
            style={{ borderColor: `${palette.ink}22`, backgroundColor: palette.background }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-md"
                style={{ backgroundColor: palette.ink, color: palette.background }}
              >
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Project Report</h2>
              </div>
            </div>
            <iframe
              src={project.pdf}
              title={`${project.title} PDF`}
              className="h-[720px] w-full rounded-md border"
              style={{ borderColor: `${palette.ink}33` }}
            />
          </section>
        ) : null}

        {project.video ? (
          <a
            href={project.video}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between gap-4 rounded-lg p-6 font-bold shadow-lg transition hover:opacity-90"
            style={{ backgroundColor: palette.ink, color: palette.background }}
          >
            <span className="flex items-center gap-3">
              <PlayCircle className="h-6 w-6" />
              Link to Project Video
            </span>
            <ExternalLink className="h-5 w-5" />
          </a>
        ) : null}
      </div>
    </main>
  );
}
