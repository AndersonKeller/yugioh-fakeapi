import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: var(--color-black);
  border-radius: 0.75rem;
  border: none;
  color: var(--color-white);
  font-weight: 500;
  font-size: 1rem;
  &:hover {
    background-color: var(--color-black2);
    color: var(--color-white2);
  }
`;
