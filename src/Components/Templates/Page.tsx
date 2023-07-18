import React from "react";
import {TYPO3PagePropsInterface} from "../Interfaces";

const Page: React.FC<{ pageProps: TYPO3PagePropsInterface }> = ({pageProps}) => {

    let pageLayout;
    if (pageProps.pageLayouts.hasOwnProperty(pageProps.headlessData.appearance.layout)) {
        pageLayout = pageProps.pageLayouts[pageProps.headlessData.appearance.layout];
    } else if (pageProps.pageLayouts.hasOwnProperty('__generic')) {
        pageLayout = pageProps.pageLayouts.__generic;
    } else {
        return <>Page-layout not found: {pageProps.headlessData.appearance.layout}</>
    }

    let pageTemplate;
    if (pageProps.pageTemplates.hasOwnProperty(pageProps.headlessData.appearance.backendLayout)) {
        pageTemplate = pageProps.pageTemplates[pageProps.headlessData.appearance.backendLayout];
    } else if (pageProps.pageTemplates.hasOwnProperty('__generic')) {
        pageTemplate = pageProps.pageTemplates.__generic;
    } else {
        return <>Page-template not found: {pageProps.headlessData.appearance.backendLayout} </>
    }

    return pageLayout(pageProps, pageTemplate(pageProps));
}


export default Page;