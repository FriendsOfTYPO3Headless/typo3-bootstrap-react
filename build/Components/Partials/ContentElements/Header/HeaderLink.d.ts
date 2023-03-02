import React from 'react';
type HeaderLinkType = {
    type: string;
    url: string;
    target: string;
    aTagParams: string;
    link: string;
};
declare const HeaderLink: React.FC<{
    children: any;
    headerLink: HeaderLinkType | string | null;
}>;
export default HeaderLink;
export { HeaderLinkType };
