import styled from 'styled-components'
import variables from '../../styles/variables'

export const Card = styled.div`
  width: 320px;
  height: 338px;

  background-color: ${variables.primaryColor};
  color: ${variables.secundaryColor};
  padding: 8px;

  img {
    display: block;
  }
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: normal;
  line-height: 22px;
`

export const BuyButton = styled.button`
  width: 100%;
  background-color: ${variables.secundaryColor};
  color: ${variables.primaryColor};
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-top: 8px;
`
