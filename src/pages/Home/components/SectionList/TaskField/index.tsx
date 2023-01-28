import React from 'react'
import * as S from './styles';

interface TaskFieldProps {
  title: string;
  isCompleted: boolean;
}

function TaskField({ title, isCompleted }: TaskFieldProps) {
  return (
    <S.ContainerTaskField>
      <div>checkbox</div>
      <p>{title}</p>
      <div>Botão de excluir {isCompleted}</div>
    </S.ContainerTaskField>
  )
}

export { TaskField }