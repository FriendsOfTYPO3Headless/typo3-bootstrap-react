import React from 'react';
import HeaderLink, {HeaderLinkType} from "./HeaderLink";

const Header: React.FC<{
    header: string;
    layout: number;
    positionClass: string | null,
    headerLink?: HeaderLinkType | string | null,
}> = props => {

    const cssClass = 'element-header'
    switch (props.layout) {
        case 1:
            return <h1 className={cssClass + ' ' + props.positionClass}>
                <HeaderLink headerLink={props.headerLink}><span>{props.header}</span></HeaderLink>
            </h1>

        case 3:
            return <h3 className={cssClass + ' ' + props.positionClass}>
                <HeaderLink headerLink={props.headerLink}><span>{props.header}</span></HeaderLink>
            </h3>

        case 4:
            return <h4 className={cssClass + ' ' + props.positionClass}>
                <HeaderLink headerLink={props.headerLink}><span>{props.header}</span></HeaderLink>
            </h4>

        case 5:
            return <h5 className={cssClass + ' ' + props.positionClass}>
                <HeaderLink headerLink={props.headerLink}><span>{props.header}</span></HeaderLink>
            </h5>

        case 100:
            return <></>

        default:
            return <h2 className={cssClass + ' ' + props.positionClass}>
                <HeaderLink headerLink={props.headerLink}>
                    <span>{props.header}</span>
                </HeaderLink>
            </h2>
    }


}
export default Header;
