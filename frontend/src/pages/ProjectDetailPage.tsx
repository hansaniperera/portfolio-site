import { Link, useParams } from 'react-router';

const sections = ['Problem', 'Stack', 'My role', 'Outcome', 'Links'];

export default function ProjectDetailPage() {
  const { slug } = useParams();

  return (
    <article aria-labelledby="project-heading" className="space-y-6">
      <p>
        <Link to="/projects" className="rounded text-sm hover:underline">
          ← Back to projects
        </Link>
      </p>
      <h1 id="project-heading" className="text-3xl font-bold tracking-tight">
        Project: {slug}
      </h1>
      {sections.map((heading) => (
        <section key={heading}>
          <h2 className="text-xl font-semibold">{heading}</h2>
          <p className="mt-1 text-slate-600 dark:text-slate-400">Placeholder content.</p>
        </section>
      ))}
    </article>
  );
}
