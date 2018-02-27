import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

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
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title={this.props.name}
          subtitle={this.props.subtitle}
          avatar={this.props.picURL}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardTitle title="Overview" subtitle={this.props.subtitle} expandable={true} />
        <CardText expandable={true}>
          {this.props.children}
        </CardText>
      </Card>
    );
  }
}