import { profile } from '../data/profile.ts';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-4xl px-4 py-6 text-sm text-slate-600 dark:text-slate-400">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
