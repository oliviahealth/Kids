"use client"

import React, { useState } from 'react';
import AuthPageLayout from '@/components/AuthPageLayout';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface SignUpFormPageTwoProps {
    onBack: () => void;
}

const SignUpFormPageTwo: React.FC<SignUpFormPageTwoProps> = ({ onBack }) => {
    const [formData, setFormData] = useState({
        email: '',
        receiveNewsletter: false,
        username: '',
        password: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mb-2"
                            placeholder="example@email.com"
                        />
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
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Your username"
                        />
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
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Your password"
                        />
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

interface SignUpFormPageOneProps {
    onSignUp: (formData: {
        parentType: string;
        birthDate: {
            day: string;
            month: string;
            year: string;
        };
        heardAboutUs: string;
    }) => void;
}

const SignUpFormPageOne: React.FC<SignUpFormPageOneProps> = ({ onSignUp }) => {
    const [formData, setFormData] = useState({
        parentType: '',
        birthDate: {
            day: '',
            month: '',
            year: ''
        },
        heardAboutUs: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            birthDate: {
                ...formData.birthDate,
                [name]: value
            }
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSignUp(formData);
    };

    return (
        <div className="w-full max-w-md">
            <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <h2 className="font-bold text-2xl mb-4">Sign Up</h2>
                <p className="mb-4">Become an explorer today as a</p>
                <div className="flex mb-8">
                    <button type="button" className="flex-1 bg-[#23176D] text-white py-2 px-4 rounded">Parent</button>
                    <button type="button" className="flex-1 bg-gray-200 py-2 px-4 rounded ml-2">Child</button>
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
                </div>
                <div className="mb-4">
                    <label className="font-bold block mb-2">What is your child's birth date?</label>
                    <div className="flex">
                        <select
                            name="day"
                            value={formData.birthDate.day}
                            onChange={handleDateChange}
                            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mr-2"
                        >
                            <option value="">Day</option>
                            {/* Populate days 1-31 */}
                            {[...Array(31).keys()].map(day => (
                                <option key={day + 1} value={day + 1}>{day + 1}</option>
                            ))}
                        </select>
                        <select
                            name="month"
                            value={formData.birthDate.month}
                            onChange={handleDateChange}
                            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mr-2"
                        >
                            <option value="">Month</option>
                            {/* Populate months 1-12 */}
                            {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
                                <option key={index + 1} value={index + 1}>{month}</option>
                            ))}
                        </select>
                        <select
                            name="year"
                            value={formData.birthDate.year}
                            onChange={handleDateChange}
                            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        >
                            <option value="">Year</option>
                            {/* Populate years dynamically */}
                            {Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i).map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="mb-8">
                    <label className="block font-bold mb-2">How did you hear about us?</label>
                    <select
                        name="heardAboutUs"
                        value={formData.heardAboutUs}
                        onChange={handleInputChange}
                        className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                        <option value="">Select</option>
                        <option value="social_media">Social Media</option>
                        <option value="friend">Friend</option>
                        <option value="search_engine">Search Engine</option>
                        <option value="advertisement">Advertisement</option>
                    </select>
                </div>
                <div>
                    <label className="block font-bold mb-2">Let's get started!</label>
                    <button
                        type="submit"
                        className="border-2 border-[#23176D] text-[#23176D] py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Sign up by creating a username
                    </button>
                </div>
            </form>
        </div>
    );
};


const SignUpPage: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<'pageOne' | 'pageTwo'>('pageOne');
    const [formData, setFormData] = useState({
        parentType: '',
        birthDate: {
            day: '',
            month: '',
            year: ''
        },
        heardAboutUs: '',
        email: '',
        receiveNewsletter: false,
        username: '',
        password: ''
    });

    const handleSignUpFromPageOne = (data: {
        parentType: string;
        birthDate: {
            day: string;
            month: string;
            year: string;
        };
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
                    <SignUpFormPageTwo onBack={handleBackFromPageTwo} />
                )}
            </AuthPageLayout>
            <Footer />
        </div>
    );
};

export default SignUpPage;