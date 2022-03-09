import React from "react"

interface IQuoteData {
    bodytext: string
    quoteLink: string,
    quoteSource: string
}

const Quote: React.FC<{ data: IQuoteData }> = (props) => {
    const {bodytext, quoteSource, quoteLink} = props.data

    return <figure>
        <blockquote className={'blockquote'}><p dangerouslySetInnerHTML={{__html: bodytext}} /></blockquote>
        {quoteSource.length > 0 && <figcaption className="blockquote-footer"><cite title={quoteSource}>{quoteSource}</cite></figcaption>}
    </figure>
}

export default Quote