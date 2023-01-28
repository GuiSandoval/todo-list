import React from 'react'
import * as S from './styles';
import { CheckboxStyled } from '../../../../../common/CheckboxStyled';
import { TrashButton } from '../../../../../common/Buttons/TrashButton';

interface TaskFieldProps {
  title: string;
  isCompleted: boolean;
}

function TaskField({ title, isCompleted }: TaskFieldProps) {
  return (
    <S.ContainerTaskField>
      <CheckboxStyled />
      <S.TextTask isCompleted={isCompleted}>{title}</S.TextTask>
      <TrashButton onClick={() => alert("olá")} />
    </S.ContainerTaskField>
  )
}

export { TaskField }