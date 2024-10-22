import React from 'react';

interface Props {
  isDarkMode: boolean;
}

const Footer: React.FC<Props> = ({ isDarkMode }) => {
  return (
    <footer className={`p-4 text-center ${isDarkMode ? 'bg-blue-800 text-blue-200' : 'bg-blue-100 text-blue-600'}`}>
      <p className="italic">&copy; 2024 Prompt Lottery Royale. All rights reserved.</p>
    </footer>
  );
};

export default Footer;