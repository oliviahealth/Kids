import { createContext } from 'react';

export interface ColorContextType {
    colors: [string, string, string]
}
export const ColorContext = createContext<ColorContextType>({ colors: ['', '', ''] });