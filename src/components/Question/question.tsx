import React from 'react';
import styled from 'styled-components';
import { Question as QuestionType } from '../../types/Question';
import { StyledButton, StyledOuterWrapper } from '../Styled';
import he from 'he';

export interface QuestionProps {
  question: QuestionType;
  answer: (value: string) => void;
  index: string;
}

const StyledQuestion = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  padding: 50px;
`;

const StyledButtonWrapper = styled('div')`
  padding: 20px 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Question = ({ question, answer, index }: QuestionProps) => {
  return (
    <StyledOuterWrapper>
      <h2>{he.decode(question.category)}</h2>
      <StyledQuestion>{he.decode(question.question)}</StyledQuestion>

      <StyledButtonWrapper>
        <StyledButton onClick={() => answer('True')}>True</StyledButton>
        <StyledButton onClick={() => answer('False')}>False</StyledButton>
      </StyledButtonWrapper>
      <h3>{index}</h3>
    </StyledOuterWrapper>
  );
};

export default Question;
