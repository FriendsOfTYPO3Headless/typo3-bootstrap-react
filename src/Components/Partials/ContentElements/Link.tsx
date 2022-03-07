import React from "react";

interface ILinkProperties {
    href: string,
    target?: string,
    className?: string,
    title?: string,
    linkText?: string,
    additionalAttributes?: []
}

const defaultProperties: ILinkProperties = {
    href: '',
    target: '',
    className: 'btn-link',
    title: '',
    linkText: '',
    additionalAttributes: []
}

const Link: React.FC<ILinkProperties> = (props) => {
    const {href, target, className, title,linkText, additionalAttributes} = props
    return <a
        href={href}
        target={target}
        className={`btn ${className}`}
        title={title}
    >{linkText}</a>
}

Link.defaultProps = defaultProperties

export default Link