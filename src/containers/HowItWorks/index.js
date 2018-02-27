import React, { Component } from 'react'
import { Content } from '../../components/General'

class HowItWorks extends Component {
  goToNext () {
    this.props.history.push('/WhitePaper')
  }

  goBack () {
    this.props.history.goBack()
  }

  render () {
    return (
      <Content>
        How It Works?
      </Content>
    )
  }
}

export default HowItWorks
