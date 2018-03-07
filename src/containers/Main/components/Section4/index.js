import React, { Component } from 'react'
import { Content, TGTitle, TGDescription, TGNote, TGMenuItem, TGDetail, Aside, TGProfileListItem } from '../../../../components'

class Section4 extends Component {
  render () {
    return (
      <Content url='/assets/img/background_images4.jpg'>
        <Aside>
          <TGMenuItem> Team </TGMenuItem>
        </Aside>
        <div style={styles.content}>
          <div style={styles.title}>
            <TGTitle>  </TGTitle>
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
                  <li style={styles.prifileList}><TGProfileListItem> Chris Malloy </TGProfileListItem></li>
                  <li style={styles.prifileList}><TGProfileListItem> Dimitrios Kavvathas </TGProfileListItem></li>
                  <li style={styles.prifileList}><TGProfileListItem> Kimon Gomozias </TGProfileListItem></li>
                  <li style={styles.prifileList}><TGProfileListItem> Lauren Cohen </TGProfileListItem></li>
                  <li style={styles.prifileList}><TGProfileListItem> Lucas Gaylord </TGProfileListItem></li>
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

  }
}

export default Section4
