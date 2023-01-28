import React from 'react'
import { List } from '../../components/List'
import { SectionContainer } from '../../layouts/Section'

function Home() {
  return (
    <SectionContainer>
      <h1>Olá Mundo</h1>
      <List />
    </SectionContainer>
  )
}

export { Home }