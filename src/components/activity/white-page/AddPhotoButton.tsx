import { useContext } from "react";
import { ColorContext } from "./ColorContext";

export interface AddPhotoButtonProps {
    icon: string;
    onClick: () => void;
}
export const AddPhotoButton = ({ icon, onClick }: AddPhotoButtonProps) => {
    const { colors } = useContext(ColorContext);

    return <div
        style={{ backgroundColor: colors[2] }}
        className="flex items-center justify-center w-80 h-48 bg-green-100 rounded-lg cursor-pointer mb-8"
        onClick={onClick}
    >
        <div className="flex flex-col items-center">
            <img src={icon} alt="Add a photo" className="w-12 h-12 mb-2" />
            <span style={{ color: colors[0] }} className="" >Add a photo</span>
        </div>
    </div>
}
