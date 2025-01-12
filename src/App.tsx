import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { LoginPage } from './components/auth/LoginPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (email: string, password: string) => {
    // Demo credentials check
    if (email === 'simeon.matheka@creosolutions.tech' && password === 'Projectpulse2025!') {
      setIsAuthenticated(true);
    }
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  return isAuthenticated ? (
    <Dashboard onSignOut={handleSignOut} />
  ) : (
    <LoginPage onLogin={handleLogin} />
  );
}

export default App;