import React from 'react'
import {Col, Row} from "react-bootstrap"
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces"
import AllHeader from "../../Partials/ContentElements/Header/All";

const Textmedia: React.FC<TYPO3BootstrapContentElementBaseInterface> = props => {

    let textmediaClassName;
    if (props.data.content.gallery.position.horizontal === 'left' || props.data.content.gallery.position.horizontal === 'right') {
        textmediaClassName = props.data.content.gallery.position.horizontal;
    }
    if (props.data.content.gallery.position.horizontal === 'center') {
        textmediaClassName = props.data.content.gallery.position.vertical;
    }
    return <>
        <div className="textmedia">
            <div className="gallery-row">
                <Row className={"textmedia textmedia-" + textmediaClassName}>
                    <Col className="textmedia-item textmedia-gallery"
                         md={textmediaClassName === props.data.content.gallery.position.vertical ? "auto" : "6"}>
                        <Row>
                            {Object.keys(props.data.content.gallery.rows).map((rowKey) => {
                                return Object.keys(props.data.content.gallery.rows[rowKey].columns).map((columnKey) => {

                                    switch (props.data.content.gallery.rows[rowKey].columns[columnKey].properties.mimeType) {
                                        case 'video/youtube':
                                            return <Col
                                                className={"gallery-item  gallery-item-size-" + props.data.content.gallery.count.columns}>
                                                <iframe
                                                    src={props.data.content.gallery.rows[rowKey].columns[columnKey].publicUrl}
                                                    className="embed-responsive-item"/>
                                                {props.data.content.gallery.rows[rowKey].columns[columnKey].properties.description}
                                            </Col>
                                        case 'image/jpeg':
                                            return <Col
                                                className={"gallery-item  gallery-item-size-" + props.data.content.gallery.count.columns}>
                                                <img
                                                    src={props.data.content.gallery.rows[rowKey].columns[columnKey].publicUrl}
                                                    className="embed-responsive-item" alt={props.data.content.gallery.rows[rowKey].columns[columnKey].properties.title}/>
                                                {props.data.content.gallery.rows[rowKey].columns[columnKey].properties.description}
                                            </Col>
                                        case 'image/svg+xml':
                                            return <Col
                                                className={"gallery-item  gallery-item-size-" + props.data.content.gallery.count.columns}>
                                                <img
                                                    src={props.data.content.gallery.rows[rowKey].columns[columnKey].publicUrl}
                                                    className="embed-responsive-item"  alt={props.data.content.gallery.rows[rowKey].columns[columnKey].properties.title}/>
                                                {props.data.content.gallery.rows[rowKey].columns[columnKey].properties.description}
                                            </Col>
                                        case 'video/mp4':
                                            return <Col
                                                className={"gallery-item  gallery-item-size-" + props.data.content.gallery.count.columns}>
                                                <video controls>
                                                    <source type="video/mp4"
                                                            src={props.data.content.gallery.rows[rowKey].columns[columnKey].publicUrl}/>
                                                </video>
                                                {props.data.content.gallery.rows[rowKey].columns[columnKey].properties.description}
                                            </Col>
                                        case 'video/vimeo':
                                            return <Col
                                                className={"gallery-item  gallery-item-size-" + props.data.content.gallery.count.columns}>
                                                <video controls>
                                                    <source type="video/mp4"
                                                            src={props.data.content.gallery.rows[rowKey].columns[columnKey].publicUrl}/>
                                                </video>
                                                {props.data.content.gallery.rows[rowKey].columns[columnKey].properties.description}
                                            </Col>
                                        default :
                                            return <></>
                                    }
                                })
                            })}
                        </Row>
                    </Col>

                    <Col className="textmedia-item textmedia-text">
                        <AllHeader data={props.data}/>
                        <div dangerouslySetInnerHTML={{__html: props.data.content.bodytext}}/>
                        {props.children}
                    </Col>

                </Row>
            </div>
        </div>
    </>

}

export default Textmedia;


