import { Link } from 'react-router';
import { profile } from '../data/profile.ts';
import NavLinks from './NavLinks.tsx';
import ThemeToggle from './ThemeToggle.tsx';

export default function Header() {
  return (
    <header className="relative border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-4">
        <Link to="/" className="rounded text-lg font-semibold">
          {profile.name}
        </Link>
        <div className="flex items-center gap-1">
          <NavLinks />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
