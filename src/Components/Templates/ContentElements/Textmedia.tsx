import React from 'react';

const Textmedia: React.FC<{ data: any }> = props => {

    return <div className="textmedia">
        <div className="imageConfig">
            {/*settings.responsiveimages.contentelements.textmedia.right*/} </div>
        <div > {/* bk2k:data.imageVariants as="variants" variants="{variants}" multiplier="{imageConfig.multiplier}"
                                 gutters="{imageConfig.gutters}" corrections="{imageConfig.corrections}" */}</div>
        <div className="textmedia textmedia-gallery">
            { /* <div className="textmedia-item textmedia-gallery"> */ }
            </div>
            <div className="textmedia-item textmedia-text">
                { /* <f:render partial="Header/All" arguments="{_all}"/> */ }
                <div dangerouslySetInnerHTML={{__html: props.data.bodytext}} />
            </div>
        </div>
}

export default Textmedia;
