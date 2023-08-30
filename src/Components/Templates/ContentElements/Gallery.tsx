import React from "react"
import Type from "../../Partials/ContentElements/Media/Type"
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces"
import AllHeader from "../../Partials/ContentElements/Header/All"

const Gallery: React.FC<TYPO3BootstrapContentElementBaseInterface> = (props) => {
    const {items, imagecols} = props.data.content

    const galleryItems = items.map((image, index) => {
        return <div key={`${index}`} className={`col col-md-${imagecols} gallery-item gallery-item-size-${imagecols}`}>
            <Type data={props.data} file={image}/>
        </div>
    })

    return <>
        <AllHeader data={props.data}/>
        <div className={'gallery-row'}>
            {galleryItems}
        </div>
        {props.children}
    </>
}

export default Gallery