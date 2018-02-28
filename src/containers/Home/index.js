import React, { Component } from 'react'
import { Content } from '../../components/General'
import { H1, H2, Span } from '../../components'

class Home extends Component {
  render () {
    return (
      <Content>
        <H1>Quote:<Span italic>“Imperfect as our financial system is, I still find myself admiring it for what it does and imagining how much more impressive it can be in the future.” Finance and the Good Society, by Robert Shiller.”</Span></H1><br/><br/>
        <H1>• Risk sharing is the basic function of finance. Meanwhile, the broad adoption of cryptocurrencies is hampered by the extreme volatility of cryptocurrency prices.</H1>
        <H1>• To our knowledge we are the first to bring this function to cryptocurrencies</H1>
        <H1>• Main distinction of our solution is we use seasoned finance applications and deep financial insights coupled with blockchain tech</H1>
        <H2>• If our approach is successful, it is revolutionary for the blockchain ecosystem</H2>
        <H1>• We create a new platform that promotes financial system-wide optimal risk sharing by designing and customizing portfolios that deliver fixed income equivalent cash flow profiles with collateralized cryptocurrency underlyings</H1>
        <H1>• Intend to bring non-crypto investors into crypto</H1>
      </Content>
    )
  }
}

export default Home
