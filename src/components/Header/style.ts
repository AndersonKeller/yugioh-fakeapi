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

  div button {
    font-size: 0.75rem;

    padding: 0.5rem;
    color: var(--color-black);
    background-color: var(--color-white);
  }

  h1 {
    width: 100%;
    margin: 0 auto;
    text-shadow: 0 -1px 4px #fff, 0 -2px 6px #ff0, 0 -10px 20px #ff8000,
      11px -10px 13px rgba(206, 200, 47, 0);
    color: var(--text-color);
    font-size: 2rem;
    font-weight: 700;
  }
`;
