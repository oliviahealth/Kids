"use client"

import React, { experimental_taintObjectReference, useState } from 'react';
import AuthPageLayout from '@/components/AuthPageLayout';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface SignUpFormPageOneProps {
    onSignUp: (formData: any) => void;
}

const SignUpFormPageOne: React.FC<SignUpFormPageOneProps> = ({ onSignUp }) => {
    const [formData, setFormData] = useState({
        explorerType: '',
        parentType: '',
        birthDate: '',
        heardAboutUs: ''
    });

    const [errors, setErrors] = useState({
        explorerType: '',
        parentType: '',
        birthDate: '',
        heardAboutUs: ''
    });

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: ''
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors = {
            explorerType: formData.explorerType ? '' : 'This field is required',
            parentType: formData.parentType ? '' : 'This field is required',
            birthDate: formData.birthDate ? '' : 'This field is required',
            heardAboutUs: formData.heardAboutUs ? '' : 'This field is required'
        };
        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some(error => error !== '');

        if (!hasErrors) {
            onSignUp(formData);
        }
    };

    return (
        <div className="w-full max-w-md">
            <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <h2 className="font-bold text-2xl mb-4">Sign Up</h2>
                <p className="mb-2">Become an explorer today as a</p>
                <div className="mb-4">
                    <div className="flex">
                        <label className="flex-1 mr-1">
                            <input
                                type="radio"
                                name="explorerType"
                                value="parent"
                                checked={formData.explorerType === 'parent'}
                                onChange={handleInputChange}
                                className="hidden"
                            />
                            <button
                                type="button"
                                onClick={() => handleInputChange({ target: { name: 'explorerType', value: 'parent' } })}
                                className={`w-full flex-1 py-2 rounded-md ${formData.explorerType === 'parent' ? 'bg-[#23176D] text-white' : 'border border-[#23176D] text-[#23176D]'}`}
                            >
                                Parent
                            </button>
                        </label>
                        <label className="flex-1 ml-1">
                            <input
                                type="radio"
                                name="explorerType"
                                value="child"
                                checked={formData.explorerType === 'child'}
                                onChange={handleInputChange}
                                className="hidden"
                            />
                            <button
                                type="button"
                                onClick={() => handleInputChange({ target: { name: 'explorerType', value: 'child' } })}
                                className={`w-full flex-1 py-2 rounded-md ${formData.explorerType === 'child' ? 'bg-[#23176D] text-white' : 'border border-[#23176D] text-[#23176D]'}`}
                            >
                                Child
                            </button>
                        </label>
                    </div>
                    {errors.explorerType && <p className="text-red-500 text-xs mt-1">{errors.explorerType}</p>}
                </div>
                <div className="mb-4">
                    <p className="font-bold mb-1">Which descriptor fits you best?</p>
                    <label className="block mb-1">
                        <input
                            type="radio"
                            name="parentType"
                            value="expecting"
                            checked={formData.parentType === 'expecting'}
                            onChange={handleInputChange}
                            className="mr-2"
                        />
                        I am a future parent expecting a child in the coming months
                    </label>
                    <label className="block">
                        <input
                            type="radio"
                            name="parentType"
                            value="current"
                            checked={formData.parentType === 'current'}
                            onChange={handleInputChange}
                            className="mr-2"
                        />
                        I currently have a young child
                    </label>
                    {errors.parentType && <p className="text-red-500 text-xs mt-1">{errors.parentType}</p>}
                </div>
                <div className="mb-4">
                    <label className="font-bold block mb-2">What is your child&apos;s birth date?</label>
                    <input
                        className="rounded-md border border-[#23176D] p-2"
                        type="date"
                        id="birthDate"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleInputChange}
                    />
                    {errors.birthDate && <p className="text-red-500 text-xs mt-1">{errors.birthDate}</p>}
                </div>
                <div className="mb-8">
                    <label className="block font-bold mb-2">How did you hear about us?</label>
                    <select
                        name="heardAboutUs"
                        value={formData.heardAboutUs}
                        onChange={handleInputChange}
                        className="block text-md appearance-none w-full bg-white border border-[#23176D] text-gray-700 py-3 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                        <option value="">Select</option>
                        <option value="social_media">Social Media</option>
                        <option value="friend">Friend</option>
                        <option value="search_engine">Search Engine</option>
                        <option value="advertisement">Advertisement</option>
                    </select>
                    {errors.heardAboutUs && <p className="text-red-500 text-xs mt-1">{errors.heardAboutUs}</p>}
                </div>
                <div>
                    <label className="block font-bold mb-2">Let&apos;s get started!</label>
                    <button
                        type="submit"
                        className="border border-[#23176D] text-[#23176D] py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Sign up by creating a username
                    </button>
                </div>
            </form>
        </div>
    );
};

