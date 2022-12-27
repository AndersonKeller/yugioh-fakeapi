import styled from "styled-components";

export const StyledModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1s ease;
`;
export const StyledModal = styled.div`
  width: 280px;
  height: 400px;
  background-color: white;
  position: relative;
  transition: 1s ease;
  animation: modalAnimation 1s ease;
  button {
    position: absolute;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  li {
    list-style: none;
    width: 100%;
    object-fit: contain;
  }
  @keyframes modalAnimation {
    from {
      opacity: 0.5;
    }

    to {
      opacity: 1;
    }
  }
`;
