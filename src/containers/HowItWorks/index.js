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
        • Risk sharing by pairing people with different risk appetites 
          • Like a CCO
        • CCO payoff profile is replicated with options/claim contracts • Can create super senior tranche which leads to a stablecoin
        • Can provide risk sharing without taking risk
        • Further details
        - Tech
        Tech - Prototype
        Blockchain implementation of smart contracts (in diagram) Built on Ethereum
        Process
        User ready to enter a Nomisma facing claim, customizes the claim on the website and clicks to submit it. Nomisma deploys a multi-signature transaction containing the claim details and an escrow account.
        The user is prompted to deposit funds into the escrow along with NBT, the native token to Nomisma, and has an opportunity to view the details of the contract on-chain before it is deployed given her signature. Nomisma co-signs the multi-signature transaction and the claim exists autonomously on the blockchain.
        A final contract receives the funds from the claim contracts, buys the underlying, and settles the claims at maturity. This process is illustrated in the Platform Mechanics Figure below.
      </Content>
    )
  }
}

export default HowItWorks
