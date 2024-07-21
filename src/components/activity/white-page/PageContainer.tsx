import { ReactNode } from "react";

export interface PageContainerProps {
    children: ReactNode;
}

export const PageContainer = ({ children }: PageContainerProps) => (
    <div className="relative min-h-[100vh] w-[100vw] bg-cover bg-center bg-[url('/images/map.svg')]">
        <div className="bg-black bg-opacity-50 w-[100vw] h-[100vh] flex justify-center items-center">
            <div className="bg-white rounded-3xl w-[90vw] h-[95vh] sm:w-[80vw] sm:h-[85vh] md:w-[80vw] md:h-[70vh] p-8 m-8 relative flex flex-col justify-between overflow-y-auto"> {/*"overflow-y-auto bg-white rounded-3xl max-w-7xl max-h-[90vh] p-8 m-8 relative"*/}
                {children}
            </div>
        </div>
    </div >
);