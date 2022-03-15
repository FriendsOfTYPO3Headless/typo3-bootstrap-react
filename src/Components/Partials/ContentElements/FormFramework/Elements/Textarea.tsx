import React from "react";
import {Form} from "react-bootstrap";

const Textarea: React.FC<{ data: any }> = props => {
    const {type, name, defaultValue} = props.data
    return <Form.Control as={type} name={name} value={defaultValue}/>;

}

export default Textarea;