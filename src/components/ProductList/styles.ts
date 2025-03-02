import styled from 'styled-components'
import variables from '../../styles/variables'

export const MainContainer = styled.main`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 80px 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`

export const Presentation = styled.div`
  width: 100%;
  height: 280px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 32px;
  position: relative;

  div {
    max-width: 1024px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 1;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: ${variables.fontColor};
`

export const Tag = styled.span`
  font-size: 32px;
  font-weight: 100;
  color: ${variables.fontColor};
  text-transform: capitalize;
`
