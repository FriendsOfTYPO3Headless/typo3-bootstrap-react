import React from 'react';
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces";

const MenuCategorizedContent: React.FC<TYPO3BootstrapContentElementBaseInterface> = props => {

    return <div className="menuCategorizedContent">
       if ( condition="{content}") {
        {/*
            <f:render partial="Menu/SkipNavigation" arguments="{_all}" />
            <ul>
                <f:for each="{content}" as="element">
                    <li>
                        <f:link.page pageUid="{element.data.pid}" section="{element.data.uid}" title="{element.data.header}">{element.data.header}</f:link.page>
                    </li>
                </f:for>
            </ul>   */}
       }
    </div>
}

export default MenuCategorizedContent;
