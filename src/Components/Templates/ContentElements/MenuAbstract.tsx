import React from 'react';
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces";

const MenuAbstract: React.FC<TYPO3BootstrapContentElementBaseInterface> = props => {

    return <div className="menuAbstract">
       if (condition="{menu}") {
        {/* <f:render partial="Menu/SkipNavigation" arguments="{_all}"/>
        <ul>
        <f:for each="{menu}" as="page">
        <li>
        <a href="{page.link}"{f:if(condition: page.target, then: ' target="{page.target}"')} title="{page.title}">{page.title}</a>
        <f:if condition="{page.data.abstract}">
        <f:format.html>{page.data.abstract}</f:format.html>
        </f:if>
        </li>
        </f:for>
        </ul>  */}
    }
    </div>
}

export default MenuAbstract;
