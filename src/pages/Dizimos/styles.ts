import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
`
export const Content = styled.section`
  margin: 0 5% 0 5%;
  @media screen and (min-width: 720px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    div {
      margin: 30px;
      max-width: 500px;
      min-width: 500px;
    }
  }
`
export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #000;
  background-color: rgba(196, 196, 193, 0.5);
  -webkit-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
  -moz-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
  border-radius: 15px;
  padding: 10px;
  margin: 30px 0 30px 0;
  h1 {
    font: 700 20px Roboto, sans-serif;
  }
  p {
    font-size: 18px;
    text-align: justify;
  }
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #000;
  h3 {
    font-size: 1.6rem;
  }
`

export const Caixa = styled.img`
  width: 170px;
  height: 67px;
`
export const Pix = styled.img`
  width: 176px;
  height: 78px;
`
export const Picpay = styled.img`
  width: 220px;
  height: 77px;
`
