import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Start, { StartProps } from './Start';
const beginFn = jest.fn();

beforeEach(() => {
  const args: StartProps = {
    begin: beginFn,
  };
  render(<Start {...args} />);
});

test('loads and displays question', async () => {
  expect(
    screen.getByText('Welcome to the trivia challenge!'),
  ).toBeInTheDocument();
  expect(screen.getByText('Can you score 100%?')).toBeInTheDocument();
  expect(screen.getByText('BEGIN')).toBeInTheDocument();
});

test('calls begin function', async () => {
  fireEvent.click(screen.getByText('BEGIN'));
  expect(beginFn).toHaveBeenCalled();
});