interface SignUpFormPageTwoProps {
    onBack: () => void;
    onSignUp: (formData: any) => void; // Assuming there's an onSignUp prop to handle the form submission
}

const SignUpFormPageTwo: React.FC<SignUpFormPageTwoProps> = ({ onBack, onSignUp }) => {
    const [formData, setFormData] = useState({
        email: '',
        receiveNewsletter: false,
        username: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        username: '',
        password: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
        setErrors({
            ...errors,
            [name]: ''
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors = {
            email: formData.email ? '' : 'Email is required',
            username: formData.username ? '' : 'Username is required',
            password: formData.password ? '' : 'Password is required'
        };
        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some(error => error !== '');

        if (!hasErrors) {
            onSignUp(formData);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md">
                <form className="bg-white rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <h2 className="font-bold text-2xl mb-4">Sign Up</h2>
                    <div className="mb-8">
                        <label className="block font-bold mb-2" htmlFor="email">
                            Your preferred email
                        </label>
                        <p className="text-s mb-2">
                            Stay up to date on the latest news from the Olivia Family by receiving exclusive updates!
                        </p>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="shadow appearance-none rounded-md border border-[#23176D] w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mb-2"
                            placeholder="example@email.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        <label className="inline-flex items-center mt-2">
                            <input
                                type="checkbox"
                                name="receiveNewsletter"
                                checked={formData.receiveNewsletter}
                                onChange={handleInputChange}
                                className="form-checkbox"
                            />
                            <span className="ml-2">Receive updates from the Olivia Kids newsletter</span>
                        </label>
                    </div>
                    <div className="mb-8">
                        <label className="block font-bold mb-2" htmlFor="username">
                            Create your username
                        </label>
                        <p className="text-s mb-2">
                            Use letters and numbers exclusively.
                        </p>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            className="shadow appearance-none rounded-md border border-[#23176D] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Your username"
                        />
                        {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
                    </div>
                    <div className="mb-8">
                        <label className="block font-bold mb-2" htmlFor="password">
                            Create your password
                        </label>
                        <p className="text-s mb-2">
                            Must be 8 characters long, and include letters, numbers and other characters.
                        </p>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="shadow appearance-none rounded-md border border-[#23176D] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Your password"
                        />
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            onClick={onBack}
                            className="text-[#23176D] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Back
                        </button>
                        <button
                            type="submit"
                            className="bg-[#23176D] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}


const SignUpPage: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<'pageOne' | 'pageTwo'>('pageOne');
    const [formData, setFormData] = useState({
        explorerType: '',
        parentType: '',
        birthDate: '',
        heardAboutUs: '',

        email: '',
        receiveNewsletter: false,
        username: '',
        password: ''
    });

    const handleSignUpFromPageOne = (data: {
        explorerType: string;
        parentType: string;
        birthDate: string;
        heardAboutUs: string;
    }) => {
        setFormData({ ...formData, ...data });
        setCurrentPage('pageTwo');
    };

    const handleBackFromPageTwo = () => {
        setCurrentPage('pageOne');
    };

    return (
        <div>
            <Navbar />
            <AuthPageLayout>
                {currentPage === 'pageOne' && (
                    <SignUpFormPageOne onSignUp={handleSignUpFromPageOne} />
                )}
                {currentPage === 'pageTwo' && (
                    <SignUpFormPageTwo onBack={handleBackFromPageTwo} onSignUp={() => { }} />
                )}
            </AuthPageLayout>
            <Footer />
        </div>
    );
};

export default SignUpPage;