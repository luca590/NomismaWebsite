import React, { Component } from 'react'
import { Content, TGTitle, TGDescription, TGDetail } from '../../components'

class WhatWeDo extends Component {
  render () {
    return (
      <Content>
        <TGTitle> Stability <span style={styles.italic}> where it is least expected </span> </TGTitle>
        <div style={styles.content}>
          <div style={styles.description}>
            <TGDescription>
            Risk sharing and diversification are core concepts in finance. A fundamental application of finance theory is the creation of tools to customize desired cash flow/investment pro les in line with the risk tolerances of investors.
            </TGDescription>
          </div>
          <div style={styles.detail}>
            <TGDetail>
              The Nomisma Foundation is a new platform designed to structure and price contingent claims that span the cryptocurrency state space and thus generate fixed income and option claims. These claims allow users to match their desired cash flow / risk return profile commensurate to the risk they are willing to undertake.
            </TGDetail>
          </div>
        </div>
      </Content>
    )
  }
}

const styles = {
  content: {
    flex: 1,
    flexDirection: 'column'
  },
  description: {
    flex: 1
  },
  detail: {
    flex: 2
  },
  italic: {
    fontStyle: 'italic'
  }
}

export default WhatWeDo
