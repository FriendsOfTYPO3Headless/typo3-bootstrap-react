import {Col} from "react-bootstrap";
import React, {useState} from 'react';
import ImageLightbox from "./ImageLightbox";
import Image from "./Media/Type/Image";

const imageUris = (data: any) => {
    const _images = [];
    Object.keys(data.gallery.rows).forEach(rowKey => {
        Object.keys(data.gallery.rows[rowKey].columns).forEach(columnKey => {
            _images.push(data.gallery.rows[rowKey].columns[columnKey].publicUrl);
        })
    })
    return _images;
}

const ImageCols: React.FC<{ data: any }> = (props) => {
    const [showLightbox, setShowlightbox] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)

    const images = imageUris(props.data);
    return <>
        <ImageLightbox images={images} setShowLightbox={setShowlightbox} showLightbox={showLightbox}
                       photoIndex={photoIndex} setPhotoIndex={setPhotoIndex}/>
        {Object.keys(props.data.gallery.rows).map((rowKey) => {
            return Object.keys(props.data.gallery.rows[rowKey].columns).map((columnKey) => {
                const file = props.data.gallery.rows[rowKey].columns[columnKey]
                const image = <Image file={file} />
                let colContent = image
                if(props.data.enlargeImageOnClick) {
                    colContent = <a onClick={(e) => {
                        e.preventDefault();
                        setPhotoIndex(images.indexOf(file.publicUrl));
                        setShowlightbox(true);
                        return true;
                    }} href={file.publicUrl}>
                        {image}
                    </a>
                }
                return <Col className={"gallery-item  gallery-item-size-" + props.data.gallery.count.columns}
                            key={rowKey + '-' + columnKey}>
                    {colContent}
                </Col>
            })
        })
        }
    </>
}

export default ImageCols;
