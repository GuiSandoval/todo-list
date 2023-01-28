import React, { useState } from 'react'

import { SectionContainer } from '../../layouts/Section'
import { Header } from '../../components/Header'
import { Content } from '../../components/Content'

import { ITask } from './interfaces'
import SectionInput from './components/SectionInput'
import { SectionList } from './components/SectionList'

function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function addTask(task: ITask) {
    const taskExists = tasks.find(t => t.title === task.title);
    if (taskExists) return alert('Essa tarefa já foi adicionada!');
    setTasks(prev => ([...prev, task]));
  }

  function changeTaskComplete(id: number) {
    const updatedTasks = tasks.map(t => {
      if (t.id === id) t.isCompleted = !t.isCompleted;
      return t;
    }
    );
    setTasks(updatedTasks);
  }

  function deleteTask(id: number) {
    const updatedTasks = tasks.filter(t => t.id !== id);
    setTasks(updatedTasks);
  }

  return (
    <SectionContainer>
      <Header />
      <Content>
        <SectionInput addTask={addTask} />
        <SectionList
          tasks={tasks}
          changeTaskComplete={changeTaskComplete}
          deleteTask={deleteTask}
        />
      </Content>
    </SectionContainer>
  )
}

export { Home }