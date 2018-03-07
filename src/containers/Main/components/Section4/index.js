import React, { Component } from 'react'
import {
  Aside,
  ContactLink,
  Content,
  InsightsLink,
  LogoImage,
  LogoText,
  TGMenuItem,
  TGTitle,
  TGDescription,
  TGProfileListItem
} from '../../../../components'
import FontAwesome from 'react-fontawesome'

const teamMembers = ['Barna Semsey', 'Chris Malloy', 'Dani Mamadou', 'Dimitrios Kavvathas', 'Kimon Gomozias', 'Lauren Cohen', 'Lucas Gaylord']

class Section4 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedProfileIndex: 0
    }
  }
  onSelectProfile (index) {
    this.setState({selectedProfileIndex: index})
  }
  render () {
    return (
      <Content url='/assets/img/background_images4.jpg'>
        <LogoImage src='/assets/img/white-icon.png' width='100' height='100' />
        <LogoText src='/assets/img/logo.png' width='180' height='35' />
        <ContactLink>CONTACT</ContactLink>
        <InsightsLink>INSIGHTS</InsightsLink>
        <Aside>
          <TGMenuItem> Team </TGMenuItem>
        </Aside>
        <div style={styles.content}>
          <div style={styles.title}>
            <TGTitle> {teamMembers[this.state.selectedProfileIndex]} </TGTitle>
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
                  <li style={styles.prifileList}>
                    <div style={styles.activeIconContainer}>
                      <FontAwesome style={{color: 'white', display: this.state.selectedProfileIndex === 0 ? 'block' : 'none'}} name='long-arrow-right' />
                    </div>
                    <TGProfileListItem style={styles.activeName} onClick={() => this.onSelectProfile(0)}> Barna Semsey </TGProfileListItem>
                  </li>
                  <li style={styles.prifileList}>
                    <div style={styles.activeIconContainer}>
                      <FontAwesome style={{color: 'white', display: this.state.selectedProfileIndex === 1 ? 'block' : 'none'}} name='long-arrow-right' />
                    </div>
                    <TGProfileListItem style={styles.activeName} onClick={() => this.onSelectProfile(1)}> Chris Malloy </TGProfileListItem>
                  </li>
                  <li style={styles.prifileList}>
                    <div style={styles.activeIconContainer}>
                      <FontAwesome style={{color: 'white', display: this.state.selectedProfileIndex === 2 ? 'block' : 'none'}} name='long-arrow-right' />
                    </div>
                    <TGProfileListItem style={styles.activeName} onClick={() => this.onSelectProfile(2)}> Dani Mamadou </TGProfileListItem>
                  </li>
                  <li style={styles.prifileList}>
                    <div style={styles.activeIconContainer}>
                      <FontAwesome style={{color: 'white', display: this.state.selectedProfileIndex === 3 ? 'block' : 'none'}} name='long-arrow-right' />
                    </div>
                    <TGProfileListItem style={styles.activeName} onClick={() => this.onSelectProfile(3)}> Dimitrios Kavvathas </TGProfileListItem>
                  </li>
                  <li style={styles.prifileList}>
                    <div style={styles.activeIconContainer}>
                      <FontAwesome style={{color: 'white', display: this.state.selectedProfileIndex === 4 ? 'block' : 'none'}} name='long-arrow-right' />
                    </div>
                    <TGProfileListItem style={styles.activeName} onClick={() => this.onSelectProfile(4)}> Kimon Gomozias </TGProfileListItem>
                  </li>
                  <li style={styles.prifileList}>
                    <div style={styles.activeIconContainer}>
                      <FontAwesome style={{color: 'white', display: this.state.selectedProfileIndex === 5 ? 'block' : 'none'}} name='long-arrow-right' />
                    </div>
                    <TGProfileListItem style={styles.activeName} onClick={() => this.onSelectProfile(5)}> Lauren Cohen </TGProfileListItem>
                  </li>
                  <li style={styles.prifileList}>
                    <div style={styles.activeIconContainer}>
                      <FontAwesome style={{color: 'white', display: this.state.selectedProfileIndex === 6 ? 'block' : 'none'}} name='long-arrow-right' />
                    </div>
                    <TGProfileListItem style={styles.activeName} onClick={() => this.onSelectProfile(6)}> Lucas Gaylord </TGProfileListItem>
                  </li>
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
    paddingLeft: 300,
    paddingTop: 200,
    paddingRight: 50
  },
  title: {
    padding: 50
  },
  body: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row'
  },
  description: {
    flex: 1,
    paddingRight: 150
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
