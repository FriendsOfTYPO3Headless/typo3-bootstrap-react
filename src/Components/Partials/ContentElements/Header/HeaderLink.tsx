import React from 'react';

type HeaderLinkType = {
    type: string,
    url: string,
    target: string,
    aTagParams: string,
    link: string,
}

const HeaderLink: React.FC<{ headerLink: HeaderLinkType | string | null}> = props => {
    if (props.headerLink === null || typeof props.headerLink === 'string') {
        return <>{props.children}</>
    }

    return <a href={props.headerLink.url}>
        {props.children}
    </a>
}

export default HeaderLink;
export {HeaderLinkType};