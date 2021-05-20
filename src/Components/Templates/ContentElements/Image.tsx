import React from 'react';
import {Row, Col} from "react-bootstrap";

const Image: React.FC<{ data: any }> = props => {

    console.log(props.data.gallery.count.rows)
    console.log('hallo');

    return <div className="image" >
        <Row>
        {Object.keys(props.data.gallery.rows).map((rowKey) => {

            return <Col> {Object.keys(props.data.gallery.rows[rowKey].columns).map((columnKey) => {

                return  <div className={'gallery-item  gallery-item-size-' + props.data.gallery.count.rows}>

                    <img src={props.data.gallery.rows[rowKey].columns[columnKey].publicUrl}/>


                </div>



            })

            }   </Col>

        })}
        </Row>

    </div>
}

export default Image;
