import React from 'react';
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces";

const Html : React.FC<TYPO3BootstrapContentElementBaseInterface> = props => {
    return <div dangerouslySetInnerHTML={{__html: props.data.bodytext}} />
}

export default Html;