import styled from 'styled-components'
import variables from '../../styles/variables'

export const FooterContainer = styled.footer`
  height: 298px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  font-size: 10px;
  color: ${variables.primaryColor};
  background-color: ${variables.secondaryColor};
  padding: 40px;

  p {
    width: 480px;
    text-align: center;
  }
`

export const SocialList = styled.ul`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  gap: 8px;
`
