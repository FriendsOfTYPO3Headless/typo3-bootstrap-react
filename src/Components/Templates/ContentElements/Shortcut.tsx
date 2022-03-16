import React from 'react'
import {RenderContent} from "../../RenderContent"
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces"
import AllHeader from "../../Partials/ContentElements/Header/All"

const Shortcut: React.FC<TYPO3BootstrapContentElementBaseInterface> = props => {
    return <>
        <AllHeader data={props.data}/>
        <div className={"shortcut"}>
            {props.data.content.shortcut.map((cObject) => {
                return RenderContent(cObject)
            })}
        </div>
    </>
}

export default Shortcut;
