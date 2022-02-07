import React from "react";
import {RenderContent} from "../RenderContent";
import TYPO3PageContext from "../../Context/TYPO3PageContext";

const PREFIX_COLPOS = 'colPos';

const Content: React.FC<{ colPos: string }> = props => {
    const context = React.useContext(TYPO3PageContext);
    let content = <></>

    if (context.headlessData.content.hasOwnProperty(PREFIX_COLPOS + props.colPos)) {
        content = context.headlessData.content[PREFIX_COLPOS + props.colPos].map(content => {
            return RenderContent(content)
        });
    }
    return content
}

export default Content;