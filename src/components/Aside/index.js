import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Aside = (props) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 300px;
  left: 50px;
  width: 250px;
  color: white;
`

export default Aside
