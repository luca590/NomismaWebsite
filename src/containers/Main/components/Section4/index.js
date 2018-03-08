import React, { Component } from 'react'
import {
  Aside,
  Content,
  LogoImage,
  LogoText,
  TGMenuItem,
  TGTitle,
  TGDescription,
  TGProfileListItem,
  ContactBar
} from '../../../../components'
import FontAwesome from 'react-fontawesome'
import './style.scss'

const teamMembers = [
  {
    name: 'Lauren Cohen',
    link: 'https://laurenhcohen.com/'
  },
  {
    name: 'Lucas Gaylord',
    link: 'https://www.linkedin.com/in/lucas-gaylord-0b3a1882/'
  },
  {
    name: 'Kimon Gomozias',
    link: 'https://www.linkedin.com/in/kimon-gkomozias-88994715/'
  },
  {
    name: 'Dimitrios Kavvathas',
    link: 'https://www.linkedin.com/in/dimitrios-kavvathas-3bb3654/'
  },
  {
    name: 'Chris Malloy',
    link: 'https://www.linkedin.com/in/christopher-malloy-5042004/'
  },
  {
    name: 'Dani Mamadou',
    link: 'https://www.linkedin.com/in/danielmamadou/'
  },
  {
    name: 'Barna Semsey',
    link: 'https://www.linkedin.com/in/barna-semsey-bb791/'
  }
]

class Section4 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedProfileIndex: 0
    }
  }
  onSelectProfile (index) {
    this.setState({selectedProfileIndex: index})
    window.open(teamMembers[index].link, '_blank')
  }
  render () {
    return (
      <Content id='section4' url='/assets/img/background_images4.jpg'>
        <LogoImage src='/assets/img/white-icon.png' width='100' height='100' />
        <LogoText src='/assets/img/logo.png' width='180' height='35' />
        <ContactBar />
        <Aside>
          <TGMenuItem> Team </TGMenuItem>
        </Aside>
        <div className='content'>
          <div className='title'>
            <TGTitle> {teamMembers[this.state.selectedProfileIndex].name} </TGTitle>
          </div>
          <div className='body'>
            <div className='description'>
              <TGDescription className='subTitle'>
                Our team members have backgrounds in both institutional and academic finance and economics with a passion for entrepreneurship and financial technology.
              </TGDescription>
            </div>
            <div className='detail'>
              <div className='profileMenu'>
                <ul className='profileMenuContent'>
                  {
                    teamMembers.map((member, index) => (
                      <li key={index} className='prifileList'>
                        <div className='activeIconContainer'>
                          <FontAwesome style={{color: 'white', display: this.state.selectedProfileIndex === index ? 'block' : 'none'}} name='long-arrow-right' />
                        </div>
                        <TGProfileListItem className='activeName' onClick={() => this.onSelectProfile(index)}> {member.name} </TGProfileListItem>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Content>
    )
  }
}

export default Section4
