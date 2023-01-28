import styled from "styled-components";

interface TextTaskProps {
  isCompleted: boolean;
}

export const ContainerTaskField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #262626;
  padding: 1rem;
  margin: 0 0 1rem;
  border-radius: 0.5rem;
  width: 100%;
`;

export const TextTask = styled.p<TextTaskProps>`
  font-size: 1rem;
  text-align: left;
  width: 90%;
  word-wrap: break-word;
  margin: 0 1rem;

  ${({ isCompleted }) =>
    isCompleted &&
    `
      text-decoration: line-through;
      color: #a9a9a9;
    `}
`;
