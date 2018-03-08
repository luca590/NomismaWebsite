import React from 'react'
import styled from 'styled-components'
import { ContactLink } from '..'

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

class ContactBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  render () {
    const { isOpen } = this.state
    return (
      <Wrapper>
        {
          !isOpen &&
          <ContactLink onClick={() => { this.setState({ isOpen: true }) }}>CONTACT</ContactLink>
        }
        {
          isOpen &&
          <div style={styles.container}>
            <div style={styles.wrapper}>
              <StyledLink href='mailto:nomismafoundation@gmail.com'>
                <i className='fa fa-envelope-o' />
              </StyledLink>
              <CloseButton onClick={() => { this.setState({ isOpen: false }) }}>
                <i className='fa fa-close' />
              </CloseButton>
            </div>
          </div>
        }
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  @media (max-width: 576px) {
    display: none;
  }
`

const styles = {
  container: {
    position: 'absolute',
    left: 0,
    bottom: 50,
    paddingTop: 100,
    paddingBottom: 100,
    width: 800,
    backgroundColor: '#373536',
    textAlign: 'center'
  },
  wrapper: {
    position: 'relative'
  }
}

export default ContactBar
