import React, { Component } from 'react'
import {
  Aside,
  ContactBar,
  Content,
  InsightsLink,
  LogoImage,
  LogoText,
  TGDetail,
  TGMenuItem,
  TGTitle
} from '../../../../components'

class Section2 extends Component {
  render () {
    return (
      <Content url='/assets/img/background_images2.jpg'>
        <LogoImage src='/assets/img/white-icon.png' width='100' height='100' />
        <LogoText src='/assets/img/logo.png' width='180' height='35' />
        <ContactBar />
        <InsightsLink>INSIGHTS</InsightsLink>
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
    paddingTop: 300,
    paddingRight: 70
  },
  body: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%'
  },
  title: {
    paddingBottom: 50
  },
  content: {
    width: '600px'
  }
}

export default Section2
