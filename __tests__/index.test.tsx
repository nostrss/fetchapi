/**
 * @jest-environment jsdom
 */
import Home from '@/app/page';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /Docs/i,
    });

    expect(heading.textContent).toContain('Docs');
  });
});
