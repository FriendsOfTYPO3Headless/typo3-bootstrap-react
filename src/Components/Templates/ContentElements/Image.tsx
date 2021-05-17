import React from 'react';
import {Row} from "react-bootstrap";

const Image: React.FC<{ data: any }> = props => {


    console.log(typeof props.data.gallery.rows)


    return <div className="image" >

        {Object.keys(props.data.gallery.rows).map((rowKey) => {

            return <> {Object.keys(props.data.gallery.rows[rowKey].columns).map((columnKey) => {

                return <div style={{ padding: 20 }}> <img src={props.data.gallery.rows[rowKey].columns[columnKey].publicUrl}/> </div>

            })


            } </>
        })}

    </div>
}

export default Image;
