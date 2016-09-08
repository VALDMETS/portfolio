import React from 'react';
import store from './store';
import ProjectItem from './projectitem';

export default React.createClass({
  render: function() {
    let portfolioItems = store.PortfolioMetaData.map( (project, i) => {
      return <ProjectItem project={project} key={i} />
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
