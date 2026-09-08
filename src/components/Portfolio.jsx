import React, { useState, useMemo } from 'react';
import { projects } from '../data/projects';

export default function Portfolio() {
  const [filter, setFilter] = useState('all'); // 'all' | 'edtech' | 'web' | 'tool'

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return projects;
    return projects.filter((p) => p.type === filter);
  }, [filter]);

  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="section-title">Portfolio</h2>

      <div className="sort-controls">
        <span>Filter:</span>
        <button
          className={`sort-btn ${filter === 'all' ? 'active' : ''}`}
          id="pf-all"
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`sort-btn ${filter === 'edtech' ? 'active' : ''}`}
          id="pf-edtech"
          onClick={() => setFilter('edtech')}
        >
          EdTech
        </button>
        <button
          className={`sort-btn ${filter === 'web' ? 'active' : ''}`}
          id="pf-web"
          onClick={() => setFilter('web')}
        >
          Web
        </button>
        <button
          className={`sort-btn ${filter === 'tool' ? 'active' : ''}`}
          id="pf-tool"
          onClick={() => setFilter('tool')}
        >
          Tool
        </button>
        <span className="book-count" id="pf-count">
          {filteredProjects.length} project
          {filteredProjects.length !== 1 ? 's' : ''}
        </span>
      </div>

      <div className="portfolio-grid" id="portfolio-grid">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project-card fade-in"
            data-pf-type={project.type}
          >
            <div className="project-card-header">
              <span className="project-type">{project.category}</span>
              <div className="project-status-group">
                {project.status?.map((st) => (
                  <span key={st} className={`status-pill status-${st}`}>
                    {st}
                  </span>
                ))}
              </div>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
