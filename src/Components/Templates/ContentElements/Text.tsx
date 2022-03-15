import React from 'react';
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces";

const Text : React.FC<TYPO3BootstrapContentElementBaseInterface> = props => {
    const {} = props.data
    return <>
        <div dangerouslySetInnerHTML={{__html: props.data.bodytext}} />
    </>
}

export default Text;