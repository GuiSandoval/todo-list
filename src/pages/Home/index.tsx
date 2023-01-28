import React from 'react'
import { List } from '../../components/List'
import { SectionContainer } from '../../layouts/Section'
import { Header } from '../../components/Header'
import { Content } from '../../components/Content'
import SectionInput from './components/SectionInput'

function Home() {
  return (
    <SectionContainer>
      <Header />
      <Content>
        <SectionInput />
        <div>input para criar nova tarefa</div>
        <div>Componente LIst</div>
      </Content>
    </SectionContainer>
  )
}

export { Home }