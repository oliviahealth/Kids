"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import AuthPageLayout from "@/components/AuthPageLayout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import useAppStore from "@/lib/useAppStore";

import { ISignupFormData } from "./definitions";
import { createUser } from "./actions";

// ─────────────────────────────────────────────────────────────────────────────
// Page One (Collect `name`)
// ─────────────────────────────────────────────────────────────────────────────
interface SignUpFormPageOneProps {
  onNext: (formData: { name: string }) => void;
}

const SignUpFormPageOne: React.FC<SignUpFormPageOneProps> = ({ onNext }) => {    
const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Name is required");
      return;
    }
    onNext({ name });
  };

  return (
    <form className="w-full max-w-md" onSubmit={handleSubmit}>
      <h2 className="font-extrabold text-3xl mb-6">Sign Up</h2>
      {/* Name Field */}
      <div className="mb-6">
        <label className="block font-bold mb-2" htmlFor="name">
          What is your name?
        </label>
        <input
          className="rounded-md border border-[#23176D] p-2 w-full"
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="John Doe"
          onChange={(e) => {
            setName(e.target.value);
            setError("");
          }}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
      {/* Continue Button */}
      <button
        type="submit"
        className="bg-[#FF5B5B] text-white font-bold py-2 px-4 rounded-md w-full hover:bg-[#E14B4B]"
      >
        Continue
      </button>
    </form>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Page Two (Collect `email` & `password`)
// ─────────────────────────────────────────────────────────────────────────────
interface SignUpFormPageTwoProps {
  onBack: () => void;
  onComplete: (formData: ISignupFormData) => void;
}

const SignUpFormPageTwo: React.FC<SignUpFormPageTwoProps> = ({ onBack, onComplete }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      email: formData.email ? "" : "Email is required",
      password: formData.password ? "" : "Password is required",
      name: formData.name ? "" : "Name is required"
    };
    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      onComplete(formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  return (
    <form className="w-full max-w-md" onSubmit={handleSubmit}>
      <h2 className="font-extrabold text-3xl mb-6">Sign Up</h2>

      {/* Email Field */}
      <div className="mb-6">
        <label className="block font-bold mb-2" htmlFor="email">
          Your Email
        </label>
        <input
          className="rounded-md border border-[#23176D] p-2 w-full"
          type="email"
          name="email"
          id="email"
          placeholder="example@email.com"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Password Field */}
      <div className="mb-6">
        <label className="block font-bold mb-2" htmlFor="password">
          Create a Password
        </label>
        <p className="text-sm mb-2">
          Must be 8 characters or more, and include letters &amp; numbers.
        </p>
        <input
          className="rounded-md border border-[#23176D] p-2 w-full"
          type="password"
          name="password"
          id="password"
          placeholder="Your password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="text-[#FF5B5B] font-bold py-2 px-4 rounded-md border border-[#FF5B5B] hover:bg-[#FF5B5B] hover:text-white"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-[#FF5B5B] text-white font-bold py-2 px-4 rounded-md hover:bg-[#E14B4B]"
        >
          Continue
        </button>
      </div>
    </form>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Main SignUp Page
// ─────────────────────────────────────────────────────────────────────────────
const SignUpPage: React.FC = () => {
    const setUser = useAppStore(state => state.setUser);
  
    const [currentPage, setCurrentPage] = useState<"pageOne" | "pageTwo">("pageOne");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter()

  const handleNextFromPageOne = (data: { name: string }) => {
    setUserData({ ...userData, ...data });
    setCurrentPage("pageTwo");
  };

  const handleCompleteFromPageTwo = async (data: ISignupFormData) => {
    const res = await createUser(data);

    if(res) {
        setUser(true);
        router.push('/home');
    } else {
        alert("Something went wrong. Please try again later");
    }
  };

  const handleBack = () => {
    setCurrentPage("pageOne");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AuthPageLayout>
        {currentPage === "pageOne" ? (
          <SignUpFormPageOne onNext={handleNextFromPageOne} />
        ) : (
          <SignUpFormPageTwo onBack={handleBack} onComplete={handleCompleteFromPageTwo} />
        )}
      </AuthPageLayout>
      <Footer />
    </div>
  );
};

export default SignUpPage;
