import React, { Component } from 'react'
import styled from 'styled-components'
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'Recharts'

const data = [
  {name: '12/1/1', BTC: 4000, ETH: 2400, XRP: 2400},
  {name: '12/1/2', BTC: 3000, ETH: 1398, XRP: 2210},
  {name: '12/1/3', BTC: 2000, ETH: 9800, XRP: 2290},
  {name: '12/1/4', BTC: 2780, ETH: 3908, XRP: 2000},
  {name: '12/1/5', BTC: 1890, ETH: 4800, XRP: 2181},
  {name: '12/1/6', BTC: 2390, ETH: 3800, XRP: 2500},
  {name: '12/1/7', BTC: 3490, ETH: 4300, XRP: 2100},
  {name: '12/1/8', BTC: 4000, ETH: 2400, XRP: 2400},
  {name: '12/1/9', BTC: 3000, ETH: 1398, XRP: 2210},
  {name: '12/1/10', BTC: 2000, ETH: 9800, XRP: 2290},
  {name: '12/1/11', BTC: 2780, ETH: 3908, XRP: 2000},
  {name: '12/1/12', BTC: 1890, ETH: 4800, XRP: 2181},
  {name: '12/1/13', BTC: 2390, ETH: 3800, XRP: 2500},
  {name: '12/1/14', BTC: 3490, ETH: 4300, XRP: 2100},
  {name: '12/1/15', BTC: 4000, ETH: 2400, XRP: 2400},
  {name: '12/1/16', BTC: 3000, ETH: 1398, XRP: 2210},
  {name: '12/1/17', BTC: 2000, ETH: 9800, XRP: 2290},
  {name: '12/1/18', BTC: 2780, ETH: 3908, XRP: 2000},
  {name: '12/1/19', BTC: 1890, ETH: 4800, XRP: 2181},
  {name: '12/1/20', BTC: 2390, ETH: 3800, XRP: 2500},
  {name: '12/1/21', BTC: 3490, ETH: 4300, XRP: 2100}
]

class RAreaChart extends Component {
  constructor (props) {
    super(props)
    this.state = {
      width: window.innerWidth * 0.9
    }
  }
  componentDidMount () {
    window.addEventListener('resize', this.onChangeDimensions)
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.onChangeDimensions)
  }
  onChangeDimensions = () => {
    this.setState({
      width: window.innerWidth * 0.9
    })
  }

  render () {
    return (
      <Wrapper>
        <AreaChart width={this.state.width} height={700} data={data}>
          <XAxis dataKey='name' />
          <YAxis />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Legend />
          <Area type='monotone' dataKey='BTC' stackId='1' stroke='#8884d8' fill='#8884d8' />
          <Area type='monotone' dataKey='ETH' stackId='1' stroke='#82ca9d' fill='#82ca9d' />
          <Area type='monotone' dataKey='XRP' stackId='1' stroke='#ffc658' fill='#ffc658' />
        </AreaChart>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  padding: 150px 50px 50px 50px;
  height: 800px;
`

export default RAreaChart
