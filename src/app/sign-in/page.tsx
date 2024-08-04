import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthPageLayout from "@/components/AuthPageLayout";

const SignInForm: React.FC = () => {
    return (
        <AuthPageLayout>
            <div className="max-w-md">
                <div className="text-sm flex flex-col space-y-4 font-bold">
                    <button className="flex items-center justify-center px-4 py-4 border border-[#23176D] rounded-lg shadow">
                        Continue with Google
                    </button>
                    <button className="flex items-center justify-center px-4 py-4 border border-[#23176D] rounded-lg shadow">
                        Continue with Facebook
                    </button>
                    <button className="flex items-center justify-center px-4 py-4 border border-[#23176D] rounded-lg shadow">
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
                        className="w-full px-4 py-2 text-white rounded-lg shadow"
                        style={{ backgroundColor: "#23176D" }}
                    >
                        Log in
                    </button>
                </form>
                <p className="text-center mt-4">Don&apos;t have an Olivia Kids account? <a href="/sign-up" className="text-blue-500">Create an account</a></p>
            </div>
        </AuthPageLayout>
    );
}

const SignInPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <SignInForm />
            <Footer />
        </div>
    );
};

export default SignInPage;
