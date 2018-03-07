import React, { Component } from 'react'
import { Content, TGTitle, TGDescription, TGNote, TGMenuItem, TGDetail, Aside } from '../../../../components'

class Section1 extends Component {
  render () {
    return (
      <Content url='/assets/img/background_images2.jpg'>
        <Aside>
          <TGMenuItem> Nomisma </TGMenuItem>
        </Aside>
        <div style={styles.container}>
          <div style={styles.body}>
            <div style={styles.title}>
              <TGTitle> Nomisma </TGTitle>
            </div>
            <div style={styles.content}>
              <TGDetail>
                The wider investment world has only barely begun to invest into the blockchain space, in large part due to the enormous volatility in cryptocurrency prices.
                This type of volatility makes cryptocurrencies an unattractive asset class to many investors, both retail and institutional.
                Extreme price volatility also slows the adoption of various blockchain-enabled innovations, which are often funded through tokens/ICOs in the cryptocurrency space.
              </TGDetail>
            </div>
          </div>
        </div>
      </Content>
    )
  }
}

const styles = {
  container: {
    paddingLeft: 300,
    paddingTop: 250,
    paddingRight: 70
  },
  body: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%'
  },
  title: {
    paddingTop: 50,
    paddingBottom: 50
  },
  content: {
    width: '600px'
  }
}

export default Section1
