import { Question } from './Question';

export type Questions = {
  getQuestions: () => void;
  questions: Question[];
  setQuestionAnswer: (index: number, value: string) => void;
  clearQuestions: () => void;
};

export type Store = {
  questionList: Questions;
};
