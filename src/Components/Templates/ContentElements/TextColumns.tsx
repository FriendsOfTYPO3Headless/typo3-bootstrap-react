import React from "react";
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces";

const TextColumns: React.FC<TYPO3BootstrapContentElementBaseInterface> = (props) => {
    const {bodytext} = props.data

    return <div className="text-column">
        <div dangerouslySetInnerHTML={{__html: bodytext}}/>
    </div>
}

export default TextColumns