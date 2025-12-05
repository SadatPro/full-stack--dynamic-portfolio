
import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '../hooks/useTheme';
import { PortfolioDataProvider } from '../hooks/usePortfolioData';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Home from '../pages/Home';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Achievements from '../pages/Achievements';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';
import Dashboard from '../pages/Dashboard';
import Experience from '../pages/Experience';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import CommandMenu from '../components/CommandMenu';

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isCommandMenuOpen, setCommandMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <ThemeProvider>
      <PortfolioDataProvider>
        <div className="min-h-screen font-sans transition-colors duration-300">
          <div className="relative z-10 flex">
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />
            <div className="flex-1 flex flex-col transition-all duration-300 md:ml-64">
              <Header 
                onMenuClick={() => setSidebarOpen(!isSidebarOpen)} 
                onCommandMenuClick={() => setCommandMenuOpen(true)}
              />
              <main className="p-4 sm:p-6 md:p-8 flex-grow">
                <div key={location.pathname} className="page-fade-in">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/achievements" element={<Achievements />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
              </main>
            </div>
          </div>
          <CommandMenu isOpen={isCommandMenuOpen} setIsOpen={setCommandMenuOpen} />
        </div>
      </PortfolioDataProvider>
    </ThemeProvider>
  );
};

export default App;