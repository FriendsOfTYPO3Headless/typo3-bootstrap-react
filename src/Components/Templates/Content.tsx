import React from "react";
import {RenderContent} from "../RenderContent";
import {TYPO3PagePropsInterface} from "../Interfaces";

const PREFIX_COLPOS = 'colPos';

const Content: React.FC<{ colPos: string, pageProps: TYPO3PagePropsInterface }> = ({colPos, pageProps}) => {

    return pageProps.headlessData.content.hasOwnProperty(PREFIX_COLPOS + colPos) ?
            pageProps.headlessData.content[PREFIX_COLPOS + colPos].map((contentElements) => {
            return <RenderContent contentData={ contentElements} pageProps={pageProps}  key={contentElements.id}/>
        }) : <></>

}

export default Content;