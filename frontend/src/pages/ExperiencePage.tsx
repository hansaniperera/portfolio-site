import { experience, formatPeriod } from '../data/experience.ts';

export default function ExperiencePage() {
  return (
    <section aria-labelledby="experience-heading" className="space-y-6">
      <h1 id="experience-heading" className="text-3xl font-bold tracking-tight">
        Experience
      </h1>
      <ol className="space-y-10 border-l-2 border-slate-200 pl-6 dark:border-slate-800">
        {experience.map((role) => (
          <li key={role.id}>
            <article aria-labelledby={`role-${role.id}`} className="space-y-3">
              <header>
                <h2 id={`role-${role.id}`} className="text-lg font-semibold">
                  {role.title} · {role.company}
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {role.location} · {formatPeriod(role)}
                </p>
              </header>
              <BulletList heading="Key responsibilities" items={role.responsibilities} />
              <BulletList heading="Key achievements" items={role.achievements} />
              <p className="text-sm">
                <span className="font-semibold">Tech stack:</span> {role.techStack.join(', ')}
              </p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}

function BulletList({ heading, items }: { heading: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div>
      <h3 className="text-sm font-semibold">{heading}</h3>
      <ul className="mt-1 list-disc space-y-1 pl-5">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
