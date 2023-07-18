import React from 'react';
import { HeaderLinkType } from "./HeaderLink";
declare const Subheader: React.FC<{
    header: string;
    layout: number;
    positionClass: string | null;
    headerLink?: HeaderLinkType | string | null;
}>;
export default Subheader;
