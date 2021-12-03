import React from 'react';
import { HeaderLinkType } from "./HeaderLink";
declare const Header: React.FC<{
    header: string;
    layout: number;
    class?: string;
    positionClass: string | null;
    headerLink?: HeaderLinkType | string | null;
}>;
export default Header;
