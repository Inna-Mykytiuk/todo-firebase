"use client";

import React from "react";
import { auth } from "../firebase/clientApp";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { IoIosLogOut } from "react-icons/io";

const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut(auth);
    router.push("/");
  };

  return (
    <button
      type="button"
      onClick={handleSignOut}
      className="flex items-center gap-4 text-center text-2xl font-bold text-white"
    >
      Sign Out
      <IoIosLogOut className="text-bold h-[32px] w-[32px]" />
    </button>
  );
};

export default SignOutButton;
