// App.js
import React, { useState } from 'react';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? <HomePage /> : <LoginPage onLogin={handleLogin} />}
    </div>
  );
}

export default App;
