import React from "react"
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces";

interface IQuoteData extends TYPO3BootstrapContentElementBaseInterface {
    bodytext: string,
    quoteLink: {
        href: string,
        target?: string,
        class?: string,
        title?: string,
        linkText: string,
        additionalAttributes: []
    } | string,
    quoteSource: string
}

const Quote: React.FC<TYPO3BootstrapContentElementBaseInterface> = (props) => {
    const {bodytext, quoteSource, quoteLink} = props.data.content

    let sourceLink = () => {
        if (typeof quoteLink === 'object' && quoteLink !== null) {
            const {href, target, title, linkText} = quoteLink
            const className = quoteLink['class']
            return <span>
                (<a href={href} target={target} title={title} className={className}>{linkText}</a>)
            </span>
        }
        return <></>
    }

    const bodyTemplate = () => {
        return (bodytext.length > 0) ? <blockquote className={'blockquote'} dangerouslySetInnerHTML={{__html: bodytext}} /> : <></>
    }

    const figcaptionTemplate = () => {
        if(quoteSource.length > 0){
            return <figcaption className="blockquote-footer">
                <cite title={quoteSource}>{quoteSource}{sourceLink()}</cite>
            </figcaption>
        }

        return <></>
    }

    return <figure>
        {bodyTemplate()}
        {figcaptionTemplate()}
    </figure>
}

export default Quote