import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import Certifications from './pages/Certifications';
import Paintings from './pages/Paintings';
import Articles from './pages/Articles';

// Context for sharing dark mode state
interface AppContextType {
  isNight: boolean;
  setIsNight: (value: boolean) => void;
  soundEnabled: boolean;
  setSoundEnabled: (value: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

// Component to apply dark mode class to body
const DarkModeHandler: React.FC<{ isNight: boolean }> = ({ isNight }) => {
  useEffect(() => {
    if (isNight) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isNight]);
  return null;
};

const AppContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isNight } = useAppContext();
  const location = useLocation();

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  if (isLoading) {
    return (
      <div className={`fixed inset-0 ${isNight ? 'bg-[#1a202c]' : 'bg-[#FFFBE6]'} flex items-center justify-center z-50 transition-colors duration-1000`}>
        <div className="flex flex-col items-center gap-4">
          <div className={`w-12 h-12 border-4 ${isNight ? 'border-gray-400' : 'border-[#8B4513]'} border-t-transparent rounded-full animate-spin`}></div>
          <p className={`font-mono ${isNight ? 'text-white' : 'text-[#8B4513]'} animate-pulse`}>Loading cozy space...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <DarkModeHandler isNight={isNight} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/paintings" element={<Paintings />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </>
  );
};

const App: React.FC = () => {
  const [isNight, setIsNight] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  return (
    <AppContext.Provider value={{ isNight, setIsNight, soundEnabled, setSoundEnabled }}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;