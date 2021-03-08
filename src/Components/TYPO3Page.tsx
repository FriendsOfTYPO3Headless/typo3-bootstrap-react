import React from "react";
import __GenericLayout from "./Layouts/Page/__GenericLayout";
import Page from "./Templates/Page";

interface TYPO3PageConfig {
    page: any,
    content: any,
    navigations: any
}

interface TYPO3PageProps {
    config: TYPO3PageConfig,
    pageLayouts: any | null
    pageTemplates: any | null
    contentElementLayouts: any | null
    contentElementTemplates: any | null
}

const pageLayouts = {
    //TODO: implement example
    //example: (TYPO3PageConfig) => <__GenericLayout config={TYPO3PageConfig} />,

    __generic: (TYPO3PageConfig) => <__GenericLayout config={TYPO3PageConfig}/>
}

const pageTemplates = {
    __generic: ''
}

const contentElementLayouts = {
    __generic: ''
}

const contentElementTemplates = {
    __generic: ''
}

const TYPO3Page: React.FC<TYPO3PageProps> = props => {
    // console.log(props.config.navigations.navigation1[0].title);
    const _pageLayouts = Object.assign({},pageLayouts, props.pageLayouts);
    const _pageTemplates = Object.assign({},pageTemplates, props.pageTemplates);
    const _contentElementLayouts = Object.assign({},contentElementLayouts, props.contentElementLayouts);
    const _contentElementTemplates = Object.assign({},contentElementTemplates, props.contentElementTemplates);
    //console.log(_pageLayouts);
    // console.log(_pageTemplates);
    // console.log(_contentElementLayouts);
    // console.log(_contentElementTemplates);

    return <Page {...props} />
}
TYPO3Page.defaultProps = {
    pageLayouts: null,
    pageTemplates: null,
    contentElementLayouts: null,
    contentElementTemplates: null,
}

export default TYPO3Page;
export {pageLayouts, TYPO3PageConfig, TYPO3PageProps};






