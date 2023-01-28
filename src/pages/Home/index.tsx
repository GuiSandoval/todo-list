import React, { useState } from 'react'

import { SectionContainer } from '../../layouts/Section'
import { Header } from '../../components/Header'
import { Content } from '../../components/Content'

import SectionInput from './components/SectionInput'
import { SectionList } from './components/SectionList'

function Home() {
  const [tasks, setTasks] = useState([]);

  return (
    <SectionContainer>
      <Header />
      <Content>
        <SectionInput />
        <SectionList tasks={tasks} />
      </Content>
    </SectionContainer>
  )
}

export { Home }