import React from "react";
import {TYPO3PagePropsInterface} from "../Interfaces";


const Page: React.FC<TYPO3PagePropsInterface> = props => {
    let layout;
    if(props.pageLayouts.hasOwnProperty(props.headlessData.page.appearance.layout)) {
        layout = props.pageLayouts[props.headlessData.page.appearance.layout];
    } else if(props.pageLayouts.hasOwnProperty('__generic')) {
        layout = props.pageLayouts.__generic;
    } else {
        return <>Pagelayout not found: {props.headlessData.page.appearance.layout}</>
    }

    let pageTemplate;
    if(props.pageTemplates.hasOwnProperty(props.headlessData.page.appearance.backendLayout)) {
        pageTemplate = props.pageTemplates[props.headlessData.page.appearance.backendLayout];
    } else if (props.pageTemplates.hasOwnProperty('__generic')) {
        pageTemplate = props.pageTemplates.__generic;
    } else {
        return <>Pagetemplate not found: {props.headlessData.page.appereance.backendLayout} </>
    }


    return layout(
        props.headlessData,
        pageTemplate(props.headlessData, props.contentElementLayouts, props.contentElementTemplates),
    );
    // return <>Page: {props.config.navigations.navigation1[0].title}</>
}


export default Page;