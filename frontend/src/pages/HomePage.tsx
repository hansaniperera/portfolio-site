export default function HomePage() {
  return (
    <section aria-labelledby="home-heading" className="space-y-6">
      <h1 id="home-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
        Hi, I&apos;m a backend engineer.
      </h1>
      <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400">
        Placeholder intro: a short summary of who I am and the kind of systems I build.
      </p>
      <p className="max-w-2xl">
        <strong>Looking for:</strong> placeholder for the role I&apos;m looking for in New Zealand.
      </p>
      <ul aria-label="Profile links" className="flex flex-wrap gap-3 text-sm">
        <li className="rounded border border-slate-300 px-3 py-1 dark:border-slate-700">
          GitHub (link coming soon)
        </li>
        <li className="rounded border border-slate-300 px-3 py-1 dark:border-slate-700">
          LinkedIn (link coming soon)
        </li>
        <li className="rounded border border-slate-300 px-3 py-1 dark:border-slate-700">
          Email (link coming soon)
        </li>
      </ul>
    </section>
  );
}
