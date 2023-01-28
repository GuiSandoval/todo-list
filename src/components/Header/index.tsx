import React from 'react'
import logo from '../../../public/Logo.png'
import * as S from './styles'

function Header() {
  return (
    <S.ContainerHeader>
      <img src={logo} alt="" />
    </S.ContainerHeader>
  )
}

export { Header }