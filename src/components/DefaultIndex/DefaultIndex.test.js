import { render, screen } from '@testing-library/react';
import DefaultIndex from './DefaultIndex';

test('renders learn react link', () => {
  render(<DefaultIndex />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
