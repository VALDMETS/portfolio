import React from 'react';
import store from './store';

export default React.createClass({
  render: function() {
    let portfolioItems = store.PortfolioMetaData.map( (project, i) => {
      return (
        <div className="expo" id={project.url_name} key={i}>
  				<div className="parallel">
  					<h3>{project.title}</h3>
  					<p>{project.description}</p>
  				</div>
  			</div>
      )
    });
    return (
      <section className="main-page">
        <header>
  			</header>
  			{portfolioItems}
      </section>
    )
  }
});
