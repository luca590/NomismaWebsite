import React from 'react'
import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: url(${props => props.url})
`
