import React from 'react'
import * as S from './styles'

import { ITask } from '../../interfaces';

import { TaskField } from './TaskField';

interface SectionListProps {
  tasks: Array<ITask>;
  changeTaskComplete: (id: number) => void;
  deleteTask: (id: number) => void;
}

function SectionList({ tasks, changeTaskComplete, deleteTask }: SectionListProps) {
  const tasksCreated = tasks.filter(task => !task.isCompleted);
  const tasksCompleted = tasks.filter(task => task.isCompleted);

  return (
    <S.ContainerSectionList>

      <S.HeaderSectionList>
        <S.TitleListCreated>Tarefas criadas <span>{tasksCreated.length}</span></S.TitleListCreated>
        <S.TitleListCompleted>Concluídas <span>{tasksCompleted.length}</span></S.TitleListCompleted>
      </S.HeaderSectionList>

      <S.ContentSectionList>
        {tasks.map(task => (
          <TaskField
            key={task.id}
            task={task}
            handleCheck={() => changeTaskComplete(task.id)}
            handleDelete={() => deleteTask(task.id)}
          />
        ))}
      </S.ContentSectionList>
    </S.ContainerSectionList>
  )
}

export { SectionList }