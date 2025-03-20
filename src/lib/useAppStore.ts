'use client';

import { create } from "zustand";

interface AppState {
    user: boolean;
    setUser: (user: boolean) => void;
}

const useAppStore = create<AppState>()((set) => ({
    user: false,
    setUser: (user) => set(() => {
        console.log(user);
        
        return { user }
    })
}));

export default useAppStore