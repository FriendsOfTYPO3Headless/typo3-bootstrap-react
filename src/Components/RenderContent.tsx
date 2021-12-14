import React from "react";

export const RenderContent = (contentElementLayouts, contentElementTemplates, content, args) => {
    let layout;
    if (contentElementLayouts.hasOwnProperty(content.appearance.layout)) {
        layout = contentElementLayouts[content.appearance.layout];
    } else if (contentElementLayouts.hasOwnProperty('__generic')) {
        layout = contentElementLayouts.__generic;
    } else {
        return <>CE-layout not found: {content.appearance.layout}</>
    }
    let template;
    if (contentElementTemplates.hasOwnProperty(content.type)) {
        template = contentElementTemplates[content.type];
    } else if (contentElementTemplates.hasOwnProperty('__generic')) {
        template = contentElementTemplates.__generic;
    } else {
        return <>CE-template not found: {content.type} </>
    }
    let _args = {
        ...args
    }
    if (content.type === 'shortcut') {
        _args = {
            ..._args,
            contentElementTemplates: contentElementTemplates,
            contentElementLayouts: contentElementLayouts,
        }
    }
    return <React.Fragment key={content.id}>
        {layout({children: template(content, _args), content: content, args: _args})}
    </React.Fragment>
}
