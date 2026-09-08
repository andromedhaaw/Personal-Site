import React, { useEffect, useRef } from 'react';

export default function DetailModal({ item, onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    closeBtnRef.current?.focus();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="modal-overlay active"
      id="modal-overlay"
      role="dialog"
      aria-modal="true"
      onClick={handleOverlayClick}
    >
      <div className="modal">
        <button
          className="modal-close"
          id="modal-close"
          aria-label="Close"
          ref={closeBtnRef}
          onClick={onClose}
        >
          &times;
        </button>
        {item.img && (
          <img
            className="modal-cover"
            id="modal-cover"
            src={item.img}
            alt={item.title}
          />
        )}
        <div className="modal-title" id="modal-title">
          {item.title}
        </div>
        <div className="modal-author" id="modal-author">
          {item.author}
        </div>
        <div
          className={item.review ? 'modal-review' : 'modal-no-review'}
          id="modal-review"
        >
          {item.review || 'No review yet.'}
        </div>
      </div>
    </div>
  );
}
