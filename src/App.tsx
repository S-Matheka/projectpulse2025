import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { LoginPage } from './components/auth/LoginPage';

const users = [
    "projectpulse",
    'simeon.matheka@creosolutions.tech',
    'howard.mnengwa@creosolutions.tech',
];

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = (emailOrUsername: string, password: string) => {
        // Check for either email or username with the same password
        if (users.includes(emailOrUsername) && password === 'Projectpulse2025!') {
            setIsAuthenticated(true);
            return true;
        }

        return false;
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