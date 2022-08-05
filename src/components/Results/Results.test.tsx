import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Results, { ResultsProps } from './Results';
import { Question } from '../../types/Question';
const restartFn = jest.fn();

const question: Question = {
  category: 'Category',
  type: 'Type',
  difficulty: 'Difficulty',
  question: 'Question 1',
  correct_answer: 'True',
  incorrect_answers: ['False'],
};

export const generateQuestions = (): Question[] => {
  return [...Array(10)].map((v, idx) => {
    return {
      ...question,
      selectedAnswer: 'False',
      ...(idx < 5 && { selectedAnswer: 'True' }),
    };
  });
};

beforeEach(() => {
  const args: ResultsProps = {
    questions: generateQuestions(),
    startAgain: restartFn,
  };
  render(<Results {...args} />);
});

test('loads and displays question', async () => {
  expect(screen.getByText('You scored 5 / 10')).toBeInTheDocument();
  expect(await screen.findAllByText('Question 1')).toHaveLength(10);
  expect(await screen.findAllByText('+')).toHaveLength(5);
  expect(await screen.findAllByText('-')).toHaveLength(5);
  expect(screen.getByText('START AGAIN')).toBeInTheDocument();
});

test('calls start again function', async () => {
  fireEvent.click(screen.getByText('START AGAIN'));
  expect(restartFn).toHaveBeenCalled();
});
