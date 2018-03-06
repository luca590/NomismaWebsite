import React, { Component } from 'react'
import { Content, TGTitle } from '../../components'
import styled from 'styled-components'

class WhitePaper extends Component {
  goToNext () {
    this.props.history.push('/Blog')
  }

  goBack () {
    this.props.history.goBack()
  }

  render () {
    return (
      <Content>
        <TGTitle> White paper </TGTitle>
        <Link href='assets/pdf/SummaryDraft_Feb202018HK.pdf' download='SummaryDraft_Feb202018HK.pdf'>Download </Link>
        <Link href='assets/pdf/SummaryDraft_Feb202018HK.pdf' target='_blank'>View </Link>
      </Content>
    )
  }
}

const Link = styled.a`
  margin: 0;
  font-family: 'Stag-Book';
  font-weight: normal;
  font-size: 1.8em;
  letter-spacing: .025em;
  padding: 10px;
`

export default WhitePaper
