import React from 'react';
declare type HeaderLinkType = {
    type: string;
    url: string;
    target: string;
    aTagParams: string;
    link: string;
};
declare const HeaderLink: React.FC<{
    headerLink: HeaderLinkType | string | null;
}>;
export default HeaderLink;
export { HeaderLinkType };
