import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { MenuIcon, SunIcon, MoonIcon, CommandIcon } from '../assets/icons';

interface HeaderProps {
  onMenuClick: () => void;
  onCommandMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, onCommandMenuClick }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between p-4 card-bg border-b md:justify-end">
      <button onClick={onMenuClick} className="md:hidden p-2 rounded-md header-btn">
        <MenuIcon className="h-6 w-6" />
      </button>
      <div className="flex items-center gap-2">
        <button
            onClick={onCommandMenuClick}
            className="p-2 rounded-full header-btn transition-all duration-300 transform hover:scale-110 flex items-center gap-1.5"
            aria-label="Open command menu"
        >
            <CommandIcon className="h-5 w-5" />
            <span className="text-xs font-mono hidden sm:inline text-gray-400">Ctrl+K</span>
        </button>
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full header-btn transition-all duration-300 transform hover:scale-110"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6 text-yellow-400" />}
        </button>
      </div>
    </header>
  );
};

export default Header;