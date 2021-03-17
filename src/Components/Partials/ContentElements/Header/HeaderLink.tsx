import React from 'react';

interface HeaderLinkInterface {
    type: string;
    url: string;
    target: string;
    aTagParams: string;
    link: string;
}

const HeaderLink: React.FC<{
    headerLink: HeaderLinkInterface | null
}> = props => {
// console.log(props);
    if (props.headerLink === null) {
        return <>
            {props.children}
        </>
    }
// console.log(props.headerLink);
    return <a href={props.headerLink.url} {...props.headerLink.target} {...props.headerLink.aTagParams} >
        {props.children}
    </a>
}
export default HeaderLink;

export {HeaderLinkInterface};