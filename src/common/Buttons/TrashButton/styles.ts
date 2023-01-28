import styled from "styled-components";

export const ContainerTrashButton = styled.button`
  background: transparent;
  outine: none;
  border: none;
  cursor: pointer;
  transform: scale(1.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(1.2);
  }
`;
