import React, { Component } from 'react'

import './style.scss'

const ROWS = ['BTC', 'ETH', 'XRP', 'BCH', 'ADA', 'LTC', 'XEM', 'XLM', 'MIOTA', 'DASH', 'NEO', 'XMR', 'BTG', 'QTUM', 'XRB', 'JPY', 'EUR', 'AUD', 'CHF', 'USD']
const COLS = ['MeanDailyLogret', 'AnnualizedVol', 'Kurtosis', 'Skewness', 'MaxDailyPercent', 'MinDailyPercent', 'Sharpe Ratio']

export class StaticTable extends Component {
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
      COLS.forEach((COL, index) => {
        data[ROW][COL] = (Math.random() * 10).toFixed(2)
        if (index < 2) {
          data[ROW][COL] = `${data[ROW][COL]}%`
        }
      })
    })
    this.exData = data
    this.state.data = data
  }

  render () {
    return (
      <table id="static-table">
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
          <tr className="row-total">
            <td>
              EQUAL WEIGHT<br />
              CRYPTO PORTFOLIO
            </td>
            {
              COLS.map(COL => (
                <td key={`SUM1-${COL}`}><br />{ this.state.data[ROWS[0]][COL] }</td>
              ))
            }
          </tr>
          <tr className="row-top6">
            <td>
              TOP6 CRYPTO<br />
              PORTFOLIO
            </td>
            {
              COLS.map(COL => (
                <td key={`SUM2-${COL}`}><br />{ this.state.data[ROWS[1]][COL] }</td>
              ))
            }
          </tr>
        </tbody>
      </table>
    )
  }
}

export default StaticTable
