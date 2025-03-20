"use client";

import React, { useState } from "react";
import { z } from "zod";
import { useRouter } from "next/navigation";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthPageLayout from "@/components/AuthPageLayout";
import useAppStore from "@/lib/useAppStore";

import { signInUser } from "./actions";

// Import your SigninSchema and its type
import { SigninSchema, ISigninFormData } from "./definitions";
// ^ Adjust the path above to where your schema actually lives

const SignInPage: React.FC = () => {
  const router = useRouter();
  const setUser = useAppStore((state) => state.setUser);

  // Keep local state for form inputs
  const [formData, setFormData] = useState<ISigninFormData>({
    email: "",
    password: "",
  });

  // Keep local state for any validation errors
  const [errors, setErrors] = useState<Partial<ISigninFormData>>({});

  // Update local state as user types
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined })); // clear error for that field
  };

  // Handle sign in without a form submission event
  const handleSignIn = async () => {
    try {
      // Attempt to sign in the user
      const res = await signInUser(formData);

      if (res) {
        setUser(true);
        router.replace("/home");
      } else {
        alert("Something went wrong. Please try again later");
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        // Map Zod errors to our error state
        const fieldErrors: Partial<ISigninFormData> = {};
        err.issues.forEach((issue) => {
          const fieldName = issue.path[0] as keyof ISigninFormData;
          fieldErrors[fieldName] = issue.message;
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AuthPageLayout>
        <div className="w-full max-w-md">
          <h2 className="font-extrabold text-3xl mb-6">Sign In</h2>
    
          {/* Email Field */}
          <div className="mb-6">
            <label className="block font-bold mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="rounded-md border border-[#23176D] p-2 w-full"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
    
          {/* Password Field */}
          <div className="mb-6">
            <label className="block font-bold mb-2" htmlFor="password">
              Your Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="rounded-md border border-[#23176D] p-2 w-full"
              placeholder="Your password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>
    
          <button
            onClick={handleSignIn}
            type="button"
            className="bg-[#FF5B5B] text-white font-bold py-2 px-4 rounded-md w-full hover:bg-[#E14B4B]"
          >
            Sign In
          </button>

          {/* Next Link to Sign Up Page */}
          <p className="text-center mt-4">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" className="text-[#FF5B5B] font-bold">
              Create an account
            </Link>
          </p>
        </div>
      </AuthPageLayout>
      <Footer />
    </div>
  );
};

export default SignInPage;
