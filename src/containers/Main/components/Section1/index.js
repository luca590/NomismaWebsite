import React, { Component } from 'react'
import { Content, TGTitle, TGDescription, TGNote, TGMenuItem, TGDetail, Aside } from '../../../../components'

class Section1 extends Component {
  render () {
    return (
      <Content url='/assets/img/background_images.jpg'>
        <Aside>
          <TGMenuItem> Nomisma </TGMenuItem>
        </Aside>
        <div style={styles.content}>
          <div style={styles.title}>
            <TGTitle> Risk sharing revolutionizes <br /> the cryptocurrency space </TGTitle>
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
  description: {
    flex: 1,
    paddingRight: 50
  },
  subTitle: {
    paddingBottom: 20
  },
  detail: {
    flex: 2
  }
}

export default Section1
