import styled from "styled-components";

export const ContainerCheckboxStyled = styled.div`
  > input {
    /* custom checkbox */
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 1px solid #4ea8de;
    border-radius: 50%;
    cursor: pointer;
    vertical-align: middle;
    appearance: none;
    height: 1rem;
    width: 1rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      filter: brightness(1.2);
    }

    &:checked {
      background: #8284fa;
      border-color: #8284fa;

      &:after {
        content: "✓";
        color: #fff;
      }
    }
  }
`;
