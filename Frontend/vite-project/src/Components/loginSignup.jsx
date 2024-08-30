import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginSignup() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = () => {
    if (!isSignedUp) {
      setMessage('Please sign up first before logging in.');
    } else {
      setMessage('Successfully logged in!');
      // Simulate successful login and redirect to the dashboard
      setTimeout(() => {
        navigate('/'); // Redirect to the dashboard (Home page)
      }, 1000); // Adjust the timeout as needed
    }
  };

  const handleSignup = () => {
    setIsSignedUp(true);
    setMessage('Successfully signed up! You can now log in.');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login or Sign Up</h2>
        
        <input 
          type="email" 
          placeholder="Email" 
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        <button 
          onClick={handleLogin}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
        >
          Log In
        </button>

        <button 
          onClick={handleSignup}
          className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 w-full mt-4"
        >
          Sign Up
        </button>

        {message && (
          <p className="text-green-500 mt-4 text-center">{message}</p>
        )}
      </div>
    </div>
  );
}
