import React from "react";
interface LinkProperties {
    href: string;
    target?: string;
    className?: string;
    title?: string;
    linkText?: string;
    additionalAttributes?: [];
}
declare const Link: React.FC<LinkProperties>;
export default Link;
