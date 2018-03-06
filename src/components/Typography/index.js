import styled, { css } from 'styled-components'

export const TGTitle = styled.h1`
  margin: 0;
  font-family: 'Stag-Book';
  font-size: 54pt;
  ${props => props.italic && css`
    font-style: italic;
  `}
`

export const TGDescription = styled.h2`
  margin: 0;
  font-family: 'Stag-Sans-Light';
  font-size: 20pt;
  line-height: 1.2;
  ${props => props.italic && css`
    font-style: italic;
  `}
`

export const TGDetail = styled.h3`
  margin: 0;
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

export const P = styled.p`
    margin: 0 0 1em;
    font-size: 1em;
    line-height: 1.5;

  ${props => props.italic && css`
    font-style: italic;
  `}
  ${props => props.small && css`
    font-family: 'Stag-Book';
    font-size: .75em;
    line-height: 1.4;
  `}

  ${props => props.hero && css`
    font-family: 'Stag-Book';
    font-size: 1.25em;
  `}
`

export const H1 = styled.h1`
    margin: 0;
    font-family: 'Stag-Book';
    font-weight: normal;
    font-size: 1.5em;
    letter-spacing: .025em;
    padding: 10px;
  ${props => props.italic && css`
    font-style: italic;
  `}
`

export const H2 = styled.h2`
    margin: 0 1em 1em 0em;
    margin-left: 1em;
    font-family: 'Stag-Book';
    font-weight: normal;
    font-size: 1.3em;
  ${props => props.italic && css`
    font-style: italic;
  `}
`

export const H3 = styled.h3`
    margin: 0 0 2em;
    font-family: 'Stag-Book';
    font-size: 1.5em;
  ${props => props.italic && css`
    font-style: italic;
  `}
`

export const H4 = styled.h4`
    margin: 1.5em 0 1em;
    font-family: 'Stag-Book';
    font-weight: normal;
    font-size: .75em;
    letter-spacing: .1875em;
    text-transform: uppercase;
  ${props => props.italic && css`
    font-style: italic;
  `}
`
export const Span = styled.span`
  ${props => props.italic && css`
    font-style: italic;
  `}
`
