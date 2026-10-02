import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';
import App from '../App.tsx';

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe('Layout and navigation', () => {
  it('renders the main nav links and navigates between pages', async () => {
    const user = userEvent.setup();
    renderAt('/');

    const nav = screen.getByRole('navigation', { name: 'Main' });
    for (const name of ['Home', 'Projects', 'Experience', 'Contact']) {
      expect(nav).toContainElement(screen.getByRole('link', { name }));
    }

    await user.click(screen.getByRole('link', { name: 'Projects' }));
    expect(screen.getByRole('heading', { level: 1, name: 'Projects' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('aria-current', 'page');
  });

  it('opens the mobile menu from the keyboard and closes it with Escape', async () => {
    const user = userEvent.setup();
    renderAt('/');

    const menuButton = screen.getByRole('button', { name: 'Menu' });
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    menuButton.focus();
    await user.keyboard('{Enter}');
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    await user.tab();
    await user.keyboard('{Escape}');
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    expect(menuButton).toHaveFocus();
  });

  it('shows the 404 page for unknown routes', () => {
    renderAt('/does-not-exist');
    expect(screen.getByRole('heading', { level: 1, name: 'Page not found' })).toBeInTheDocument();
  });
});
