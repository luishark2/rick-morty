import { render, screen } from '@testing-library/react';
import App from './App';

test('renders rick morty title', () => {
  render(<App />);
  const titleElement = screen.getByText(/rick morty/i);
  expect(titleElement).toBeInTheDocument();
});