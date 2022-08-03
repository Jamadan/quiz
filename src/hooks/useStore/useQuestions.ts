import { useEffect, useState } from "react";
import { Question } from "../../types/Question";
import { Questions } from "../../types/Store";

const localStorageKey = "jamadan-g2i-quiz";

export const useQuestions = (): Questions => {
  const [questions, setQuestions] = useState<Question[]>(
    typeof window !== "undefined"
      ? JSON.parse(window?.sessionStorage.getItem(localStorageKey) || "[]")
      : []
  );

  useEffect(() => {
    sessionStorage.setItem(localStorageKey, JSON.stringify(questions));
  }, [questions]);

  const getQuestions = async () => {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
    );

    console.log(response);
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
    questions,
    getQuestions,
    setQuestionAnswer,
    clearQuestions,
  };
};
