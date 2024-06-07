import SideNav from "@/components/SideNav";
import React from "react";
import HomeNav from '@/components/HomeNav';

const Dashboard: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col">
            <SideNav />
        </div>
    );
}

export default Dashboard;
