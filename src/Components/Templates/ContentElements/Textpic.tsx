import React, {useState} from 'react';
import {Button, Col, Row} from "react-bootstrap";




const Textpic: React.FC<{ data: any }> = props => {

    let textpicClassName;
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
                        {Object.keys(props.data.gallery.rows).map((rowKey) => {

                            return Object.keys(props.data.gallery.rows[rowKey].columns).map((columnKey) => {

                                return <Col
                                    className={"gallery-item  gallery-item-size-" + props.data.gallery.count.columns}>
                                    <img src={props.data.gallery.rows[rowKey].columns[columnKey].publicUrl}/>
                                    {props.data.gallery.rows[rowKey].columns[columnKey].properties.description}


                                </Col>
                            })
                        })}

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


