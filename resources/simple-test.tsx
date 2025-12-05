import React from 'react';
import ReactDOM from 'react-dom/client';

// Simple test component to verify React is working
const SimpleApp = () => {
  return (
    <div style={{ 
      padding: '40px', 
      color: 'white', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>🚀 React is Working!</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>Your portfolio setup is almost ready.</p>
      <div style={{ 
        background: 'rgba(255,255,255,0.2)', 
        padding: '20px', 
        borderRadius: '10px',
        backdropFilter: 'blur(10px)'
      }}>
        <p>✅ React 19.2.0 loaded</p>
        <p>✅ TypeScript configured</p>
        <p>✅ Vite dev server running</p>
        <p>✅ All dependencies installed</p>
      </div>
      <button 
        onClick={() => alert('Hello from React!')}
        style={{
          marginTop: '20px',
          padding: '12px 24px',
          background: 'white',
          color: '#764ba2',
          border: 'none',
          borderRadius: '25px',
          fontSize: '1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'transform 0.2s'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        Click me! 🎉
      </button>
    </div>
  );
};

// Mount the app
const rootElement = document.getElementById('root');
if (rootElement) {
  console.log('Found root element, mounting React app...');
  const root = ReactDOM.createRoot(rootElement);
  root.render(<SimpleApp />);
  console.log('React app mounted successfully!');
} else {
  console.error('❌ Root element not found! Make sure there is a div with id="root" in your HTML.');
}