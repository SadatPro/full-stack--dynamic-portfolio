
import React from 'react';
import { useTheme } from '../hooks/useTheme';

const BackgroundParticles: React.FC = () => {
    const { theme } = useTheme();
    
    // Colorful array for particles
    const colors = [
        'rgba(0, 198, 255, 0.4)',  // Cyan
        'rgba(255, 0, 128, 0.3)',  // Magenta
        'rgba(121, 40, 202, 0.3)', // Purple
        'rgba(255, 255, 255, 0.1)' // White
    ];

    const particleCount = 25;

    return (
        <div key={theme} className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
            {/* Ambient Gradient Blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-500/20 mix-blend-screen filter blur-[80px] animate-pulse" style={{ animationDuration: '7s' }}></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-500/20 mix-blend-screen filter blur-[80px] animate-pulse" style={{ animationDuration: '10s' }}></div>
            <div className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-pink-500/10 mix-blend-screen filter blur-[100px] animate-pulse" style={{ animationDuration: '8s' }}></div>

            {/* Moving Particles */}
            {[...Array(particleCount)].map((_, i) => {
                const size = Math.random() * 4 + 2;
                const duration = Math.random() * 20 + 15;
                const delay = Math.random() * -20;
                const top = Math.random() * 100;
                const left = Math.random() * 100;
                const color = colors[Math.floor(Math.random() * colors.length)];

                return (
                    <div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            top: `${top}%`,
                            left: `${left}%`,
                            backgroundColor: color,
                            animation: `float ${duration}s infinite alternate ease-in-out`,
                            animationDelay: `${delay}s`,
                            boxShadow: `0 0 ${size * 2}px ${color}`,
                        }}
                    >
                        <style>
                            {`
                                @keyframes float {
                                    0% { transform: translate(0, 0) rotate(0deg); opacity: 0.3; }
                                    50% { opacity: 0.8; }
                                    100% { transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(180deg); opacity: 0.3; }
                                }
                            `}
                        </style>
                    </div>
                );
            })}
        </div>
    );
};

export default BackgroundParticles;
    