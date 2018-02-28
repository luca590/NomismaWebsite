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
        <a href='https://www.dropbox.com/s/3x69yds1a62s3ei/SummaryDraft_Feb202018HK.pdf?dl=0'> Download White Paper</a>
      </Content>
    )
  }
}

export default WhitePaper
