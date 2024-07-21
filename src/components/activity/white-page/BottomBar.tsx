export interface BottomBarProps {
    onBack: () => void;
    onContinue: () => void;
    backImage?: string;
}
export const BottomBar = ({ onBack, onContinue, backImage }: BottomBarProps) => (
    <div className="flex justify-between w-full h-8 md:h-10">
        <button onClick={onBack}>
            <img src={backImage || "/images/activities/buttons/back.svg"} className="h-full w-auto object-contain" />
        </button>
        <button onClick={onContinue}>
            <img src="/images/activities/buttons/continue.svg" className="h-full w-auto object-contain" />
        </button>
    </div>
);
