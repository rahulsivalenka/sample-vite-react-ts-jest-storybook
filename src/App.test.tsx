import React from 'react';
import { render, screen } from '@testing-library/react';
import { jest } from '@jest/globals';
import userEvent from '@testing-library/user-event';

import App from './App';

// FIX: not mocked
jest.mock('./meta');

// Ref: https://remarkablemark.org/blog/2018/06/28/jest-mock-default-named-export/
// jest.mock('./meta', () => ({
//   __esModule: true,
//   default: {
//     env: {
//       DEV: false,
//       TEST: true,
//     },
//   },
// }));

// @ts-ignore
const user = userEvent.default as typeof userEvent;

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
