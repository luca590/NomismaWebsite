import React from 'react'
import styled from 'styled-components'
import { TopMenuButton, LogoImage, LogoText, TGMenuItem } from '..'
import FontAwesome from 'react-fontawesome'

const StyledLink = styled.a`
  margin-left: 20px;
  margin-right: 20px;
  font-size: 50px;
  color: #FFF;
`

const CloseButton = styled.a`
  position: absolute;
  right: 100px;
  font-size: 50px;
  color: #FFF;
`

class TopMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  render () {
    const { isOpen } = this.state
    return (
      <div>
        {
          !isOpen &&
          <TopMenuButton onClick={() => { this.setState({ isOpen: true }) }}>
            <FontAwesome size='3x' style={{color: 'white'}} name='bars' />
          </TopMenuButton>
        }
        {
          isOpen &&
          <div style={styles.container}>
            <div style={styles.topbar}>
              <LogoImage style={styles.logoImage} src='/assets/img/white-icon.png' width='100' height='100' />
              <LogoText style={styles.logoText} src='/assets/img/logo.png' width='180' height='35' />
              <CloseButton style={styles.closeButton} onClick={() => { this.setState({ isOpen: false }) }}>
                <i className='fa fa-close' />
              </CloseButton>
            </div>
            <div style={styles.wrapper}>
              <TGMenuItem style={styles.menuItem}> Nomisma </TGMenuItem>
              <TGMenuItem style={styles.menuItem}> White paper </TGMenuItem>
              <TGMenuItem style={styles.menuItem}> Team </TGMenuItem>
              </div>
          </div>
        }
      </div>
    )
  }
}

const styles = {
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    padding: 50,
    // paddingBottom: 100,
    width: '100%',
    backgroundColor: '#373536',
    textAlign: 'center',
    zIndex: 1
  },
  topbar: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoImage: {
    position: 'relative',
    top: 'auto',
    left: 'auto',
    resizeMode: 'contain'
  },
  logoText: {
    position: 'relative',
    top: 'auto',
    right: 'auto',
    flex: 1
  },
  closeButton: {
    position: 'relative',
    top: 'auto',
    right: 'auto'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column'
  },
  menuItem: {
    marginTop: 30,
  }
}

export default TopMenu
