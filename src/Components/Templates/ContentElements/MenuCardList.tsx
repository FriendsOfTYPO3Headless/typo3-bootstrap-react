import React from "react"
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces"
import MenuCardBase from "./MenuCardBase";

const MenuCardList: React.FC<TYPO3BootstrapContentElementBaseInterface> = props => {
    return <MenuCardBase {...props}/>
}

export default MenuCardList