
import React from 'react';
import { usePortfolioData } from '../hooks/usePortfolioData';
import Card from '../components/GlassmorphicCard';
import { Achievement as AchievementType } from '../types';
import { TrophyIcon, CertificateIcon, AwardIcon } from '../assets/icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AchievementIcon: React.FC<{ icon: AchievementType['icon'] }> = ({ icon }) => {
    const className = "w-8 h-8 text-cyan-400";
    switch (icon) {
        case 'Trophy':
            return <TrophyIcon className={className} />;
        case 'Certificate':
            return <CertificateIcon className={className} />;
        case 'Award':
            return <AwardIcon className={className} />;
        default:
            return null;
    }
};

const AchievementCard: React.FC<{ achievement: AchievementType }> = ({ achievement }) => {
    const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
    return (
        <div ref={ref} className={`scroll-animate ${isVisible ? 'is-visible' : ''}`}>
            <Card className="p-6">
                <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                    <AchievementIcon icon={achievement.icon} />
                </div>
                <div>
                    <p className="text-sm text-gray-400">{achievement.date}</p>
                    <h3 className="text-lg font-bold text-white">{achievement.title}</h3>
                    <p className="mt-1 text-gray-300">{achievement.description}</p>
                </div>
                </div>
            </Card>
        </div>
    );
}

const Achievements: React.FC = () => {
  const { data } = usePortfolioData();

  if (!data.achievements || data.achievements.length === 0) {
    return (
        <Card className="p-6 md:p-8 text-center">
            <h2 className="text-2xl font-bold text-white">No achievements to display.</h2>
        </Card>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Achievements & Recognitions<span className="text-gradient-cyan">.</span></h2>
      <div className="space-y-6">
        {data.achievements.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </div>
    </div>
  );
};

export default Achievements;
