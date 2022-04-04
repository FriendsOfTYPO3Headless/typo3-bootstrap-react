import React from 'react'
import {Col, Row} from "react-bootstrap"
import ImageCols from "../../Partials/ContentElements/ImageCols"
import AllHeader from "../../Partials/ContentElements/Header/All"
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces"

const Textpic: React.FC<TYPO3BootstrapContentElementBaseInterface> = props => {
    let textpicClassName = '';

    if (props.data.content.gallery.position.horizontal === 'left' || props.data.content.gallery.position.horizontal === 'right') {
        textpicClassName = props.data.content.gallery.position.horizontal;

    }
    if (props.data.content.gallery.position.horizontal === 'center') {
        textpicClassName = props.data.content.gallery.position.vertical;
    }
    return <Row className={"textpic textpic-" + textpicClassName}>
        <Col className="textpic-item textpic-gallery"
             md={textpicClassName === props.data.content.gallery.position.vertical ? "auto" : "6"}>
            <Row>
                <ImageCols data={props.data.content}/>
            </Row>
        </Col>
        <Col className="textpic-item textpic-text" md="6">
            <AllHeader data={props.data}/>
            <div dangerouslySetInnerHTML={{__html: props.data.content.bodytext}}/>
            {props.children}
        </Col>
    </Row>
}
export default Textpic;


