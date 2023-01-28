import React from 'react'
import { List } from '../../components/List'
import { SectionContainer } from '../../layouts/Section'
import { Header } from '../../components/Header'

function Home() {
  return (
    <SectionContainer>
      <Header />
      <div>input para criar nova tarefa</div>
      <div>Componente LIst</div>
    </SectionContainer>
  )
}

export { Home }