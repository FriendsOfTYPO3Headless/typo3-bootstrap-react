import React from 'react';
import {RenderContent} from "../../RenderContent";

const Shortcut: React.FC<{ data: any , args: any}> = props => {


    return <div className="shortcut">
        {props.data.shortcut.map((cObject) => {
            return  RenderContent(props.args.contentElementLayouts, props.args.contentElementTemplates, cObject, props.args)

                console.log(cObject)

    })}

    </div>
    }

export default Shortcut;
