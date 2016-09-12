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
          <div className="left">
            <a href="assets/BValdmetsResume.pdf" download>Résumé</a>
            <a href="mailto:benvaldmets@gmail.com">Contact</a>
          </div>
          <h5>Ben Valdmets</h5>
          <div className="right">
            <a href="https://github.com/VALDMETS">GitHub</a>
            <a href="https://linkedin.com/in/valdmets">LinkedIn</a>
          </div>
  			</header>
        <div className="project-cont">
  			  {portfolioItems}
        </div>
      </section>
    )
  }
});
