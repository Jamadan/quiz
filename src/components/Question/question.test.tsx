import React from 'react';
// import {rest} from 'msw'
// import {setupServer} from 'msw/node'
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Question, { QuestionProps } from './question';
// import Fetch from '../fetch';

test('loads and displays question', async () => {
  const answerFn = jest.fn();
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

  expect(screen.getByText('Question 1')).toBeInTheDocument();
  expect(screen.getByText('True')).toBeInTheDocument();
  expect(screen.getByText('False')).toBeInTheDocument();

  fireEvent.click(screen.getByText('True'));

  expect(answerFn).toHaveBeenCalledWith('True');
});
