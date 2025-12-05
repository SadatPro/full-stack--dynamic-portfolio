import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center gap-4">
      <h1 className="text-4xl font-bold text-white">404 - Page not found</h1>
      <p className="text-gray-400 max-w-md">
        The page you are looking for doesn&apos;t exist. Check the URL or use the navigation to find your way.
      </p>
      <div className="flex gap-3">
        <Link to="/" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors">
          Go Home
        </Link>
        <Link to="/login" className="px-4 py-2 rounded-lg bg-slate-800 text-white border border-slate-700 hover:border-blue-400 transition-colors">
          Login
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

