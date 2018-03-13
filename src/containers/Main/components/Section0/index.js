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
      BTC: Math.random() * 1000,
      ETH: Math.random() * 1000,
      XRP: Math.random() * 1000,
      BCH: Math.random() * 1000,
      ADA: Math.random() * 1000,
      LTC: Math.random() * 1000,
      XEM: Math.random() * 1000,
      XLM: Math.random() * 1000,
      MIOTA: Math.random() * 1000,
      DASH: Math.random() * 1000,
      NEO: Math.random() * 1000
    })
  }

  render () {
    var data1 = {
      date: new Date(),
      ETH: this.state.ETH,
      BTC: this.state.BTC,
      XRP: this.state.XRP,
      BCH: this.state.BCH,
      ADA: this.state.ADA,
      LTC: this.state.LTC,
      XEM: this.state.XEM,
      XLM: this.state.XLM,
      MIOTA: this.state.MIOTA,
      DASH: this.state.DASH,
      NEO: this.state.NEO
    }
    var data2 = {
      date: new Date(),
      EQUAL_WEIGHT: this.state.ETH,
      TOP6: this.state.BTC
    }
    var flow = {
      duration: 100
    }
    return (
      <Content id='section0'>
        <div className='content'>
          <RTChart
            fields={['BTC', 'ETH', 'XRP', 'BCH', 'ADA', 'LTC', 'XEM', 'XLM', 'MIOTA', 'DASH', 'NEO']}
            types={{'BTC': 'area-spline', 'ETH': 'area-spline', 'XRP': 'area-spline', 'BCH': 'area-spline', 'ADA': 'area-spline', 'LTC': 'area-spline', 'XEM': 'area-spline', 'XLM': 'area-spline', 'MIOTA': 'area-spline', 'DASH': 'area-spline', 'NEO': 'area-spline'}}
            data={data1}
            maxValues={50}
            flow={flow}
            height={500}
          />
        </div>
        <div id='epoch-chart' className='content'>
          <RTChart
            fields={['EQUAL_WEIGHT', 'TOP6']}
            types={{'EQUAL_WEIGHT': 'spline', 'TOP6': 'spline'}}
            data={data2}
            maxValues={50}
            flow={flow}
            height={500}
          />
        </div>
      </Content>
    )
  }
}

export default Section0
