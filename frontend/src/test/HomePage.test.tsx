import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { profile } from '../data/profile.ts';
import HomePage from '../pages/HomePage.tsx';

describe('HomePage', () => {
  it('opens profile links in a new tab safely and tells screen readers', () => {
    render(<HomePage />);

    for (const { label, url } of profile.links) {
      const link = screen.getByRole('link', { name: `${label} (opens in a new tab)` });
      expect(link).toHaveAttribute('href', url);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    }
  });
});
