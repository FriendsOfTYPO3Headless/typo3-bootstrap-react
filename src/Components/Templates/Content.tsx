import React from "react";
import {renderContent} from "../TYPO3Page";

const PREFIX_COLPOS = 'colPos';

const Content: React.FC<{
    colPos: string;
    content: any;
    contentElementLayouts: any;
    contentElementTemplates: any;
    slide?: number;
    args?: any;
}> = props => {
    let content = <></>

    if (props.content.hasOwnProperty(PREFIX_COLPOS + props.colPos)) {
        content = props.content[PREFIX_COLPOS + props.colPos].map(content => {

          return   renderContent(props.contentElementLayouts, props.contentElementTemplates, content, props.args)

        });
    }
    return content
}

export default Content;