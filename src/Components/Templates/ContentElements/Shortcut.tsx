import React from 'react';
import {RenderContent} from "../../RenderContent";

const Shortcut: React.FC<{ data: any}> = props => {
    return <div className="shortcut">
        {props.data.shortcut.map((cObject) => {
            return RenderContent(cObject)
        })}
    </div>
}

export default Shortcut;
