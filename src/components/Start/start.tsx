import React from 'react';
import styled from 'styled-components';
import { StyledOuterWrapper, StyledButton } from '../Styled';

export type StartProps = {
  begin: () => void;
};

const StyledH1 = styled('h1')`
  padding-bottom: 40px;
`;

const StyledH3 = styled('h3')`
  padding-bottom: 40px;
`;

const Start = ({ begin }: StartProps) => {
  return (
    <StyledOuterWrapper>
      <StyledH1>Welcome to the trivia challenge!</StyledH1>
      <StyledH3>
        You will be presented with 10 True or False questions.
      </StyledH3>
      <StyledH3>Can you score 100%?</StyledH3>
      <StyledButton onClick={begin}>BEGIN</StyledButton>
    </StyledOuterWrapper>
  );
};

export default Start;
