
import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, UserIcon, CodeIcon, MailIcon, DashboardIcon, CloseIcon, TrophyIcon, ToolsIcon, ImageIcon, BriefcaseIcon, LockIcon } from '../assets/icons';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const navItems = [
  { name: 'Home', path: '/', icon: HomeIcon },
  { name: 'About', path: '/about', icon: UserIcon },
  { name: 'Experience', path: '/experience', icon: BriefcaseIcon },
  { name: 'Skills', path: '/skills', icon: ToolsIcon },
  { name: 'Projects', path: '/projects', icon: CodeIcon },
  { name: 'Achievements', path: '/achievements', icon: TrophyIcon },
  { name: 'Gallery', path: '/gallery', icon: ImageIcon },
  { name: 'Contact', path: '/contact', icon: MailIcon },
  { name: 'Login', path: '/login', icon: LockIcon },
  { name: 'Dashboard', path: '/dashboard', icon: DashboardIcon },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const baseLinkClasses = "flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 font-semibold relative overflow-hidden group";
  const inactiveLinkClasses = "text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/5 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]";
  const activeLinkClasses = "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.6)] border border-blue-400/50";

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-30 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      ></div>
      <aside className={`fixed top-0 left-0 h-full w-64 card-bg border-r p-6 flex flex-col z-40 transition-transform duration-300 md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-bold tracking-widest text-white">
            PORTFOLIO<span className="text-gradient-cyan">.</span>
          </h1>
          <button onClick={() => setIsOpen(false)} className="md:hidden p-1 rounded-md header-btn">
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col space-y-2">
          {navItems.map(item => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
