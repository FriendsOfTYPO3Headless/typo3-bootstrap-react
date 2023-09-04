import React from "react";
import {TYPO3PagePropsInterface} from "../Interfaces";

const Page: React.FC<{ pageProps: TYPO3PagePropsInterface }> = ({pageProps}) => {

    let pageTemplate;
    if (pageProps.pageTemplates.hasOwnProperty(pageProps.headlessData.appearance.backendLayout)) {
        pageTemplate = pageProps.pageTemplates[pageProps.headlessData.appearance.backendLayout];
    } else if (pageProps.pageTemplates.hasOwnProperty('__generic')) {
        pageTemplate = pageProps.pageTemplates.__generic;
    } else {
        return <>Page-template not found: {pageProps.headlessData.appearance.backendLayout} </>
    }

    return <pageProps.pageLayouts type={pageProps.headlessData.appearance.layout} pageProps={pageProps} pageTemplate={pageTemplate(pageProps)} />
}


export default Page;