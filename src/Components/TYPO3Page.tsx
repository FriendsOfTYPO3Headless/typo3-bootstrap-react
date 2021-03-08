import React from "react";
import __GenericLayout from "./Layouts/Page/__GenericLayout";

interface TYPO3PageConfig {
    page: object,
    content: object,
    navigation: object
}

interface TYPO3PageProps {
    config: TYPO3PageConfig,
    pageLayouts: object|null
    pageTemplates: object|null
    contentElementLayouts: object|null
    contentElementTemplates: object|null
}

const pageLayouts = {
    //TODO: implement example
    //example: (TYPO3PageConfig) => <__GenericLayout config={TYPO3PageConfig} />,

    __generic: (TYPO3PageConfig) => <__GenericLayout config={TYPO3PageConfig} />
}



const TYPO3Page: React.FC<TYPO3PageProps> = props => {
    console.log(props);
    const _pageLayouts = Object.assign(pageLayouts, props.pageLayouts);

    console.log(_pageLayouts);

    return <>T3Page</>
}
TYPO3Page.defaultProps = {
    pageLayouts: null,
    pageTemplates: null,
    contentElementLayouts: null,
    contentElementTemplates: null,
}

export default TYPO3Page;
export {pageLayouts,TYPO3PageConfig, TYPO3PageProps};






