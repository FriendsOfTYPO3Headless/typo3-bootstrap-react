import React from 'react';

const Textpic: React.FC<{ data: any }> = props => {

    return <div className="textpic">
        <div className="textpic-item textpic-gallery">
            {/*<f:render partial="Media/Gallery" arguments="{_all}"/>*/}
        </div>
        <div className="textpic-item textpic-text">
            {/*<f:render partial="Header/All" arguments="{_all}"/>*/}
            <div dangerouslySetInnerHTML={{__html: props.data.bodytext}}/>
        </div>
    </div>

}

export default Textpic;