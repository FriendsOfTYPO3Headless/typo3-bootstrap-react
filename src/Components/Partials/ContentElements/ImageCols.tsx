import {Col} from "react-bootstrap";
import React, {useState} from 'react';
import ImageLightbox from "./ImageLightbox";

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
                const image = <img src={props.data.gallery.rows[rowKey].columns[columnKey].publicUrl}
                                   alt={props.data.gallery.rows[rowKey].columns[columnKey]?.properties?.title}/>;
                return <Col className={"gallery-item  gallery-item-size-" + props.data.gallery.count.columns}
                            key={rowKey + '-' + columnKey}>
                    {props.data.enlargeImageOnClick ?
                        <a onClick={(e) => {
                            e.preventDefault();
                            setPhotoIndex(images.indexOf(props.data.gallery.rows[rowKey].columns[columnKey].publicUrl));
                            setShowlightbox(true);
                            return true;
                        }} href={'#'}>
                            {image}
                        </a> : image}
                    {props.data.gallery.rows[rowKey].columns[columnKey].properties.description}
                </Col>
            })
        })
        }
    </>
}

export default ImageCols;
