import { ReactNode } from 'react';

export interface SubtitleProps {
    children: ReactNode;
}
export const Subtitle = ({ children }: SubtitleProps) => <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">{children}</h2>
