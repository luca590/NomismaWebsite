import React, { Component } from 'react'
import {
  Aside,
  ContactBar,
  Content,
  TGDescription,
  TGDetail,
  TGNote,
  TGMenuItem,
  TGTitle
} from '../../../../components'
import RTChart from 'react-rt-chart'

import './style.scss'

class Section0 extends Component {
  render () {
    return (
      <Content id='section0' url='/assets/img/background_images.jpg'>
        <ContactBar />
        <Aside>
          <TGMenuItem> Nomisma </TGMenuItem>
        </Aside>
        <div className='content'>
          <RTChart
            fields={['Car','Bus']}
            data={data}
            maxValues={10}
            // flow={flow}
          />
        </div>
      </Content>
    )
  }
}

export default Section0
