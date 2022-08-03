import React from "react";
import styled from "styled-components";
import { Question } from "../../types/Question";
import { StyledOuterWrapper } from "../Styled";

export interface ResultsProps {
  questions: Question[];
  startAgain: () => void;
}

const getScore = (questions: Question[]): string => {
  const correct = questions.filter(
    (q) => q.selectedAnswer === q.correct_answer
  ).length;
  return `You scored ${correct} / ${questions.length}`;
};

const StyledAnswer = styled("div")`
  display: flex;
  flex-direction: row;
  max-height: 100px;
  width: 100%;

  span {
    display: flex;
    width: 20%;
    font-size: 3em;
  }
  div {
    display: flex;
    width: 80%;
  }
`;

const Results = ({ questions, startAgain }: ResultsProps) => {
  const score = getScore(questions);

  return (
    <StyledOuterWrapper>
      <h1>You scored {score}</h1>
      {questions.map((q, idx) => {
        return (
          <StyledAnswer key={idx}>
            {q.selectedAnswer === q.correct_answer ? (
              <span>+</span>
            ) : (
              <span>-</span>
            )}
            <div>{q.question.substring(0, 100)}</div>
          </StyledAnswer>
        );
      })}
      <button onClick={startAgain}>START AGAIN</button>
    </StyledOuterWrapper>
  );
};

export default Results;
