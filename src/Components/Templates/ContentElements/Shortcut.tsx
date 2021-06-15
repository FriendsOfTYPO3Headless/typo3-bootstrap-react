import React from 'react';
import {renderContent} from "../../TYPO3Page";

const Shortcut: React.FC<{ data: any, args: any }> = props => {
console.log('shortcutkey2')
    console.log(props.data)




    return <div className="shortcut">
        {props.data.shortcut.map((cObject) => {
            return   renderContent(props.args.contentElementLayouts, props.args.contentElementTemplates, cObject, props.args)

                console.log(cObject)

    })}

    </div>
    }

export default Shortcut;

