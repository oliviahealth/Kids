import SideNav from "@/components/SideNav";
import React from "react";

const Home: React.FC = () => {
    return (
        <div className="h-screen">
            <SideNav />
            <div>
                <h1 className="font-semibold">Home</h1>
            </div>
        </div>
    )
}

export default Home;