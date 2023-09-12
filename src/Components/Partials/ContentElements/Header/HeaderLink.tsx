import React from 'react';

type HeaderLinkType = {
    type: string,
    href: string,
    target: string,
    aTagParams: string,
    link: string,
}

const HeaderLink: React.FC<{ children?: React.ReactNode , headerLink: HeaderLinkType | string | null | undefined}> = props => {

    if (props.headerLink === null || typeof props.headerLink === 'string'|| props.headerLink === undefined) {
        return <>{props.children}</>
    }

    return <a href={props.headerLink.href}>
        {props.children}
    </a>
}

export default HeaderLink;
export type {HeaderLinkType};