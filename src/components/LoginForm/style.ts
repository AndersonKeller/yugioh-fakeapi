import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
  max-width: 500px;
  position: relative;
  padding: 2rem 1rem;
  background-color: var(--color-black);
  color: var(--color-white2);
  .closeButton {
    width: max-content;
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.5rem;
    border-radius: 50%;
    border: none;
  }
  span {
    color: var(--color-error);
    font-weight: 500;
    font-size: 0.75rem;
  }
`;
export const StyledInput = styled.input`
  height: 50px;
  border-radius: 1rem;
  padding-left: 1rem;
`;
