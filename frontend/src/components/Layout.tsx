import { Outlet } from 'react-router';
import Footer from './Footer.tsx';
import Header from './Header.tsx';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only rounded bg-sky-700 px-4 py-2 text-white focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1} className="mx-auto w-full max-w-4xl flex-1 px-4 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
