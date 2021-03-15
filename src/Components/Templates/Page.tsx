import React from "react";
import {TYPO3PagePropsInterface} from "../Interfaces";


const Page: React.FC<TYPO3PagePropsInterface> = props => {
    let layout;
    if(props.pageLayouts.hasOwnProperty(props.headlessData.page.appearance.layout)) {
        layout = props.pageLayouts[props.headlessData.page.appearance.layout];
    } else if(props.pageLayouts.hasOwnProperty('__generic')) {
        layout = props.pageLayouts.__generic;
    } else {
        return <>Page-layout not found: {props.headlessData.page.appearance.layout}</>
    }

    let template;
    if(props.pageTemplates.hasOwnProperty(props.headlessData.page.appearance.backendLayout)) {
        template = props.pageTemplates[props.headlessData.page.appearance.backendLayout];
    } else if (props.pageTemplates.hasOwnProperty('__generic')) {
        template = props.pageTemplates.__generic;
    } else {
        return <>Page-template not found: {props.headlessData.page.appereance.backendLayout} </>
    }


    return layout(
        props.headlessData,
        template(props.headlessData, props.contentElementLayouts, props.contentElementTemplates),
    );
    // return <>Page: {props.config.navigations.navigation1[0].title}</>
}


export default Page;