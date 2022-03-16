import React from "react"
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces"
import AllHeader from "../../Partials/ContentElements/Header/All"

const TextColumns: React.FC<TYPO3BootstrapContentElementBaseInterface> = (props) => {
    const {bodytext} = props.data.content

    return <>
        <AllHeader data={props.data}/>
        <div className="text-column">
            <div dangerouslySetInnerHTML={{__html: bodytext}}/>
        </div>
        {props.children}
    </>
}

export default TextColumns