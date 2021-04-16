import React from 'react'
import * as S from './styles'
import Instagram from '../../assets/instagram.svg'
import Youtube from '../../assets/youtube.svg'

export default function Baseboard() {
  return (
    <S.Container>
      <S.Address>
        <p>Rua Silvino Macêdo</p>
        <p>Maurício de Nassau</p>
        <p>Caruaru - PE</p>
      </S.Address>
      <S.Social>
        <S.Content>
          <img src={Instagram} alt="instagram igreja" />
          <a>@igreja_encontrodasaguas</a>
        </S.Content>
        <S.Content>
          <img src={Instagram} alt="instagram pastor" />
          <a>@prandregomes</a>
        </S.Content>
        <S.Content>
          <img src={Youtube} alt="canal do youtube" />
          <a>igreja Encontro das aguas</a>
        </S.Content>
      </S.Social>
    </S.Container>
  )
}
