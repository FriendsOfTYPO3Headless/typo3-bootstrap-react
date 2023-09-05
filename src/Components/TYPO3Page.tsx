import React from "react";
import Page from "./Templates/Page";
import {TYPO3PagePropsInterface} from "./Interfaces";
import {PageLayouts} from "../defaults/PageLayouts";
import {PageTemplates} from "../defaults/PageTemplates";
import {ContentElementLayouts} from "../defaults/ContentElementLayouts";
import {ContentElementTemplates} from "../defaults/ContentElementTemplates";

const TYPO3Page = async function (props: TYPO3PagePropsInterface) {
    const _pageLayouts = Object.assign({}, PageLayouts, props.pageLayouts) ;
    const _pageTemplates = Object.assign({}, PageTemplates, props.pageTemplates);
    const _contentElementLayouts =  Object.assign({}, ContentElementLayouts, props.contentElementLayouts);
    const _contentElementTemplates = Object.assign({}, ContentElementTemplates, props.contentElementTemplates);

    return Page( {
        headlessData: props.headlessData,
        pageLayouts: _pageLayouts,
        pageTemplates: _pageTemplates,
        contentElementLayouts: _contentElementLayouts,
        contentElementTemplates: _contentElementTemplates,
        additionalParams: props.additionalParams,
    })
}

export default TYPO3Page;


