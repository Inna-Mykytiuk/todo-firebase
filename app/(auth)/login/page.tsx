"use client";

import React, { useState } from "react";
import { auth } from "@/firebase/clientApp";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AuthForm from "@/components/AuthForm";
import Link from "next/link";


const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        toast.success("Successfully signed in!");
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to sign in. Check your credentials.");
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col items-center">
      <ToastContainer position="top-right" autoClose={3000} />
      <AuthForm
        title="Sign In"
        buttonText="Login"
        onSubmit={handleSignIn}
        loading={loading}
        emailPlaceholder="test@ukr.net"
        passwordPlaceholder="hello1"

      />

      <p>
        Haven&#39;t registered yet?{" "}
        <Link href="/signup" className="text-blue-500 underline">
          Sign Up
        </Link>
      </p>
      <p>{loading ? "Loading..." : ""}</p>
    </div>
  );
};

export default Login;
