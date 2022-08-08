import React from 'react';
import { Question } from '../../types/Question';
import { useQuestions } from './useQuestions';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';

const question: Question = {
  category: 'Category',
  type: 'Type',
  difficulty: 'Difficulty',
  question: 'Question 1',
  correct_answer: 'True',
  incorrect_answers: ['False'],
};

const questions = [...Array(10)].map((_a) => {
  return { ...question };
});

global.fetch = jest.fn(() => {
  return new Promise((resolve) =>
    setTimeout(() => {
      return resolve({
        json: () =>
          Promise.resolve({
            results: questions,
          }),
      } as Response);
    }, 200 + Math.random() * 300),
  );
});

const TestComponent = ({ url }: { url: string }) => {
  const { getQuestions, clearQuestions, questions, setQuestionAnswer, error } =
    useQuestions({ questionsUrl: url });

  return (
    <div>
      <span>length {questions.length}</span>
      <span>
        true {questions.filter((q) => q.selectedAnswer === 'True').length}
      </span>
      <span>error {error !== undefined ? 'true' : 'false'}</span>
      <span onClick={() => getQuestions()}>get questions</span>
      <span onClick={() => clearQuestions()}>clear questions</span>
      <span
        onClick={() => {
          setQuestionAnswer(1, 'True');
        }}
      >
        set question to true
      </span>
    </div>
  );
};

test('creates with empty array', async () => {
  render(<TestComponent url="/testendpoint" />);

  expect(await screen.findAllByText('length 0')).toHaveLength(1);
});

test('gets data and potulates array', async () => {
  render(<TestComponent url="/testendpoint" />);

  fireEvent.click(screen.getByText('get questions'));

  await waitFor(() => screen.getByText('length 10'));
});

test('clears data', async () => {
  render(<TestComponent url="/testendpoint" />);

  fireEvent.click(screen.getByText('get questions'));

  await waitFor(() => screen.getByText('length 10'));

  fireEvent.click(screen.getByText('clear questions'));

  await waitFor(() => screen.getByText('length 0'));
});

test('sets data', async () => {
  render(<TestComponent url="/testendpoint" />);

  fireEvent.click(screen.getByText('get questions'));

  await waitFor(() => screen.getByText('length 10'));
  await waitFor(() => screen.getByText('true 0'));

  fireEvent.click(screen.getByText('set question to true'));

  await waitFor(() => screen.getByText('true 1'));
});

test('handles error', async () => {
  global.fetch = jest.fn(() => Promise.reject({ error: 'error' }));

  render(<TestComponent url="/testendpoint" />);

  fireEvent.click(screen.getByText('get questions'));

  await waitFor(() => screen.getByText('error true'));
});
