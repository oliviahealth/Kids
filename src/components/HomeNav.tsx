import React, { useState } from "react";
import '../app/globals.css';

// Define the static paths directly
const iconPaths: { [key: string]: string } = {
    "Prenatal Paradise": "/images/navbar/prenatalparadiseicon.svg",
    "Blossom Haven": "/images/navbar/blossomhavenicon.svg",
    "Starlight Meadows": "/images/navbar/starlightmeadowsicon.svg",
    "Rainbow Valley": "/images/navbar/rainbowvalleyicon.svg",
    "Adventure Bay": "/images/navbar/adventurebayicon.svg",
    "Fantasy Forest": "/images/navbar/fantasyforesticon.svg"
};

// Define static paths for the pinkClosed and pinkOpened icons
const pinkClosedPath = "/images/navbar/pinkclosed.svg";
const pinkOpenedPath = "/images/navbar/pinkopened.svg";
const orangeClosedPath = "/images/navbar/orangeclosed.svg";
const orangeOpenedPath = "/images/navbar/orangeopened.svg";
const blueClosedPath = "/images/navbar/blueclosed.svg";
const blueOpenedPath = "/images/navbar/blueopened.svg";
const redClosedPath = "/images/navbar/redclosed.svg";
const redOpenedPath = "/images/navbar/redopened.svg";
const greenClosedPath = "/images/navbar/greenclosed.svg";
const greenOpenedPath = "/images/navbar/greenopened.svg";
const darkGreenClosedPath = "/images/navbar/darkgreenclosed.svg";
const darkGreenOpenedPath = "/images/navbar/darkgreenopened.svg";

const mapDictionary: { [key: string]: string } = {
    "Prenatal Paradise": "Prenatal Paradise",
    "Blossom Haven": "Ages 0-1\nBlossom Haven",
    "Starlight Meadows": "Ages 1-2\nStarlight Meadows",
    "Rainbow Valley": "Ages 2-3\nRainbow Valley",
    "Adventure Bay": "Ages 3-4\nAdventure Bay",
    "Fantasy Forest": "Ages 4-5\nFantasy Forest"
};

const mapColors: { [key: string]: string } = {
    "Prenatal Paradise":'#FDE3FF',
    "Blossom Haven": "#fff7e3",
    "Starlight Meadows": "#c5ceff",
    "Rainbow Valley": "#ffd0d0",
    "Adventure Bay": "#c5fffc",
    "Fantasy Forest": "#b5f6d0"
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
            <div className="flex-1 items-end w-full pr-5">
                <div className="relative">
                    <button
                        onClick={menuToggle}
                        className={`flex items-center justify-center w-60 h-25 font-extrabold py-2 bg-white whitespace-nowrap ${
                            selectedMap === 'Prenatal Paradise' ? 'text-[#EB80F5]' :
                            selectedMap === 'Blossom Haven' ? 'text-[#f1a533]' :
                            selectedMap === 'Starlight Meadows' ? 'text-[#5a6edd]' :
                            selectedMap === 'Rainbow Valley' ? 'text-[#ff7272]' :
                            selectedMap === 'Adventure Bay' ? 'text-[#52c5c0]' :
                            selectedMap === 'Fantasy Forest' ? 'text-[#3dab6a]' : 'text-white'
                        } ${isOpen ? 'rounded-t-lg' : 'rounded-lg'}`}
                        style={{ boxShadow: '0 10px 20px rgba(0, 0, 0, 0.4)' }}
                    >
                        {/* Display the selected map icon */}
                        <img src={iconPaths[selectedMap]} alt={selectedMap} className="w-10 h-10" />
                        <div className="flex flex-col items-center mr-4 ml-6"> {/* Adjusted to stack the words */}
                            <span>{selectedMap.split(' ')[0]}</span> {/* First word */}
                            <span>{selectedMap.split(' ')[1]}</span> {/* Second word */}
                        </div>
                        {/* Conditionally render the corresponding icon */}
                        {selectedMap === "Prenatal Paradise" && (
                            <img
                                src={isOpen ? pinkOpenedPath : pinkClosedPath}
                                alt={isOpen ? "Opened" : "Closed"}
                                className="w-8 h-8 ml-2"
                            />
                        )}
                        {selectedMap === "Blossom Haven" && (
                            <img
                                src={isOpen ? orangeOpenedPath : orangeClosedPath}
                                alt={isOpen ? "Opened" : "Closed"}
                                className="w-8 h-8 ml-2"
                            />
                        )}
                        {selectedMap === "Starlight Meadows" && (
                            <img
                                src={isOpen ? blueOpenedPath : blueClosedPath}
                                alt={isOpen ? "Opened" : "Closed"}
                                className="w-8 h-8 ml-2"
                            />
                        )}
                        {selectedMap === "Rainbow Valley" && (
                            <img
                                src={isOpen ? redOpenedPath : redClosedPath}
                                alt={isOpen ? "Opened" : "Closed"}
                                className="w-8 h-8 ml-2"
                            />
                        )}
                        {selectedMap === "Adventure Bay" && (
                            <img
                                src={isOpen ? greenOpenedPath : greenClosedPath}
                                alt={isOpen ? "Opened" : "Closed"}
                                className="w-8 h-8 ml-2"
                            />
                        )}
                        {selectedMap === "Fantasy Forest" && (
                            <img
                                src={isOpen ? darkGreenOpenedPath : darkGreenClosedPath}
                                alt={isOpen ? "Opened" : "Closed"}
                                className="w-8 h-8 ml-2"
                            />
                        )}
                    </button>
                    <div className={`absolute top-full left-0 bg-white border shadow-lg w-full h-full rounded-b-lg dropdown ${isOpen ? 'dropdown-open' : ''}`}>
                        <div className="flex flex-col">
                            {mapNames.map((name, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleMapChange(index)}
                                    className="flex items-center px-4 py-2 text-left text-black hover:bg-gray-200 whitespace-pre-wrap"
                                    style={{ backgroundColor: mapColors[name] }}
                                >
                                    <div className="flex items-center w-full">
                                        {/* Display the icon to the left */}
                                        <img src={iconPaths[name]} alt={name} className="w-8 h-8 mr-2" />
                                        {/* Display the age text and map name underneath */}
                                        <div className="flex flex-col items-start">
                                            <span
                                                className={`font-bold ${
                                                    name === 'Prenatal Paradise' ? 'text-[#EB80F5]':
                                                    name === 'Blossom Haven' ? 'text-[#f1a533]' :
                                                    name === 'Starlight Meadows' ? 'text-[#5a6edd]' :
                                                    name === 'Rainbow Valley' ? 'text-[#ff7272]' :
                                                    name === 'Adventure Bay' ? 'text-[#52c5c0]' :
                                                    name === 'Fantasy Forest' ? 'text-[#3dab6a]' : ''
                                                }`}
                                            >
                                                {mapDictionary[name].split('\n')[0]}
                                            </span>
                                            <span
                                                className={`font-bold ${
                                                    name === 'Blossom Haven' ? 'text-[#f1a533]' :
                                                    name === 'Starlight Meadows' ? 'text-[#5a6edd]' :
                                                    name === 'Rainbow Valley' ? 'text-[#ff7272]' :
                                                    name === 'Adventure Bay' ? 'text-[#52c5c0]' :
                                                    name === 'Fantasy Forest' ? 'text-[#3dab6a]' : ''
                                                }`}
                                            >
                                                {mapDictionary[name].split('\n')[1]}
                                            </span>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
