import React from 'react';
import HeaderLink, {HeaderLinkType} from "./HeaderLink";

const Header: React.FC<{
    header: string;
    layout: number;
    class?: string,
    positionClass: string | null,
    headerLink?: HeaderLinkType | string | null,
}> = props => {

    switch (props.layout) {
        case 1:
            return <h1 className={props.class + ' ' + props.positionClass}>
                <HeaderLink headerLink={props.headerLink}><span>{props.header}</span></HeaderLink>
            </h1>

        case 3:
            return <h3 className={props.class + ' ' + props.positionClass}>
                <HeaderLink headerLink={props.headerLink}><span>{props.header}</span></HeaderLink>
            </h3>

        case 4:
            return <h4 className={props.class + ' ' + props.positionClass}>
                <HeaderLink headerLink={props.headerLink}><span>{props.header}</span></HeaderLink>
            </h4>

        case 5:
            return <h5 className={props.class + ' ' + props.positionClass}>
                <HeaderLink headerLink={props.headerLink}><span>{props.header}</span></HeaderLink>
            </h5>

        case 100:
            return <></>

        default:
            return <h2 className={props.class + ' ' + props.positionClass}>
                <HeaderLink headerLink={props.headerLink}>
                    <span>{props.header}</span>
                </HeaderLink>
            </h2>
    }


}
export default Header;

Header.defaultProps = {
    class: 'element-header',
    headerLink: null
}

