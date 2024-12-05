"use client";

import React, { useState, useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/clientApp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import SyncLoader from "react-spinners/SyncLoader";

const SignUpFormSection = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const notifyError = (message: string) => toast.error(message);
  const notifySuccess = (message: string) => toast.success(message);

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) {
      return;
    }

    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        notifySuccess("Registration successful! Please log in.");
        setLoading(false);

        if (emailRef.current) emailRef.current.value = "";
        if (passwordRef.current) passwordRef.current.value = "";
      })
      .catch((error) => {
        setLoading(false);

        if (error.code === "auth/email-already-in-use") {
          notifyError("This email is already registered. Please log in.");
        } else if (error.code === "auth/invalid-email") {
          notifyError("Please enter a valid email.");
        } else if (error.code === "auth/weak-password") {
          notifyError("Password should be at least 6 characters long.");
        } else {
          notifyError("Failed to create account. Please try again.");
        }
      });
  };

  return (
    <section className="h-screen flex pt-[100px]">
      <div className="container">
        <div className="flex justify-center">
          <ToastContainer position="top-right" autoClose={3000} />
          <form
            onSubmit={handleSignUp}
            className="grid grid-cols-1 gap-2 w-[250px] min-w-fit items-center justify-center"
          >
            <h1 className="text-xl font-bold mb-4 text-center">Sign Up</h1>
            <input
              ref={emailRef}
              type="email"
              name="email"
              placeholder="Email"
              required
              aria-label="Email"
              autoComplete="off"
              className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-input focus:border-mainBcg focus:outline-none"
            />
            <input
              ref={passwordRef}
              type="password"
              name="password"
              placeholder="Password"
              required
              aria-label="Password"
              autoComplete="off"
              className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-input focus:border-mainBcg focus:outline-none"
            />
            <button
              type="submit"
              className="mx-auto mt-4 flex  justify-center rounded bg-gradient px-4 py-2 font-bold text-white transition-all duration-300 ease-out hover:bg-mainColor"
            >
              Sign Up
            </button>
            <p>
              Already registered?{" "}
              <Link href="/login" className="text-blue-500 underline">
                Log In
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

export default SignUpFormSection;
