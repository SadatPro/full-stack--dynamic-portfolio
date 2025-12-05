import React from 'react';
import ReactDOM from 'react-dom/client';

const TestApp = () => {
  return (
    <div style={{ padding: '20px', color: 'white', background: 'blue' }}>
      <h1>React is working!</h1>
      <p>If you see this, React is properly configured.</p>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<TestApp />);
} else {
  console.error('Root element not found');
}