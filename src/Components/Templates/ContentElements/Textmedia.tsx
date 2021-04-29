import React from 'react';

const Textmedia: React.FC<{ data: any }> = props => {
console.log(props.data)
    return
        <div className="textmedia">
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
