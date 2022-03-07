import React from "react";
import Type from "../../Partials/ContentElements/Media/Type";
import {Col} from "react-bootstrap";

interface IGalleryProperties {
    data: any
}
// TODO Add
const Gallery: React.FC<IGalleryProperties> = (props) => {
    const {images, imagecols} = props.data

    const galleryItems = images.map((image, index) => {
        return <Col className={`gallery-item gallery-item-size-${imagecols}`} md={imagecols}>
            <Type data={props.data} file={image}/>
        </Col>
    })

    return <div className={'gallery-row'}>
        {galleryItems}
    </div>
}

export default Gallery