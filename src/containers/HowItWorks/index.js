import React, { Component } from 'react'
import { Content } from '../../components/General'

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
        - Finance
        <h1>• Risk sharing by pairing people with different risk appetites</h1>
          <h3>• Like a CCO</h3>
        <h1>• CCO payoff profile is replicated with options/claim contracts</h1>
        <h1>• Can create super senior tranche which leads to a stablecoin</h1>
        <h1>• Can provide risk sharing without taking risk</h1>
        <h1>• Further details</h1>

        <h1>- Tech - Prototype</h1>
        <h1>• Blockchain implementation of smart contracts (in diagram)</h1>
        <h1>• Built on Ethereum</h1>
        <h1>• Process</h1>
          <h3>• User ready to enter a Nomisma facing claim, customizes the claim on the website and clicks to submit it. Nomisma deploys a multi-signature transaction containing the claim details and an escrow account.</h3>
          <h3>• The user is prompted to deposit funds into the escrow along with NBT, the native token to Nomisma, and has an opportunity to view the details of the contract on-chain before it is deployed given her signature. Nomisma co-signs the multi-signature transaction and the claim exists autonomously on the blockchain.</h3>
          <h3>• A final contract receives the funds from the claim contracts, buys the underlying, and settles the claims at maturity. This process is illustrated in the Platform Mechanics Figure below.</h3>
      </Content>
    )
  }
}

export default HowItWorks
