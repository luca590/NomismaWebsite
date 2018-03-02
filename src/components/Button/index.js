import React from 'react'
// import Spinner from '../Spinner'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

class Button extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      hover: false
    }
  }

  hover () {
    if (this.props.hoverLabel !== '') {
      return
    }
    this.setState({
      hover: !this.state.hover
    })
  }
  render () {
    const { label, hoverLabel, transitionLabel } = this.props
    const { hover } = this.state

    let displayLabel = label
    if (hover && hoverLabel !== '') {
      displayLabel = hoverLabel
    }

    return (
      <ButtonItem {...this.props} onMouseOver={() => this.hover()} onMouseOut={() => this.hover()} onClick={() => this.props.onClickEvent()}>
        <Label visible={this.state.hover} {...this.props}>{displayLabel}</Label>
        {
          this.props.transition &&
          <TransitionLabel visible={this.state.hover} {...this.props}>
            {transitionLabel}
          </TransitionLabel>
        }
        {
          this.props.loading &&
          <LoadingLabel {...this.props}>
            <span>
              {this.props.loadingLabel}
            </span>
            {/* <Spinner active {...this.props} /> */}
          </LoadingLabel>
        }
      </ButtonItem>
    )
  }
}

const ButtonItem = styled.button`
    display: ${props => props.display};
    position: relative;
    margin: 0;
    padding: .375em 1.2em;
    height: auto;
    overflow: hidden;
    cursor: pointer;
    border-style: solid;
    border-width: 0;
    border-radius: 2px;
    user-select: none;
    appearance: none;
    font-family: 'proxima-nova', 'Helvetica Neue', helvetica, sans-serif;
    font-weight: 600;
    font-size: .85em;
    line-height: 1.5;
    letter-spacing: .075em;
    text-align: center;
    white-space: nowrap;
    background: #e7e7e7;
    color: #ffffff;
    transition: all 0.3s ease;
    overflow: hidden;

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(.96);
  }

  ${props => props.tooltip && css`
    overflow: visible;
    vertical-align: top;
  `}

  ${props => props.primary && css`
    background: #1fe9ae;
    color: #ffffff;
  `}
  
  ${props => props.fancy && css`
    background: #1fe9ae;
    background-image: linear-gradient(-85deg, #1fe9ae 0%, 3ed3cf 100%);
    color: #ffffff
  `}

  ${props => props.secondary && css`
    background: #2d2d2d;
    color: #ffffff;
  `}

  ${props => props.danger && css`
    background: #e74c3c;
    color: #ffffff;
  `}

  ${props => props.text && css`
    background: transparent;
    color: gray;

    &:hover {
      color: #2d2d2d;
    }
  `}

  ${props => props.outlined && css`
      padding-top: calc(.375em - 2px);
      padding-bottom: calc(.375em - 2px);
      background: #ffffff;
      border: 2px solid #626262;
      color: #626262;
    ${props => !props.transition && css`
      &:hover {
        background: #626262;
        color: #ffffff;
      }
    `}
    
  `}

  ${props => props.pill && css`
    border-radius: 10em;
  `}

  ${props => props.sm && css`
    padding: .40em .95em;
    font-size: .7em;
    line-height: 1em;
  `}

  ${props => props.lg && css`
    padding: .65em 2em;
    font-size: 1em;
  `}

  ${props => props.loading && css`
    pointer-events: none;
    color: transparent;
  `}
`
const LoadingLabel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: transparent;
  transition: all .5s linear, transform .1s ease;
`
const TransitionLabel = styled.span`
    position: static;
    width: 100%;
    display: block;
    transition: all 0.3s ease;
    background: inherit;
    color: inherit;
    transform: translateY(-60px);
    height: 0;
  ${props => props.visible && css`
    height: auto;
    transform: translateY(0);
  `}
`
const Label = styled.span`
    position: static;
    width: 100%;
    display: block;
    transition: all 0.3s ease;
    transform: translateY(0);
  ${props => props.visible && props.transition && css`
    transform: translateY(60px);
    height: 0;
  `}
`

Button.defaultProps = {
  display: 'block',
  loading: false,
  hoverLabel: '',
  width: 'auto',
  loadingLabel: 'Loading..',
  onClickEvent: () => { console.log(`onClick event.`) }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  display: PropTypes.string,
  hoverLabel: PropTypes.string,
  loadingLabel: PropTypes.string,
  loading: PropTypes.bool,
  primary: PropTypes.bool,
  bordered: PropTypes.bool,
  pill: PropTypes.bool,
  lg: PropTypes.bool,
  onClickEvent: PropTypes.func
}

export default Button
