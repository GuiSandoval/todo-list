import React from 'react'
import * as S from './styles';
import { CheckboxStyled } from '../../../../../common/CheckboxStyled';

interface TaskFieldProps {
  title: string;
  isCompleted: boolean;
}

function TaskField({ title, isCompleted }: TaskFieldProps) {
  return (
    <S.ContainerTaskField>
      <CheckboxStyled />
      <p>{title}</p>
      <div>Botão de excluir {isCompleted}</div>
    </S.ContainerTaskField>
  )
}

export { TaskField }