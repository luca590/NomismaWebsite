import React, { Component } from 'react'
import {
  Aside,
  ContactBar,
  Content,
  LogoImage,
  LogoText,
  TGDescription,
  TGDetail,
  TGNote,
  TGMenuItem,
  TGTitle
} from '../../../../components'

import './style.scss'

class Section1 extends Component {
  render () {
    return (
      <Content className='section1' url='/assets/img/background_images.jpg'>
        <LogoImage src='/assets/img/white-icon.png' width='100' height='100' />
        <LogoText src='/assets/img/logo.png' width='180' height='35' />
        <ContactBar />
        <Aside>
          <TGMenuItem> Nomisma </TGMenuItem>
        </Aside>
        <div className='content'>
          <div className='title'>
            <TGTitle> Risk sharing revolutionizes the cryptocurrency space </TGTitle>
          </div>
          <div className='body'>
            <div className='description'>
              <TGDescription className='subTitle'>
                Imperfect as our financial system is, I still find myself admiring it for what it does and imagining how much more impressive it can be in the future.”
              </TGDescription>
              <TGNote>
                Finance and the Good Society, Robert Shiller.
              </TGNote>
            </div>
            <div className='detail'>
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

export default Section1
