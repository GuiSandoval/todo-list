import styled from "styled-components";

export const ContainerSectionInput = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 100%;
  margin: 0 0 4rem 0;

  > input {
    background: #262626;
    color: #fff;
    border: 1px solid transparent;
    border-radius: 0.5rem;
    height: 100%;
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
    background: #1e6f9f;
    color: #fff;
    cursor: pointer;
    font-weight: 700;
    height: 100%;
    width: 100%;
    max-width: 6rem;
    border-radius: 0.5rem;
    margin: 0 0 0 0.4rem;
    padding: 0;
    transition: 0.2s;

    &:hover {
      filter: brightness(1.1);
    }

    &:after {
      content: "+";
      display: inline-block;
      margin: 0 0 0 0.4rem;
      border: 1px solid #fff;
      border-radius: 50%;
      width: 1rem;
    }
  }
`;
