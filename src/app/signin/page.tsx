import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function SignInFrame() {
    return (
        <div
            className="h-[calc(screen)] flex flex-row items-center justify-center"
            style={{ backgroundColor: "#F5CDFF", color: "#23176D" }}
        >

            <div className="w-1/2 font-bold h-[100%] flex items-center justify-end">
                <div className="p-8 max-w-3xl w-full">
                    <h1 className="text-3xl font-bold mb-4">Join the Olivia Family!</h1>
                    <p className="text-xl mb-6">Sign in to Olivia Kids to get started, and save your future progress!</p>
                    <p className="text-black text-s mb-8">By signing in, you agree to Olivia Kids' <a href="#" className="text-blue-500">Privacy Policy</a> and <a href="#" className="text-blue-500">Terms of Use</a>.</p>
                    <img src="/images/Saly-16.png" alt="Olivia Kids" className="object-contain h-3/4 w-3/4" />
                </div>
            </div>

            <div className="bg-white rounded-xl h-[100%] w-1/2 ">
                <div className="p-20 flex items-center">
                    <div className="max-w-md">
                        <div className="text-sm flex flex-col space-y-4 font-bold">
                            <button className="flex items-center justify-center px-4 py-4 border-2 border-[#23176D] rounded-lg shadow">
                                Continue with Google
                            </button>
                            <button className="flex items-center justify-center px-4 py-4 border-2 border-[#23176D] rounded-lg shadow">
                                Continue with Facebook
                            </button>
                            <button className="flex items-center justify-center px-4 py-4 border-2 border-[#23176D] rounded-lg shadow">
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
