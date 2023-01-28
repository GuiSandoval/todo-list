import React from 'react'
import * as S from './styles';
import { CheckboxStyled } from '../../../../../common/CheckboxStyled';
import { TrashButton } from '../../../../../common/Buttons/TrashButton';
import { ITask } from '../../../interfaces';

interface TaskFieldProps {
  task: ITask;
  handleDelete: () => void;
  handleCheck: () => void;
}

function TaskField({ task, handleCheck, handleDelete }: TaskFieldProps) {
  const { title, isCompleted } = task;

  return (
    <S.ContainerTaskField>
      <CheckboxStyled onChange={() => handleCheck()} checked={isCompleted} />
      <S.TextTask isCompleted={isCompleted}>{title}</S.TextTask>
      <TrashButton onClick={() => handleDelete()} />
    </S.ContainerTaskField>
  )
}

export { TaskField }