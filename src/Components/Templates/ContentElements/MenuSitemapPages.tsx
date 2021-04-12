import React from 'react';

const MenuSitemapPages: React.FC<{ data: any }> = props => {
return <div className="menuSitemapPage">
    <div condition="{menu}">
        {/*<f:render partial="Menu/SkipNavigation" arguments="{_all}" /> */}
    </div>
    <div>
        {/*<f:render section="Menu" arguments="{menu: menu}" />*/} </div>

    <div className="Menu">

        <div condition="{menu}">
            <ul>
                <div each="{menu}" as="page">
                    <li>
                        {/*<a href="{page.link}"{f:if(condition: page.target, then: ' target="{page.target}"')} title="{page.title}">{page.title}</a>
                        <f:render section="Menu" arguments="{menu: page.children}" /> */}
                    </li>
                </div>
            </ul>
        </div>
    </div>
}

export default MenuSitemapPages;
