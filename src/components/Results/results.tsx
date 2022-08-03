import React from "react";
import { Question } from "../../types/Question";

export interface ResultsProps {
  questions: Question[];
  startAgain: () => void;
}

const Results = ({ questions, startAgain }: ResultsProps) => {
  return <div>Results</div>;
};

export default Results;
