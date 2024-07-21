import { useContext } from 'react';
import { ColorContext } from './ColorContext';

interface HeaderProps {
    image: string;
    title: string;
    subtitle: string;
}
const Header = ({ image, title, subtitle }: HeaderProps) => {
    const { colors } = useContext(ColorContext);

    return <div className="flex items-center">

        <img src={image} alt="Logo" className="h-full object-contain" />

        <div className="ml-4">
            <h1 className="text-sm sm:text-base lg:text-lg 2xl:text-2xl font-bold text-gray-800">{title}</h1>
            <h2 style={{ color: colors[0] }} className="text-xs sm:text-sm lg:text-base 2xl:text-xl">{subtitle}</h2>
        </div>
    </div>
}

export type TopBarProps = {
    onExit: () => void;
} & HeaderProps
export const TopBar = ({ onExit, title, image, subtitle }: TopBarProps) => (
    <div className="flex justify-between h-10 2xl:h-16 w-full mb-8">
        <Header title={title} image={image} subtitle={subtitle} ></Header>
        <button onClick={onExit}>
            <img src="/images/activities/buttons/exit.svg" className="h-full w-auto object-contain" />
        </button>
    </div>
);