"use client";

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/clientApp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const notifyError = (message: string) => toast.error(message);
  const notifySuccess = (message: string) => toast.success(message);

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        notifySuccess("Successfully logged in!");
        setLoading(false);
        window.location.href = "/todo-app";
      })
      .catch(() => {
        notifyError("User not registered. Please sign up first.");
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-center">
      <ToastContainer position="top-right" autoClose={3000} />
      <form
        onSubmit={handleSignIn}
        className="grid grid-cols-1 gap-2 w-[250px] min-w-fit items-center justify-center"
      >
        <h1 className="text-center">Login</h1>
        <input type="email" name="email" placeholder="test@ukr.net" required />
        <input type="password" name="password" placeholder="hello1" required />
        <button type="submit" className="bg-blue-500 rounded-md text-white">
          Login
        </button>
        <p>
          Haven&#39;t registered yet?{" "}
          <Link href="/signup" className="text-blue-500 underline">
            Sign Up
          </Link>
        </p>
        <p>{loading ? "Loading..." : ""}</p>
      </form>
    </div>
  );
};

export default Login;