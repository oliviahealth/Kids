import React from "react";
import HomeNav from '@/components/HomeNav';
import Map from '@/components/Map';

const Dashboard: React.FC = () => {
    return (
        <div className="w-full h-screen flex flex-col">
            <div className="w-full">
                <HomeNav />
            </div>
            <div className="flex flex-grow">
                <div className="w-1/5" />
                <Map />
            </div>
        </div>
    );
}

export default Dashboard;
