import { ReactNode } from 'react';
import { Subtitle } from './Subtitle';

export interface DescriptionProps {
    title?: string;
    children?: ReactNode,
    paragraphs?: string[];
}

export const Description = ({ title, paragraphs, children }: DescriptionProps) => (
    <div className="mb-8">
        {title && <Subtitle>{title}</Subtitle>}
        <div className="text-sm 2xl:text-lg mb-4">
            {children}
            {paragraphs && paragraphs.map((paragraph, index) => <p key={index} className="mb-4">{paragraph}</p>)}
        </div>

    </div>
);
