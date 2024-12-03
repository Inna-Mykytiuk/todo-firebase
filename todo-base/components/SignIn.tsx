"use client";

import React, { useState } from 'react'

const SignIn = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false);
  const handleSignIn = () => {
    // Handle sign-in logic here
  };
  const handleSignUp = () => {
    // Handle sign-up logic here
  };
  return (
    <div className="flex justify-center">
      <form onSubmit={handleSignIn} className="grid grid-cols-1 gap-2 w-[250px] min-w-fit items-center justify-center">
        <h1 className="text-center">Sign In</h1>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit" className="bg-blue-500 rounded-md text-white">Login</button>
        <button type="button" className="bg-yellow-500 rounded-md text-white" onClick={handleSignUp}>
          Sign Up
        </button>
        <p>{loading ? 'Signing in...' : ''}</p>
      </form>
    </div>
  );
};
export default SignIn;
