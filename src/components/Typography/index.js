import styled, { css } from 'styled-components'

export const TGTitle = styled.h1`
  margin: 0;
  color: white;
  font-family: 'Stag-Book';
  font-size: 54pt;
  font-weight: 500;
  letter-spacing: 2px;
  ${props => props.italic && css`
    font-style: italic;
  `}

  @media (max-width: 768px) {
    font-size: 25pt;
  }
`

export const TGDescription = styled.h2`
  margin: 0;
  color: white;
  font-family: 'Stag-Sans-Light';
  font-size: 20pt;
  line-height: 1.3;
  letter-spacing: 1.5px;
  font-weight: 300;
  ${props => props.italic && css`
    font-style: italic;
  `}

  @media (max-width: 768px) {
    font-weight: 100;
    lign-height: 1;
    font-size: 15pt;
  }
`

export const TGNote = styled.h2`
  margin: 0;
  color: white;
  font-family: 'Stag-Sans-Light';
  font-size: 16pt;
  line-height: 1.1;
  ${props => props.italic && css`
    font-style: italic;
  `}

  @media (max-width: 768px) {
    font-weight: 100;
    font-size: 13pt;
  }
`

export const TGDetail = styled.h3`
  margin: 0;
  color: white;
  font-family: 'Stag-Light';
  font-size: 14pt;
  line-height: 1.5;
  letter-spacing: 1px;
  ${props => props.italic && css`
    font-style: italic;
  `}

  @media (max-width: 768px) {
    font-weight: 100;
    font-size: 12pt;
  }
`

export const TGMenuItem = styled.h1`
  margin: 0;
  color: white;
  font-family: 'Stag-Light';
  font-size: 15pt;
  letter-spacing: 2.5px;
  ${props => props.italic && css`
    font-style: italic;
  `}
`

export const TGProfileListItem = styled.h1`
  margin: 0;
  color: white;
  font-family: 'Stag-Light';
  font-size: 16pt;
  letter-spacing: 2px;
  ${props => props.italic && css`
    font-style: italic;
  `}
`
