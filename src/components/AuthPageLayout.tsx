
import React from 'react';

const AuthPageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="h-[calc(100vh-6rem)] flex flex-row items-center justify-center"
            style={{ backgroundColor: "#F5CDFF", color: "#23176D" }}
        >
            <div className="w-1/2 h-full font-bold flex items-center justify-end">
                <div className="p-20 max-w-3xl w-full">
                    <h1 className="text-3xl font-bold mb-4">Join the Olivia Family!</h1>
                    <p className="text-xl mb-6">Sign in to Olivia Kids to get started, and save your future progress!</p>
                    <p className="text-black text-s mb-12">By signing in, you agree to Olivia Kids&apos; <a href="#" className="text-blue-500">Privacy Policy</a> and <a href="#" className="text-blue-500">Terms of Use</a>.</p>
                    <img src="/images/Saly-16.png" alt="Olivia Kids" className="object-cover h-3/4 w-3/4" />
                </div>
            </div>
            <div className="w-1/2 h-full bg-white flex items-center">
                <div className="p-20 flex flex-clow items-center justify-center">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AuthPageLayout;