import styled from "styled-components";

export const StyledCard = styled.li`
  min-width: 250px;
  cursor: pointer;
  height: max-content;

  &:hover {
    box-shadow: 0px -2px 20px 3px rgba(184, 186, 39, 1);
    border: 5px solid var(--color-bronze);
  }

  img {
    width: 100%;
    object-fit: contain;
  }
`;
