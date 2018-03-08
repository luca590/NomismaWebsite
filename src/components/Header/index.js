import React from 'react'
import styled from 'styled-components'
import { TopMenu } from '../'
import FontAwesome from 'react-fontawesome'
import './style.scss';

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }
  render () {
    const { isOpen } = this.state
    return (
      <Wrapper id="header">
        <div className="container">
          <LogoImage src='/assets/img/white-icon.png' />
          <LogoText src='/assets/img/logo.png' />
          <MenuButton onClick={() => { this.setState({ isOpen: true }) }}>
            <FontAwesome size='2x' style={{color: 'white'}} name='bars' />
          </MenuButton>
        </div>
        {
          isOpen && <TopMenu onClose={() => { this.setState({ isOpen: false })}} />
        }
      </Wrapper>
    )
  }
}

const Wrapper = styled.header`
  position: absolute;
  left: 0;
  right: 0;
  @media (max-width: 576px) {
    background-color: black;
  }
`
const Content = styled.div`
`

const LogoImage = styled.img`
  position: absolute;
  top: 20px;
  left: 50px;
  width: 100px;
  height: 100px;

  @media (max-width: 576px) {
    width: 60px;
    height: 60px;
  }
`
const LogoText = styled.img`
  object-fit: contain;
  height: 70px;

  @media (max-width: 576px) {
    height: 30px;
  }
`
const MenuButton = styled.div`
  display: none;
  position: absolute;
  top: 35px;
  right: 50px;

  @media (max-width: 576px) {
    display: block;
  }
`

export default Header
