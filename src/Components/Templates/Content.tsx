import React from "react";

const PREFIX_COLPOS = 'colPos';

const Content: React.FC<{
    colPos: string;
    content: any;
    contentElementLayouts: any;
    contentElementTemplates: any;
}> = props => {
    let content = <></>

    if(props.content.hasOwnProperty(PREFIX_COLPOS + props.colPos)){
        content = props.content[PREFIX_COLPOS + props.colPos].map( content => {
            let layout;
            if(props.contentElementLayouts.hasOwnProperty(props.content.appearance.layout)) {
                layout = props.contentElementLayouts[props.content.appearance.layout];
            } else if(props.contentElementLayouts.hasOwnProperty('__generic')) {
                layout = props.contentElementLayouts.__generic;
            } else {
                return <>Page Layout not found: {props.content.appearance.layout}</>
            }
        });
    }

    //content prüfen, ob da für die angegebene colPos Daten vorhanden sind.
    //Diese in einer Schleife durchgehen
    //Dann wie in der Page das CE-Layout und das CE-Template ermitteln
    //CE-Layout zurückgeben

    return <>{props.colPos}</>
    // let layout;
    // if(props.contentElementLayouts.hasOwnProperty(props.contentElementLayouts.page.appearance.layout)) {
    //     layout = props.pageLayouts[props.headlessData.page.appearance.layout];
    // } else if(props.pageLayouts.hasOwnProperty('__generic')) {
    //     layout = props.pageLayouts.__generic;
    // } else {
    //     return <>Page Layout not found: {props.headlessData.page.appearance.layout}</>
    // }
    //
    // let pageTemplate;
    // if(props.pageTemplates.hasOwnProperty(props.headlessData.page.appearance.backendLayout)) {
    //     pageTemplate = props.pageTemplates[props.headlessData.page.appearance.backendLayout];
    // } else if (props.pageTemplates.hasOwnProperty('__generic')) {
    //     pageTemplate = props.pageTemplates.__generic;
    // } else {
    //     return <>Page Template not found: {props.headlessData.page.appereance.backendLayout} </>
    // }
    //
    //
    // return layout(
    //     props.headlessData,
    //     pageTemplate(props.headlessData, props.contentElementLayouts, props.contentElementTemplates),
    // );
    // return <>Page: {props.config.navigations.navigation1[0].title}</>
}


export default Content;