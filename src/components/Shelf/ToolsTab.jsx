import React from 'react';
import { tools } from '../../data/tools';

export default function ToolsTab() {
  return (
    <div className="tab-content active" id="tab-content-tools">
      <ul className="essays-list">
        {tools.map((item) => (
          <li key={item.id} className="essay-item fade-in">
            <div className="essay-title">{item.title}</div>
            <div className="essay-meta">{item.meta}</div>
            <p className="essay-review">{item.review}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
