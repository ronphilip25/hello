'use client';

import { useState } from 'react';
import Dashboard from './landing/page';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform your authentication logic
    // For simplicity, let's assume authentication is successful if username and password are not empty
    if (username !== '' && password !== '') {
      setAuthenticated(true);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-400 text-white">
      <div className="w-96">
        {authenticated ? (
          // Display the dashboard when authenticated
          <Dashboard />
        ) : (
          // Display the login form when not authenticated
          <>
            <h1 className="text-3xl font-bold mb-4 text-center">Welcome to Geopro Global Solutions Inc.</h1>
            <h1 className="text-3xl font-bold mb-4 text-center">Human Resources Information System</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block mb-1">Username:</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                  className="w-full px-3 py-2 rounded bg-white text-white"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block mb-1">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  className="w-full px-3 py-2 rounded bg-white text-white"
                />
              </div>
              <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded">Login</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
