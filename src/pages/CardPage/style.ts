import styled, { css } from "styled-components";
import { iAsideProps } from ".";

export const StyledModalWrapper = styled.div`
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1s ease;
  flex-direction: column;
  gap: 1rem;
`;
export const StyledModal = styled.div`
  width: 280px;
  height: max-content;
  background-color: transparent;
  display: flex;
  align-items: center;
  position: relative;
  transition: 1s ease;
  animation: modalAnimation 1s ease;

  button {
    position: absolute;
    right: 0;
    top: -8px;
    background-color: rgba(0, 0, 0, 0.5);
  }
  li {
    list-style: none;
    width: 100%;
    object-fit: contain;
  }
  @keyframes modalAnimation {
    0% {
      margin-right: -100%;
      opacity: 0;
    }
    50% {
      opacity: 0.1;
    }

    100% {
      margin-right: 0;
      opacity: 1;
    }
  }
`;
export const StyledAside = styled.aside`
  min-height: 320px;
  cursor: pointer;
  padding: 1rem;
  position: absolute;
  right: -12px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--color-bronze);
  color: var(--color-white2);
  border-radius: 1rem;

  div {
    display: flex;
    justify-content: space-between;
  }
  @keyframes closeInfo {
    0% {
      margin-right: -10%;
      opacity: 0.5;
    }
    50% {
    }

    100% {
      margin-right: 0;
      opacity: 1;
    }
  }
  ${({ infos }: iAsideProps) =>
    infos
      ? css`
          width: 110%;
          min-height: max-content;
          animation: modalAnimation 1s ease-in-out;
        `
      : css`
          width: 20px;
          justify-content: center;
          align-items: center;
          border-radius: 0 18px 18px 0;
          animation: closeInfo 1s ease-in;
        `}
`;
