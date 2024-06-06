import React from "react";
import HomeNav from '@/components/HomeNav';

const Dashboard: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="w-full">
                <HomeNav />
            </div>
            <div className="w-full flex justify-center items-center">
                <h1 className="font-semibold">Page</h1>
            </div>
        </div>
    );
}

export default Dashboard;
