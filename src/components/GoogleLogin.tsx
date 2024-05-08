"use client";

import React from "react";
import { authOptions } from "@/lib/options";
import { signIn } from "next-auth/react";

const GoogleLogin = () => {
  const handleGoogleLogin = async () => {
    console.log("google");
    try {
      // Use signIn with 'google' provider identifier
      await signIn("google", { callbackUrl: "http://localhost:3000/api/auth" });
    } catch (error) {
      console.error("Google login error:", error);
      // Handle error gracefully (show error message, etc.)
    }
  };
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleGoogleLogin}
    >
      Login with Google
    </button>
  );
};

export default GoogleLogin;
