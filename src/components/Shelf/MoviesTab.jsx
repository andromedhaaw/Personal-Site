import React, { useState, useMemo } from 'react';
import { movies } from '../../data/movies';

export default function MoviesTab({ onSelectItem }) {
  const [filter, setFilter] = useState('all'); // 'all' | 'fav'

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      if (filter === 'fav') return movie.isFav;
      return true;
    });
  }, [filter]);

  const handleKeyDown = (e, movie) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelectItem(movie);
    }
  };

  return (
    <div className="tab-content active" id="tab-content-movies">
      <div className="sort-controls">
        <span>Filter:</span>
        <button
          className={`sort-btn ${filter === 'all' ? 'active' : ''}`}
          id="sort-all-movies"
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`sort-btn ${filter === 'fav' ? 'active' : ''}`}
          id="sort-fav-movies"
          onClick={() => setFilter('fav')}
        >
          ★ Favorites
        </button>
        <span className="book-count" id="movie-count">
          {filteredMovies.length} films
        </span>
      </div>

      <div className="movie-grid" id="movie-grid">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className={`movie-poster ${movie.img ? 'has-image' : ''}`}
            tabIndex={0}
            role="button"
            aria-label={`${movie.title} - ${movie.author}`}
            onClick={() => onSelectItem(movie)}
            onKeyDown={(e) => handleKeyDown(e, movie)}
          >
            {movie.img && (
              <img src={movie.img} alt={movie.title} loading="lazy" />
            )}
            {movie.isFav && <span className="badge star">★</span>}
            <span className="title-fallback">{movie.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
