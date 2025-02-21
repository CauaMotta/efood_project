import styled from 'styled-components'
import variables from '../../styles/variables'
import { Props } from '.'

export const HeaderContainer = styled.header<Props>`
  width: 100%;
  height: ${(props) => (props.profile ? '186px' : '384px')};
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: ${(props) => (props.profile ? 'row' : 'column')};
  align-items: center;
  justify-content: end;
  padding: 40px;
  position: relative;

  img {
    width: 125px;
    position: absolute;
    top: ${(props) => (props.profile ? '50%' : '40px')};
    left: 50%;
    transform: ${(props) =>
      props.profile ? 'translate(-50%, -50%)' : 'translateX(-50%)'};
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

export const Slogan = styled.h1`
  color: ${variables.primaryColor};
  font-weight: bold;
  font-size: 36px;
  max-width: 540px;
  text-align: center;
`

export const NavButton = styled.button`
  background-color: transparent;
  border: none;

  font-size: 18px;
  font-weight: bold;
  color: ${variables.primaryColor};
  cursor: pointer;
`
