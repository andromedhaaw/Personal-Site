import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import About from './components/About';
import Shelf from './components/Shelf/Shelf';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import DetailModal from './components/DetailModal';
import ScrollTop from './components/ScrollTop';

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <div
        className={`page-wrapper ${isDark ? 'dark-mode' : ''}`}
        id="page-wrapper"
      >
        <div className="container">
          <Header isDark={isDark} onToggleTheme={toggleTheme} />
          <About />
          <Portfolio />
          <Shelf onSelectItem={setSelectedItem} />
          <Footer />
        </div>
      </div>

      <DetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
      <ScrollTop />
    </>
  );
}
