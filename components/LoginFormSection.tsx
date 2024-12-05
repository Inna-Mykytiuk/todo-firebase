"use client";

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/clientApp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import SyncLoader from "react-spinners/SyncLoader";

const LoginFormSection = () => {
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
    <section className="h-screen flex pt-[100px]">
      <div className="container">
        <div className="flex justify-center">
          <ToastContainer position="top-right" autoClose={3000} />
          <form
            onSubmit={handleSignIn}
            className="grid grid-cols-1 gap-2 w-[250px] min-w-fit items-center justify-center"
          >
            <h1 className="text-xl font-bold mb-4 text-center">Login</h1>
            <input
              type="email"
              name="email"
              placeholder="test@ukr.net"
              required
              aria-label="Email"
              autoComplete="off"
              className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-input focus:border-mainBcg focus:outline-none"
            />
            <input
              type="password"
              name="password"
              placeholder="hello1"
              required
              aria-label="Password"
              autoComplete="off"
              className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-input focus:border-mainBcg focus:outline-none"
            />
            <button
              type="submit"
              className="mx-auto mt-4 flex  justify-center rounded bg-gradient px-4 py-2 font-bold text-white transition-all duration-300 ease-out hover:bg-mainColor"
            >
              Login
            </button>
            <p>
              Haven&#39;t registered yet?{" "}
              <Link href="/signup" className="text-blue-500 underline">
                Sign Up
              </Link>
            </p>
            {loading ? (
              <div className="flex items-center justify-center h-full">
                <SyncLoader color="#9ea7fc" size={25} />
              </div>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginFormSection;
