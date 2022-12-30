import styled from "styled-components";

export const StyledInputSearchName = styled.form`
  border: none;
  height: 50px;
  position: relative;
  width: 250px;
  input {
    border-radius: 1rem;
    background-color: transparent;
    border: 1px solid var(--color-white);

    width: 100%;
  }
  button {
    position: absolute;
    right: 5px;
    top: 20%;
    background-color: var(--color-white);
    color: var(--color-black);
  }
`;
