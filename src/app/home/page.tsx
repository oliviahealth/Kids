import SideNav from "@/components/SideNav";
import React from "react";
import HomeNav from '@/components/HomeNav';
import Map from '@/components/Map';

const Dashboard: React.FC = () => {
    return (
        <div className="w-full h-screen flex flex-col">
            <div className="w-full">
                <HomeNav />


            </div>
            <div className="flex flex-grow h-[calc(100%-6rem)]">
                <SideNav />
                <Map />
            </div>
        </div>
    );
}

export default Dashboard;
