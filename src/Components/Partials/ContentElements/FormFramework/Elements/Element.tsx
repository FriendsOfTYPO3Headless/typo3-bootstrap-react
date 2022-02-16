import React from "react";
import {Form} from "react-bootstrap";

const FormElement: React.FC<{ element: { defaultValue: string, type: string, identifier: string, label: string, property: any, validators: any, name: string } }> = props => {

    const {element} = props;
    let content;
    switch (element.type) {
        case 'Textarea':
            content = 'textarea'
            break;
        default:
            content = `${element.type} type not defined`
    }


    return <Form.Group className="mb-3" controlId={element.identifier}>
        <Form.Label>{element.label}</Form.Label>
        {content}
    </Form.Group>

}

export default FormElement;