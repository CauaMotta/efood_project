import styled from 'styled-components'
import variables from '../../styles/variables'

export const CardContainer = styled.div`
  width: 472px;
  position: relative;

  font-size: 14px;
  font-weight: bold;
  color: ${variables.primaryColor};

  img {
    display: block;
    width: 100%;
    height: 217px;
  }
`

export const ContentContainer = styled.div`
  border: 1px solid ${variables.primaryColor};
  border-top: none;
  padding: 8px;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 16px;

  font-size: 18px;

  i {
    color: ${variables.starColor};
  }
`

export const Description = styled.p`
  line-height: 22px;
  font-weight: normal;
`

export const Link = styled.a`
  display: inline-block;
  text-decoration: none;
  background-color: ${variables.primaryColor};
  color: ${variables.fontColor};
  padding: 4px 6px;
  margin-top: 16px;
`

export const TagList = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Tag = styled.span`
  background-color: ${variables.primaryColor};
  color: ${variables.fontColor};
  padding: 6px 4px;
  font-size: 12px;
`
