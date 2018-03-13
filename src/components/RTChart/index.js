import React from 'react'
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'
import c3 from 'c3'
import merge from 'deepmerge'
import loadHistoryData from './loadHistoricalData'
import filterReactDomProps from 'filter-react-dom-props'
import './style.scss'
const isDate = (key) => key === 'date'
const isList = (data) => data && data.length
const emptyList = (list) => !isList(list) || list.length === 0
const hasDataProperty = (data) => data.hasOwnProperty('date')

const updateHistoricalData = (props, nextProps) => {
  var lastData = props.initialData
  var nextData = nextProps.initialData

  if (!lastData && !nextData) return false

  if (emptyList(nextData)) return false

  if (emptyList(lastData) && !emptyList(nextData)) {
    return true
  }

  return nextData.length !== lastData.length
}

var RTChart = createReactClass({

  componentDidMount: function () {
    var { initialData, maxValues } = this.props
    this.limit = maxValues || 30
    this.count = isList(initialData) ? initialData.length : 0
    this.initChart(this.props)
  },

  getInitialState: function () {
    return {
      chart: null
    }
  },

  unload () {
    this.state.chart.unload({
      ids: this.props.fields
    })
  },

  resetChart: function () {
    this.unload()
    this.initChart(this.props)
  },

  componentWillReceiveProps: function (nextProps) {
    if (updateHistoricalData(this.props, nextProps)) {
      this.initChart(nextProps)
      return
    }

    if (!this.state.chart) return
    if (!nextProps.data) return

    if (Object.keys(nextProps.data).length < this.props.fields.length) {
      console.warn(`Values has a length of ${nextProps.values.length} but must be the same as fields: ${this.props.fields.length}`)
    }

    if (nextProps.reset) {
      this.resetChart(nextProps)
    }

    var columns = loadHistoryData([nextProps.data], nextProps.fields, this.limit)
    var args = merge({
      columns: columns,
      duration: 400
    }, (this.props.flow || {}))

    if (this.count <= this.limit) this.count++

    if (this.count < this.limit) args['length'] = 0

    this.state.chart.flow(args)
  },

  render: function () {
    return <div {...filterReactDomProps(this.props)} ref='chart' />
  },

  initChart: function (props) {
    if (!props.fields) {
      throw new Error('prop type fields are missing. fields={["field",..]}')
    }

    if (this.state.chart) {
      this.unload()
    }

    var { initialData, chart, fields, types, height } = props

    var defaultColumns = [['x']]

    props.fields.forEach((f) => defaultColumns.push([f]))

    var chartTemp = merge({
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            format: '%H:%M:%S'
          }
        }
      }
    }, (chart || {}))

    var columns = !emptyList(initialData) ? loadHistoryData(initialData, fields, this.limit) : defaultColumns
    chartTemp = merge({
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            format: '%H:%M:%S'
          }
        }
      },
      data: {
        x: 'x',
        columns: columns,
        types: types
      },
      size: {
        height: height
      }
    }, (chart || {}))

    chartTemp.bindto = this.refs.chart

    var chart = c3.generate(chartTemp)

    this.setState({
      chart: chart,
      initialData: initialData
    })
  },

  propTypes: {
    dateFormat: PropTypes.string,
    chart: PropTypes.object,
    fields: PropTypes.array.isRequired,
    maxValues: PropTypes.number
  }
})

module.exports = RTChart
