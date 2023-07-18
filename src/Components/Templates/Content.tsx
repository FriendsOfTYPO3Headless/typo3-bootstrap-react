import React from "react";
import {RenderContent} from "../RenderContent";
import {TYPO3PagePropsInterface} from "../Interfaces";

const PREFIX_COLPOS = 'colPos';

const Content: React.FC<{ colPos: string, pageProps: TYPO3PagePropsInterface }> = props => {

    let content = <></>

    if (props.pageProps.headlessData.content.hasOwnProperty(PREFIX_COLPOS + props.colPos)) {
        content = props.pageProps.headlessData.content[PREFIX_COLPOS + props.colPos].map(content => {
            return RenderContent(content, props.pageProps)
        });
    }
    return content
}

export default Content;