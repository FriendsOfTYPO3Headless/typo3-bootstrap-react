import React from "react";

export const RenderContent = (contentData, pageProps) => {
    const {contentElementLayouts, contentElementTemplates} = pageProps;

    let layout;
    if (contentElementLayouts.hasOwnProperty(contentData.appearance.layout)) {
        layout = contentElementLayouts[contentData.appearance.layout];
    } else if (contentElementLayouts.hasOwnProperty('__generic')) {
        layout = contentElementLayouts.__generic;
    } else {
        return <>CE-layout not found: {contentData.appearance.layout}</>
    }

    let template;
    if (contentElementTemplates.hasOwnProperty(contentData.type)) {
        template = contentElementTemplates[contentData.type];
    } else if (contentElementTemplates.hasOwnProperty('__generic')) {
        template = contentElementTemplates.__generic;
    } else {
        return <>CE-template not found: {contentData.type} </>
    }

    return <React.Fragment key={contentData.id}>
        {layout({children: template(contentData, pageProps), content: contentData})}
    </React.Fragment>
}//, args: _args
