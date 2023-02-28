import { render, screen } from '@testing-library/react';
import IndexPage from './indexPage';

test('renders Index Page', () => {
  render(<IndexPage />);
  const element = screen.getByText(/RickAndMorty::CharactersList/i);
  expect(element).toBeInTheDocument();
});
