import React from "react";
import Type from "../../Partials/ContentElements/Media/Type";
import {Col} from "react-bootstrap";
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces";

interface IGalleryProperties {
    data: any
}

const Gallery: React.FC<TYPO3BootstrapContentElementBaseInterface> = (props) => {
    const {items, imagecols} = props.data

    const galleryItems = items.map((image, index) => {
        return <Col className={`gallery-item gallery-item-size-${imagecols}`} md={imagecols}>
            <Type data={props.data} file={image}/>
        </Col>
    })

    return <div className={'gallery-row'}>
        {galleryItems}
    </div>
}

export default Gallery