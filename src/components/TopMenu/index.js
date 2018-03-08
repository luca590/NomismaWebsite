import React from 'react'
import styled from 'styled-components'
import { TopMenuButton, TGMenuItem } from '..'
import FontAwesome from 'react-fontawesome'

class TopMenu extends React.Component {
  render () {
    return (
      <div style={styles.container}>
        <TopBar>
          <LogoImage src='/assets/img/white-icon.png' />
          <LogoText src='/assets/img/logo.png' />
          <CloseButton onClick={() => { this.props.onClose() }}>
            <FontAwesome size='2x' style={{color: 'white'}} name='close' />
          </CloseButton>
        </TopBar>
        <div style={styles.wrapper}>
          <TGMenuItem style={styles.menuItem}> Nomisma </TGMenuItem>
          <TGMenuItem style={styles.menuItem}> White paper </TGMenuItem>
          <TGMenuItem style={styles.menuItem}> Team </TGMenuItem>
          </div>
      </div>
    )
  }
}

const TopBar = styled.div`
  position: relative;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
`

const LogoImage = styled.img`
  position: absolute;
  top: 20px;
  left: 50px;
  width: 60px;
  height: 60px;
`
const LogoText = styled.img`
  object-fit: contain;
  height: 30px;
`

const CloseButton = styled.div`
  position: absolute;
  top: 35px;
  right: 50px;
  display: block;

  @media (max-width: 768px) {
  }
`

const styles = {
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    backgroundColor: 'black',
    textAlign: 'center',
    zIndex: 1
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    padding: 50
  },
  menuItem: {
    marginTop: 30,
  }
}

export default TopMenu
