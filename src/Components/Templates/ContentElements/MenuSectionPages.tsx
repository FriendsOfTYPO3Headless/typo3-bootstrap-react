import React from 'react';

const MenuSectionPages: React.FC<{ data: any }> = props => {

    return <div className="menuSectionPages">
        if (menu) {
        {/*} <f:render partial="Menu/SkipNavigation" arguments="{_all}" /> */}
        <ul>
    {/*   <f:for each="{menu}" as="page">
        <li>
        <a href="{page.link}"{f:if(condition: page.target, then: ' target="{page.target}"')} title="{page.title}">{page.title}</a>
        <f:render section="Menu" arguments="{page: page}" />
        </li>
        </f:for> */}
        </ul>
    }


    </div>
    <div className="menuSectionPages">
        if (page.content) {
            <ul>
                {/*   <f:for each="{page.content}" as="element">
                    <f:if condition="{element.data.header}">
                        <li>
                            <a href="{page.link}#c{element.data.uid}"{f:if(condition: page.target, then: ' target="{page.target}"')} title="{element.data.subheader}">{element.data.header}</a>
                        </li>
                    </f:if>
                </f:for> */}
            </ul>
        }
    </div>
}

export default MenuSectionPages;
