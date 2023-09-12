import React from "react";
import {TYPO3PagePropsInterface} from "../Interfaces";

const Page:React.FC<TYPO3PagePropsInterface> =  (pageProps ) => {
    let pageTemplate;
    if (pageProps.pageTemplates.hasOwnProperty(pageProps.headlessData.appearance.backendLayout)) {
        pageTemplate =  pageProps.pageTemplates[pageProps.headlessData.appearance.backendLayout](pageProps);
    } else if (pageProps.pageTemplates.hasOwnProperty('__generic')) {
        pageTemplate =  pageProps.pageTemplates.__generic(pageProps);
    } else {
        return <>Page-template not found: {pageProps.headlessData.appearance.backendLayout} </>
    }

    const Layout = pageProps.pageLayouts[pageProps.headlessData.appearance.layout]

    return  <Layout pageProps={pageProps} pageTemplate={pageTemplate} />
}


export default Page;