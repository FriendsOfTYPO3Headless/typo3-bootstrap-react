import React from "react";

const PREFIX_COLPOS = 'colPos';

const Content: React.FC<{
    colPos: string;
    content: any;
    contentElementLayouts: any;
    contentElementTemplates: any;
}> = props => {
    let content = <></>

    if (props.content.hasOwnProperty(PREFIX_COLPOS + props.colPos)) {
        content = props.content[PREFIX_COLPOS + props.colPos].map(content => {
            let layout;
            if (props.contentElementLayouts.hasOwnProperty(content.appearance.layout)) {
                layout = props.contentElementLayouts[content.appearance.layout];
            } else if (props.contentElementLayouts.hasOwnProperty('__generic')) {
                layout = props.contentElementLayouts.__generic;
            } else {
                return <>CE-layout not found: {props.content.appearance.layout}</>
            }
            let template;
            if (props.contentElementTemplates.hasOwnProperty(content.type)) {
                template = props.contentElementTemplates[content.type];
            } else if (props.contentElementTemplates.hasOwnProperty('__generic')) {
                template = props.contentElementTemplates.__generic;
            } else {
                return <>CE-template not found: {props.content.type} </>
            }

            return <React.Fragment key={content.id}>
                {layout({ children: template(content)})}
            </React.Fragment>
        });
    }
    return content
}


export default Content;