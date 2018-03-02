import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Aside = () => {
  return (
    <AsideContainer>
      <Ul>
        <Li><NavLink to='/' activeClassName='active'>01 INTRODUCTION</NavLink></Li>
        <Li><NavLink to='/whoWeAre' activeClassName='active'>02 EXPERTISE</NavLink></Li>
        <Li><NavLink to='/whatWeDo' activeClassName='active'>03 WHAT SETS US APART</NavLink></Li>
        <Li><NavLink to='/howItWorks' activeClassName='active'>04 HOW IT WORKS</NavLink></Li>
        <Li><NavLink to='/whitePaper' activeClassName='active'>05 WHITE PAPER</NavLink></Li>
        <Li><NavLink to='/getInTouch' activeClassName='active'>Get in touch</NavLink></Li>
      </Ul>
    </AsideContainer>
  )
}

const AsideContainer = styled.div`
  position: absolute;
  padding: 1.5em 1em;
  width: 18rem;
  background: white;
  box-shadow: 0 0 20px 0 black;
  border-radius: 8px;
  margin: 10px;
`

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  // text-align: center;
`

const Li = styled.li`
  padding: 15px;
  a {
    color: gray;
    font-size: 18px;
    text-decoration: none;
    &.active {
      color: green;
    }
  }
`

export default Aside
