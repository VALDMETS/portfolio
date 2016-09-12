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
      expandedView = (
        <div className="description">
          <h4>{this.props.project.title} -</h4>
          <a href={this.props.project.url}>Live Site</a>
          <span> - </span>
          <a href={this.props.project.github}>GitHub</a>
          {this.props.project.description}
        </div>
      )
    }
    return (
      <section ref="project" className="project">
        <div ref="expo" className="expo" id={this.props.project.url_name} onClick={this.clickHandler}>
          <div className="parallel">
            <h3>{this.props.project.title}</h3>
            <p>{this.props.project.summary}</p>
            <p className="date">{this.props.project.date}</p>
          </div>
        </div>
        {expandedView}
      </section>
    )
  },
  clickHandler: function () {
    // location.hash = this.props.project.url_name;
    if(!this.state.expand) {
      this.refs.project.className = "project expanded";
    } else {
      this.refs.project.className = "project";
    }
    this.setState({expand: !this.state.expand});
  }
});
