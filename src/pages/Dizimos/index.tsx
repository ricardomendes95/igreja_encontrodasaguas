import React from 'react'

import * as S from './styles'
import { message } from 'antd'
import Header from '../../components/Header'
import Baseboard from '../../components/Baseboard'
import Pix from '../../assets/pix.svg'
import Caixa from '../../assets/caixa.svg'
import Picpay from '../../assets/picpay.svg'

export default function Dizimos() {
  function handleCopyPix() {
    message.success('This is a success message')
  }
  return (
    <S.Container>
      <Header />
      <S.Content>
        <S.Card>
          <h1>Contribua com a obra de Deus</h1>
          <p>
            Sua contribuição é um ato voluntário, uma decisão de amor pela obra
            de Deus e pelas vidas que podem ser abençoadas por meio de nossas
            ações e projetos.
          </p>
        </S.Card>
        <S.Info>
          <h3>FORMAS DE CONTRIBUIR</h3>
          <span>Tranferêcia online/ Depósitos/ PicPay</span>
        </S.Info>
        <S.Card>
          <S.Pix src={Pix} alt="pix" />
          <h3 onClick={handleCopyPix}>Chave: 10.462.948/0001-12</h3>
          <p>
            Atenção: o Nome que irá aperecer, é Ministério Águas do Trono (que é
            o atingo nome da nossa igreja) mas a conta pertence a Encontro das
            Águas
          </p>
        </S.Card>
        <S.Card>
          <S.Caixa src={Caixa} alt="Caixa" />
          <p> AGÊNCIA: 0051 / OPERAÇÃO: 013</p>
          <p>CONTA-POUPANÇA: 00033020-5</p>
          <p>CNPJ: 10.462.948/0001-12</p>
        </S.Card>
        <S.Card>
          <a href="https://app.picpay.com/user/igreja.encontro.das.aguas">
            <S.Picpay src={Picpay} alt="Caixa" />
          </a>
          <p>Clique na logo do PicPay que você</p>
          <p>sera direcionado para o aplicativo.</p>
          <a href="https://app.picpay.com/user/igreja.encontro.das.aguas">
            ou clique Aqui
          </a>
        </S.Card>
      </S.Content>
      <Baseboard />
    </S.Container>
  )
}
