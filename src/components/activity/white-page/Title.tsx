import { ReactNode } from 'react';

export interface TitleProps {
    children: ReactNode;
}
export const Title = ({ children }: TitleProps) => <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 lg:mb-8">{children}</h2>
