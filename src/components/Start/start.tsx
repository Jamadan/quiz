import React from "react";
import { StyledOuterWrapper } from "../Styled";

export type StartProps = {
  begin: () => void;
};

const Start = ({ begin }: StartProps) => {
  return (
    <StyledOuterWrapper>
      <h1>Welcome to the trivia challenge!</h1>
      <h3>You will be presented with 10 True or False questions.</h3>
      <h3>Can you score 100%?</h3>
      <button onClick={begin}>BEGIN</button>
    </StyledOuterWrapper>
  );
};

export default Start;
