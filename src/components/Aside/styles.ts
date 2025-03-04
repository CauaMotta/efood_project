import styled from 'styled-components'
import variables from '../../styles/variables'
import { Button } from '../../styles'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.isOpen {
    display: flex;
  }
`

export const Container = styled.aside`
  width: 360px;
  height: 100%;
  background-color: ${variables.primaryColor};
  padding: 32px 8px 0 8px;
  z-index: 1;

  font-size: 14px;
  color: ${variables.secondaryColor};
  font-weight: bold;

  p {
    line-height: 22px;
    font-weight: normal;
  }

  .margin-bottom {
    margin-bottom: 24px;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 16px;
  }

  > ${Button} {
    width: 100%;
    margin-top: 16px;
  }

  ul {
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .finalValue {
    display: flex;
    justify-content: space-between;
  }
`

export const Item = styled.li`
  background-color: ${variables.secondaryColor};
  padding: 8px;
  display: flex;
  gap: 8px;
  color: ${variables.primaryColor};
  position: relative;

  img {
    display: block;
    width: 80px;
    height: 80px;
    object-fit: cover;
    background-color: ${variables.primaryColor};
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  button[aria-label='remove'] {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    right: 8px;
    bottom: 8px;

    span {
      display: block;
      width: 16px;
      height: 16px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .numberField,
  .cardField {
    display: flex;
    gap: 24px;
  }

  .cardField > :first-child {
    flex: 7;
  }

  .cardField > :nth-child(2) {
    flex: 3;
  }
`

export const InputField = styled.div`
  label {
    display: block;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    background-color: ${variables.secondaryColor};
    color: ${variables.darkFontColor};
    font-weight: bold;
    border: 1px solid ${variables.secondaryColor};
    outline: none;
    padding: 8px;
  }
`

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
`
