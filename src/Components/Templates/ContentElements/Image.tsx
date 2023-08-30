import React from 'react';
import ImageCols from "../../Partials/ContentElements/ImageCols";
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces";
import AllHeader from "../../Partials/ContentElements/Header/All";

const Image: React.FC<TYPO3BootstrapContentElementBaseInterface> = props => {
    return <>
        <div className="image">
            <AllHeader data={props.data}/>
            <div className="gallery-row">
                <div className={'row'}>
                    <ImageCols data={props.data.content}/>
                </div>
            </div>
        </div>
        {props.children}
    </>
}

export default Image;
