import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <section aria-labelledby="not-found-heading" className="space-y-4">
      <h1 id="not-found-heading" className="text-3xl font-bold tracking-tight">
        Page not found
      </h1>
      <p>The page you&apos;re looking for doesn&apos;t exist.</p>
      <p>
        <Link to="/" className="rounded text-sky-700 hover:underline dark:text-sky-400">
          Go to the home page
        </Link>
      </p>
    </section>
  );
}
