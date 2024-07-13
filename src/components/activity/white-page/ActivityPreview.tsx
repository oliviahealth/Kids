import { useContext } from "react";

import { Title } from "@/components/activity/white-page/Title";
import { ColorContext } from "@/components/activity/white-page/ColorContext";

export interface ActivityPreviewProps {
    hideTitle?: boolean;
    title?: string;
    activities: { id: number, title: string, description: string }[];
}
export const ActivityPreview = ({ hideTitle, title, activities }: ActivityPreviewProps) => {
    const { colors } = useContext(ColorContext);

    return <div className="mb-8">
        {!hideTitle && <Title>{title && title || "Activity"} </Title>}
        <ul className="space-y-4 lg:space-y-8">
            {activities.map((activity) => (
                <li key={activity.id} className="flex items-start">
                    <div style={{ backgroundColor: colors[2] }} className="size-8 w-8 xl:size-10 2xl:size-16 flex items-center justify-center p-2 lg:p-3 xl:p-4 rounded-full text-md xl:text-xl mr-4">
                        {activity.id}
                    </div>
                    <div>
                        <h3 className="text-xs lg:text-sm 2xl:text-lg font-bold mb-1">
                            {activity.title}
                        </h3>
                        <p className="text-xs lg:text-sm 2xl:text-lg">{activity.description}</p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
}
