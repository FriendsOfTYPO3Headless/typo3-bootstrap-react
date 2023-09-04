import React from 'react';
import {TYPO3PagePropsInterface} from "../../Interfaces";

const section: React.FC<{ name: string, pageTemplate: any, pageProps: TYPO3PagePropsInterface }> = props => {

    if (props.pageTemplate.hasOwnProperty(props.name)) {
        return props.pageTemplate[props.name];
    }
    return <></>
}

export default section;