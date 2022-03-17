import React from "react";
import {Form} from "react-bootstrap";
import {TYPO3ContentElementBaseInterface} from "../../../../Interfaces";


const FormControl: React.FC<TYPO3ContentElementBaseInterface> = (props) => {
    console.log('FormControl DATA', props.data)
    const {defaultValue, identifier, label, name, properties, type} = props.data
    return <Form.Control type={type} value={defaultValue} id={identifier} name={name}/>
}

export default FormControl;