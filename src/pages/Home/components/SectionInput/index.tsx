import React, { useState } from 'react'
import * as S from "./styles"

function SectionInput() {
  const [inputValue, setInputValue] = useState('')

  return (
    <S.ContainerSectionInput>
      <input
        type="text"
        placeholder='Adicione uma nova tarefa'
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
      />
      <button type="button">Criar</button>
    </S.ContainerSectionInput>
  )
}

export default SectionInput