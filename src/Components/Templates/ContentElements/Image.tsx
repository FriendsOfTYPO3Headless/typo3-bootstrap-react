import {Row, Col} from "react-bootstrap";
import React, {useState} from 'react';
import ImageCols from "../../Partials/ContentElements/ImageCols";

const Image: React.FC<{ data: any }> = props => {
    return <div className="image">
        <div className="gallery-row">
            <Row>
                <ImageCols data={props.data}/>
            </Row>

        </div>
    </div>
}

export default Image;
