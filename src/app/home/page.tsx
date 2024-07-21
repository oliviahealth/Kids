import SideNav from "@/components/SideNav";
import React from "react";
import HomeNav from '@/components/HomeNav';
import Map from '@/components/Map';

const mapImages = [
    "/images/activities/parental-paradise/parental-paradise-map.png",
    "/images/activities/blossom-haven/blossom-haven-map.png",
    "/images/activities/starlight-meadows/starlight-meadows-map.png",
    "/images/activities/rainbow-valley/rainbow-valley-map.png",
    "/images/activities/adventure-bay/adventure-bay-map.png",
    "/images/activities/fantasy-forest/fantasy-forest-map.png",
]

const mapMarkers = [
    {
        name: 'Pregnancy Meditation',
        markers: [
            { id: 1, top: '20%', left: '25%', link: '/prenatal-paradise/caregiver-wellness', backgroundColor: '#EC407A', borderColor: '#D81B60', name: 'Caregiver Wellness' },
            { id: 2, top: '30%', left: '10%', link: '/prenatal-paradise/creative-arts', backgroundColor: '#EC407A', borderColor: '#D81B60', name: 'Creative Arts' },
            { id: 3, top: '55%', left: '15%', link: '/prenatal-paradise/emotional-social-behavioral', backgroundColor: '#EC407A', borderColor: '#D81B60', name: 'Emotional Social Behavioral' },
            { id: 4, top: '75%', left: '25%', link: '/prenatal-paradise/language-literacy-speech', backgroundColor: '#EC407A', borderColor: '#D81B60', name: 'Language Literacy Speech' },
            { id: 5, top: '60%', left: '40%', link: '/prenatal-paradise/nutrition', backgroundColor: '#EC407A', borderColor: '#D81B60', name: 'Nutrition' },
            { id: 6, top: '60%', left: '60%', link: '/prenatal-paradise/physical-activity', backgroundColor: '#EC407A', borderColor: '#D81B60', name: 'Physical Activity' },
            { id: 7, top: '65%', left: '75%', link: '/prenatal-paradise/safety', backgroundColor: '#EC407A', borderColor: '#D81B60', name: 'Safety' },
            { id: 8, top: '40%', left: '85%', link: '/prenatal-paradise/sound-and-music', backgroundColor: '#EC407A', borderColor: '#D81B60', name: 'Sound and Music' },
            { id: 9, top: '25%', left: '80%', link: '/prenatal-paradise/touch', backgroundColor: '#EC407A', borderColor: '#D81B60', name: 'Touch' }
        ]
    },
    {
        name: "Blossom Haven",
        markers: [
            { id: 1, top: '20%', left: '50%', link: '/blossom-haven/caregiver-wellness', backgroundColor: '#FFA500', borderColor: '#FF8C00', name: 'Caregiver Wellness' },
            { id: 2, top: '35%', left: '30%', link: '/blossom-haven/creative-arts', backgroundColor: '#FFA500', borderColor: '#FF8C00', name: 'Creative Arts' },
            { id: 3, top: '40%', left: '15%', link: '/blossom-haven/emotional-social-behavioral', backgroundColor: '#FFA500', borderColor: '#FF8C00', name: 'Emotional Social Behavioral' },
            { id: 4, top: '70%', left: '20%', link: '/blossom-haven/language-literacy-speech', backgroundColor: '#FFA500', borderColor: '#FF8C00', name: 'Language Literacy Speech' },
            { id: 5, top: '60%', left: '40%', link: '/blossom-haven/nutrition', backgroundColor: '#FFA500', borderColor: '#FF8C00', name: 'Nutrition' },
            { id: 6, top: '55%', left: '60%', link: '/blossom-haven/physical-activity', backgroundColor: '#FFA500', borderColor: '#FF8C00', name: 'Physical Activity' },
            { id: 7, top: '65%', left: '75%', link: '/blossom-haven/safety', backgroundColor: '#FFA500', borderColor: '#FF8C00', name: 'Safety' },
            { id: 8, top: '40%', left: '80%', link: '/blossom-haven/sound-and-music', backgroundColor: '#FFA500', borderColor: '#FF8C00', name: 'Sound and Music' },
            { id: 9, top: '25%', left: '75%', link: '/blossom-haven/touch', backgroundColor: '#FFA500', borderColor: '#FF8C00', name: 'Touch' },
            { id: 10, top: '75%', left: '45%', link: '/blossom-haven/math-and-science', backgroundColor: '#FFA500', borderColor: '#FF8C00', name: 'Math and Science' }
        ]
    },
    {
        name: "Starlight Meadows",
        markers: [
            { id: 1, top: '20%', left: '50%', link: '/starlight-meadows/caregiver-wellness', backgroundColor: '#3498DB', borderColor: '#2980B9', name: 'Caregiver Wellness' },
            { id: 2, top: '30%', left: '35%', link: '/starlight-meadows/creative-arts', backgroundColor: '#3498DB', borderColor: '#2980B9', name: 'Creative Arts' },
            { id: 3, top: '30%', left: '20%', link: '/starlight-meadows/emotional-social-behavioral', backgroundColor: '#3498DB', borderColor: '#2980B9', name: 'Emotional Social Behavioral' },
            { id: 4, top: '60%', left: '15%', link: '/starlight-meadows/language-literacy-speech', backgroundColor: '#3498DB', borderColor: '#2980B9', name: 'Language Literacy Speech' },
            { id: 5, top: '50%', left: '45%', link: '/starlight-meadows/nutrition', backgroundColor: '#3498DB', borderColor: '#2980B9', name: 'Nutrition' },
            { id: 6, top: '50%', left: '60%', link: '/starlight-meadows/physical-activity', backgroundColor: '#3498DB', borderColor: '#2980B9', name: 'Physical Activity' },
            { id: 7, top: '65%', left: '70%', link: '/starlight-meadows/safety', backgroundColor: '#3498DB', borderColor: '#2980B9', name: 'Safety' },
            { id: 8, top: '40%', left: '80%', link: '/starlight-meadows/sound-and-music', backgroundColor: '#3498DB', borderColor: '#2980B9', name: 'Sound and Music' },
            { id: 9, top: '20%', left: '80%', link: '/starlight-meadows/touch', backgroundColor: '#3498DB', borderColor: '#2980B9', name: 'Touch' },
            { id: 10, top: '70%', left: '35%', link: '/starlight-meadows/math-and-science', backgroundColor: '#3498DB', borderColor: '#2980B9', name: 'Math and Science' }
        ]
    },
    {
        name: "Rainbow Valley",
        markers: [
            { id: 1, top: '30%', left: '50%', link: '/rainbow-valley/caregiver-wellness', backgroundColor: '#E74C3C', borderColor: '#C0392B', name: 'Caregiver Wellness' },
            { id: 2, top: '35%', left: '35%', link: '/rainbow-valley/creative-arts', backgroundColor: '#E67E22', borderColor: '#D35400', name: 'Creative Arts' },
            { id: 3, top: '35%', left: '20%', link: '/rainbow-valley/emotional-social-behavioral', backgroundColor: '#F1C40F', borderColor: '#F39C12', name: 'Emotional Social Behavioral' },
            { id: 4, top: '60%', left: '15%', link: '/rainbow-valley/language-literacy-speech', backgroundColor: '#2ECC71', borderColor: '#27AE60', name: 'Language Literacy Speech' },
            { id: 5, top: '50%', left: '45%', link: '/rainbow-valley/nutrition', backgroundColor: '#3498DB', borderColor: '#2980B9', name: 'Nutrition' },
            { id: 6, top: '55%', left: '65%', link: '/rainbow-valley/physical-activity', backgroundColor: '#9B59B6', borderColor: '#8E44AD', name: 'Physical Activity' },
            { id: 7, top: '65%', left: '75%', link: '/rainbow-valley/safety', backgroundColor: '#E74C3C', borderColor: '#C0392B', name: 'Safety' },
            { id: 8, top: '45%', left: '80%', link: '/rainbow-valley/sound-and-music', backgroundColor: '#E67E22', borderColor: '#D35400', name: 'Sound and Music' },
            { id: 9, top: '30%', left: '75%', link: '/rainbow-valley/touch', backgroundColor: '#F1C40F', borderColor: '#F39C12', name: 'Touch' },
            { id: 10, top: '70%', left: '35%', link: '/rainbow-valley/math-and-science', backgroundColor: '#1ABC9C', borderColor: '#16A085', name: 'Math and Science' }
        ]
    },
    {
        name: "Adventure Bay",
        markers: [
            { id: 1, top: '15%', left: '30%', link: '/adventure-bay/caregiver-wellness', backgroundColor: '#1ABC9C', borderColor: '#16A085', name: 'Caregiver Wellness' },
            { id: 2, top: '25%', left: '15%', link: '/adventure-bay/creative-arts', backgroundColor: '#1ABC9C', borderColor: '#16A085', name: 'Creative Arts' },
            { id: 3, top: '40%', left: '20%', link: '/adventure-bay/emotional-social-behavioral', backgroundColor: '#1ABC9C', borderColor: '#16A085', name: 'Emotional Social Behavioral' },
            { id: 4, top: '65%', left: '25%', link: '/adventure-bay/language-literacy-speech', backgroundColor: '#1ABC9C', borderColor: '#16A085', name: 'Language Literacy Speech' },
            { id: 5, top: '50%', left: '50%', link: '/adventure-bay/nutrition', backgroundColor: '#1ABC9C', borderColor: '#16A085', name: 'Nutrition' },
            { id: 6, top: '55%', left: '65%', link: '/adventure-bay/physical-activity', backgroundColor: '#1ABC9C', borderColor: '#16A085', name: 'Physical Activity' },
            { id: 7, top: '70%', left: '75%', link: '/adventure-bay/safety', backgroundColor: '#1ABC9C', borderColor: '#16A085', name: 'Safety' },
            { id: 8, top: '40%', left: '85%', link: '/adventure-bay/sound-and-music', backgroundColor: '#1ABC9C', borderColor: '#16A085', name: 'Sound and Music' },
            { id: 9, top: '20%', left: '80%', link: '/adventure-bay/touch', backgroundColor: '#1ABC9C', borderColor: '#16A085', name: 'Touch' },
            { id: 10, top: '75%', left: '45%', link: '/adventure-bay/math-and-science', backgroundColor: '#1ABC9C', borderColor: '#16A085', name: 'Math and Science' }
        ]
    },
    {
        name: "Fantasy Forest",
        markers: [
            { id: 1, top: '15%', left: '40%', link: '/fantasy-forest/caregiver-wellness', backgroundColor: '#2ecc71', borderColor: '#27ae60', name: 'Caregiver Wellness' },
            { id: 2, top: '20%', left: '20%', link: '/fantasy-forest/creative-arts', backgroundColor: '#2ecc71', borderColor: '#27ae60', name: 'Creative Arts' },
            { id: 3, top: '35%', left: '15%', link: '/fantasy-forest/emotional-social-behavioral', backgroundColor: '#2ecc71', borderColor: '#27ae60', name: 'Emotional Social Behavioral' },
            { id: 4, top: '75%', left: '20%', link: '/fantasy-forest/language-literacy-speech', backgroundColor: '#2ecc71', borderColor: '#27ae60', name: 'Language Literacy Speech' },
            { id: 5, top: '75%', left: '40%', link: '/fantasy-forest/math-and-science', backgroundColor: '#2ecc71', borderColor: '#27ae60', name: 'Math and Science' },
            { id: 6, top: '55%', left: '50%', link: '/fantasy-forest/nutrition', backgroundColor: '#2ecc71', borderColor: '#27ae60', name: 'Nutrition' },
            { id: 7, top: '65%', left: '60%', link: '/fantasy-forest/physical-activity', backgroundColor: '#2ecc71', borderColor: '#27ae60', name: 'Physical Activity' },
            { id: 8, top: '70%', left: '75%', link: '/fantasy-forest/safety', backgroundColor: '#2ecc71', borderColor: '#27ae60', name: 'Safety' },
            { id: 9, top: '25%', left: '80%', link: '/fantasy-forest/touch', backgroundColor: '#2ecc71', borderColor: '#27ae60', name: 'Touch' },
            { id: 10, top: '40%', left: '85%', link: '/fantasy-forest/sound-and-music', backgroundColor: '#2ecc71', borderColor: '#27ae60', name: 'Sound and Music' }
        ]
    }
]

const Dashboard: React.FC = () => {
    const map = mapImages[5];
    const markers = mapMarkers[5].markers;

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
