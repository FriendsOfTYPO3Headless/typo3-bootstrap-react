import React from "react";

interface LinkProperties {
    href: string,
    target?: string,
    className?: string,
    title?: string,
    linkText?: string,
    additionalAttributes?: []
}

const Link: React.FC<LinkProperties> = (props) => {
    const {href, target, className, title, linkText} = props
    return <a href={href} target={target} className={`btn ${className}`} title={title}>{linkText}</a>
}

export default Link