import React, { useState } from "react";
import '../app/globals.css';

// Define a dictionary mapping with newline characters
const mapDictionary: { [key: string]: string } = {
    "Pregnancy Meditation": "Pregnancy Meditation",
    "Blossom Haven": "Ages 0-1\nBlossom Haven",
    "Starlight Meadows": "Ages 1-2\nStarlight Meadows",
    "Rainbow Valley": "Ages 2-3\nRainbow Valley",
    "Adventure Bay": "Ages 3-4\nAdventure Bay",
    "Fantasy Forest": "Ages 4-5\nFantasy Forest"
};

const mapNames = Object.keys(mapDictionary);

interface NavbarProps {
    onMapChange: (index: number) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMapChange }) => {
    const [isOpen, setOpen] = useState(false);
    const [selectedMap, setSelectedMap] = useState(mapNames[0]);

    const menuToggle = () => {
        setOpen(!isOpen);
    };

    const handleMapChange = (index: number) => {
        const selectedKey = mapNames[index];
        setSelectedMap(selectedKey);
        onMapChange(index);
        setOpen(false); // Close the dropdown after selection
    };

    return (
        <div className="xl:container xl:px-2 flex px-5 mx-auto justify-between relative">
            <div className="flex-1 flex justify-center items-end w-full pr-5">
                <div className="relative">
                    <button
                        onClick={menuToggle}
                        className="flex items-center justify-center w-60 text-white font-bold py-2 bg-gray-800 whitespace-nowrap"
                    >
                        {selectedMap}
                    </button>
                    {isOpen && (
                        <div className="absolute top-full left-0 bg-white border shadow-lg w-full">
                            <div className="flex flex-col">
                                {mapNames.map((name, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleMapChange(index)}
                                        className="block px-4 py-2 text-center text-black hover:bg-gray-200 whitespace-pre-wrap"
                                    >
                                        {mapDictionary[name]}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
