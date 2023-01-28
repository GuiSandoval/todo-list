import React from 'react'
import * as S from './styles'
import { TaskField } from './TaskField';

interface SectionListProps {
  tasks: Array<any>;
}

function SectionList({ tasks }: SectionListProps) {
  return (
    <S.ContainerSectionList>

      <S.HeaderSectionList>
        <S.TitleListCreated>Tarefas criadas <span>1</span></S.TitleListCreated>
        <S.TitleListCompleted>Concluídas <span>0</span></S.TitleListCompleted>
      </S.HeaderSectionList>

      <S.ContentSectionList>
        <TaskField />
        <TaskField />
        <TaskField />
        <TaskField />
        <TaskField />
      </S.ContentSectionList>
    </S.ContainerSectionList>
  )
}

export { SectionList }