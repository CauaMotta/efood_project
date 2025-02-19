import styled from 'styled-components'
import variables from '../../styles/variables'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 384px;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px;

  img {
    width: 125px;
  }
`

export const Slogan = styled.h1`
  color: ${variables.primaryColor};
  font-weight: bold;
  font-size: 36px;
  max-width: 540px;
  text-align: center;
`
