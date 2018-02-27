import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Aside = () => {
  return (
    <AsideContainer>
      <Ul>
        <Li><NavLink to='/' activeClassName='active'>Introduction</NavLink></Li>
        <Li><NavLink to='/whoWeAre' activeClassName='active'>Who we are</NavLink></Li>
        <Li><NavLink to='/whatWeDo' activeClassName='active'>What we do</NavLink></Li>
        <Li><NavLink to='/howItWorks' activeClassName='active'>How it works</NavLink></Li>
        <Li><NavLink to='/whitePaper' activeClassName='active'>White paper</NavLink></Li>
        <Li><NavLink to='/blog' activeClassName='active'>Blog</NavLink></Li>
        <Li><NavLink to='/getInTouch' activeClassName='active'>Get in touch</NavLink></Li>
      </Ul>
    </AsideContainer>
  )
}

const AsideContainer = styled.div`
  position: absolute;
  padding: 1.5em 1em;
  width: 15rem;
  background: white;
  box-shadow: 0 0 20px 0 black;
  border-radius: 8px;
  margin: 10px;
`

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: center;
`

const Li = styled.li`
  padding: 20px;
  a {
    color: gray;
    font-size: 20px;
    &.active {
      color: green;
    }
  }
`

export default Aside
