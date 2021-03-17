import React from 'react';
import { HeaderLinkInterface } from "./HeaderLink";
declare const Header: React.FC<{
    header: string;
    layout: number;
    class?: string;
    positionClass: string | null;
    headerLink?: HeaderLinkInterface | null;
}>;
export default Header;
