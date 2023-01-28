import React from 'react'
import * as S from './styles';

function CheckboxStyled({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) {


  return (
    <S.ContainerCheckboxStyled>
      <input
        type="checkbox"
        {...props}
      />
    </S.ContainerCheckboxStyled>
  )
}

export { CheckboxStyled }