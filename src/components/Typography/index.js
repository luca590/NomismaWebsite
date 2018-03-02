import styled, { css } from 'styled-components'

export const TGTitle = styled.h1`
  margin: 0;
  font-family: 'AvenirNextLTPro-Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 200;
  font-size: 3.5em;
  letter-spacing: .025em;
  padding-top: 30px;
  padding-bottom: 30px;
  ${props => props.italic && css`
    font-style: italic;
  `}
`

export const TGDescription = styled.h1`
  margin: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: normal;
  font-size: 1.5em;
  letter-spacing: .025em;
  padding: 10px;
  ${props => props.italic && css`
    font-size: 1.3em;
    font-style: italic;
  `}
`

export const TGDetail = styled.h1`
  margin: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: normal;
  font-size: 1.2em;
  letter-spacing: .025em;
  padding: 10px;
  ${props => props.italic && css`
    font-size: 1.3em;
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
    font-family: 'AvenirNextLTPro-Demi', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: .75em;
    line-height: 1.4;
  `}

  ${props => props.hero && css`
    font-family: 'AvenirNextLTPro-Demi', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 1.25em;
  `}
`

export const H1 = styled.h1`
    margin: 0;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
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
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 1.3em;
  ${props => props.italic && css`
    font-style: italic;
  `}
`

export const H3 = styled.h3`
    margin: 0 0 2em;
    font-family: 'AvenirNextLTPro-Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 1.5em;
  ${props => props.italic && css`
    font-style: italic;
  `}
`

export const H4 = styled.h4`
    margin: 1.5em 0 1em;
    font-family: 'AvenirNextLTPro-Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif;
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
