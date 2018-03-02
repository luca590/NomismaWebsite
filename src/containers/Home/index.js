import React, { Component } from 'react'
import { Content } from '../../components/General'
import { TGTitle, TGDescription, TGDetail } from '../../components'

class Home extends Component {
  render () {
    return (
      <Content>
        {/* <Button
          label='Prototype'
          transitionLabel='Home Page'
          fancy pill transition lg
          onClick={() => window.open('http://54.161.220.200', '_self')}
        /> */}
        <TGTitle> Risk sharing revolutionizes <br /> the cryptocurrency space </TGTitle>
        <div style={styles.content}>
          <div style={styles.description}>
            <TGDescription>
              Imperfect as our financial system is, I still find myself admiring it for what it does and imagining how much more impressive it can be in the future.”
            </TGDescription>
            <TGDescription italic>
              Finance and the Good Society, Robert Shiller.
            </TGDescription>
          </div>
          <div style={styles.detail}>
            <TGDetail>
              Risk sharing is a cornerstone of  nance. Cryptocurrency adoption is hampered by extreme volatility in cryptocurrency prices. <br /> <br />
              We are the  rst to bring a risk sharing solution to the crypto universe. Our key innovation is to use seasoned  nance applications and deep  nancial insights coupled with blockchain technology. If our approach is successful, it is revolutionary for the blockchain ecosystem. Our platform promotes  nancial system-wide optimal risk sharing by designing and customizing portfolios that deliver  xed income equivalent cash  ow pro les with collateralized cryptocurrency underlyings. Our solution makes cryptocurrencies a viable asset class for all investors.
            </TGDetail>
          </div>
        </div>

        <TGTitle> The problem </TGTitle>
        <div style={styles.content}>
          <div style={styles.detail}>
            <TGDetail>
              The wider investment world has only barely begun to invest into the blockchain space, in large part due to the enormous volatility in cryptocurrency prices. <br /> <br />
              This type of volatility makes cryptocurrencies an unattractive asset class to many investors, both retail and institutional. <br /> <br />
              Extreme price volatility also slows the adoption of various blockchain-enabled innovations, which are often funded through tokens/ICOs in the cryptocurrency space.
            </TGDetail>
          </div>
        </div>

        <TGTitle> Market size </TGTitle>
        <div style={styles.content}>
          <div style={styles.description}>
            <TGDescription>
            Cryptocurrencies currently account for a very small percentage of the global market portfolio, less than 0.1% of its value (roughly $0.575 trillion USD out of $605 trillion USD).
            </TGDescription>
          </div>
          <div style={styles.detail}>
            <TGDetail>
              Cryptocurrencies’ capitalization has reached roughly 7% of the gold’s market capitalization already, despite their relatively recent introduction. <br /> <br />
              Gold and crypto-assets constitute no-one’s liability; the element of “trust” underpinning their continual function as a store of value can be further enhanced and “ nancialized” by introducing claims collateralized by the  nancial system’s / community’s belief in its eventual exchange value at extreme events.
            </TGDetail>
          </div>
        </div>

        <TGTitle> The solution </TGTitle>
        <div style={styles.content}>
          <div style={styles.description}>
            <TGDescription>
              Nomisma and Risk Sharing on the Blockchain
            </TGDescription>
          </div>
          <div style={styles.detail}>
            <TGDetail>
              Risk sharing and diversi cation are core concepts in  nance.A fundamental application of  nance theory is the creation of tools to customize desired cash  ow/investment pro les in line with the risk tolerances of investors.The Nomisma Foundation is a new platform designed to structure and price contingent claims that span the cryptocurrency state space and thus generate  xed income and option claims. <br />
              These claims allow users to match their desired cash  ow / risk return pro le commensurate to the risk they are willing to undertake.
            </TGDetail>
          </div>
        </div>
        <div style={styles.content}>
          <div style={styles.description}>
            <TGDescription>
            Expansion and Transformation
            </TGDescription>
          </div>
          <div style={styles.detail}>
            <TGDetail>
            In the second stage we will introduce portfolio pricing and the ability to take advantage of the coin universe cross-correlation variance/covariance properties.
            </TGDetail>
          </div>
        </div>
        <div style={styles.content}>
          <div style={styles.description}>
            <TGDescription>
            Cryptocurrency Clearinghouse
            </TGDescription>
          </div>
          <div style={styles.detail}>
            <TGDetail>
            Our expertise in modelling, structuring, risk managing CCOs will be shared with token holders so as to create the ecosystem critical mass that will allow securitization mechanism properties to render crypto universe amenable to tailoring cash  ow pro les according to users’ risk tolerance and desired payoff pro les.
            </TGDetail>
          </div>
        </div>
        <div style={styles.content}>
          <div style={styles.description}>
            <TGDescription>
            Cryptocurrency Rating Agency
            </TGDescription>
          </div>
          <div style={styles.detail}>
            <TGDetail>
            We will create a transparent methodology to rate exposures riskiness depending on market information. <br />
            Cryptocurrency Trading for All Investor Categories: <br />
            The platform will provide opportunity for “coin-pickers” to leverage their expertise and “late-adopters”/ “risk averse”/ “crypto-naïve” users (individual or institutions) to be exposed to quanti ed remote to spot events against a  xed income return
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
  }
}

export default Home
