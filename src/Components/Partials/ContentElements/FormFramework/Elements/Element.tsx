import React from "react";
import {Form} from "react-bootstrap";
import Textarea from "./Textarea";
import Fieldset from "../Fieldset";
import SingleSelect from "./SingleSelect";
import Honeypot from "./Honeypot";
import FormControl from "./FormControl";

enum ElementType {
    select= 'SingleSelect',
    textarea = 'Textarea',
    input = 'input',
    fieldset = 'Fieldset',
    honeypot = 'Honeypot',
    hidden = 'Hidden',

}

const FormElement: React.FC<{ element: { defaultValue: string, type: string, identifier: string, label: string, property: any, validators: any, name: string } }> = props => {

    const {element} = props;

    console.log('element', element)
    let content;
    switch (element.type) {
        case ElementType.textarea:
            content = <Textarea data={element} />
            break
        case ElementType.fieldset:
            content = <Fieldset data={element} />
            break
        case ElementType.select:
            content = <SingleSelect data={element}/>
            break
        case ElementType.honeypot:
            content = <Honeypot data={element}/>
            break
        case ElementType.hidden:
        case ElementType.input:
            content = <FormControl data={element} />
            break;
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