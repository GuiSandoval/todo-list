import React from 'react'
import { List } from '../../components/List'
import { SectionContainer } from '../../layouts/Section'
import { Header } from '../../components/Header'
import { Content } from '../../components/Content'

function Home() {
  return (
    <SectionContainer>
      <Header />
      <Content />
    </SectionContainer>
  )
}

export { Home }