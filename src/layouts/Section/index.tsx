import React from 'react'
import * as S from "./styles"

interface SectionContainerProps {
  children: React.ReactNode;
}


function SectionContainer({ children }: SectionContainerProps) {
  return (
    <S.ContainerSection>
      {children}
    </S.ContainerSection>
  )
}

export { SectionContainer }