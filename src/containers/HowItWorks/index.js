import React, { Component } from 'react'
import { Content } from '../../components/General'
import { Title, H1, H2 } from '../../components'

class HowItWorks extends Component {
  goToNext () {
    this.props.history.push('/WhitePaper')
  }

  goBack () {
    this.props.history.goBack()
  }

  render () {
    return (
      <Content>
        <Title> How it works </Title>
        <H1>• Tokens will be issued that allow users to face the Nomisma foundation as a trustless counterparty, via smart contracts, to their desired cash flow / risk return profile.</H1>
        <H1>• These tokens will cover transaction costs on the Ethereum blockchain and will embed a small fee per payoff structured and delivered and may entitle holders to the hedging gains generated by the replicating portfolios.</H1>
        <H1>• Users can partake of analytics regarding the pricing of contingent claims on cryptocurrencies / coins. </H1>
        <H1>• Users will be able to generate any contingent claim, single and multiperiod one, facing the foundation. </H1>
        <H2>• For the prototype, users shall be able to define a desired a rate of return vs an acceptance of linear principal loss depending on a coin’s price performance during a specified time period. This will be priced in equilibrium against a claim that pays out a multiple of the original outlay in case of upside performance. </H2>
        <H1>• We will thus be generating coin specific interest rate term structures across time as well as hazard rate / “riskiness” spread curves.</H1>
        <H1>• The end goal is the creation of fixed income claims for each coin.</H1>
      </Content>
    )
  }
}

export default HowItWorks
