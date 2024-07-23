"use client"

import SideNav from "@/components/SideNav";
import React, { useState } from "react";
import HomeNav from '@/components/HomeNav';
import Map2 from "@/components/Map2";

const mapImages = [
    "/images/activities/parental-paradise/parental-paradise-map.png",
    "/images/activities/blossom-haven/blossom-haven-map.png",
    "/images/activities/starlight-meadows/starlight-meadows-map.png",
    "/images/activities/rainbow-valley/rainbow-valley-map.png",
    "/images/activities/adventure-bay/adventure-bay-map.png",
    "/images/activities/fantasy-forest/fantasy-forest-map.png",
];

const mapMarkers = [
    {
        name: 'Pregnancy Meditation',
        markers: [
            {
                id: '1', x: 25, y: 20, link: '/prenatal-paradise/caregiver-wellness', backgroundColor: '#EC407A', borderColor: '#D81B60', name: 'Caregiver Wellness', activities: [
                    { name: 'Meditation', icon: '/path-to-meditation-icon.svg' },
                    { name: 'Walking Journal', icon: '/path-to-walking-journal-icon.svg' },
                    { name: 'Typing Hero', icon: '/path-to-typing-hero-icon.svg' },
                ],
            },
            { id: '2', x: 10, y: 30, link: '/prenatal-paradise/creative-arts', backgroundColor: '#EC407A', borderColor: '#D81B60', name: 'Creative Arts' },
            { id: '3', x: 15, y: 55, link: '/prenatal-paradise/emotional-social-behavioral', backgroundColor: '#EC407A', borderColor: '#D81B60', name: 'Emotional Social Behavioral' },
            { id: '4', x: 25, y: 75, link: '/prenatal-paradise/language-literacy-speech', backgroundColor: '#EC407A', borderColor: '#D81B60', name: 'Language Literacy Speech' },
            { id: '5', x: 40, y: 60, link: '/prenatal-paradise/nutrition', backgroundColor: '#EC407A', borderColor: '#D81B60', name: 'Nutrition' },
            { id: '6', x: 60, y: 60, link: '/prenatal-paradise/physical-activity', backgroundColor: '#EC407A', borderColor: '#D81B60', name: 'Physical Activity' },
            { id: '7', x: 75, y: 65, link: '/prenatal-paradise/safety', backgroundColor: '#EC407A', borderColor: '#D81B60', name: 'Safety' },
            { id: '8', x: 85, y: 40, link: '/prenatal-paradise/sound-and-music', backgroundColor: '#EC407A', borderColor: '#D81B60', name: 'Sound and Music' },
            { id: '9', x: 80, y: 25, link: '/prenatal-paradise/touch', backgroundColor: '#EC407A', borderColor: '#D81B60', name: 'Touch' }
        ],
    },
    {
        name: "Blossom Haven",
        markers: [
            { id: '1', x: 50, y: 20, link: '/blossom-haven/caregiver-wellness', backgroundColor: '#FFA500', borderColor: '#FF8C00', name: 'Caregiver Wellness' },
            { id: '2', x: 30, y: 35, link: '/blossom-haven/creative-arts', backgroundColor: '#FFA500', borderColor: '#FF8C00', name: 'Creative Arts' },
            { id: '3', x: 15, y: 40, link: '/blossom-haven/emotional-social-behavioral', backgroundColor: '#FFA500', borderColor: '#FF8C00', name: 'Emotional Social Behavioral' },
            { id: '4', x: 20, y: 70, link: '/blossom-haven/language-literacy-speech', backgroundColor: '#FFA500', borderColor: '#FF8C00', name: 'Language Literacy Speech' },
            { id: '5', x: 40, y: 60, link: '/blossom-haven/nutrition', backgroundColor: '#FFA500', borderColor: '#FF8C00', name: 'Nutrition' },
            { id: '6', x: 60, y: 55, link: '/blossom-haven/physical-activity', backgroundColor: '#FFA500', borderColor: '#FF8C00', name: 'Physical Activity' },
            { id: '7', x: 75, y: 65, link: '/blossom-haven/safety', backgroundColor: '#FFA500', borderColor: '#FF8C00', name: 'Safety' },
            { id: '8', x: 80, y: 40, link: '/blossom-haven/sound-and-music', backgroundColor: '#FFA500', borderColor: '#FF8C00', name: 'Sound and Music' },
            { id: '9', x: 75, y: 25, link: '/blossom-haven/touch', backgroundColor: '#FFA500', borderColor: '#FF8C00', name: 'Touch' },
            { id: '10', x: 45, y: 75, link: '/blossom-haven/math-and-science', backgroundColor: '#FFA500', borderColor: '#FF8C00', name: 'Math and Science' }
        ]
    },
    {
        name: "Starlight Meadows",
        markers: [
            { id: '1', x: 50, y: 20, link: '/starlight-meadows/caregiver-wellness', backgroundColor: '#3498DB', borderColor: '#2980B9', name: 'Caregiver Wellness' },
            { id: '2', x: 35, y: 30, link: '/starlight-meadows/creative-arts', backgroundColor: '#3498DB', borderColor: '#2980B9', name: 'Creative Arts' },
            { id: '3', x: 20, y: 30, link: '/starlight-meadows/emotional-social-behavioral', backgroundColor: '#3498DB', borderColor: '#2980B9', name: 'Emotional Social Behavioral' },
            { id: '4', x: 15, y: 60, link: '/starlight-meadows/language-literacy-speech', backgroundColor: '#3498DB', borderColor: '#2980B9', name: 'Language Literacy Speech' },
            { id: '5', x: 45, y: 50, link: '/starlight-meadows/nutrition', backgroundColor: '#3498DB', borderColor: '#2980B9', name: 'Nutrition' },
            { id: '6', x: 60, y: 50, link: '/starlight-meadows/physical-activity', backgroundColor: '#3498DB', borderColor: '#2980B9', name: 'Physical Activity' },
            { id: '7', x: 70, y: 65, link: '/starlight-meadows/safety', backgroundColor: '#3498DB', borderColor: '#2980B9', name: 'Safety' },
            { id: '8', x: 80, y: 40, link: '/starlight-meadows/sound-and-music', backgroundColor: '#3498DB', borderColor: '#2980B9', name: 'Sound and Music' },
            { id: '9', x: 80, y: 20, link: '/starlight-meadows/touch', backgroundColor: '#3498DB', borderColor: '#2980B9', name: 'Touch' },
            { id: '10', x: 35, y: 70, link: '/starlight-meadows/math-and-science', backgroundColor: '#3498DB', borderColor: '#2980B9', name: 'Math and Science' }
        ]
    },
    {
        name: "Rainbow Valley",
        markers: [
            { id: '1', x: 50, y: 30, link: '/rainbow-valley/caregiver-wellness', backgroundColor: '#E74C3C', borderColor: '#C0392B', name: 'Caregiver Wellness' },
            { id: '2', x: 35, y: 35, link: '/rainbow-valley/creative-arts', backgroundColor: '#E67E22', borderColor: '#D35400', name: 'Creative Arts' },
            { id: '3', x: 20, y: 35, link: '/rainbow-valley/emotional-social-behavioral', backgroundColor: '#F1C40F', borderColor: '#F39C12', name: 'Emotional Social Behavioral' },
            { id: '4', x: 15, y: 60, link: '/rainbow-valley/language-literacy-speech', backgroundColor: '#2ECC71', borderColor: '#27AE60', name: 'Language Literacy Speech' },
            { id: '5', x: 45, y: 50, link: '/rainbow-valley/nutrition', backgroundColor: '#3498DB', borderColor: '#2980B9', name: 'Nutrition' },
            { id: '6', x: 65, y: 55, link: '/rainbow-valley/physical-activity', backgroundColor: '#9B59B6', borderColor: '#8E44AD', name: 'Physical Activity' },
            { id: '7', x: 75, y: 65, link: '/rainbow-valley/safety', backgroundColor: '#E74C3C', borderColor: '#C0392B', name: 'Safety' },
            { id: '8', x: 80, y: 45, link: '/rainbow-valley/sound-and-music', backgroundColor: '#E67E22', borderColor: '#D35400', name: 'Sound and Music' },
            { id: '9', x: 75, y: 30, link: '/rainbow-valley/touch', backgroundColor: '#F1C40F', borderColor: '#F39C12', name: 'Touch' },
            { id: '10', x: 35, y: 70, link: '/rainbow-valley/math-and-science', backgroundColor: '#1ABC9C', borderColor: '#16A085', name: 'Math and Science' }
        ]
    },
    {
        name: "Adventure Bay",
        markers: [
            { id: '1', x: 30, y: 15, link: '/adventure-bay/caregiver-wellness', backgroundColor: '#1ABC9C', borderColor: '#16A085', name: 'Caregiver Wellness' },
            { id: '2', x: 15, y: 25, link: '/adventure-bay/creative-arts', backgroundColor: '#1ABC9C', borderColor: '#16A085', name: 'Creative Arts' },
            { id: '3', x: 20, y: 40, link: '/adventure-bay/emotional-social-behavioral', backgroundColor: '#1ABC9C', borderColor: '#16A085', name: 'Emotional Social Behavioral' },
            { id: '4', x: 25, y: 65, link: '/adventure-bay/language-literacy-speech', backgroundColor: '#1ABC9C', borderColor: '#16A085', name: 'Language Literacy Speech' },
            { id: '10', x: 45, y: 75, link: '/adventure-bay/math-and-science', backgroundColor: '#1ABC9C', borderColor: '#16A085', name: 'Math and Science' },
            { id: '5', x: 50, y: 50, link: '/adventure-bay/nutrition', backgroundColor: '#1ABC9C', borderColor: '#16A085', name: 'Nutrition' },
            { id: '6', x: 65, y: 55, link: '/adventure-bay/physical-activity', backgroundColor: '#1ABC9C', borderColor: '#16A085', name: 'Physical Activity' },
            { id: '7', x: 75, y: 70, link: '/adventure-bay/safety', backgroundColor: '#1ABC9C', borderColor: '#16A085', name: 'Safety' },
            { id: '8', x: 85, y: 40, link: '/adventure-bay/sound-and-music', backgroundColor: '#1ABC9C', borderColor: '#16A085', name: 'Sound and Music' },
            { id: '9', x: 80, y: 20, link: '/adventure-bay/touch', backgroundColor: '#1ABC9C', borderColor: '#16A085', name: 'Touch' },
        ]
    },
    {
        name: "Fantasy Forest",
        markers: [
            { id: '1', x: 40, y: 15, link: '/fantasy-forest/caregiver-wellness', backgroundColor: '#2ecc71', borderColor: '#27ae60', name: 'Caregiver Wellness' },
            { id: '2', x: 20, y: 20, link: '/fantasy-forest/creative-arts', backgroundColor: '#2ecc71', borderColor: '#27ae60', name: 'Creative Arts' },
            { id: '3', x: 15, y: 35, link: '/fantasy-forest/emotional-social-behavioral', backgroundColor: '#2ecc71', borderColor: '#27ae60', name: 'Emotional Social Behavioral' },
            { id: '4', x: 20, y: 75, link: '/fantasy-forest/language-literacy-speech', backgroundColor: '#2ecc71', borderColor: '#27ae60', name: 'Language Literacy Speech' },
            { id: '5', x: 40, y: 75, link: '/fantasy-forest/math-and-science', backgroundColor: '#2ecc71', borderColor: '#27ae60', name: 'Math and Science' },
            { id: '6', x: 50, y: 55, link: '/fantasy-forest/nutrition', backgroundColor: '#2ecc71', borderColor: '#27ae60', name: 'Nutrition' },
            { id: '7', x: 60, y: 65, link: '/fantasy-forest/physical-activity', backgroundColor: '#2ecc71', borderColor: '#27ae60', name: 'Physical Activity' },
            { id: '8', x: 75, y: 70, link: '/fantasy-forest/safety', backgroundColor: '#2ecc71', borderColor: '#27ae60', name: 'Safety' },
            { id: '9', x: 85, y: 40, link: '/fantasy-forest/sound-and-music', backgroundColor: '#2ecc71', borderColor: '#27ae60', name: 'Sound and Music' },
            { id: '10', x: 80, y: 25, link: '/fantasy-forest/touch', backgroundColor: '#2ecc71', borderColor: '#27ae60', name: 'Touch' },
        ]
    }
];

const Dashboard: React.FC = () => {
    const [currentMapIndex, setCurrentMapIndex] = useState(0);

    const map = mapImages[currentMapIndex];
    const markers = mapMarkers[currentMapIndex].markers;

    const handleMapChange = (index: number) => {
        setCurrentMapIndex(index);
    };

    return (
        <div className="w-full h-screen flex flex-col">
            <div className="w-full">
                <HomeNav onMapChange={handleMapChange} />
            </div>
            <div className="flex flex-grow h-[calc(100%-6rem)]">
                <SideNav />
                <div className="flex flex-col w-3/4">
                    <Map2
                        image={map}
                        markers={markers}
                        height={1000}
                        width={1500}
                    />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
