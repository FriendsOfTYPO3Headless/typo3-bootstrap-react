import React from 'react';
interface HeaderLinkInterface {
    type: string;
    url: string;
    target: string;
    aTagParams: string;
    link: string;
}
declare const HeaderLink: React.FC<{
    headerLink: HeaderLinkInterface | null;
}>;
export default HeaderLink;
export { HeaderLinkInterface };
