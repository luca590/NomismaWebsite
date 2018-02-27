import React from 'react'
import styled from 'styled-components'

const Sidebar = () => {
  return (
    <Content />
  )
}

const Content = styled.aside`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 25vw;
  background: white;
  height: 100%;
`

export default Sidebar
