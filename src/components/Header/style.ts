import styled from "styled-components";

export const StyledHeader = styled.header`
  min-height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--text-color);
  position: relative;
  div {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    position: absolute;
    flex-direction: column;
    button {
      font-size: 0.75rem;
      width: max-content;
      padding: 0.5rem;
      color: var(--color-black);
      background-color: var(--color-white);
    }
  }
  h1 {
    width: max-content;
    color: var(--text-color);
    font-size: 5rem;
    font-weight: 700;
    -webkit-text-stroke: 1px var(--text-color-shadow);
  }
`;
