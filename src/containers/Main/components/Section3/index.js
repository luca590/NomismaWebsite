import React, { Component } from 'react'
import { Content, TGTitle, TGDescription, TGNote, TGMenuItem, TGDetail, Aside } from '../../../../components'

class Section3 extends Component {
  render () {
    return (
      <Content url='/assets/img/background_images3.jpg'>
        <Aside>
          <TGMenuItem> White paper </TGMenuItem>
        </Aside>
        <div style={styles.content}>
          <div style={styles.title}>
            <TGTitle> Abstract </TGTitle>
          </div>
          <div style={styles.body}>
            <div style={styles.detail}>
              <TGDetail>
                Risk sharing is the basic function of finance. Meanwhile, the broad adoption of cryptocurrencies 
                and the expansion of the entire blockchain ecosystem are hampered by the extreme volatility of 
                cryptocurrency prices. We propose the adaptation of seasoned finance applications with an eye 
                towards revolutionizing the blockchain ecosystem. To do so, we create a new platform that 
                promotesfinancial system-wide optimal risk sharing by designing and customizing portfolios that 
                deliver fixed income equivalent cash flow profiles with collateralized cryptocurrency underlyings. 
                Our solution increases the appeal of blockchain investments to the average investor, both retail 
                and institutional. The implications of allowing investor separation along the risk aversion and 
                diversification spectrum, by enabling the generation of collateralized cash flow streams tranched 
                according to risk preferences and liquidity profiles, are profound.
              </TGDetail>
            </div>
          </div>
          <a style={styles.link} href='assets/pdf/SummaryDraft_Feb202018HK.pdf' download='SummaryDraft_Feb202018HK.pdf'>Download </a>
        </div>
      </Content>
    )
  }
}

const styles = {
  content: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 200,
    paddingRight: 400,
    paddingLeft: 400
  },
  title: {
    padding: 50
  },
  body: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row'
  },
  footer: {
    height: '10%'
  },
  description: {
    flex: 1,
    paddingRight: 50
  },
  subTitle: {
    paddingBottom: 20
  },
  detail: {
    flex: 2
  },
  link: {
    position: 'absolute',
    bottom: 30,
    right: 100,
    fontFamily: 'Stag-Book',
    fontWeight: 'normal',
    fontSize: 20,
    padding: 10,
    color: 'white'
  }
}

export default Section3
