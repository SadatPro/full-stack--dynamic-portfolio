
import React, { useState } from 'react';
import Login from '../components/dashboard/Login';
import ContentEditor from '../components/dashboard/ContentEditor';
import Card from '../components/GlassmorphicCard';

const Dashboard: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <Card className="p-6 md:p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Dashboard<span className="text-gradient-cyan">.</span></h2>
        {!isAuthenticated ? (
          <Login onLoginSuccess={() => setIsAuthenticated(true)} />
        ) : (
          <ContentEditor onLogout={handleLogout} />
        )}
      </Card>
    </div>
  );
};

export default Dashboard;
