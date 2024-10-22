import React, { useState } from 'react';
import PromptLottery from './components/PromptLottery';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen flex flex-col rococo-bg ${isDarkMode ? 'bg-blue-900 text-white' : 'bg-blue-100 text-blue-900'}`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow flex items-center justify-center px-4 py-8">
        <PromptLottery isDarkMode={isDarkMode} />
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;