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
            <div style={styles.description}>
              <TGDescription style={styles.subTitle}>
                Imperfect as our financial system is, I still find myself admiring it for what it does and imagining how much more impressive it can be in the future.”
              </TGDescription>
              <TGNote>
                Finance and the Good Society, Robert Shiller.
              </TGNote>
            </div>
            <div style={styles.detail}>
              <TGDetail>
                Risk sharing is a cornerstone of finance. Cryptocurrency adoption is hampered by extreme volatility in cryptocurrency prices.
                We are the first to bring a risk sharing solution to the crypto universe. Our key innovation is to use seasoned finance applications and deep financial insights coupled with blockchain technology. If our approach is successful, it is revolutionary for the blockchain ecosystem. Our platform promotes financial system-wide optimal risk sharing by designing and customizing portfolios that deliver fixed income equivalent cash flow profiles with collateralized cryptocurrency underlyings. Our solution makes cryptocurrencies a viable asset class for all investors.
              </TGDetail>
            </div>
          </div>
          <a style={styles.link} href='assets/pdf/SummaryDraft_Feb202018HK.pdf' download='SummaryDraft_Feb202018HK.pdf'>Download </a>
            {/* <a style={styles.link} href='assets/pdf/SummaryDraft_Feb202018HK.pdf' target='_blank'>View </a> */}
        </div>
      </Content>
    )
  }
}

const styles = {
  content: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 300,
    paddingTop: 200,
    paddingRight: 50
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
