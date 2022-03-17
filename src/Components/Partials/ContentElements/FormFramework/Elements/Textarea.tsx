import React from "react";
import {Form} from "react-bootstrap";
import {TYPO3ContentElementBaseInterface} from "../../../../Interfaces";

const Textarea: React.FC<TYPO3ContentElementBaseInterface> = props => {
    const {type, name, defaultValue} = props.data
    return <Form.Control as={type} name={name} value={defaultValue}/>;

}

export default Textarea;