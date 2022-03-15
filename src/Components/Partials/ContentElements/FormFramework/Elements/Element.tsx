import React from "react";
import {Form} from "react-bootstrap";
import Textarea from "./Textarea";
import Fieldset from "../Fieldset";

enum ElementType {
    select= 'SingleSelect',
    textarea = 'Textarea',
    input = 'input',
    fieldset = 'Fieldset'

}

const FormElement: React.FC<{ element: { defaultValue: string, type: string, identifier: string, label: string, property: any, validators: any, name: string } }> = props => {

    const {element} = props;

    console.log('element', element)
    let content;
    switch (element.type) {
        case ElementType.textarea:
            content = <Textarea data={element} />
            break;
        case ElementType.fieldset:
            content = <Fieldset data={element} />
            break;
        case ElementType.input:
        case ElementType.select:
        default:
            content = `${element.type} type not defined`
            break;
    }


    return <Form.Group className="mb-3" controlId={element.identifier}>
        <Form.Label>{element.label}</Form.Label>
        {content}
    </Form.Group>

}

export default FormElement;