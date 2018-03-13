import React, { Component } from 'react'
import {
  Content,
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

  componentDidMount () {
    setInterval(() => this.updateChartData(), 500)
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
      duration: 200
    }
    return (
      <Content id='section0'>
        <div className='content'>
          <RTChart
            fields={['Car', 'Bus']}
            data={data}
            maxValues={50}
            flow={flow}
          />
        </div>
      </Content>
    )
  }
}

export default Section0
