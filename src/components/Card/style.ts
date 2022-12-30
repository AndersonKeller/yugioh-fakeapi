import styled from "styled-components";

export const StyledCard = styled.li`
  min-width: 250px;
  cursor: pointer;
  height: 381px;
  background-color: transparent;

  img {
    width: 100%;
    object-fit: contain;
    height: 100%;
  }

  &:hover {
    box-shadow: 0px -2px 12px 3px rgba(184, 186, 39, 1);
  }
  @keyframes animationCard {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;
