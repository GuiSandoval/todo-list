import React from 'react'
import * as S from './styles';

function TaskField() {
  return (
    <S.ContainerTaskField>
      <div>checkbox</div>
      <p>Descrição da task</p>
      <div>Botão de excluir</div>
    </S.ContainerTaskField>
  )
}

export { TaskField }