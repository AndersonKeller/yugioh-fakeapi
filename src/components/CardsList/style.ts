import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;

  overflow-x: scroll;
  gap: 1.5rem;
  padding: 1.5rem 2rem;
  width: 100vw;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 450px;
  animation: listAnimation 0.5s ease;
  &::-webkit-scrollbar {
    height: 15px;
    width: 100%;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-white2);
    border-radius: 1rem;
  }
  &::-webkit-scrollbar-track {
    background-color: var(--color-black2);
    border-radius: 1rem;
  }

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
  @media (min-width: 1200px) {
    & {
      flex-wrap: wrap;
      animation: listAnimation 1s ease;
    }
  }
`;
export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
  margin: 0 auto;
`;
