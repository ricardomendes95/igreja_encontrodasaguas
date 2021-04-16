import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-content: flex-end;
  align-items: center;
  width: 100vw;
  height: 90px;
  background: rgba(28, 75, 92, 1);
  justify-content: space-between;
  padding: 10px;
  position: relative;
  bottom: 0;
  /* width: 100%; */
`

export const Address = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-content: flex-start;
  font: 400 0.8rem Roboto, sans-serif;
`
export const Social = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  padding: 5px;
`
export const Content = styled.div`
  display: flex;
  align-items: center;

  margin-top: 5px;
  img {
    width: 20px;
    height: 20px;
  }
  a {
    margin-left: 5px;
    font: 400 0.8rem Roboto, sans-serif;
  }
`
