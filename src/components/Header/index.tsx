import React from 'react'
import * as S from './styles'
import Logo from '../../assets/iea-logo.svg'

export default function Header() {
  return (
    <S.Container>
      <S.Menu>
        <S.Logo src={Logo} alt="" />
        <S.Name>
          <h1>IGREJA EVANGÉLICA</h1>
          <h1>ENCONTRO DAS ÁGUAS</h1>
        </S.Name>
      </S.Menu>
    </S.Container>
  )
}
