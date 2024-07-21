import { useContext } from "react";
import { ColorContext } from "./ColorContext";
import { Subtitle } from "./Subtitle";

interface MaterialProps {
    checked: boolean;
    name: string;
    image: string;
}
const Material = ({ checked, name, image }: MaterialProps) => {
    const { colors } = useContext(ColorContext);

    return <div key={name} style={{ outlineColor: colors[0] }} className="outline bg-white rounded-3xl flex flex-col items-center gap-2 p-3">
        <img src={image} alt={name} className="size-10 lg:size-16 object-cover" />
        <span style={{ color: colors[0] }} className="text-sm font-extrabold lg:text-md">{name}</span>
        <div style={{ backgroundColor: checked ? colors[0] : "white", outlineColor: colors[0] }} className="rounded-full outline size-4 flex items-center justify-center" />
    </div>
}

export interface MaterialChecklistProps {
    title?: string;
    items: { name: string, image: string }[];
}
export const MaterialChecklist = ({ title, items }: MaterialChecklistProps) => {
    const { colors } = useContext(ColorContext);

    return <div style={{ backgroundColor: colors[2] }} className="rounded-xl p-4 mb-8">
        {title && <Subtitle >{title}</Subtitle>}
        <div className="grid grid-cols-4 gap-2 auto-rows-fr">
            {items.map((item) => <Material checked={false} key={item.name} {...item} />)}
            {
                (items.length < 8) && Array.from({ length: 8 - (items.length % 8) }, (_, index) => <div key={index} style={{ backgroundColor: colors[1] }} className="rounded-3xl" />)
                || Array.from({ length: 4 - (items.length % 4) }, (_, index) => <div key={index} style={{ backgroundColor: colors[1] }} className="rounded-3xl" />)
            }
        </div>
    </div>
}
