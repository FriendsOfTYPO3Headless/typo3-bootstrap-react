import React from 'react';
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces";
import AllHeader from "../../Partials/ContentElements/Header/All";

const Html : React.FC<TYPO3BootstrapContentElementBaseInterface> = props => {
    return <>
        <AllHeader data={props.data} />
        <div dangerouslySetInnerHTML={{__html: props.data.content.bodytext}} />
    </>
}

export default Html;