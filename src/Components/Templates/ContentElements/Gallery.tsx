import React from "react"
import Type from "../../Partials/ContentElements/Media/Type"
import {Col} from "react-bootstrap"
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces"
import AllHeader from "../../Partials/ContentElements/Header/All"

const Gallery: React.FC<TYPO3BootstrapContentElementBaseInterface> = (props) => {
    const {items, imagecols} = props.data.content

    const galleryItems = items.map((image, index) => {
        return <Col key={`${index}`} className={`gallery-item gallery-item-size-${imagecols}`} md={imagecols}>
            <Type data={props.data} file={image}/>
        </Col>
    })

    return <>
        <AllHeader data={props.data}/>
        <div className={'gallery-row'}>
            {galleryItems}
        </div>
    </>
}

export default Gallery