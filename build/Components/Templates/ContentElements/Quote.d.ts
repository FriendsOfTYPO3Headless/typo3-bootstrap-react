import React from "react";
interface IQuoteData {
    bodytext: string;
    quoteLink: {
        href: string;
        target?: string;
        class?: string;
        title?: string;
        linkText: string;
        additionalAttributes: [];
    } | string;
    quoteSource: string;
}
declare const Quote: React.FC<{
    data: IQuoteData;
}>;
export default Quote;
