import React from "react";

interface ILinkProperties {
    href: string;
    target?: string;
    className?: string;
    title?: string;
    linkText?: string;
    additionalAttributes?: [];
}
declare const Link: React.FC<ILinkProperties>;
export default Link;
