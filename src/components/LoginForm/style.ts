import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
  position: relative;
  padding: 2rem 0;
  .closeButton {
    width: max-content;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    border: none;
  }
`;
export const StyledInput = styled.input`
  height: 50px;
  border-radius: 1rem;
`;
