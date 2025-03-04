import styled from 'styled-components'
import variables from '../../styles/variables'
import { Button } from '../../styles'

export const Card = styled.div`
  max-width: 320px;
  width: 100%;
  height: 338px;

  display: flex;
  flex-direction: column;

  background-color: ${variables.primaryColor};
  color: ${variables.secondaryColor};
  padding: 8px;

  .container {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;

    ${Button} {
      margin-top: 8px;
    }
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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 960px;
    height: 344px;
    margin: 0 auto;
    padding: 32px;
    background-color: ${variables.primaryColor};
    color: ${variables.fontColor};
    position: relative;
    z-index: 1;

    display: flex;
    gap: 24px;

    img {
      width: 280px;
      height: 280px;
      object-fit: cover;
    }

    ${Title} {
      font-size: 18px;
      margin-top: 0;
      margin-bottom: 16px;
    }

    ${Button} {
      align-self: flex-start;
      padding: 4px 8px;
      margin-top: 16px;
    }

    button[aria-label='Close'] {
      position: absolute;
      top: 8px;
      right: 8px;
      background-color: transparent;
      border: none;
      cursor: pointer;

      span {
        display: block;
        width: 16px;
        height: 16px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
      }
    }
  }
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`
