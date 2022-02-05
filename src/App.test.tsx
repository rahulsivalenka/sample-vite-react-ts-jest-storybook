import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('renders correctly', () => {
  render(<App />);

  const button = screen.getByRole('button');
  const codeCount = screen.queryByText(/The count is now:/);

  expect(button.innerHTML).toBe('count is: 0');
  expect(codeCount).not.toBeInTheDocument();

  user.click(button);
  user.click(button);

  expect(button.innerHTML).toBe('count is: 2');
  expect(screen.queryByText(/The count is now:/)).toBeInTheDocument();
});
