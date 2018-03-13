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
import RTChart from './rt-chart'

import './style.scss'

class Section0 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      car: [],
      bus: []
    }
  }

  componentDidMount() {
    setInterval(() => this.forceUpdate(), 200);
  }

  forceUpdate () {
    this.setState({
      car: 60,
      bus: 30
    })
  }

  getRandomValue () {
    this.setState({
      car: 30,
      bus: 50
    })
  }

  render () {
    var data = {
      date: new Date(),
      Car: this.state.car,
      Bus: this.state.bus
    }
    var flow = {
      duration: 1000
    }
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
