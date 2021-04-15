import React from 'react';

const MenuSitemap: React.FC<{ data: any }> = props => {
    console.log(props.data)
    return <div className="menuSitemap">

        {Object.keys(props.data).map((key)=> {


            //  <li> <a href={props.data}> {props.data}  </a></li>


        })}

        {/*   <f:if condition="{menu}">
        <ul>
            <f:for each="{menu}" as="page">
                <li>
                    <a href="{page.link}"{f:if(condition: page.target, then: ' target="{page.target}"')} title="{page.title}">{page.title}</a>
                    <f:render section="Menu" arguments="{menu: page.children}" />
                </li>
            </f:for>
        </ul>
    </f:if> */ }
    </div>
}

export default MenuSitemap;
