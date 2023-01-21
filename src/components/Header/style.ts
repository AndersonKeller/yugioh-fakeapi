import styled from "styled-components";

export const StyledHeader = styled.header`
  min-height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-bottom: 1px solid var(--text-color);
  position: relative;
  text-align: center;
  width: 100vw;
  max-width: 1200px;
  gap: 1rem;

  div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
  div button {
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    color: var(--color-black);
    background-color: var(--color-white);
  }

  h1 {
    width: 100%;
    margin: 0 auto;
    text-shadow: 0 -1px 4px #fff, 0 -2px 6px #ff0, 0 -10px 20px #ff8000,
      11px -10px 13px rgba(206, 200, 47, 0);
    color: var(--text-color);
    font-size: 3rem;
    font-weight: 700;
  }
  @media (min-width: 700px) {
    div {
      gap: 32px;
      justify-content: center;
    }
  }
`;
