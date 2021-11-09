import React from 'react';
import {Col, Row} from "react-bootstrap";
import ImageCols from "../../Partials/ContentElements/ImageCols";

const Textpic: React.FC<{ data: any }> = props => {
    let textpicClassName = '';

    if (props.data.gallery.position.horizontal === 'left' || props.data.gallery.position.horizontal === 'right') {
        textpicClassName = props.data.gallery.position.horizontal;
    }

    if (props.data.gallery.position.horizontal === 'center') {
        textpicClassName = props.data.gallery.position.vertical;
    }

    return <div className="textpic">
        <div className="gallery-row">
            <Row className={"textpic textpic-" + textpicClassName}>
                <Col className="textpic-item textpic-gallery"
                     md={textpicClassName === props.data.gallery.position.vertical ? "auto" : "6"}>
                    <Row>
                        <ImageCols data={props.data}/>
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


