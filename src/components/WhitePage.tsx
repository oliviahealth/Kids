"use client";

import React, { ReactNode, useState } from 'react';

export const WPHeader: React.FC<{ image: string, title: string, subtitleColor: string, subtitle: string }> = ({ image, title, subtitleColor, subtitle }) => (
    <div className="flex items-center mb-8">
        <div className="flex-shrink-0">
            <img src={image} alt="Logo" className="h-16 w-16" />
        </div>
        <div className="ml-4">
            <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
            <h2 style={{ color: subtitleColor }} className="text-xl text-[#f59e0b]">{subtitle}</h2>
        </div>
    </div>
);

export const WPDescription: React.FC<{ title: string, paragraphs: string[] }> = ({ title, paragraphs }) => (
    <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        {paragraphs.map((paragraph, index) => <p key={index} className="text-sm ml-4 mb-4">{paragraph}</p>)}
    </div>
);

export const WPContainer: React.FC<{ children: ReactNode, onBack: () => void, backText: string, onContinue: () => void, onExit: () => void, image?: string }> = ({ image, children, backText, onBack, onContinue, onExit }) => (
    <div className="relative min-h-[100vh] w-[100vw] bg-cover bg-center bg-[url('/images/map.svg')]">
        <div className="bg-black bg-opacity-50 w-[100vw] h-[100vh] flex justify-center items-center">

            <div className="bg-white rounded-3xl w-[80vw] min-h-[70vh] max-h-[90vh] p-8 m-8 relative flex flex-col justify-between"> {/*"overflow-y-auto bg-white rounded-3xl max-w-7xl max-h-[90vh] p-8 m-8 relative"*/}
                <button onClick={onExit} className="absolute right-8 top-8">
                    <img src="/images/exit.svg" alt="Exit" className="size-16" />
                </button>

                <div className="md:flex justify-between space-x-16">
                    <div className="w-full xl:w-auto xl:max-w-[60%] flex flex-col">
                        {children}
                    </div>
                    {
                        image && <img src={image} className="hidden max-w-[30%] xl:block w-auto h-auto max-h-[40vh]" />
                    }
                </div>

                <div className="flex justify-between w-full mt-4">
                    <button onClick={onBack} className="bg-transparent text-red-500 p-0 border-none cursor-pointer text-lg no-underline hover:underline">{backText}</button>
                    <button onClick={onContinue} className="bg-transparent border-none cursor-pointer text-lg no-underline">
                        <img src="/images/continue.svg" alt="Continue" />
                    </button>
                </div>
            </div>
        </div>
    </div >
);

export const WPNeedsContainer: React.FC<{ title?: string, children: ReactNode }> = ({ title, children }) => <div className="mb-8">
    {title && <h1 className="text-2xl font-bold mb-8">{title}</h1>}
    {children}
</div>

export const WPNeedsContent: React.FC<{ title?: string, items: { name: string, image: string }[] }> = ({ title, items }) => <div>
    {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
    <div className="ml-4 sm:flex space-x-8">
        {items.map((item) => (
            <div key={item.name} className="flex flex-col items-center">
                <img src={item.image} alt={item.name} className="h-16 w-16 mb-4 object-cover" />
                <span className="text-xl">{item.name}</span>
            </div>
        ))}
    </div>
</div>

export const WPTitle: React.FC<{ title: string }> = ({ title }) => <h2 className="text-2xl font-bold mb-8">{title}</h2>

export const WPSubtitle: React.FC<{ title: string }> = ({ title }) => <h2 className="text-2xl font-bold mb-4">{title}</h2>

export const WPActivityPreview: React.FC<{ hideTitle?: boolean, color: string, activities: { id: number, title: string, description: string }[] }> = ({ hideTitle, color, activities }) => <div className="mb-8">
    {!hideTitle && <WPTitle title="Activity" />}
    <ul className="ml-4 space-y-8">
        {activities.map((activity) => (
            <li key={activity.id} className="flex items-start">
                <div style={{ backgroundColor: color }} className="size-12 flex items-center justify-center rounded-full text-lg mr-4">
                    {activity.id}
                </div>
                <div>
                    <h3 className="font-bold mb-1">
                        {activity.title}

                    </h3>
                    <p className="text-sm">{activity.description}</p>
                </div>
            </li>
        ))}
    </ul>
</div>

export const WPAddPhotoButton: React.FC<{ color: string, icon: string, onClick: () => void }> = ({ color, icon, onClick }) => (
    <div
        style={{ backgroundColor: color }}
        className="flex items-center justify-center w-80 h-48 bg-green-100 rounded-lg cursor-pointer"
        onClick={onClick}
    >
        <div className="flex flex-col items-center">
            <img src={icon} alt="Add a photo" className="w-12 h-12 mb-2" />
            <span className="text-black text-opacity-40">Add a photo</span>
        </div>
    </div>
);
