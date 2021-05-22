import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
`
export const Menu = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 90px;
  background: rgba(28, 75, 92, 1);
`
export const Name = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
  margin: 20px;
  h1 {
    font: 400 1.2rem 'Merriweather';

    /* color: ${props => props.theme.colors.text}; */
    /* font-size: 1.1rem; */
  }
`
export const Logo = styled.img`
  width: 110px;
  height: 85px;
  margin-left: 0.3rem;
`
