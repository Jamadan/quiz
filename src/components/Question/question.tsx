import React from "react";
import styled from "styled-components";
import { Question } from "../../types/Question";
import { StyledOuterWrapper } from "../Styled";

export interface QuestionProps {
  question: Question;
  answer: (value: string) => void;
  index: string;
}

const StyledQuestion = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  padding: 50px;
`;

const Question = ({ question, answer, index }: QuestionProps) => {
  return (
    <StyledOuterWrapper>
      <h2>{question.category}</h2>
      <StyledQuestion>{question.question}</StyledQuestion>

      <button onClick={() => answer("True")}>True</button>
      <button onClick={() => answer("False")}>False</button>
      <h3>{index}</h3>
    </StyledOuterWrapper>
  );
};

export default Question;
