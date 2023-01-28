import React, { useState } from 'react'
import * as S from "./styles"
import { ITask } from '../../interfaces';

interface SectionInputProps {
  addTask: (task: ITask) => void;
}

function SectionInput({ addTask }: SectionInputProps) {
  const [inputValue, setInputValue] = useState('')

  function handleAddTask(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (!inputValue) return alert('Você precisa digitar uma tarefa!');
    const newTask = {
      id: new Date().getTime(),
      title: inputValue,
      isCompleted: false
    } as ITask;

    addTask(newTask);
    setInputValue('');
  }

  return (
    <S.ContainerSectionInput>
      <input
        type="text"
        placeholder='Adicione uma nova tarefa'
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
      />
      <button type="submit" onClick={(e) => handleAddTask(e)}>Criar</button>
    </S.ContainerSectionInput>
  )
}

export default SectionInput