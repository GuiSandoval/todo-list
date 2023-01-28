import styled from "styled-components";

export const ContainerSectionInput = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  > input {
    background: #262626;
    color: #fff;
    border: 1px solid transparent;
    border-radius: 0.5rem;
    height: 3rem;
    width: 100%;
    padding: 0 1rem;
    outline: none;

    &:focus {
      border-color: #4ea8de;
      color: #fff;
      transition: 0.2s;
    }
  }

  > button {
    margin: 0 0 0 1rem;
  }
`;
