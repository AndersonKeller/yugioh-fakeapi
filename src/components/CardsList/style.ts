import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;

  overflow-x: scroll;
  gap: 1.5rem;
  padding: 1.5rem;
  width: 100vw;
  max-width: 1100px;
  margin: 0 auto;
  height: 450px;
  animation: listAnimation 0.5s ease;

  @keyframes listAnimation {
    0% {
      opacity: 0.1;
    }
    50% {
      opacity: 0.6;
    }

    100% {
      opacity: 1;
    }
  }
`;
