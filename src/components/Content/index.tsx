import React from 'react'
import * as S from './styles';

interface ContentProps {
  children: React.ReactNode
}

function Content({ children }: ContentProps) {
  return (
    <S.ContainerContent>
      {children}
    </S.ContainerContent>
  )
}

export { Content }