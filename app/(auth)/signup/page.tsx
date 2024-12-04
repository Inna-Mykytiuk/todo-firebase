"use client";

import React, { useState } from "react";
import { auth } from "@/firebase/clientApp";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AuthForm from "@/components/AuthForm";
import Link from "next/link";

const Register = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Account created successfully!");
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);

        if (error.code === "auth/email-already-in-use") {
          toast.error("This email is already registered. Please log in.");
        } else {
          toast.error("Failed to create account. Please try again.");
        }

        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col items-center">
      <ToastContainer position="top-right" autoClose={3000} />
      <AuthForm
        title="Sign Up"
        buttonText="Register"
        onSubmit={handleSignUp}
        loading={loading}
      />
      <p>
        Already registered?{" "}
        <Link href="/login" className="text-blue-500 underline">
          Log In
        </Link>
      </p>
      <p>{loading ? "Loading..." : ""}</p>
    </div>
  );
};

export default Register;
