import SideNav from "@/components/SideNav";
import React from "react";
import HomeNav from '@/components/HomeNav';
import Map from '@/components/Map';

const mapImages = [
    "/images/activities/parental-paradise/parental-paradise-map.png",
    "/images/activities/blossom-haven/blossom-haven-map.png",
    "/images/activities/starlight-meadows/starlight-meadows-map.png",
    "/images/activities/rainbow-valley/rainbow_valley-map.png",
    "/images/activities/adventure-bay/adventure-bay-map.png",
    "/images/activities/fantasy-forest/fantasy-forest.png",
]

const mapMarkers = [
    {
        name: 'Pregnancy Meditation',
        markers: [
            {
                id: 1,
                top: '30%',
                left: '20%',
                link: '/home/pregnancy/meditation',
                backgroundColor: '#ff0000',
                borderColor: '#990000'
            },
            {
                id: 2,
                top: '50%',
                left: '40%',
                link: '/home/walking-nature-journal',
                backgroundColor: '#00ff00',
                borderColor: '#009900'
            },
            {
                id: 3,
                top: '50%',
                left: '60%',
                link: '/blossom-haven/at-home-exercises',
                backgroundColor: '#0000ff',
                borderColor: '#000099'
            },
        ]
    },
    {

    }
]

const Dashboard: React.FC = () => {
    const map = mapImages[0];
    const markers = mapMarkers[0].markers;

    return (
        <div className="w-full h-screen flex flex-col">
            <div className="w-full">
                <HomeNav />
            </div>
            <div className="flex flex-grow h-[calc(100%-6rem)]">
                <SideNav />
                <Map map={map} markers={markers} />
            </div>
        </div>
    );
}

export default Dashboard;
