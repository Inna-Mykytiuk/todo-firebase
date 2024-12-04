"use client";

import React from 'react';
import { auth } from "../firebase/clientApp";
import { signOut } from 'firebase/auth';
import { useRouter } from "next/navigation";
import { IoIosLogOut } from "react-icons/io";

const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut(auth);
    router.push('/');
  };

  return (
    <button type='button' onClick={handleSignOut} className=" flex gap-4 items-center text-center text-2xl text-white font-bold">
      Sign Out
      <IoIosLogOut className='h-[32px] w-[32px] text-bold' />
    </button>
  );
};

export default SignOutButton;
