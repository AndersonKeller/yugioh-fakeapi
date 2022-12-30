import styled from "styled-components";

export const StyledInputSearchName = styled.form`
  border: none;
  height: 50px;
  position: relative;
  width: 280px;
  input {
    border-radius: 1rem;
    background-color: transparent;
    border: 1px solid var(--color-white);
    color: var(--color-white);
    width: 100%;
    &::placeholder {
      color: var(--color-white);
    }
  }
  span {
    color: var(--color-error);
    font-weight: 500;
    font-size: 1rem;
  }
  button {
    position: absolute;
    right: 5px;
    top: 20%;
    background-color: var(--color-white);
    color: var(--color-black);
  }
`;
export const StyledP = styled.p`
  color: var(--color-white2);
  margin-top: 1.5rem;
`;
