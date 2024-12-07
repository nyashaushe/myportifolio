import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Development from './components/Development';
import Music from './components/Music';
import Bookkeeping from './components/Bookkeeping';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Development />
        <Music />
        <Bookkeeping />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;