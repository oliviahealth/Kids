import { ColorContext, ColorContextType, PageContainer, PageContent, TopBar, TopBarProps, BottomBar, BottomBarProps, MaterialChecklist, MaterialChecklistProps } from '@/components/activity/white-page'

import { Page } from '@/components/Pagination';

export type EmptyWhitePageProps = {
    children: React.ReactNode
} & Page & ColorContextType & TopBarProps & BottomBarProps

export const EmptyWhitePage = ({ onBack, onContinue, onExit, colors, title, image, subtitle, backImage, children }: EmptyWhitePageProps) => {
    return <ColorContext.Provider value={{ colors: colors }}>
        <PageContainer>
            <TopBar title={title} image={image} subtitle={subtitle} onExit={onExit} />
            <PageContent>
                {children}
            </PageContent>
            <BottomBar backImage={backImage} onBack={onBack} onContinue={onContinue} />
        </PageContainer >
    </ColorContext.Provider >
}