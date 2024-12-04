"use client";

import React from 'react';
import { auth } from "../firebase/clientApp";
import { signOut } from 'firebase/auth';
import { useRouter } from "next/navigation";

const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut(auth);
    router.push('/');
  };

  return (
    <button type='button' onClick={handleSignOut}>
      Sign Out
    </button>
  );
};

export default SignOutButton;
