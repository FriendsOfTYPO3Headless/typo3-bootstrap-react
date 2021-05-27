import React from 'react';
import {Col, Row} from "react-bootstrap";

const Textmedia: React.FC<{ data: any }> = props => {
    let textmediaClassName;
    if (props.data.gallery.position.horizontal === 'left' || props.data.gallery.position.horizontal === 'right'){
        textmediaClassName = props.data.gallery.position.horizontal ;
    }
    if ( props.data.gallery.position.horizontal === 'center') {

        textmediaClassName = props.data.gallery.position.vertical;

    }

    return <div className="textmedia">
        <div className="gallery-row">
            <div className={"textmedia textmedia-"+  textmediaClassName}>
                <div className="textmedia-item textmedia-gallery">
                    <Row>
                        {Object.keys(props.data.gallery.rows).map((rowKey) => {

                            return Object.keys(props.data.gallery.rows[rowKey].columns).map((columnKey) => {

                                return <Col className={"gallery-item  gallery-item-size-" + props.data.gallery.count.columns}>

                                    <img src={props.data.gallery.rows[rowKey].columns[columnKey].publicUrl}/>
                                    {props.data.gallery.rows[rowKey].columns[columnKey].properties.description}

                                </Col>
                            })
                        })}
                    </Row>

                </div>


                <Col className="textmedia-item textmedia-text">
                    <div dangerouslySetInnerHTML={{__html: props.data.bodytext}}/>
                </Col>

            </div>



        </div>


    </div>

        }

export default Textmedia;
