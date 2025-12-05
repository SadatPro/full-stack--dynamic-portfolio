
import React, { useState } from 'react';
import { usePortfolioData } from '../hooks/usePortfolioData';
import Card from '../components/GlassmorphicCard';
import { MailIcon, GitHubIcon, LinkedInIcon, InstagramIcon, TelegramIcon, BlogIcon } from '../assets/icons';
import { SocialLink } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SocialIcon: React.FC<{ platform: string }> = ({ platform }) => {
    const icons: { [key: string]: React.FC<any> } = {
        GitHub: GitHubIcon,
        LinkedIn: LinkedInIcon,
        Instagram: InstagramIcon,
        Telegram: TelegramIcon,
        Blog: BlogIcon,
    };
    const IconComponent = icons[platform];
    return IconComponent ? <IconComponent className="w-8 h-8" /> : null;
};

const Contact: React.FC = () => {
  const { data } = usePortfolioData();
  const [formRef, isFormVisible] = useScrollAnimation<HTMLDivElement>();
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('sent');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div ref={formRef} className={`max-w-3xl mx-auto scroll-animate ${isFormVisible ? 'is-visible' : ''}`}>
      <Card className="p-8">
        <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Get In Touch<span className="text-gradient-cyan">.</span></h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                Have a project in mind, want to collaborate, or just want to say hi? Drop me a line below. I'm always excited to connect with new people.
            </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-400">Your Name</label>
              <input type="text" id="name" required className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-400">Your Email</label>
              <input type="email" id="email" required className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-400">Message</label>
            <textarea id="message" rows={5} required className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"></textarea>
          </div>
          <div>
            <button
              type="submit"
              disabled={status !== 'idle'}
              className="w-full px-6 py-3 rounded-lg transition-all duration-300 shadow-lg action-btn disabled:opacity-50"
            >
              {status === 'idle' && 'Send Message'}
              {status === 'sending' && 'Sending...'}
              {status === 'sent' && 'Message Sent!'}
            </button>
          </div>
        </form>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Or find me on:</p>
          <div className="flex justify-center space-x-4">
            {data?.contact?.socials?.map((social: SocialLink) => (
                <a 
                key={social.platform} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-14 h-14 flex items-center justify-center rounded-full card-bg border border-gray-700 text-gray-400
                            hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300 transform hover:scale-110"
                aria-label={social.platform}
                >
                <SocialIcon platform={social.platform} />
                </a>
            ))}
            </div>
        </div>
      </Card>
    </div>
  );
};

export default Contact;
