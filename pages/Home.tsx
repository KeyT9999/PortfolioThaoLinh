import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROOM_ITEMS } from '../constants';
import { RoomItem } from '../types';
import { useAppContext } from '../App';

const Home: React.FC = () => {
  const { isNight, soundEnabled, setSoundEnabled, setIsNight } = useAppContext();
  const navigate = useNavigate();
  const [timeStr, setTimeStr] = useState('');
  const dayAudioRef = useRef<HTMLAudioElement>(null);
  const nightAudioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Handle ambient sound based on day/night mode
  useEffect(() => {
    if (!soundEnabled) {
      // Pause both audios when sound is disabled
      if (dayAudioRef.current) {
        dayAudioRef.current.pause();
      }
      if (nightAudioRef.current) {
        nightAudioRef.current.pause();
      }
      return;
    }

    // Play appropriate sound based on isNight
    if (isNight) {
      // Night mode - play toi.mp3
      if (dayAudioRef.current) {
        dayAudioRef.current.pause();
        dayAudioRef.current.currentTime = 0;
      }
      if (nightAudioRef.current) {
        nightAudioRef.current.play().catch(err => {
          console.log('Audio play failed:', err);
        });
      }
    } else {
      // Day mode - play sang.mp3
      if (nightAudioRef.current) {
        nightAudioRef.current.pause();
        nightAudioRef.current.currentTime = 0;
      }
      if (dayAudioRef.current) {
        dayAudioRef.current.play().catch(err => {
          console.log('Audio play failed:', err);
        });
      }
    }
  }, [isNight, soundEnabled]);

  const handleItemClick = (item: RoomItem) => {
    if (item.isInteractable) {
      // Handle phone/contact - open Zalo
      if (item.id === 'phone' || item.type === 'contact') {
        window.open('https://zalo.me/0867792106', '_blank');
        return;
      }
      
      if (item.type) {
        // Navigate to different routes based on type
        const routeMap: Record<string, string> = {
          'about': '/about',
          'projects': '/projects',
          'certifications': '/certifications',
          'paintings': '/paintings',
          'articles': '/articles'
        };
        const route = routeMap[item.type];
        if (route) {
          navigate(route);
        }
      } else if (item.id === 'resume') {
        // Open resume in new tab (you can replace with actual resume URL)
        window.open('#', '_blank');
      }
    }
  };

  const bgClass = isNight ? 'bg-[#1a202c]' : 'bg-[#FFFBE6]';
  const textClass = isNight ? 'text-white/90' : 'text-[#5D4037]';
  const overlayClass = isNight ? 'bg-black/20' : 'bg-transparent';

  return (
    <div className={`relative w-full h-screen overflow-hidden transition-colors duration-1000 ${bgClass}`}>
      {/* Overlay Gradient */}
      <div className={`absolute inset-0 pointer-events-none transition-colors duration-1000 ${overlayClass}`} />

      {/* UI Controls (Top Right) */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 z-40 flex items-center gap-2 md:gap-4">
        {/* Sound Toggle */}
        <button 
          onClick={() => setSoundEnabled(!soundEnabled)}
          className={`p-2 rounded-full transition-colors ${isNight ? 'text-white hover:bg-white/10' : 'text-[#8B4513] hover:bg-[#8B4513]/10'}`}
        >
          {soundEnabled ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.5c-.69 0-1.25-.56-1.25-1.25v-6.5c0-.69.56-1.25 1.25-1.25h2.25Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-12-5.25 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.5c-.69 0-1.25-.56-1.25-1.25v-6.5c0-.69.56-1.25 1.25-1.25h2.25Z" />
            </svg>
          )}
        </button>

        {/* Day/Night Toggle */}
        <div 
          onClick={() => setIsNight(!isNight)}
          className={`w-12 h-6 md:w-14 md:h-7 rounded-full p-1 cursor-pointer transition-colors duration-500 relative flex items-center ${isNight ? 'bg-indigo-900' : 'bg-orange-200'}`}
        >
          <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full shadow-md transform transition-transform duration-500 ${isNight ? 'translate-x-6 md:translate-x-7 bg-indigo-200' : 'translate-x-0 bg-yellow-400'}`}></div>
        </div>
      </div>

      {/* Header Text */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 z-30 pointer-events-none select-none">
        <h1 className={`text-lg md:text-2xl font-bold font-hand mb-1 md:mb-2 flex items-center gap-2 ${textClass}`}>
          {isNight ? '🌙 Good Night!' : '☀️ Good Morning!'}
        </h1>
        <p className={`font-mono text-xs md:text-sm opacity-70 ${textClass} hidden sm:block`}>
          Welcome to the cozy space of Fashion Designer
        </p>
      </div>

      {/* Footer Status */}
      <div className={`absolute bottom-4 left-4 md:bottom-6 md:left-8 z-30 font-mono text-[10px] md:text-xs flex items-center gap-2 md:gap-3 ${textClass}`}>
        <span className="hidden sm:inline">☕ 6142 Tea brewed</span>
        <span className="hidden sm:inline">•</span>
        <span>{timeStr}</span>
      </div>

      {/* Ambient Sound Audio Elements */}
      <audio ref={dayAudioRef} loop preload="auto">
        <source src="/amthanh/sang.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={nightAudioRef} loop preload="auto">
        <source src="/amthanh/toi.mp3" type="audio/mpeg" />
      </audio>

      {/* Main Room Scene */}
      <div className="absolute inset-0 flex items-center justify-center p-2 md:p-4">
        <div className="relative w-full max-w-[1600px] aspect-[16/9] mx-auto scale-75 md:scale-100 origin-center">
          {/* Render Items */}
          {ROOM_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => handleItemClick(item)}
              className={`
                absolute transition-all duration-300 group
                ${item.isInteractable ? 'cursor-pointer hover:scale-105' : ''}
                ${item.animation === 'float' ? 'float-animation' : ''}
              `}
              style={{
                top: item.top,
                left: item.left,
                width: item.width,
                height: item.height || 'auto',
                zIndex: item.zIndex,
              }}
            >
              {/* Item Image */}
              <div className="relative w-full h-full">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className={`w-full h-full object-contain drop-shadow-md transition-all duration-1000 ${
                    isNight ? 'brightness-75 opacity-90' : ''
                  } ${
                    item.id === 'curtain' ? 'curtain-wave' : ''
                  } ${
                    item.id === 'phone' ? 'clickable-item phone-hover' : ''
                  } ${
                    item.id === 'newspaper' ? 'clickable-item newspaper-hover' : ''
                  } ${
                    item.isInteractable ? 'clickable-item' : ''
                  }`}
                />
                  
                  {/* Special Effects - Tea Steam */}
                  {item.id === 'tea' && (
                    <div className="tea-steam absolute -top-4 left-1/2 -translate-x-1/2 w-4 h-8 opacity-0 group-hover:opacity-100">
                    </div>
                  )}

                  {/* Tooltip */}
                  {item.tooltip && (
                    <div className={`absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 ${
                      isNight ? 'bg-gray-800 text-white' : 'bg-[#FFFBE6] text-[#5D4037]'
                    } text-xs font-bold rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none border ${
                      isNight ? 'border-gray-600' : 'border-[#8B4513]/20'
                    } font-hand font-mono`}>
                      {item.tooltip}
                    </div>
                  )}
                </div>
            </div>
          ))}
          
          {/* Window View - Video */}
          <div 
            className="absolute overflow-hidden"
            style={{ 
              top: '4%', left: '73%', width: '13%', height: '29%', 
              zIndex: 0,
              borderRadius: '2px'
            }}
          >
            <video
              key={isNight ? 'night' : 'day'}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{ 
                pointerEvents: 'none',
                objectPosition: 'center'
              }}
            >
              <source src={isNight ? "/home/videobandem.mp4" : "/home/VIDEOCUASO.mp4"} type="video/mp4" />
            </video>
          </div>

          {/* Ambient Light Effect for Lamp */}
          {isNight && (
            <div className="absolute top-[25%] left-[22%] w-[20%] h-[30%] bg-yellow-400/20 rounded-full blur-[80px] z-10 pointer-events-none mix-blend-screen"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

