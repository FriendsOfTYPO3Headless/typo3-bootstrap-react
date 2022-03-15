import {Row, Col} from "react-bootstrap";
import React, {useState} from 'react';
import ImageCols from "../../Partials/ContentElements/ImageCols";
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces";

const Image: React.FC<TYPO3BootstrapContentElementBaseInterface> = props => {
        return <div className="image">
        <div className="gallery-row">
            <Row>
                <ImageCols data={props.data.content}/>
            </Row>
        </div>
    </div>
}

export default Image;
