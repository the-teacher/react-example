import { render, screen } from '@testing-library/react';
import HelloWorld from './HelloWorld';

test('renders Hello World', () => {
  render(<HelloWorld />);
  const helloText = screen.getByText(/Hello World/i);
  expect(helloText).toBeInTheDocument();
});
