import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthPageLayout from "@/components/AuthPageLayout";

const SignInForm: React.FC = () => {
    return (
        <AuthPageLayout>
            <div className="max-w-md">
                <div className="text-sm flex flex-col space-y-3 font-bold">
                    <span className="text-3xl font-extrabold pb-4">Log in</span>
                    <button className="flex items-center px-4 py-3 border border-[#23176D] rounded-lg shadow hover:bg-gray-100">
                        <img src="/images/googleicon.svg" alt="Google Icon" className="h-6 w-6 mr-2" />
                        <span className="flex-1 text-center">Continue with Google</span>
                    </button>
                    <button className="flex items-center px-4 py-3 border border-[#23176D] rounded-lg shadow hover:bg-gray-100">
                        <img src="/images/facebookicon.svg" alt="Facebook Icon" className="h-6 w-6 mr-2" />
                        <span className="flex-1 text-center">Continue with Facebook</span>
                    </button>
                    <button className="flex items-center px-4 py-3 border border-[#23176D] rounded-lg shadow hover:bg-gray-100">
                        <img src="/images/appleicon.svg" alt="Apple Icon" className="h-6 w-6 mr-2" />
                        <span className="flex-1 text-center">Continue with Apple</span>
                    </button>
                </div>
                <form className="mt-6">
                    <span className="text-red-500 pr-2 pb-2 inline-block">*</span>
                    <span>Indicates a required field</span>
                    <div className="mb-4">
                        <div className="flex items-center">
                            <label className="block mb-1 mr-2" htmlFor="email">Email / Username</label>
                            <span className="text-red-500">*</span>
                        </div>
                        <input className="w-full px-4 py-2 border rounded-lg" type="text" id="email" required />
                    </div>
                    <div className="mb-2">
                        <div className="flex items-center">
                            <label className="block mb-1 mr-2" htmlFor="password">Password</label>
                            <span className="text-red-500">*</span>
                        </div>
                        <input className="w-full px-4 py-2 border rounded-lg" type="password" id="password" required />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <a href="#" className="text-sm" style={{ color: '#FF5B5B' }}>Forgot Password?</a>
                    </div>
                    <button
                        className="w-full bg-[#FF5B5B] px-4 py-2 text-white rounded-lg shadow hover:bg-[#E14B4B]">
                        Log in
                    </button>
                </form>
                <p className="text-center mt-4">Don&apos;t have an Olivia Kids account? <a href="/sign-up" style={{ color: '#FF5B5B' }}>Create an account</a></p>
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
