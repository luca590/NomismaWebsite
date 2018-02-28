import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import styled from 'styled-components'

export default class ProfileCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

 

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render() {
    return (
      <Card
        expanded={this.state.expanded}
        onExpandChange={this.handleExpandChange}
        style={styles.card}
      >
        <CardHeader
          title={this.props.name}
          subtitle={this.props.subtitle}
          avatar={<img src={this.props.picURL} style={styles.avatar} />}
          actAsExpander={true}
          showExpandableButton={true}
          titleStyle={styles.title}
          subtitleStyle={styles.subtitle}
        />
        <CardTitle title="" subtitle={this.props.subtitle} expandable={true} />
        <CardText expandable={true}>
          <Overview>
            {this.props.children}
          </Overview>
        </CardText>
      </Card>
    );
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
  avatar: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 50,
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
