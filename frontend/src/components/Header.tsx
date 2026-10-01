import { Link } from 'react-router';
import NavLinks from './NavLinks.tsx';

export default function Header() {
  return (
    <header className="relative border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-4">
        <Link to="/" className="rounded text-lg font-semibold">
          Portfolio
        </Link>
        <NavLinks />
      </div>
    </header>
  );
}
