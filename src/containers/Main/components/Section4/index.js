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
      <Content url='/assets/img/background_images4.jpg'>
        <LogoImage src='/assets/img/white-icon.png' width='100' height='100' />
        <LogoText src='/assets/img/logo.png' width='180' height='35' />
        <ContactBar />
        <Aside>
          <TGMenuItem> Team </TGMenuItem>
        </Aside>
        <div style={styles.content}>
          <div style={styles.title}>
            <TGTitle> {teamMembers[this.state.selectedProfileIndex].name} </TGTitle>
          </div>
          <div style={styles.body}>
            <div style={styles.description}>
              <TGDescription style={styles.subTitle}>
                Our team members have backgrounds in both institutional and academic finance and economics with a passion for entrepreneurship and financial technology.
              </TGDescription>
            </div>
            <div style={styles.detail}>
              <div style={styles.profileMenu}>
                <ul style={styles.profileMenuContent}>
                  {
                    teamMembers.map((member, index) => (
                      <li key={index} style={styles.prifileList}>
                        <div style={styles.activeIconContainer}>
                          <FontAwesome style={{color: 'white', display: this.state.selectedProfileIndex === index ? 'block' : 'none'}} name='long-arrow-right' />
                        </div>
                        <TGProfileListItem style={styles.activeName} onClick={() => this.onSelectProfile(index)}> {member.name} </TGProfileListItem>
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

const styles = {
  content: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: '23%',
    paddingTop: 300,
    paddingRight: '18%'
  },
  title: {
  },
  body: {
    marginTop: 50,
    display: 'flex',
    flex: 1,
    flexDirection: 'row'
  },
  description: {
    flex: 1,
    paddingRight: 200
  },
  subTitle: {
    paddingBottom: 20
  },
  detail: {
    flex: 1.5
  },
  profileMenu: {
    padding: 10,
    margin: 10
  },
  profileMenuContent: {
    listStyleType: 'none',
    padding: 0
  },
  prifileList: {
    padding: 15,
    display: 'flex',
    flexDirection: 'row'
  },
  activeIconContainer: {
    width: 50
  },
  activeIcon: {
    color: 'white',
    marginRight: 20
  },
  activeName: {
    flex: 1
  }
}

export default Section4
