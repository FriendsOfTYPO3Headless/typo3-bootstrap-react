import React from 'react';
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces";
import AllHeader from "../../Partials/ContentElements/Header/All";

const Header : React.FC<TYPO3BootstrapContentElementBaseInterface> = props => {
    return <>
        <AllHeader data={props.data}/>
        <div className="header" />
        {props.children}
    </>

}

export default Header;