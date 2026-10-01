import { Link } from 'react-router';

// Placeholder data until the API exists (Milestone 3).
const projects = [
  { slug: 'example-project-one', title: 'Example project one', summary: 'Placeholder summary.' },
  { slug: 'example-project-two', title: 'Example project two', summary: 'Placeholder summary.' },
];

export default function ProjectsPage() {
  return (
    <section aria-labelledby="projects-heading" className="space-y-6">
      <h1 id="projects-heading" className="text-3xl font-bold tracking-tight">
        Projects
      </h1>
      <ul className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <li key={p.slug} className="rounded-lg border border-slate-200 p-4 dark:border-slate-800">
            <h2 className="text-lg font-semibold">
              <Link to={`/projects/${p.slug}`} className="rounded hover:underline">
                {p.title}
              </Link>
            </h2>
            <p className="mt-1 text-slate-600 dark:text-slate-400">{p.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
