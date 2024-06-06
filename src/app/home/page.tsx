import SideNav from "@/components/SideNav";
import React from "react";

const Dashboard: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col">
            <SideNav />
            <div className="w-full flex justify-center items-center">
                <h1 className="font-semibold">Page</h1>
            </div>
        </div>
    );
}

export default Dashboard;