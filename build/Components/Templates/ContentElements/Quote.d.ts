import React from "react";
interface IQuoteData {
    bodytext: string;
    quoteLink: string;
    quoteSource: string;
}
declare const Quote: React.FC<{
    data: IQuoteData;
}>;
export default Quote;
