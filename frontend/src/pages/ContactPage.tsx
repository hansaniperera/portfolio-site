import { useState, type FormEvent } from 'react';

const fieldClass =
  'mt-1 block w-full rounded border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // Not wired up yet: no network call until the backend exists (Milestone 3).
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section aria-labelledby="contact-heading" className="max-w-xl space-y-6">
      <h1 id="contact-heading" className="text-3xl font-bold tracking-tight">
        Contact
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            autoComplete="name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            minLength={10}
            maxLength={2000}
            rows={5}
            className={fieldClass}
          />
        </div>
        <button
          type="submit"
          className="rounded bg-sky-700 px-4 py-2 font-medium text-white hover:bg-sky-800"
        >
          Send message
        </button>
      </form>
      <p role="status" className="text-sm">
        {submitted &&
          'The contact form is not wired up yet, so your message was not sent. Please check back soon.'}
      </p>
    </section>
  );
}
