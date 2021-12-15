import React from "react";
import TYPO3PageContext from "../../Context/TYPO3PageContext";


const Page: React.FC = props => {
    const context = React.useContext(TYPO3PageContext);
    let pageLayout;
    if (context.pageLayouts.hasOwnProperty(context.headlessData.appearance.layout)) {
        pageLayout = context.pageLayouts[context.headlessData.appearance.layout];
    } else if (context.pageLayouts.hasOwnProperty('__generic')) {
        pageLayout = context.pageLayouts.__generic;
    } else {
        return <>Page-layout not found: {context.headlessData.appearance.layout}</>
    }

    let pageTemplate;
    if (context.pageTemplates.hasOwnProperty(context.headlessData.appearance.backendLayout)) {
        pageTemplate = context.pageTemplates[context.headlessData.appearance.backendLayout];
    } else if (context.pageTemplates.hasOwnProperty('__generic')) {
        pageTemplate = context.pageTemplates.__generic;
    } else {
        return <>Page-template not found: {context.headlessData.appearance.backendLayout} </>
    }

    return pageLayout(context.headlessData, pageTemplate);
}


export default Page;