"use client";

import React, { useState } from "react";
import { z } from "zod";
import { useRouter } from 'next/navigation'

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthPageLayout from "@/components/AuthPageLayout";
import useAppStore from "@/lib/useAppStore";

import { signInUser } from "./actions";

// Import your SigninSchema and its type
import { SigninSchema, ISigninFormData } from "./definitions";
// ^ Adjust the path above to where your schema actually lives

const SignInPage: React.FC = () => {
    const router = useRouter()
    const setUser = useAppStore(state => state.setUser);

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

    // On form submit, validate with Zod and handle errors
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Attempt to parse/validate formData with Zod
            const validatedData = SigninSchema.parse(formData);
            const res = await signInUser(validatedData);
            
            if(res) {
                setUser(true);
                router.push("/home")
            } else {
                alert("Something went wrong. Please try again later");
            }

        } catch (err) {
            if (err instanceof z.ZodError) {
                // Collect errors from Zod
                const fieldErrors: Partial<ISigninFormData> = {};
                err.issues.forEach((issue) => {
                    // Each issue has a `path` array; typically path[0] is the field name
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
                <form onSubmit={handleSubmit} className="w-full max-w-md">
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
                        type="submit"
                        className="bg-[#FF5B5B] text-white font-bold py-2 px-4 rounded-md w-full hover:bg-[#E14B4B]"
                    >
                        Sign In
                    </button>
                </form>
            </AuthPageLayout>
            <Footer />
        </div>
    );
};

export default SignInPage;
