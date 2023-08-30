import React from 'react'
import ImageCols from "../../Partials/ContentElements/ImageCols"
import AllHeader from "../../Partials/ContentElements/Header/All"
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces"

const Textpic: React.FC<TYPO3BootstrapContentElementBaseInterface> = props => {
    let textpicClassName = '';

    if (props.data.content.gallery.position.horizontal === 'left' || props.data.content.gallery.position.horizontal === 'right') {
        textpicClassName = props.data.content.gallery.position.horizontal;

    }
    if (props.data.content.gallery.position.horizontal === 'center') {
        textpicClassName = props.data.content.gallery.position.vertical;
    }
    return <div className={"row textpic textpic-" + textpicClassName}>
        <div className={`textpic-item textpic-gallery col col-md-${textpicClassName === props.data.content.gallery.position.vertical ? "auto" : "6"}`}>
            <div className={'row'}>
                <ImageCols data={props.data.content}/>
            </div>
        </div>
        <div className="col col-md-6 textpic-item textpic-text">
            <AllHeader data={props.data}/>
            <div dangerouslySetInnerHTML={{__html: props.data.content.bodytext}}/>
            {props.children}
        </div>
    </div>
}
export default Textpic;


