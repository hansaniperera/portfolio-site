import { profile } from '../data/profile.ts';

const facts = [
  { term: 'Looking for', detail: profile.lookingFor },
  { term: 'Location', detail: profile.location },
  { term: 'Work rights', detail: profile.workRights },
];

export default function HomePage() {
  return (
    <section aria-labelledby="home-heading" className="space-y-6">
      <div>
        <h1 id="home-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
          {profile.name}
        </h1>
        <p className="mt-1 text-xl text-slate-600 dark:text-slate-400">{profile.title}</p>
      </div>
      <p className="max-w-2xl text-lg">{profile.summary}</p>
      <dl className="max-w-2xl space-y-2">
        {facts.map(({ term, detail }) => (
          // Fixed-width label column so every value starts at the same position.
          <div key={term} className="sm:grid sm:grid-cols-[8rem_1fr] sm:gap-4">
            <dt className="font-semibold">{term}</dt>
            <dd>{detail}</dd>
          </div>
        ))}
      </dl>
      <ul aria-label="Profile links" className="flex flex-wrap gap-3 text-sm">
        {profile.links.map(({ label, url }) => (
          <li key={label}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded border border-slate-300 px-3 py-1 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              {label} <span aria-hidden="true">↗</span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
