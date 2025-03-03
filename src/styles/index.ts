import styled, { createGlobalStyle } from 'styled-components'
import variables from './variables'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${variables.fontFamily};
    list-style: none;
  }

  body {
    background-color: ${variables.backgroundColor}
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`

export const BuyButton = styled.button`
  background-color: ${variables.secondaryColor};
  color: ${variables.primaryColor};
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-top: 8px;
`

export const IsLoadingMessage = styled.div`
  color: ${variables.primaryColor};
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 40px 0;
  display: flex;
  justify-content: center;
`
