import React from 'react';
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces";
import AllHeader from "../../Partials/ContentElements/Header/All";

const Text : React.FC<TYPO3BootstrapContentElementBaseInterface> = props => {
    const {bodytext} = props.data.content
    return <>
        <AllHeader data={props.data} />
        <div dangerouslySetInnerHTML={{__html: bodytext}} />
    </>
}

export default Text;