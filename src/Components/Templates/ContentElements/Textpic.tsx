import React, {useState} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import ImageLightbox from "./ImageLightbox";


const Textpic: React.FC<{ data: any }> = props => {

    console.log(props.data.gallery.count.rows)
    console.log('777')

    console.log(props.data.bodytext)

    const [showLightbox, setShowlightbox] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)

    const images = [];
    Object.keys(props.data.gallery.rows).forEach(rowKey => {
        Object.keys(props.data.gallery.rows[rowKey].columns).forEach(columnKey => {
            images.push(props.data.gallery.rows[rowKey].columns[columnKey].publicUrl);
        })
    })


    let textpicClassName;
    if (props.data.gallery.position.horizontal === 'left' || props.data.gallery.position.horizontal === 'right') {
        textpicClassName = props.data.gallery.position.horizontal;
    }
    if (props.data.gallery.position.horizontal === 'center') {

        textpicClassName = props.data.gallery.position.vertical;

    }

    const imageCols = Object.keys(props.data.gallery.rows).map((rowKey) => {
        return Object.keys(props.data.gallery.rows[rowKey].columns).map((columnKey) => {
            return <Col className={"gallery-item  gallery-item-size-" + props.data.gallery.count.columns}>
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

    return <div className="textpic">
        <ImageLightbox images={images} setShowLightbox={setShowlightbox} showLightbox={showLightbox}
                       photoIndex={photoIndex} setPhotoIndex={setPhotoIndex}/>
        <div className="gallery-row">
            <Row className={"textpic textpic-" + textpicClassName}>
                <Col className="textpic-item textpic-gallery"
                     md={textpicClassName === props.data.gallery.position.vertical ? "auto" : "6"}>
                    <Row>
                        {imageCols}
                    </Row>
                </Col>

                <Col className="textpic-item textpic-text" md="6"
                     dangerouslySetInnerHTML={{__html: props.data.bodytext}}>

                </Col>

            </Row>
        </div>
    </div>

}
export default Textpic;


