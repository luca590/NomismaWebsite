import React from 'react'
import styled from 'styled-components'

class Header extends React.Component {
  render () {
    return (
      <Wrapper>
        <Content>
          header
        </Content>
      </Wrapper>
    )
  }
}

const Wrapper = styled.header`
  margin-right: 25vw;
`
const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 2rem;
`

export default Header