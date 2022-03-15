import React from 'react';
import {RenderContent} from "../../RenderContent";
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces";

const Shortcut: React.FC<TYPO3BootstrapContentElementBaseInterface> = props => {
    return <div className="shortcut">
        {props.data.shortcut.map((cObject) => {
            return RenderContent(cObject)
        })}
    </div>
}

export default Shortcut;
