import React from "react";
import { Question } from "../../types/Question";

export interface QuestionProps {
  question: Question;
  answer: (value: string) => void;
}

const Question = ({ question, answer }: QuestionProps) => {
  return <div>Question</div>;
};

export default Question;
