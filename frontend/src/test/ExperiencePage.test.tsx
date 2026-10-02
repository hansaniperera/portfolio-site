import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { experience, formatPeriod } from '../data/experience.ts';
import ExperiencePage from '../pages/ExperiencePage.tsx';

describe('ExperiencePage', () => {
  it('renders every role from the data, newest first', () => {
    render(<ExperiencePage />);

    const headings = screen.getAllByRole('heading', { level: 2 });
    expect(headings.map((h) => h.textContent)).toEqual(
      experience.map((r) => `${r.title} · ${r.company}`),
    );
  });

  it('shows the date range and tech stack for each role', () => {
    render(<ExperiencePage />);

    for (const role of experience) {
      const article = screen.getByRole('article', { name: `${role.title} · ${role.company}` });
      expect(within(article).getByText(`${role.location} · ${formatPeriod(role)}`)).toBeVisible();
      expect(within(article).getByText(role.techStack.join(', '))).toBeVisible();
    }
  });
});

describe('formatPeriod', () => {
  it('formats month ranges and uses Present for a current role', () => {
    expect(formatPeriod({ start: '2022-04', end: '2024-07' })).toBe('Apr 2022 – Jul 2024');
    expect(formatPeriod({ start: '2025-09', end: null })).toBe('Sep 2025 – Present');
  });
});
