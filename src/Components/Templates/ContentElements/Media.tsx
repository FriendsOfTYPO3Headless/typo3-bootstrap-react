import React from 'react';
import {Col, Row} from "react-bootstrap";

const Media: React.FC<{ data: any }> = props => {

    let mediaClassName;
    if (props.data.gallery.position.horizontal === 'left' || props.data.gallery.position.horizontal === 'right') {
        mediaClassName = props.data.gallery.position.horizontal;
    }
    if (props.data.gallery.position.horizontal === 'center') {
        mediaClassName = props.data.gallery.position.vertical;
    }
    return <div className="media">
        <div className="gallery-row">
            <Row className={"media media-" + mediaClassName}>
                <Col className="media-item media-gallery"
                     md={mediaClassName === props.data.gallery.position.vertical ? "auto" : "6"}>
                    <Row>
                        {Object.keys(props.data.gallery.rows).map((rowKey) => {
                            return Object.keys(props.data.gallery.rows[rowKey].columns).map((columnKey) => {

                                console.log(props.data.gallery.rows[rowKey].columns[columnKey].properties.mimeType)

                                switch (props.data.gallery.rows[rowKey].columns[columnKey].properties.mimeType){
                                    case   'video/youtube' :
                                        return <Col
                                            className={"gallery-item  gallery-item-size-" + props.data.gallery.count.columns}>
                                            <iframe src={props.data.gallery.rows[rowKey].columns[columnKey].publicUrl}
                                                    className="embed-responsive-item"/>
                                            {props.data.gallery.rows[rowKey].columns[columnKey].properties.description}
                                        </Col>
                                    case   'image/jpeg'     :
                                        return <Col
                                            className={"gallery-item  gallery-item-size-" + props.data.gallery.count.columns}>
                                            <img src={props.data.gallery.rows[rowKey].columns[columnKey].publicUrl}
                                                 className="embed-responsive-item"/>
                                            {props.data.gallery.rows[rowKey].columns[columnKey].properties.description}
                                        </Col>
                                    case   'image/svg+xml' :
                                        return <Col
                                            className={"gallery-item  gallery-item-size-" + props.data.gallery.count.columns}>
                                            <img src={props.data.gallery.rows[rowKey].columns[columnKey].publicUrl}
                                                 className="embed-responsive-item"/>
                                            {props.data.gallery.rows[rowKey].columns[columnKey].properties.description}
                                        </Col>
                                    case   'video/mp4' :
                                        return <Col
                                            className={"gallery-item  gallery-item-size-" + props.data.gallery.count.columns}>
                                            <video controls>
                                                <source type="video/mp4" src={props.data.gallery.rows[rowKey].columns[columnKey].publicUrl} />
                                            </video>
                                            {props.data.gallery.rows[rowKey].columns[columnKey].properties.description}
                                        </Col>
                                    case   'video/vimeo' :
                                        return <Col
                                            className={"gallery-item  gallery-item-size-" + props.data.gallery.count.columns}>
                                            <video controls>
                                                <source type="video/mp4" src={props.data.gallery.rows[rowKey].columns[columnKey].publicUrl} />
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
            </Row>
        </div>
    </div>

}

export default Media;


