import React from 'react'
import * as S from './styles';

function CheckboxStyled() {
  const [checked, setChecked] = React.useState(false);

  function handleChange() {
    setChecked(!checked);
  }

  return (
    <S.ContainerCheckboxStyled>
      <input type="checkbox" checked={checked} onChange={handleChange} />
    </S.ContainerCheckboxStyled>
  )
}

export { CheckboxStyled }