import styled from 'styled-components';

export const StyledButton = styled('div')`
  width: 30%;
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }

  &:active {
    background-color: rgba(0, 255, 0, 0.7);
  }
`;
