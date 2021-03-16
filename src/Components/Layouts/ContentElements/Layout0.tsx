import React from 'react';
import BackgroundImage from "../../Partials/ContentElements/Frame/General/BackgroundImage";

const Layout0: React.FC<{ data: any }> = props => {
    const frameClass = 'frame-' + props.data.appearance.frameClass;
    const typeClass = 'frame-type-' + props.data.type;
    const layoutClass = 'frame-layout-' + props.data.appearance.layout;
    const backgroundClass = 'frame-background-' + (props.data.appearance.backgroundColor !== '' ? props.data.appearance.backgroundColor: 'none');
    const spaceBeforeClass = 'frame-space-before-' + (props.data.appearance.spaceBefore !== '' ?props.data.appearance.spaceBefore: 'none');
    const spaceAfterClass = 'frame-space-after-' + (props.data.appearance.spaceAfter !== '' ? props.data.appearance.spaceAfter : 'none');

    let content;
    if (props.data.appearance.frameClass !== 'none') {
        const backgroundImageClass = (props.data.appearance.backgroundImage.length > 0 ? 'frame-has-backgroundimage' : 'frame-no-backgroundimage');
        content = <div id={"c" + props.data.id}
                       className={
                           "frame " +
                           frameClass + " " +
                           typeClass + " " +
                           layoutClass + " " +
                           backgroundClass + " " +
                           backgroundImageClass + " " +
                           spaceBeforeClass + " " +
                           spaceAfterClass
                       }
        >
            <BackgroundImage data={props.data}/>
            <div className="frame-container">
                <div className="frame-inner">
                    {props.data._localizedUid ? <a id={"c" + props.data._localizedUid}/> : null}
                    {props.children}
                </div>
            </div>
        </div>
    } else {
        content = <>
            <a id={"c" + props.data.id}/>
            {props.data._localizedUid ? <a id={"c" + props.data._localizedUid}/> : null}
            {props.data.appearance.spaceBefore ? <div className={spaceBeforeClass} /> : null}
            {/*<f:render section="Header" optional="true">*/}
            {/*    <f:render partial="Header/All" arguments="{_all}"/>*/}
            {/*</f:render>*/}
            {props.children}
            {props.data.appearance.spaceAfter ? <div className={spaceAfterClass} /> : null}
        </>
    }
    return content
}

export default Layout0;