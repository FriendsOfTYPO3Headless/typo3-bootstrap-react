import {Row, Col} from "react-bootstrap";
import React, {Component, useState} from 'react';
import Lightbox from "react-image-lightbox";
import ImageLightbox from "./ImageLightbox";


const Image: React.FC<{ data: any }> = props => {

    const [showLightbox, setShowlightbox] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)

    const images = [];
    Object.keys(props.data.gallery.rows).forEach(rowKey => {
        Object.keys(props.data.gallery.rows[rowKey].columns).forEach(columnKey => {
            images.push(props.data.gallery.rows[rowKey].columns[columnKey].publicUrl);
        })
    })


    const imageCols = Object.keys(props.data.gallery.rows).map((rowKey, indexRow) => {
        return Object.keys(props.data.gallery.rows[rowKey].columns).map((columnKey, indexCol) => {

            return <Col className={"gallery-item  gallery-item-size-" + props.data.gallery.count.columns}
                        key={rowKey + '-' + columnKey}>
                <a onClick={() => {
                    setPhotoIndex(images.indexOf(props.data.gallery.rows[rowKey].columns[columnKey].publicUrl));
                    setShowlightbox(true);
                }}>
                    <img src={props.data.gallery.rows[rowKey].columns[columnKey].publicUrl}/>
                </a>
                {props.data.gallery.rows[rowKey].columns[columnKey].properties.description}
            </Col>
        })
    })


    return <div className="image">
        <ImageLightbox images={images} setShowLightbox={setShowlightbox} showLightbox={showLightbox}
                       photoIndex={photoIndex} setPhotoIndex={setPhotoIndex}/>
        <div className="gallery-row">
            <Row>
                {imageCols}
            </Row>

        </div>
    </div>
}


export default Image;
