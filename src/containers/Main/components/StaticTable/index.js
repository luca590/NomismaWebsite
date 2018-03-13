import React, { Component } from 'react'
import { Content } from '../../../../components'

import './style.scss'

const ROWS = ['BTC', 'ETH', 'XRP', 'BCH', 'ADA', 'LTC', 'XEM', 'XLM', 'MIOTA', 'DASH', 'NEO', 'XMR', 'BTG', 'QTUM', 'XRB', 'JPY', 'EUR', 'AUD', 'CHF', 'USD']
const COLS = ['MeanDailyLogret', 'AnnualizedVol', 'Kurtosis', 'Skewness', 'MaxDailyPercent', 'MinDailyPercent', 'Sharpe Ratio']

class StaticTable extends Component {
  constructor (props) {
    super(props)
    this.exData = null
    this.state = {
      data: null
    }
    this.initData()
  }

  initData () {
    const data = {}
    ROWS.forEach((ROW) => {
      data[ROW] = {}
      COLS.forEach((COL) => {
        data[ROW][COL] = (Math.random() * 10).toFixed(2)
      })
    })
    this.exData = data
    this.state.data = data
  }

  render () {
    return (
      <Content id='live-table'>
        <table>
          <thead>
            <tr>
              <td>TICKER</td>
              {
                COLS.map(COL => (
                  <td key={COL}>{ COL }</td>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {
              ROWS.map(ROW => (
                <tr key={ROW}>
                  <td>{ ROW }</td>
                  {
                    COLS.map(COL => (
                      <td key={`${ROW}-${COL}`}>{ this.state.data[ROW][COL] }</td>
                    ))
                  }
                </tr>
              ))
            }
          </tbody>
        </table>
      </Content>
    )
  }
}

export default StaticTable
