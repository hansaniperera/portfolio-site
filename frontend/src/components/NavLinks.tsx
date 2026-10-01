import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router';

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
];

function linkClass({ isActive }: { isActive: boolean }) {
  return [
    'block rounded px-3 py-2 text-sm font-medium',
    isActive
      ? 'bg-slate-100 text-sky-700 dark:bg-slate-800 dark:text-sky-400'
      : 'hover:bg-slate-100 dark:hover:bg-slate-800',
  ].join(' ');
}

export default function NavLinks() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // While the mobile menu is open, Escape closes it and returns focus to the menu button.
  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <nav aria-label="Main" className="flex items-center">
      <button
        ref={buttonRef}
        type="button"
        className="rounded px-3 py-2 text-sm font-medium hover:bg-slate-100 sm:hidden dark:hover:bg-slate-800"
        aria-expanded={open}
        aria-controls="main-nav-list"
        onClick={() => setOpen((o) => !o)}
      >
        Menu
      </button>
      {/* Mobile: dropdown below the header (hidden until opened). sm and up: inline row. */}
      <ul
        id="main-nav-list"
        className={`${open ? 'block' : 'hidden'} absolute inset-x-0 top-full z-40 border-b border-slate-200 bg-white px-4 pb-4 sm:static sm:flex sm:gap-1 sm:border-0 sm:bg-transparent sm:p-0 dark:border-slate-800 dark:bg-slate-950 sm:dark:bg-transparent`}
      >
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink to={to} end={to === '/'} className={linkClass} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
