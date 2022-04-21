import React from 'react';
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces";
import MenuCardBase from "./MenuCardBase";

const MenuCategorizedPages: React.FC<TYPO3BootstrapContentElementBaseInterface> = props => {
    return <MenuCardBase {...props}/>
}

export default MenuCategorizedPages;
