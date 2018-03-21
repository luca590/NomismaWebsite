import React, { Component } from 'react'
import { RAreaChart, RLineChart, StaticTable, DynamicTable } from '../../components'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'

class Main extends Component {
  render () {
    return (
      <div>
        <RAreaChart />
        <RLineChart />
        <StaticTable />
        <DynamicTable />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    )
  }
}

export default Main
