import React from "react";
import { Form } from "react-bootstrap";


const FormControl: React.FC<{data: any}> = (props) => {
    console.log('FormControl DATA', props.data)
    return <Form.Control />
}

export default FormControl;