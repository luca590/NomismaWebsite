import React, { Component } from 'react'
import {
  Aside,
  ContactBar,
  Content,
  LogoImage,
  LogoText,
  TGDetail,
  TGMenuItem,
  TGTitle
} from '../../../../components'
import './style.scss'

class Section2 extends Component {
  render () {
    return (
      <Content className='section2' url='/assets/img/background_images2.jpg'>
        <LogoImage src='/assets/img/white-icon.png' width='100' height='100' />
        <LogoText src='/assets/img/logo.png' width='180' height='35' />
        <ContactBar />
        <Aside>
          <TGMenuItem> Nomisma </TGMenuItem>
        </Aside>
        <div className='content'>
          <div className='title'>
            <TGTitle> Nomisma </TGTitle>
          </div>
          <div className='body'>
            <div className='description'>
              <TGDetail>
                The wider investment world has only barely begun to invest into the blockchain space, in large part due to the enormous volatility in cryptocurrency prices.
                This type of volatility makes cryptocurrencies an unattractive asset class to many investors, both retail and institutional.
                Extreme price volatility also slows the adoption of various blockchain-enabled innovations, which are often funded through tokens/ICOs in the cryptocurrency space.
              </TGDetail>
            </div>
          </div>
        </div>
      </Content>
    )
  }
}

export default Section2
