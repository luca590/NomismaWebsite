import React, { Component } from 'react'
import {
  Aside,
  ContactBar,
  Content,
  TGDescription,
  TGDetail,
  TGNote,
  TGMenuItem,
  TGTitle,
  RTChart
} from '../../../../components'

import './style.scss'

class Section0 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      car: 0,
      bus: 0
    }
  }

  componentDidMount() {
    setInterval(() => this.updateChartData(), 200);
  }

  updateChartData () {
    this.setState({
      car: Math.random() * 1000,
      bus: Math.random() * 1000
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
        <div className='content'>
          <RTChart
            fields={['Car','Bus']}
            data={data}
            maxValues={100}
            // flow={flow}
          />
        </div>
      </Content>
    )
  }
}

export default Section0
