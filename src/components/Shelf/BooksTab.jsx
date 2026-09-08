import React, { useState, useMemo } from 'react';
import { books } from '../../data/books';

export default function BooksTab({ onSelectItem }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all'); // 'all' | 'fav'

  const filteredBooks = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return books.filter((book) => {
      const matchesSearch =
        !q ||
        book.title.toLowerCase().includes(q) ||
        book.author.toLowerCase().includes(q);

      const matchesFilter = filter === 'all' || (filter === 'fav' && book.isFav);

      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, filter]);

  const handleKeyDown = (e, book) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelectItem(book);
    }
  };

  return (
    <div className="tab-content active" id="tab-content-books">
      <div className="search-box">
        <input
          type="text"
          id="book-search"
          placeholder="Search books..."
          autoComplete="off"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="sort-controls">
        <span>Sort:</span>
        <button
          className={`sort-btn ${filter === 'all' ? 'active' : ''}`}
          id="sort-all-books"
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`sort-btn ${filter === 'fav' ? 'active' : ''}`}
          id="sort-fav-books"
          onClick={() => setFilter('fav')}
        >
          ★ Favorites
        </button>
        <span className="book-count" id="book-count">
          {filteredBooks.length} of {books.length} books
        </span>
      </div>

      <div className="book-grid" id="book-grid">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className={`book-cover ${book.img ? 'has-image' : ''}`}
            tabIndex={0}
            role="button"
            aria-label={`${book.title} by ${book.author}`}
            onClick={() => onSelectItem(book)}
            onKeyDown={(e) => handleKeyDown(e, book)}
          >
            {book.img && (
              <img src={book.img} alt={book.title} loading="lazy" />
            )}
            {book.isFav && <span className="badge star">★</span>}
            <span className="title-fallback">{book.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
