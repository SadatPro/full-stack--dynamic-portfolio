
import React from 'react';
import { usePortfolioData } from '../hooks/usePortfolioData';
import AnimatedText from '../components/AnimatedText';
import Card from '../components/GlassmorphicCard';
import { Link } from 'react-router-dom';
import { GlobeAltIcon } from '../assets/icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import BackgroundParticles from '../components/BackgroundParticles';

const MobileDevIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
);
  
const IotIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.045A3.746 3.746 0 0 1 7.5 15.75c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5S9 18.078 9 17.25c0-.365-.13-.707-.35-1.002m-1.362-.953a3.746 3.746 0 0 1 4.424 0 3.746 3.746 0 0 1 4.424 0m-8.848 0a3.746 3.746 0 0 1 4.424 0m6.636 4.218a3.746 3.746 0 0 1 .35 1.002c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5a3.746 3.746 0 0 1-.043-2.002m-1.319-2.216a3.746 3.746 0 0 1 4.424 0 3.746 3.746 0 0 1 4.424 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);
  
const focusIcons: { [key: string]: React.FC<any> } = {
    "Web Development (React/Next.js & Laravel)": GlobeAltIcon,
    "Mobile Development (Flutter/Dart)": MobileDevIcon,
    "IoT & Embedded Systems": IotIcon,
};

const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
};

const Home: React.FC = () => {
  const { data } = usePortfolioData();
  const greeting = getGreeting();
  const [focusRef, isFocusVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <div className="space-y-12 min-h-[80vh] flex flex-col justify-center relative">
      <BackgroundParticles />
      <div className="grid md:grid-cols-5 gap-8 items-center">
        <div className="md:col-span-3 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-2">
                 <p className="text-sm font-semibold text-gradient">{greeting}!</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">{data.home?.name || 'Your Name'}</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-lg">A passionate Software Engineer specializing in mobile development, IoT, and robotics.</p>
            <div className="text-xl md:text-2xl text-blue-400 h-8 font-semibold font-mono">
                <AnimatedText texts={data.home?.taglines || ['Software Engineer']} />
            </div>
            <div className="pt-6 flex flex-wrap gap-4">
                <Link to="/projects" className="px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(0,198,255,0.3)] hover:shadow-[0_0_30px_rgba(0,198,255,0.5)] action-btn text-lg">
                    View Projects
                </Link>
                <Link to="/contact" className="px-8 py-4 rounded-xl transition-all duration-300 secondary-btn text-lg">
                    Get In Touch
                </Link>
            </div>
        </div>
        <div className="md:col-span-2 flex justify-center md:justify-end relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-full blur-[80px] opacity-30 -z-10"></div>
            <Card className="p-2 border-none bg-white/5">
                <img 
                    src={data.about?.imageUrl || '/placeholder-profile.jpg'} 
                    alt="Profile" 
                    className="w-72 h-72 rounded-2xl object-cover shadow-2xl ring-1 ring-white/10"
                />
            </Card>
        </div>
      </div>

      <div ref={focusRef} className={`scroll-animate ${isFocusVisible ? 'is-visible' : ''}`}>
        <Card className="p-8 md:p-10 border border-white/10">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Professional Focus<span className="text-blue-500">.</span></h2>
            <div className="grid md:grid-cols-3 gap-10 text-left">
            {data.home?.professionalFocus?.map(focus => {
                const IconComponent = focusIcons[focus.title];
                return (
                    <div key={focus.id} className="flex flex-col space-y-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
                        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400">
                            {IconComponent && <IconComponent className="w-8 h-8" />}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">{focus.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{focus.description}</p>
                        </div>
                    </div>
                );
            })}
            </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
    