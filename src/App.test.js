import React from 'react';
import { render } from '@testing-library/react';
import Home from './pages/home/home.js';

test('renders learn react link', () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
