import React, { Component } from 'react'

import './style.scss'

const ROWS = ['BTC', 'ETH', 'XRP', 'BCH', 'ADA', 'LTC', 'XEM', 'XLM', 'MIOTA', 'DASH', 'NEO', 'XMR', 'BTG', 'QTUM', 'XRB', 'JPY', 'EUR', 'AUD', 'CHF', 'USD',
  'EQUAL_WEIGHT', 'TOP6', 'USCORP', 'USAGG', 'USGOVT', 'GLOBALBOND']
const COLS = ['BTC', 'ETH', 'XRP', 'BCH', 'ADA', 'LTC', 'XEM', 'XLM', 'MIOTA', 'DASH', 'NEO', 'XMR', 'BTG', 'QTUM', 'XRB', 'JPY', 'EUR', 'AUD', 'CHF', 'USD',
  'EQUAL_WEIGHT', 'TOP6', 'USCORP', 'USAGG', 'USGOVT', 'GLOBALBOND']

export class DynamicTable extends Component {
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
        if (ROW === COL) {
          data[ROW][COL] = '1.00'
        }
      })
    })
    this.exData = data
    this.state.data = data
  }

  cellClass () {
    const random = Math.random()
    if (random < 0.1) {
      return 'falling'
    }
    if (random > 0.9) {
      return 'rising'
    }
    return ''
  }

  render () {
    return (
      <div class="table-container">
        <table id='dynamic-table'>
          <thead>
            <tr>
              <td></td>
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
                      <td key={`${ROW}-${COL}`} className={this.cellClass()}>{ this.state.data[ROW][COL] }</td>
                    ))
                  }
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default DynamicTable
