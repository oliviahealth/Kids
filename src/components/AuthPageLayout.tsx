import React from 'react';

const AuthPageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="h-[calc(100vh-6rem)] flex flex-row items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: `url('/images/signupbackground.svg')`,
            }}
        >
            <div className="w-1/2 h-full font-bold flex items-center justify-end">
                <div className="p-16 max-w-3xl w-full text-white" style={{ marginTop: '-14rem', marginRight:'10rem' }}>
                    <h1 className="text-3xl font-bold mb-4">Join the Olivia Family!</h1>
                    <p className="text-xl mb-6">Sign in to Olivia Kids to get started, and save your future progress!</p>
                    <p className="text-s mb-12">
                        By signing in, you agree to Olivia Kids&apos;{' '}
                        <a href="#" className="text-white underline">Privacy Policy</a> and{' '}
                        <a href="#" className="text-white underline">Terms of Use</a>.
                    </p>
                </div>
            </div>
            <div className="w-2/5 h-full bg-white flex items-center">
                <div className="p-40 flex flex-col items-center justify-center">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AuthPageLayout;
