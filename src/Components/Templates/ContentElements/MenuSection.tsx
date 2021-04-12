import React, {useState} from 'react';

const MenuSection: React.FC<{ data: any }> = props => {

    return <div className="menuSection">
        <div condition="{menu}">
            {/* <f:render partial="Menu/SkipNavigation" arguments="{_all}" /> */}
            if (condition="{menu -> f: count()} > 1"){

                    <ul>
                        {/* <f:for each="{menu}" as="page">
                            <li>
                                <a href="{page.link}"{f:if(condition: page.target, then: ' target="{page.target}"')} title="{page.title}">{page.title}</a>
                                <f:render section="Menu" arguments="{page: page}" />
                            </li>
                        </f:for> */}
                    </ul>
              }
                else {
            {/*    <f:for each="{menu}" as="page">
                <f:render section="Menu" arguments="{page: page}"/>
            </f:for> */}
        }

        </div>
    </div>
}

export default MenuSection;
