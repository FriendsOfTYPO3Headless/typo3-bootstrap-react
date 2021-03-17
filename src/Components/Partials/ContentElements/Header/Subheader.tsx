import React from 'react';
import HeaderLink, {HeaderLinkType} from "./HeaderLink";

const Subheader: React.FC<{
    header: string;
    layout: number;
    class?: string,
    positionClass: string | null,
    headerLink?: HeaderLinkType | string | null,
}> = props => {

    switch (props.layout) {
        case 1:
            return <h2 className={props.class + ' ' + props.positionClass}>
                <HeaderLink headerLink={props.headerLink}><span>{props.header}</span></HeaderLink>
            </h2>

        case 3:
            return <h4 className={props.class + ' ' + props.positionClass}>
                <HeaderLink headerLink={props.headerLink}><span>{props.header}</span></HeaderLink>
            </h4>

        case 4:
            return <h5 className={props.class + ' ' + props.positionClass}>
                <HeaderLink headerLink={props.headerLink}><span>{props.header}</span></HeaderLink>
            </h5>

        case 5:
            return <h6 className={props.class + ' ' + props.positionClass}>
                <HeaderLink headerLink={props.headerLink}><span>{props.header}</span></HeaderLink>
            </h6>

        case 100:
            return <></>

        default:
            return <h3 className={props.class + ' ' + props.positionClass}>
                <HeaderLink headerLink={props.headerLink}>
                    <span>{props.header}</span>
                </HeaderLink>
            </h3>
    }


}
export default Subheader;

Subheader.defaultProps = {
    class: 'element-subheader',
    headerLink: null
}

