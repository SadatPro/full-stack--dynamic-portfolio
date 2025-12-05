import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    // TODO: Wire this to your Laravel login endpoint.
    // Example: POST `${import.meta.env.VITE_API_BASE_URL}/api/login` with email/password.
    console.log('Submit login with', { email, password });
    setError('Login endpoint not yet connected. Please configure Laravel auth.');
  };

  return (
    <div className="max-w-lg mx-auto card-bg border p-6 rounded-2xl shadow-xl">
      <h1 className="text-2xl font-bold mb-6 text-white">Login</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-white focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-white focus:border-blue-500 focus:outline-none"
          />
        </div>
        {error && (
          <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/40 px-3 py-2 rounded-lg">
            {error}
          </p>
        )}
        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors"
        >
          Sign In
        </button>
      </form>
      <p className="mt-4 text-xs text-gray-400">
        This is a placeholder login screen. Connect it to your Laravel auth API to enable real authentication.
      </p>
    </div>
  );
};

export default Login;

