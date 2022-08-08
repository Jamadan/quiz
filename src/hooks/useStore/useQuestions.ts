import { useState } from 'react';
import { Question } from '../../types/Question';
import { Questions } from '../../types/Store';

// const localStorageKey = 'jamadan-g2i-quiz';

export const useQuestions = ({
  questionsUrl,
}: {
  questionsUrl: string;
}): Questions => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [error, setError] = useState<unknown>();

  const getQuestions = async () => {
    try {
      const response = await fetch(questionsUrl);

      const json = await response.json();

      setQuestions(json.results);
    } catch (e) {
      setError(e);
    }
  };

  const setQuestionAnswer = (index: number, value: string) => {
    const question = questions[index];
    question.selectedAnswer = value;

    setQuestions([...questions]);
  };

  const clearQuestions = () => {
    setQuestions([]);
  };

  return {
    error,
    questions,
    getQuestions,
    setQuestionAnswer,
    clearQuestions,
  };
};
