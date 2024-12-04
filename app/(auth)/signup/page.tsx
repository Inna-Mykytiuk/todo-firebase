"use client";

import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/clientApp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const SignUp = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const notifyError = (message: string) => toast.error(message);
  const notifySuccess = (message: string) => toast.success(message);

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        notifySuccess("Registration successful! Please log in.");
        setLoading(false);
      })
      .catch((error) => {
        notifyError("Registration failed. Please try again.");
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-center">
      <ToastContainer position="top-right" autoClose={3000} />
      <form
        onSubmit={handleSignUp}
        className="grid grid-cols-1 gap-2 w-[250px] min-w-fit items-center justify-center"
      >
        <h1 className="text-center">Sign Up</h1>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit" className="bg-yellow-500 rounded-md text-white">
          Sign Up
        </button>
        <p>
          Already registered?{" "}
          <Link href="/login" className="text-blue-500 underline">
            Log In
          </Link>
        </p>
        <p>{loading ? "Loading..." : ""}</p>
      </form>
    </div>
  );
};

export default SignUp;
