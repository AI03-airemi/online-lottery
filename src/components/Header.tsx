import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface Props {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<Props> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className={`p-4 ${isDarkMode ? 'bg-blue-800' : 'bg-blue-100'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold italic text-blue-800">Prompt Lottery Royale</h1>
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full ${
            isDarkMode ? 'bg-blue-700 text-yellow-300' : 'bg-blue-200 text-blue-800'
          }`}
        >
          {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </div>
    </header>
  );
};

export default Header;