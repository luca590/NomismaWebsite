import styled, { css } from 'styled-components'

export const TGTitle = styled.h1`
  margin: 0;
  color: white;
  font-family: 'Stag-Book';
  font-size: 54pt;
  ${props => props.italic && css`
    font-style: italic;
  `}
`

export const TGDescription = styled.h2`
  margin: 0;
  color: white;
  font-family: 'Stag-Sans-Light';
  font-size: 20pt;
  line-height: 1.2;
  ${props => props.italic && css`
    font-style: italic;
  `}
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
`

export const TGDetail = styled.h3`
  margin: 0;
  color: white;
  font-family: 'Stag-Light';
  font-size: 14pt;
  line-height: 1.4;
  ${props => props.italic && css`
    font-style: italic;
  `}
`

export const TGMenuItem = styled.h1`
  margin: 0;
  font-family: 'Stag-Light';
  font-size: 14.4pt;
  ${props => props.italic && css`
    font-style: italic;
  `}
`
