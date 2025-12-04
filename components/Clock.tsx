import React, { useEffect, useState, useRef } from 'react';

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Hàm bắt đầu chạy đồng hồ
  const startClock = () => {
    if (timerRef.current) return; // Nếu đang chạy thì không tạo thêm
    
    timerRef.current = setInterval(() => {
      setTime(new Date());
    }, 1000);
    setIsRunning(true);
  };

  // Hàm dừng đồng hồ
  const stopClock = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsRunning(false);
  };

  // Toggle start/stop
  const toggleClock = () => {
    if (isRunning) {
      stopClock();
    } else {
      startClock();
    }
  };

  // Tự động chạy khi component mount
  useEffect(() => {
    startClock();
    
    // Cleanup: Dừng đồng hồ khi component unmount
    return () => stopClock();
  }, []);

  const secondsRatio = time.getSeconds() / 60;
  const minutesRatio = (secondsRatio + time.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + time.getHours()) / 12;

  const rotate = (ratio: number) => `rotate(${ratio * 360}deg)`;

  return (
    <div 
      className="relative w-full h-full rounded-full bg-white dark:bg-gray-800 border-4 border-[#8B4513] dark:border-gray-400 shadow-md cursor-pointer group"
      onClick={toggleClock}
      title={isRunning ? 'Click to stop' : 'Click to start'}
    >
      {/* Clock Center */}
      <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-red-500 rounded-full -translate-x-1/2 -translate-y-1/2 z-10" />
      
      {/* Clock Numbers */}
      <div 
        className="absolute font-bold text-[0.6rem] text-gray-700 dark:text-gray-300"
        style={{ top: '5%', left: '50%', transform: 'translateX(-50%)' }}
      >
        12
      </div>
      <div 
        className="absolute font-bold text-[0.6rem] text-gray-700 dark:text-gray-300"
        style={{ top: '50%', right: '5%', transform: 'translateY(-50%)' }}
      >
        3
      </div>
      <div 
        className="absolute font-bold text-[0.6rem] text-gray-700 dark:text-gray-300"
        style={{ bottom: '5%', left: '50%', transform: 'translateX(-50%)' }}
      >
        6
      </div>
      <div 
        className="absolute font-bold text-[0.6rem] text-gray-700 dark:text-gray-300"
        style={{ top: '50%', left: '5%', transform: 'translateY(-50%)' }}
      >
        9
      </div>

      {/* Clock Hands */}
      {/* Hour Hand */}
      <div 
        id="hour-hand"
        className="absolute top-1/2 left-1/2 w-1 h-[25%] bg-black dark:bg-white origin-bottom"
        style={{ 
          transform: `translateX(-50%) ${rotate(hoursRatio)}`,
          transformOrigin: 'center bottom'
        }}
      />
      
      {/* Minute Hand */}
      <div 
        id="minute-hand"
        className="absolute top-1/2 left-1/2 w-0.5 h-[35%] bg-gray-800 dark:bg-gray-200 origin-bottom"
        style={{ 
          transform: `translateX(-50%) ${rotate(minutesRatio)}`,
          transformOrigin: 'center bottom'
        }}
      />
      
      {/* Second Hand - chỉ hiển thị khi đang chạy */}
      {isRunning && (
        <div 
          id="second-hand"
          className="absolute top-1/2 left-1/2 w-[1px] h-[40%] bg-red-500 origin-bottom"
          style={{ 
            transform: `translateX(-50%) ${rotate(secondsRatio)}`,
            transformOrigin: 'center bottom'
          }}
        />
      )}
      
      {/* Status indicator - hiển thị khi hover */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full mt-1 px-2 py-1 bg-black/70 text-white text-[0.5rem] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {isRunning ? '⏸ Stop' : '▶ Start'}
      </div>
    </div>
  );
};

export default Clock;