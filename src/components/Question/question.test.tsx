import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Question, { QuestionProps } from './Question';
const answerFn = jest.fn();

beforeEach(() => {
  const args: QuestionProps = {
    question: {
      category: 'Category',
      type: 'Type',
      difficulty: 'Difficulty',
      question: 'Question 1',
      correct_answer: 'True',
      incorrect_answers: ['False'],
    },
    answer: answerFn,
    index: '1/10',
  };
  render(<Question {...args} />);
});

test('loads and displays question', async () => {
  expect(screen.getByText('Category')).toBeInTheDocument();
  expect(screen.getByText('Question 1')).toBeInTheDocument();
  expect(screen.getByText('True')).toBeInTheDocument();
  expect(screen.getByText('False')).toBeInTheDocument();
});

test('calls answer function with correct value', async () => {
  fireEvent.click(screen.getByText('True'));
  expect(answerFn).toHaveBeenCalledWith('True');

  fireEvent.click(screen.getByText('False'));
  expect(answerFn).toHaveBeenCalledWith('False');
});
