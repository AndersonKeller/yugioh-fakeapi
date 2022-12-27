import styled from "styled-components";

export const StyledHeader = styled.header`
  min-height: 180px;
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--text-color);

  h1 {
    width: max-content;
    color: var(--text-color);
    font-size: 5rem;
    font-weight: 700;
    -webkit-text-stroke: 1px var(--text-color-shadow);
  }
`;
