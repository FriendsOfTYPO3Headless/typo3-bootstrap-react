import React from 'react';
import HeaderLink, {HeaderLinkInterface} from "./HeaderLink";

const Header: React.FC<{
    header: string;
    layout: number;
    class?: string,
    positionClass: string | null,
    headerLink?: HeaderLinkInterface | null,
}> = props => {
// console.log(props.headerLink);
    switch (props.layout) {
        case 1:
            return <h1 className={props.class + ' ' + props.positionClass}>
                <HeaderLink headerLink={props.headerLink}><span>{props.header}</span></HeaderLink>
            </h1>


        default:
            return <h2 className={props.class + ' ' + props.positionClass}>
                <HeaderLink headerLink={props.headerLink}>
                    <span>{props.header}</span>
                </HeaderLink>
            </h2>

        //         <f:case value="1">
        //
        //         </f:case>
        //         <f:case value="2">
        //             <h2 className="{class} {positionClass}">
        //                 <f:link.typolink parameter="{link}"><span>{header}</span></f:link.typolink>
        //             </h2>
        //         </f:case>
        //         <f:case value="3">
        //             <h3 className="{class} {positionClass}">
        //                 <f:link.typolink parameter="{link}"><span>{header}</span></f:link.typolink>
        //             </h3>
        //         </f:case>
        //         <f:case value="4">
        //             <h4 className="{class} {positionClass}">
        //                 <f:link.typolink parameter="{link}"><span>{header}</span></f:link.typolink>
        //             </h4>
        //         </f:case>
        //         <f:case value="5">
        //             <h5 className="{class} {positionClass}">
        //                 <f:link.typolink parameter="{link}"><span>{header}</span></f:link.typolink>
        //             </h5>
        //         </f:case>
        //         <f:case value="6">
        //             <h6 className="{class} {positionClass}">
        //                 <f:link.typolink parameter="{link}"><span>{header}</span></f:link.typolink>
        //             </h6>
        //         </f:case>
        //         <f:case value="100">
        //             <f:comment> -- do not show header --</f:comment>
        //         </f:case>
        //         <f:defaultCase>
        //             <f:if condition="{default}">
        //                 <f:render partial="Header/Header" arguments="{
        //                 header: header,
        //                 layout: default,
        //                 class: class,
        //                 positionClass: positionClass,
        //                 link: link}"/>
        //             </f:if>
        //         </f:defaultCase>
    }


}
export default Header;

Header.defaultProps = {
    class: 'element-header',
    headerLink: null
}

