import React, { Component } from 'react'
import styled from 'styled-components'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'Recharts'

const data = [
  {name: '12/1/1', EQUAL_WEIGHT: 4000, TOP6: 2400, XRP: 2400},
  {name: '12/1/2', EQUAL_WEIGHT: 3000, TOP6: 1398, XRP: 2210},
  {name: '12/1/3', EQUAL_WEIGHT: 2000, TOP6: 9800, XRP: 2290},
  {name: '12/1/4', EQUAL_WEIGHT: 2780, TOP6: 3908, XRP: 2000},
  {name: '12/1/5', EQUAL_WEIGHT: 1890, TOP6: 4800, XRP: 2181},
  {name: '12/1/6', EQUAL_WEIGHT: 2390, TOP6: 3800, XRP: 2500},
  {name: '12/1/7', EQUAL_WEIGHT: 3490, TOP6: 4300, XRP: 2100},
  {name: '12/1/8', EQUAL_WEIGHT: 4000, TOP6: 2400, XRP: 2400},
  {name: '12/1/9', EQUAL_WEIGHT: 3000, TOP6: 1398, XRP: 2210},
  {name: '12/1/10', EQUAL_WEIGHT: 2000, TOP6: 9800, XRP: 2290},
  {name: '12/1/11', EQUAL_WEIGHT: 2780, TOP6: 3908, XRP: 2000},
  {name: '12/1/12', EQUAL_WEIGHT: 1890, TOP6: 4800, XRP: 2181},
  {name: '12/1/13', EQUAL_WEIGHT: 2390, TOP6: 3800, XRP: 2500},
  {name: '12/1/14', EQUAL_WEIGHT: 3490, TOP6: 4300, XRP: 2100},
  {name: '12/1/15', EQUAL_WEIGHT: 4000, TOP6: 2400, XRP: 2400},
  {name: '12/1/16', EQUAL_WEIGHT: 3000, TOP6: 1398, XRP: 2210},
  {name: '12/1/17', EQUAL_WEIGHT: 2000, TOP6: 9800, XRP: 2290},
  {name: '12/1/18', EQUAL_WEIGHT: 2780, TOP6: 3908, XRP: 2000},
  {name: '12/1/19', EQUAL_WEIGHT: 1890, TOP6: 4800, XRP: 2181},
  {name: '12/1/20', EQUAL_WEIGHT: 2390, TOP6: 3800, XRP: 2500},
  {name: '12/1/21', EQUAL_WEIGHT: 3490, TOP6: 4300, XRP: 2100}
]

class RLineChart extends Component {
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
        <LineChart width={this.state.width} height={700} data={data}>
          <XAxis dataKey='name' />
          <YAxis />
          <CartesianGrid strokeDasharray='5 5' />
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey='EQUAL_WEIGHT' stroke='#8884d8' activeDot={{r: 8}} />
          <Line type='monotone' dataKey='TOP6' stroke='#82ca9d' />
        </LineChart>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  padding: 50px 50px 50px 50px;
  height: 800px;
`

export default RLineChart
