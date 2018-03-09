import React, { Component } from 'react'

export class Content extends Component {
  constructor (props) {
    super(props)
    this.imageRate = 0.625
  }

  componentDidMount () {
    window.addEventListener('resize', this.onChangeDimensions)
    const self = this
    const image = new Image()
    image.src = this.props.url
    image.onload = function () {
      self.imageRate = this.height / this.width
      self.onChangeDimensions()
    }
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onChangeDimensions)
  }

  onChangeDimensions = () => {
    const element = document.getElementById(this.props.id)
    element.style.position = 'relative'
    element.style.backgroundImage = `url(${this.props.url})`
    if (element.offsetHeight < element.offsetWidth * this.imageRate) {
      element.style.backgroundSize = '100% auto'
    } else {
      element.style.backgroundSize = 'auto 100%'
    }
  }

  render () {
    return (
      <div id={this.props.id}>
        {this.props.children}
      </div>
    )
  }
}

export default Content
