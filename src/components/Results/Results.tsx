import React from 'react';
import styled from 'styled-components';
import { Question } from '../../types/Question';
import { StyledButton, StyledOuterWrapper } from '../Styled';
import he from 'he';

export interface ResultsProps {
  questions: Question[];
  startAgain: () => void;
}

const getScore = (questions: Question[]): string => {
  const correct = questions.filter(
    (q) => q.selectedAnswer === q.correct_answer,
  ).length;
  return `${correct} / ${questions.length}`;
};

interface AnswerProps {
  isCorrect?: boolean;
}

const StyledAnswer = styled('div')<AnswerProps>`
  display: flex;
  max-height: 100px;
  width: 100%;
  ${(props) =>
    props.isCorrect
      ? 'background: rgba(0, 255, 0, 0.7);'
      : 'background: rgba(255, 0, 0, 0.7);'}
  padding: 5px;

  > span {
    display: flex;
    width: 30%;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
  }
  > div {
    display: flex;
    flex-direction: row;
    width: 70%;
    align-items: center;
    justify-content: center;
  }
`;

const StyledSpacerButton = styled(StyledButton)`
  margin-top: 20px;
`;

const Results = ({ questions, startAgain }: ResultsProps) => {
  const score = getScore(questions);

  return (
    <StyledOuterWrapper>
      <h1>You scored {score}</h1>
      {questions.map((q, idx) => {
        return (
          <StyledAnswer
            isCorrect={q.selectedAnswer === q.correct_answer}
            key={idx}
          >
            <span>
              {q.correct_answer}
              <br />
              (You: {q.selectedAnswer})
            </span>
            <div>{he.decode(q.question.substring(0, 100))}</div>
          </StyledAnswer>
        );
      })}
      <StyledSpacerButton onClick={startAgain}>START AGAIN</StyledSpacerButton>
    </StyledOuterWrapper>
  );
};

export default Results;
