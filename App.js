// App.js

import React, { useState } from 'react';
import './App.css'; // Import your CSS file
import SignupForm from './signupform';
import LoginForm from './loginform';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleSignup = (userData) => {
    // Handle signup logic (e.g., API call)
    console.log("Signup data:", userData);
  };

  const handleLogin = (userData) => {
    // Handle login logic (e.g., API call)
    console.log("Login data:", userData);
    // For simplicity, just set loggedInUser to a mock user here
    setLoggedInUser(userData.username);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <div className="App">
      <header className="header">
        <nav>
          <ul>
            <li>{loggedInUser ? `Logged in as ${loggedInUser}` : 'Not logged in'}</li>
            {loggedInUser ? (
              <li><button onClick={handleLogout}>Logout</button></li>
            ) : (
              <>
                <li><a href="#signup">Signup</a></li>
                <li><a href="#login">Login</a></li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <section id="signup">
          <SignupForm onSignup={handleSignup} />
        </section>
        <section id="login">
          <LoginForm onLogin={handleLogin} />
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 My Landing Page. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
