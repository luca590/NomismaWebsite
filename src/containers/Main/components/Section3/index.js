import React, { Component } from 'react'
import {
  Aside,
  ContactBar,
  Content,
  TGDetail,
  TGMenuItem,
  TGTitle
} from '../../../../components'

import './style.scss'

class Section3 extends Component {
  render () {
    return (
      <Content id='section3' url='/assets/img/background_images3.jpg'>
        <ContactBar />
        <Aside>
          <TGMenuItem> White paper </TGMenuItem>
        </Aside>
        <div className='content'>
          <div className='title'>
            <TGTitle> Abstract </TGTitle>
          </div>
          <div className='body'>
            <div className='detail'>
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
          <a className='link' href='assets/pdf/SummaryDraft_Feb202018HK.pdf' download='SummaryDraft_Feb202018HK.pdf'>Download </a>
        </div>
      </Content>
    )
  }
}

export default Section3
