import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Head from 'next/head';
import { Sign } from "crypto";

function SignInFrame() {
    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center"
            style={{ backgroundColor: "#F5CDFF", color: "#23176D" }}
        >
            <Head>
                <title>Login Page</title>
                <meta name="description" content="Login to Olivia Kids" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="text-2xl font-bold mb-4 text-center">Join the Olivia Family!</h1>
            <p className="text-center mb-6">Sign in to Olivia Kids to get started, and record your future progress!</p>
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex flex-col space-y-4">
                    <button className="flex items-center justify-center px-4 py-2 border-2 border-[#23176D] rounded-lg shadow">
                        Continue with Google
                    </button>
                    <button className="flex items-center justify-center px-4 py-2 border-2 border-[#23176D] rounded-lg shadow">
                        Continue with Facebook
                    </button>
                    <button className="flex items-center justify-center px-4 py-2 border-2 border-[#23176D] rounded-lg shadow">
                        Continue with Apple
                    </button>
                </div>
                <form className="mt-6">
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="email">Email / Username</label>
                        <input className="w-full px-4 py-2 border rounded-lg" type="text" id="email" required />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="password">Password</label>
                        <input className="w-full px-4 py-2 border rounded-lg" type="password" id="password" required />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <a href="#" className="text-sm text-blue-500">Forgot Password?</a>
                    </div>
                    <button
                        className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg shadow"
                        style={{ backgroundColor: "#23176D" }}
                    >
                        Log in
                    </button>
                </form>
                <p className="text-center mt-4">Don't have an Olivia Kids account? <a href="#" className="text-blue-500">Create an account</a></p>
            </div>
        </div>
    );
}

const SignInPage: React.FC = () => {
    return (
        <div className="landing-page relative">
            <Navbar />
            <SignInFrame />
            <div
                className="empty-container"
                style={{
                    height: "100px",
                }}
            ></div>
            <Footer />
        </div>
    );
};

export default SignInPage;
