import React from "react";

export const RenderContent:React.FC<{contentData:any, pageProps: any}> = ({contentData, pageProps}) => {
    const {contentElementLayouts, contentElementTemplates} = pageProps;


    let template;
    if (contentElementTemplates.hasOwnProperty(contentData.type)) {
        template = contentElementTemplates[contentData.type](contentData, pageProps);
    } else if (contentElementTemplates.hasOwnProperty('__generic')) {
        template = contentElementTemplates.__generic(contentData, pageProps);
    } else {
        return <>CE-template not found: {contentData.type} </>
    }

    const Layout = contentElementLayouts[contentData.appearance.layout]

    return <React.Fragment key={contentData.id}>
        <Layout data={contentData}  children={template} />
        </React.Fragment>
}//, args: _args
