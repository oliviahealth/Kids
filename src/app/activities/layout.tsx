'use client';

import useAppStore from "@/lib/useAppStore";
import { redirect } from "next/navigation";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const user = useAppStore(state => state.user);
    if(!user) {
        redirect("/sign-in");
    }

    console.log(user);
  
    // If authenticated, render the layout with the children content
    return (
        <>
        {children}
        </>
    );
  };
  
  export default Layout;