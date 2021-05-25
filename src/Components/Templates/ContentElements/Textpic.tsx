import React from 'react';
import {Col, Row} from "react-bootstrap";


const Textpic: React.FC<{ data: any }> = props => {

    console.log(props.data.bodytext)
    console.log('moin')
    return <div className="textpic">
        <div className="gallery-row">
            <div className="textpic textpic-left">
                <div className="textpic-item textpic-gallery">

                    <Row>
                        {Object.keys(props.data.gallery.rows).map((rowKey) => {

                            return  Object.keys(props.data.gallery.rows[rowKey].columns).map((columnKey) => {

                                return <Col className={"gallery-item  gallery-item-size-" + props.data.gallery.count.columns}>

                                    <img src={props.data.gallery.rows[rowKey].columns[columnKey].publicUrl}/>
                                    {props.data.gallery.rows[rowKey].columns[columnKey].properties.description}

                                </Col>
                            })



                        })}
                    </Row>
                </div>



            </div>
        </div>
    </div>


}
export default Textpic;


{/*          <div className="textpic-item textpic-text">
                    <div dangerouslySetInnerHTML={{__html: props.data.bodytext}}/>
                </div>




         {Object.keys(props.data.gallery.rows).map((rowKey) => {

            <div className="textpic textpic-left">
                <div className="textpic-item textpic-gallery">
                return <> {Object.keys(props.data.gallery.rows[rowKey].columns).map((columnKey) => {
                    return <>
                        <Row>
                            <Col md='6'>
                              <img src={props.data.gallery.rows[rowKey].columns[columnKey].publicUrl}/>
                            </Col>
                            <Col md='6'>
                                 {props.data.bodytext}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {props.data.gallery.rows[rowKey].columns[columnKey].properties.description}

                            </Col>
                        </Row>
                    </>
                })
                } </>
                </div>
            </div>

            if (props.data.gallery.position && props.data.gallery.position.horizontal === 'right') {

                return <> {Object.keys(props.data.gallery.rows[rowKey].columns).map((columnKey) => {

                    return <>

                        <Row>
                            <Col md='6'>
                                {props.data.bodytext}
                            </Col>
                            <Col md='6'>
                                <img src={props.data.gallery.rows[rowKey].columns[columnKey].publicUrl}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>

                            </Col>
                            <Col>
                                {props.data.gallery.rows[rowKey].columns[columnKey].properties.description}

                            </Col>
                        </Row>
                    </>

                })


                } </>
            }
            if ( props.data.gallery.position.horizontal === 'center') {
                if ( props.data.gallery.position.vertical === 'below') {

                    return <> {Object.keys(props.data.gallery.rows[rowKey].columns).map((columnKey) => {

                        return <>
                            <Col>

                                <Row>
                                    {props.data.bodytext}
                                </Row>

                                <Row>
                                    <img src={props.data.gallery.rows[rowKey].columns[columnKey].publicUrl}/>
                                </Row>
                                <Row>
                                    {props.data.gallery.rows[rowKey].columns[columnKey].properties.description}

                                </Row>

                            </Col>
                        </>


                    })


                    } </>
                }
                if (props.data.gallery.position.horizontal === 'center') {
                    if (props.data.gallery.position.vertical === 'above') {

                        return <> {Object.keys(props.data.gallery.rows[rowKey].columns).map((columnKey) => {

                            return <>
                                <Col>
                                    <Row>
                                        <img src={props.data.gallery.rows[rowKey].columns[columnKey].publicUrl}/>
                                    </Row>
                                    <Row>
                                        {props.data.gallery.rows[rowKey].columns[columnKey].properties.description}

                                    </Row>
                                    <Row>
                                        {props.data.bodytext}
                                    </Row>
                                </Col>
                            </>

                        })


                        } </>
                    }
                }
            }


        })}

        */
}