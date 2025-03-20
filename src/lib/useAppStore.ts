'use client';

import { create } from "zustand";

interface AppState {
    user: boolean;
    setUser: (user: boolean) => void;
}

const useAppStore = create<AppState>()((set) => ({
    user: false,
    setUser: (user) => set(() => ({ user }))
}));

export default useAppStore