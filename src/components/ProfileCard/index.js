import React from 'react'
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card'
import styled from 'styled-components'

export default class ProfileCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      expanded: false
    }
  }

  handleExpandChange (expanded) {
    this.setState({expanded: expanded})
  }

  render () {
    return (
      <Card
        expanded={this.state.expanded}
        onExpandChange={(expanded) => this.handleExpandChange(expanded)}
        style={styles.card}
      >
        <CardHeader
          title={this.props.name}
          subtitle={this.props.subtitle}
          avatar={<div style={styles.avatarWrapper}><img src={this.props.picURL} style={styles.avatar} /></div>}
          actAsExpander
          showExpandableButton
          titleStyle={styles.title}
          subtitleStyle={styles.subtitle}
        />
        <CardTitle title='' subtitle={this.props.subtitle} expandable />
        <CardText expandable>
          <Overview>
            {this.props.children}
          </Overview>
        </CardText>
      </Card>
    )
  }
}

const Overview = styled.h1`
  margin: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: normal;
  font-size: 1.2em;
  letter-spacing: .025em;
  padding: 10px;
`

const styles = {
  card: {
    margin: 10
  },
  avatarWrapper: {
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: 'hidden'
  },
  avatar: {
    width: '100%',
    resizeMode: 'contain',
    backgroundSize: 'cover'
  },
  title: {
    fontSize: 25,
    padding: 20
  },
  subtitle: {
    fontSize: 20
  }
}
