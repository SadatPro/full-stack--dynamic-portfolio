
import React, { useState } from 'react';

interface LoginProps {
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const correctPassword = 'admin'; // Hardcoded for demo purposes

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setError('');
      onLoginSuccess();
    } else {
      setError('Incorrect password. Try "admin".');
    }
  };

  return (
    <div className="max-w-sm mx-auto">
      <h3 className="text-xl font-bold mb-4 text-center text-white">Admin Access</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium mb-1 text-gray-400">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
          />
        </div>
        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full px-4 py-2 rounded-lg transition-colors action-btn"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
