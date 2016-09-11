import React from 'react';
import {browserHistory} from 'react-router';

export default React.createClass({
  getInitialState: function () {
    return {
      expand: false
    }
  },
  render: function() {
    let expandedView;
    if(this.state.expand) {
      expandedView = <p>wow wee!</p>
    }
    return (
      <div className="expo" id={this.props.project.url_name} onClick={this.clickHandler}>
        <div className="parallel">
          <h3>{this.props.project.title}</h3>
          <p>{this.props.project.description}</p>
          <p className="date">{this.props.project.date}</p>
        </div>
        {expandedView}
      </div>
    )
  },
  clickHandler: function () {
    console.log(this.props.project);
    // browserHistory.push(this.props.project.url_name);
    this.setState({expand: !this.state.expand});
  }
});
