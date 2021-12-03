import React from 'react';
import {Col, Row} from "react-bootstrap";

const Textmedia: React.FC<{ data: any }> = props => {

    let textmediaClassName;
    if (props.data.gallery.position.horizontal === 'left' || props.data.gallery.position.horizontal === 'right') {
        textmediaClassName = props.data.gallery.position.horizontal;
    }
    if (props.data.gallery.position.horizontal === 'center') {
        textmediaClassName = props.data.gallery.position.vertical;
    }
    return <div className="textmedia">
        <div className="gallery-row">
            <Row className={"textmedia textmedia-" + textmediaClassName}>
                <Col className="textmedia-item textmedia-gallery"
                     md={textmediaClassName === props.data.gallery.position.vertical ? "auto" : "6"}>
                    <Row>
                        {Object.keys(props.data.gallery.rows).map((rowKey) => {
                            return Object.keys(props.data.gallery.rows[rowKey].columns).map((columnKey) => {

                                switch (props.data.gallery.rows[rowKey].columns[columnKey].properties.mimeType) {
                                    case 'video/youtube':
                                        return <Col
                                            className={"gallery-item  gallery-item-size-" + props.data.gallery.count.columns}>
                                            <iframe src={props.data.gallery.rows[rowKey].columns[columnKey].publicUrl}
                                                    className="embed-responsive-item"/>
                                            {props.data.gallery.rows[rowKey].columns[columnKey].properties.description}
                                        </Col>
                                    case 'image/jpeg':
                                        return <Col
                                            className={"gallery-item  gallery-item-size-" + props.data.gallery.count.columns}>
                                            <img src={props.data.gallery.rows[rowKey].columns[columnKey].publicUrl}
                                                 className="embed-responsive-item"/>
                                            {props.data.gallery.rows[rowKey].columns[columnKey].properties.description}
                                        </Col>
                                    case 'image/svg+xml':
                                        return <Col
                                            className={"gallery-item  gallery-item-size-" + props.data.gallery.count.columns}>
                                            <img src={props.data.gallery.rows[rowKey].columns[columnKey].publicUrl}
                                                 className="embed-responsive-item"/>
                                            {props.data.gallery.rows[rowKey].columns[columnKey].properties.description}
                                        </Col>
                                    case 'video/mp4':
                                        return <Col
                                            className={"gallery-item  gallery-item-size-" + props.data.gallery.count.columns}>
                                            <video controls>
                                                <source type="video/mp4"
                                                        src={props.data.gallery.rows[rowKey].columns[columnKey].publicUrl}/>
                                            </video>
                                            {props.data.gallery.rows[rowKey].columns[columnKey].properties.description}
                                        </Col>
                                    case 'video/vimeo':
                                        return <Col
                                            className={"gallery-item  gallery-item-size-" + props.data.gallery.count.columns}>
                                            <video controls>
                                                <source type="video/mp4"
                                                        src={props.data.gallery.rows[rowKey].columns[columnKey].publicUrl}/>
                                            </video>
                                            {props.data.gallery.rows[rowKey].columns[columnKey].properties.description}
                                        </Col>
                                    default :
                                        return <Col
                                            className={"gallery-item  gallery-item-size-" + props.data.gallery.count.columns}>
                                            <iframe src={props.data.gallery.rows[rowKey].columns[columnKey].publicUrl}
                                                    className="embed-responsive-item"/>
                                            {props.data.gallery.rows[rowKey].columns[columnKey].properties.description}
                                        </Col>
                                }

                            })
                        })}
                    </Row>
                </Col>

                <Col className="textmedia-item textmedia-text">
                    <div dangerouslySetInnerHTML={{__html: props.data.bodytext}}/>
                </Col>

            </Row>
        </div>
    </div>

}

export default Textmedia;


