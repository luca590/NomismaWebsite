import React, { Component } from 'react'
import styled from 'styled-components'
import { Content } from '../../components/General'
import { Title, H1, H2, Span } from '../../components'

class Home extends Component {
  render () {
    return (
      <Content>
        <Link href='http://54.161.220.200'>Home Page</Link>
        <Title> Introduction </Title>
        <H1>Quote:<Span italic>“Imperfect as our financial system is, I still find myself admiring it for what it does and imagining how much more impressive it can be in the future.” Finance and the Good Society, by Robert Shiller.”</Span></H1><br /><br />
        <H1> Risk sharing is the basic function of finance. Meanwhile, the broad adoption of cryptocurrencies is hampered by the extreme volatility of cryptocurrency prices.</H1>
        <H1> To our knowledge we are the first to bring this function to cryptocurrencies</H1>
        <H1> Main distinction of our solution is we use seasoned finance applications and deep financial insights coupled with blockchain tech</H1>
        <H2> If our approach is successful, it is revolutionary for the blockchain ecosystem</H2>
        <H1> We create a new platform that promotes financial system-wide optimal risk sharing by designing and customizing portfolios that deliver fixed income equivalent cash flow profiles with collateralized cryptocurrency underlyings</H1>
        <H1> Intend to bring non-crypto investors into crypto</H1>

        <Title> The Problem </Title>
        <H1> The Problem</H1>
        <H1> The wider investment world has only barely begun to invest into the blockchain space, in large part due to the enormous volatility in cryptocurrency prices. </H1>
        <H1> This type of volatility makes cryptocurrencies an unattractive asset class to many investors, both retail and institutional.</H1>
        <H1> Extreme price volatility also slows the adoption of various blockchain-enabled innovations, which are often funded through tokens/ICOs in the cryptocurrency space.</H1>

        <Title> Market Size </Title>
        <H1> The Size and Characteristics of the Market</H1>
        <H1> Cryptocurrencies currently account for a very small percentage of the global market portfolio, less than 0.1% of its value (roughly $0.575 trillion USD out of $605 trillion USD).</H1>
        <H1> Cryptocurrencies’ capitalization has reached roughly 7% of the gold’s market capitalization already, despite their relatively recent introduction.</H1>
        <H1> Gold and crypto-assets constitute no-one’s liability; the element of “trust” underpinning their continual function as a store of value can be further enhanced and “financialized” by introducing claims collateralized by the financial system’s / community’s belief in its eventual exchange value at extreme events.</H1>

        <Title> Solution </Title>
        <H1> The Solution: Nomisma and Risk Sharing on the Blockchain</H1>
        <H1> Risk sharing and diversification are core concepts in finance.  A fundamental application of finance theory is the creation of tools to customize desired cash flow/investment profiles in line with the risk tolerances of investors. </H1>
        <H1> The Nomisma Foundation is a new platform designed to structure and price contingent claims that span the cryptocurrency state space and thus generate fixed income and option claims.</H1>
        <H1> These claims allow users to match their desired cash flow / risk return profile commensurate to the risk they are willing to undertake.</H1>

        <Title> Expansion and Transformation </Title>
        <H1> In the second stage we will introduce portfolio pricing and the ability to take advantage of the coin universe cross-correlation variance/covariance properties. </H1>
        <H1> Cryptocurrency Clearinghouse:</H1>
        <H2> Our expertise in modelling, structuring, risk managing CCOs will be shared with token holders so as to create the ecosystem critical mass that will allow securitization mechanism properties to render crypto universe amenable to tailoring cash flow profiles according to users’ risk tolerance and desired payoff profiles.</H2>
        <H1> Cryptocurrency Rating Agency:</H1>
        <H2> We will create a transparent methodology to rate exposures riskiness depending on market information.</H2>
        <H1> Cryptocurrency Trading for All Investor Categories:</H1>
        <H2> The platform will provide opportunity for “coin-pickers” to leverage their expertise and “late-adopters”/ “risk averse”/ “crypto-naïve” users (individual or institutions) to be exposed to quantified remote to spot events against a fixed income return</H2>

        <Title> The Creation of the Nomisma Stablecoin: </Title>
        <H1> What is money? </H1>
        <H2> Money is a liability created by the official sector and backed by its tax raising capacity. </H2>
        <H2> The best that a cryptocurrency can hope for in its “money-as-asset” generating function is to isolate the “user-implied” safe component of each coin as well as the “safe component” + “crypto universe correlated crash risk” of a perfectly diversified coin portfolio.</H2>
        <H1> How does one ensure the stability of a cryptocoin versus a designated fiat currency? </H1>
        <H2> We are not providing an accounting algorithm that generates or destroys coins so as to maintain parity with fiat. </H2>
        <H2> A coin-specific stablecoin is defined as the downside strike price for the short put on the underlying that implies an interest rate equivalent to the designated fiat currency. This self-reconstitutes based on oracles’ signals so as to maintain fiat currency claim equivalence. </H2>
        <H2> There is no artificial limited supply; it is embedded via the supply constraints of each underlying, but translates each coin’s stability, user perception of future returns and relative desirability into a market determined fiat equivalence. Some coins may be able to support stablecoin minting, some not, and some may be able to do so only for certain tenors.</H2>
        <H1> Our structuring platform, by offering the ability for the user community to independently, transparently converge towards a solution, will allow the creation of crypto-backed privately generated “safe assets” in a world which suffers from a shortage of such assets.</H1>

        <Title> Conclusion </Title>
        <H1> Nomisma is a new platform that promotes system-wide risk sharing and cash profile/payoff tailoring according to risk tolerance and cash flow preferences.</H1>
        <H1> Our solution increases the appeal of blockchain investments to the average investor, both retail and institutional. </H1>
        <H1> As added benefits, the platform will introduce: a) a robust, fungible, and transparent Nomisma Stablecoin, exhibiting all the characteristics of optimal privately produced money; b) a smart contract based clearinghouse; c) a crowdsourced/market-based creditworthiness assignment engine, and d) a mechanism to match managers with alpha-generating capacity to those looking to hedge or enter the crypto space at varying levels of risk tolerance.</H1>
        <H1> More generally, Nomisma is a comprehensive intermediation platform that will help incentivize investment into the cryptocurrency space and spawn the next generation of innovation on the blockchain.</H1>

      </Content>
    )
  }
}

const Link = styled.a`
  position: absolute;
  right: 10;
  margin: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: normal;
  font-size: 1.8em;
  letter-spacing: .025em;
  padding: 10px;
`

export default Home
