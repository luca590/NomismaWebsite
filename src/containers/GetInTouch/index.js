import React, { Component } from 'react'
import { Content } from '../../components/General'
import { Title, H1, H2, Span } from '../../components'
import styled from 'styled-components'

class GetInTouch extends Component {
  render () {
    return (
      <Content>
        <Title> Get In Touch </Title>
          <H1>Email: nomismafoundation@gmail.com</H1>
          <Link href='https://join.slack.com/t/nomismaworkspace/shared_invite/enQtMzIxNjk5ODExNDc1LWUwOGI2ODk4NzJiMjUzYWRlYjc1MTgxMGE4MmY3NWM2NTJkNDEwNjU4ODU4ZjI4N2YwOTVhNDg4Y2NjOTE0NTI' target="_blank">Slack link </Link>
      </Content>
    )
  }
}

const Link = styled.a`
  margin: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: normal;
  font-size: 1.8em;
  letter-spacing: .025em;
  padding: 10px;
`

export default GetInTouch
