import React from "react"
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces"
import MenuCardBase from "./MenuCardBase"

const MenuCardDir: React.FC<TYPO3BootstrapContentElementBaseInterface> = props => {
    props.data.content.items = props.data.content.items.map((item) => {
        return {...item, thumbnail: item.media}
    })
    return <MenuCardBase {...props}/>
}

export default MenuCardDir