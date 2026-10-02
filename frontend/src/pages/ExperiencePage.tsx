// Placeholder data until the API exists (Milestone 3).
const roles = [
  { id: 1, role: 'Backend Engineer', company: 'Company A', period: '2023 – present' },
  { id: 2, role: 'Software Developer', company: 'Company B', period: '2020 – 2023' },
];

export default function ExperiencePage() {
  return (
    <section aria-labelledby="experience-heading" className="space-y-6">
      <h1 id="experience-heading" className="text-3xl font-bold tracking-tight">
        Experience
      </h1>
      <ol className="space-y-6 border-l-2 border-slate-200 pl-6 dark:border-slate-800">
        {roles.map((r) => (
          <li key={r.id}>
            <h2 className="text-lg font-semibold">
              {r.role} · {r.company}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">{r.period}</p>
            <p className="mt-1">Placeholder description of responsibilities and impact.</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
