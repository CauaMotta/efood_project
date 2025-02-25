import styled from 'styled-components'
import variables from '../../styles/variables'

export const Card = styled.div`
  max-width: 320px;
  width: 100%;
  height: 338px;

  display: flex;
  flex-direction: column;

  background-color: ${variables.primaryColor};
  color: ${variables.secundaryColor};
  padding: 8px;

  .container {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
  }

  img {
    display: block;
    max-width: 304px;
    height: 167px;
    width: 100%;
    object-fit: cover;
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
