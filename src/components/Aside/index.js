import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Aside = () => {
  return (
    <AsideContainer>
      <Ul>
        <Li><NavLink to='/' activeClassName='active'>INTRODUCTION</NavLink></Li>
        <Li><NavLink to='/whoWeAre' activeClassName='active'>WHO WE ARE</NavLink></Li>
        <Li><NavLink to='/whatWeDo' activeClassName='active'>WHAT WE DO</NavLink></Li>
        <Li><NavLink to='/howItWorks' activeClassName='active'>HOW IT WORKS</NavLink></Li>
        <Li><NavLink to='/whitePaper' activeClassName='active'>WHITE PAPER</NavLink></Li>
        <Li><NavLink to='/getInTouch' activeClassName='active'>GET IN TOUCH</NavLink></Li>
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
