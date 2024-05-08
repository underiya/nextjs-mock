"use client";

import React from "react";
import { signIn } from "next-auth/react";
import Navbar from "@/components/Navbar";
// import AvatarUpload from '../components/AvatarUpload';

const AuthPage: React.FC = () => {
  const handleGoogleSignIn = () => {
    signIn("google", { email: "underiyadeepak@gmail.com" });
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="p-8 bg-white shadow-md rounded-md">
          <button
            onClick={handleGoogleSignIn}
            className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4"
          >
            Login with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
