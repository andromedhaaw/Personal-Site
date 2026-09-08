import React, { useState } from 'react';
import BooksTab from './BooksTab';
import MoviesTab from './MoviesTab';
import ToolsTab from './ToolsTab';

export default function Shelf({ onSelectItem }) {
  const [activeTab, setActiveTab] = useState('books'); // 'books' | 'movies' | 'tools'

  return (
    <section className="bookshelf-section" id="shelf">
      <h2 className="section-title">Shelf</h2>

      {/* Tabs */}
      <div className="shelf-tabs" role="tablist">
        <button
          className={`shelf-tab ${activeTab === 'books' ? 'active' : ''}`}
          id="tab-books"
          role="tab"
          aria-selected={activeTab === 'books'}
          onClick={() => setActiveTab('books')}
        >
          Bookshelf
        </button>
        <button
          className={`shelf-tab ${activeTab === 'movies' ? 'active' : ''}`}
          id="tab-movies"
          role="tab"
          aria-selected={activeTab === 'movies'}
          onClick={() => setActiveTab('movies')}
        >
          Movie Shelf
        </button>
        <button
          className={`shelf-tab ${activeTab === 'tools' ? 'active' : ''}`}
          id="tab-tools"
          role="tab"
          aria-selected={activeTab === 'tools'}
          onClick={() => setActiveTab('tools')}
        >
          Tools &amp; Tech
        </button>
      </div>

      {activeTab === 'books' && <BooksTab onSelectItem={onSelectItem} />}
      {activeTab === 'movies' && <MoviesTab onSelectItem={onSelectItem} />}
      {activeTab === 'tools' && <ToolsTab />}
    </section>
  );
}
