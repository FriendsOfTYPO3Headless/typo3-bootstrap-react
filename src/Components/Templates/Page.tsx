import React from "react";
import {TYPO3PagePropsInterface} from "../Interfaces";

const Page = async (pageProps: TYPO3PagePropsInterface ) => {
"use server";
    let pageTemplate;
    if (pageProps.pageTemplates.hasOwnProperty(pageProps.headlessData.appearance.backendLayout)) {
        pageTemplate = await pageProps.pageTemplates[pageProps.headlessData.appearance.backendLayout](pageProps);
    } else if (pageProps.pageTemplates.hasOwnProperty('__generic')) {
        pageTemplate = await pageProps.pageTemplates.__generic(pageProps);
    } else {
        return <>Page-template not found: {pageProps.headlessData.appearance.backendLayout} </>
    }

    return await pageProps.pageLayouts[pageProps.headlessData.appearance.layout](pageProps,pageTemplate)
}


export default Page;