import Page from "./Templates/Page";
import {TYPO3PagePropsInterface} from "./Interfaces";
import {PageLayouts} from "../defaults/PageLayouts";
import {PageTemplates} from "../defaults/PageTemplates";
import {ContentElementLayouts} from "../defaults/ContentElementLayouts";
import {ContentElementTemplates} from "../defaults/ContentElementTemplates";
import React from "react";

const TYPO3Page:React.FC<TYPO3PagePropsInterface> = (props) => {

    const _pageLayouts = Object.assign({}, PageLayouts, props.pageLayouts);
    const _pageTemplates = Object.assign({}, PageTemplates, props.pageTemplates);
    const _contentElementLayouts = Object.assign({}, ContentElementLayouts, props.contentElementLayouts);
    const _contentElementTemplates = Object.assign({}, ContentElementTemplates, props.contentElementTemplates);

    return <Page
        headlessData={props.headlessData}
        pageLayouts={_pageLayouts}
        pageTemplates={_pageTemplates}
        contentElementLayouts={_contentElementLayouts}
        contentElementTemplates={_contentElementTemplates}
        additionalParams={props.additionalParams}
    />
}

export default TYPO3Page;
