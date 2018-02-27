import React, { Component } from 'react'
import { Content } from '../../components/General'

class WhitePaper extends Component {
  goToNext () {
    this.props.history.push('/Blog')
  }

  goBack () {
    this.props.history.goBack()
  }

  render () {
    return (
      <Content>
        White Paper
      </Content>
    )
  }
}

export default WhitePaper
