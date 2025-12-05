import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { usePortfolioData } from '../hooks/usePortfolioData';
import { HomeIcon, UserIcon, CodeIcon, MailIcon, BriefcaseIcon, ToolsIcon, TrophyIcon, ImageIcon, SunIcon, MoonIcon, ExternalLinkIcon } from '../assets/icons';

interface CommandMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface Action {
  id: string;
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  perform: () => void;
}

const CommandMenu: React.FC<CommandMenuProps> = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const { toggleTheme, theme } = useTheme();
  const { data } = usePortfolioData();
  const [search, setSearch] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setSearch('');
  }, [setIsOpen]);

  const actions: Action[] = useMemo(() => [
    { id: 'home', title: 'Home', subtitle: 'Navigate to home page', icon: <HomeIcon className="w-5 h-5" />, perform: () => navigate('/') },
    { id: 'about', title: 'About', subtitle: 'Learn more about me', icon: <UserIcon className="w-5 h-5" />, perform: () => navigate('/about') },
    { id: 'experience', title: 'Experience', subtitle: 'View my professional journey', icon: <BriefcaseIcon className="w-5 h-5" />, perform: () => navigate('/experience') },
    { id: 'skills', title: 'Skills', subtitle: 'See my technical skills', icon: <ToolsIcon className="w-5 h-5" />, perform: () => navigate('/skills') },
    { id: 'projects', title: 'Projects', subtitle: 'Check out my work', icon: <CodeIcon className="w-5 h-5" />, perform: () => navigate('/projects') },
    { id: 'achievements', title: 'Achievements', subtitle: 'See my recognitions', icon: <TrophyIcon className="w-5 h-5" />, perform: () => navigate('/achievements') },
    { id: 'gallery', title: 'Gallery', subtitle: 'View my photo gallery', icon: <ImageIcon className="w-5 h-5" />, perform: () => navigate('/gallery') },
    { id: 'contact', title: 'Contact', subtitle: 'Get in touch with me', icon: <MailIcon className="w-5 h-5" />, perform: () => navigate('/contact') },
    { id: 'toggle-theme', title: 'Toggle Theme', subtitle: `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`, icon: theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />, perform: toggleTheme },
    ...(data?.contact?.socials?.map(social => ({
      id: `social-${social.platform.toLowerCase()}`,
      title: social.platform,
      subtitle: `Open my ${social.platform} profile`,
      icon: <ExternalLinkIcon className="w-5 h-5" />,
      perform: () => window.open(social.url, '_blank')
    })) || [])
  ], [navigate, theme, toggleTheme, data?.contact?.socials]);

  const filteredActions = useMemo(() => actions.filter(action =>
    action.title.toLowerCase().includes(search.toLowerCase()) ||
    action.subtitle?.toLowerCase().includes(search.toLowerCase())
  ), [actions, search]);

  const handleAction = useCallback((action: Action) => {
    action.perform();
    closeMenu();
  }, [closeMenu]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
          e.preventDefault();
          setIsOpen(true);
        }
        return;
      }

      if (e.key === 'Escape') {
        closeMenu();
      }
      if (filteredActions.length > 0) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setActiveIndex((prev) => (prev + 1) % filteredActions.length);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setActiveIndex((prev) => (prev - 1 + filteredActions.length) % filteredActions.length);
        } else if (e.key === 'Enter') {
          e.preventDefault();
          handleAction(filteredActions[activeIndex]);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeMenu, setIsOpen, filteredActions, activeIndex, handleAction]);
  
  useEffect(() => {
      setActiveIndex(0);
  }, [search])

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 k-bar-backdrop" onClick={closeMenu}>
      <div className="w-full max-w-lg modal-bg rounded-xl shadow-2xl overflow-hidden animate-fade-in" onClick={e => e.stopPropagation()}>
        <div className="p-3 border-b border-gray-700">
          <input
            type="text"
            placeholder="Type a command or search..."
            className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none"
            value={search}
            onChange={e => setSearch(e.target.value)}
            autoFocus
          />
        </div>
        <div className="max-h-80 overflow-y-auto p-2">
          {filteredActions.length > 0 ? (
            filteredActions.map((action, index) => (
              <button
                key={action.id}
                onClick={() => handleAction(action)}
                className={`w-full text-left flex items-center justify-between p-3 rounded-md transition-colors ${index === activeIndex ? 'bg-gray-700' : 'hover:bg-gray-800'}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-gray-400">{action.icon}</span>
                  <div>
                    <p className="text-white font-medium">{action.title}</p>
                    {action.subtitle && <p className="text-xs text-gray-500">{action.subtitle}</p>}
                  </div>
                </div>
              </button>
            ))
          ) : (
            <p className="p-4 text-center text-gray-500">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommandMenu;
