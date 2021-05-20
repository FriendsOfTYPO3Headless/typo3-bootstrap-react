import React from 'react';
import {Col, Row} from "react-bootstrap";


const Textpic: React.FC<{ data: any }> = props => {
    console.log(props.data.gallery.rows[1].columns[1].properties.description)
    console.log(props.data.bodytext)
    console.log('moin')
    return <div className="textpic">
        {Object.keys(props.data.gallery.rows).map((rowKey) => {

            if (props.data.gallery.position && props.data.gallery.position.horizontal === 'left') {
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
            }

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

    </div>

}
export default Textpic;
{/*  {Object.keys(content).map((key) => {

            if (content.position && content.position.horizontal === 'left') {
                {Object.keys(props.data.gallery.rows).map((rowKey) => {

                    return <> {Object.keys(props.data.gallery.rows[rowKey].columns).map((columnKey) => {

                        return <img src={props.data.gallery.rows[rowKey].columns[columnKey].publicUrl}/>

                    })


                    } </>
                })}

            }
            if (content.position && content.position.horizontal === 'right') {
                {Object.keys(props.data.gallery.rows).map((rowKey) => {

                    return <> {Object.keys(props.data.gallery.rows[rowKey].columns).map((columnKey) => {

                        return <img src={props.data.gallery.rows[rowKey].columns[columnKey].publicUrl}/>

                    })


                    } </>
                })}

            }
            if (content.position && content.position.horizontal === 'center') {
                if (content.position && content.position.vertical === 'below') {

                    {Object.keys(props.data.gallery.rows).map((rowKey) => {

                        return <> {Object.keys(props.data.gallery.rows[rowKey].columns).map((columnKey) => {

                            return <img src={props.data.gallery.rows[rowKey].columns[columnKey].publicUrl}/>

                        })


                        } </>
                    })}

                    // let table =
              //      image = <>  <img src={props.data.media[key].publicUrl}/>
                //        <a href={props.data.media[key].publicUrl}> {props.data.media[key].properties.filename}  </a>
                  //  </>
                   // text = <div dangerouslySetInnerHTML={{__html: props.data.bodytext}} /> ;
                }
            }
        })
        } */
}