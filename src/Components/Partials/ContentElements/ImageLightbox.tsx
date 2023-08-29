'use client'
import React from "react";
import Lightbox from 'react-image-lightbox';

const ImageLightbox: React.FC<{
    images: Array<any>,
    showLightbox: boolean,
    setShowLightbox: (showLightbox: boolean) => void,
    photoIndex: number,
    setPhotoIndex: (value: (((prevState: number) => number) | number)) => void,
}> = props => {
    const nextSrc = () => {
        props.setPhotoIndex(prevPhotoIndex => (prevPhotoIndex + 1) % props.images.length)
    }

    const prevSrc = () => {
        props.setPhotoIndex(prevPhotoIndex => (prevPhotoIndex + props.images.length - 1) % props.images.length)
    }

    const onClose = () => {
        props.setShowLightbox(false)
    }

    if (props.showLightbox) {
        return <Lightbox
            mainSrc={props.images[props.photoIndex]}
            nextSrc={props.images[(props.photoIndex + 1) % props.images.length]}
            prevSrc={props.images[(props.photoIndex + props.images.length - 1) % props.images.length]}
            onCloseRequest={onClose}
            onMovePrevRequest={prevSrc}
            onMoveNextRequest={nextSrc}
        />
    }
    return <></>;
}

export default ImageLightbox;

