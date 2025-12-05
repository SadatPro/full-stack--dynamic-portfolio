import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './js/App';

console.log('🚀 Starting React application...');
console.log('📦 React version:', React.version);

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('❌ Root element not found!');
  throw new Error("Could not find root element to mount to");
}

console.log('✅ Found root element:', rootElement);

try {
  console.log('📂 Attempting to import App component...');
  console.log('📄 App component:', App);
  
  const root = ReactDOM.createRoot(rootElement);
  console.log('🎯 Created React root');
  
  root.render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  );
  
  console.log('✅ React app mounted successfully!');
} catch (error) {
  console.error('❌ Error mounting React app:', error);
  console.error('Error details:', error.message);
  console.error('Stack trace:', error.stack);
  
  // Show error in the UI
  rootElement.innerHTML = `
    <div style="
      padding: 40px; 
      background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
      color: white;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-family: Arial, sans-serif
    ">
      <h1 style="font-size: 3rem; margin-bottom: 20px;">❌ React Error</h1>
      <div style="
        background: rgba(255,255,255,0.2); 
        padding: 20px; 
        border-radius: 10px;
        backdrop-filter: blur(10px);
        max-width: 600px;
        white-space: pre-wrap;
        font-family: monospace;
      ">
        <p><strong>Error:</strong> ${error.message}</p>
        <p><strong>Stack:</strong> ${error.stack}</p>
      </div>
    </div>
  `;
}