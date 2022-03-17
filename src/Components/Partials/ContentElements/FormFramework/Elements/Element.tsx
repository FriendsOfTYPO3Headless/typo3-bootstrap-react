import React from "react";
import {Form} from "react-bootstrap";
import Textarea from "./Textarea";
import Fieldset from "../Fieldset";
import SingleSelect from "./SingleSelect";
import Honeypot from "./Honeypot";
import FormControl from "./FormControl";
import FormControlHidden from "./FormControlHidden";
import FormControlInput from "./FormControlInput";
import FormControlText from "./FormControlText";
import FormControlPassword from "./FormControlPassword";
import FormControlEmail from "./FormControlEmail";
import FormControlTelephone from "./FormControlTelephone";
import FormControlUrl from "./FormControlUrl";
import FormControlNumber from "./FormControlNumber";
import FormControlDate from "./FormControlDate";
import FormControlCheckbox from "./FormControlCheckbox";
import FormControlRadioButton from "./FormControlRadioButton";
import FormControlMultiCheckbox from "./FormControlMultiCheckbox";
import FormControlMultiSelect from "./FormControlMultiSelect";
import FormControlDatePicker from "./FormControlDatePicker";
import FormControlFileUpload from "./FormControlfileUpload";
import FormControlImageUpload from "./FormControlImageUpload";
import FormControlAdvancedPassword from "./FormControlAdvancedPassword";
import FormControlStaticText from "./FormControlStaticText";

enum ElementType {
    select= 'SingleSelect',
    textarea = 'Textarea',
    input = 'input',
    fieldset = 'Fieldset',
    honeypot = 'Honeypot',
    hidden = 'Hidden',
    text = 'Text',
    password = 'Password',
    email = 'Email',
    telephone = 'Telephone',
    url = 'Url',
    number = 'Number',
    date = 'Date',
    checkbox = 'Checkbox',
    radio = 'RadioButton',
    multiCheckbox = 'MultiCheckbox',
    multiSelect = 'MultiSelect',
    datePicker = 'DatePicker',
    fileUpload = 'FileUpload',
    imageUpload = 'ImageUpload',
    advancedPassword = 'AdvancedPassword',
    staticText = 'StaticText',
}

const FormElement: React.FC<{ element: { defaultValue: string, type: string, identifier: string, label: string, property: any, validators: any, name: string } }> = props => {

    const {element} = props;

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
            content = <FormControlHidden data={element} />
            break;
        case ElementType.input:
            content = <FormControlInput data={element} />
            break;
        case ElementType.text:
            content = <FormControlText data={element} />
            break;
        case ElementType.password:
            content = <FormControlPassword data={element} />
            break;
        case ElementType.email:
            content = <FormControlEmail data={element} />
            break;
        case ElementType.telephone:
            content = <FormControlTelephone data={element} />
            break;
        case ElementType.url:
            content = <FormControlUrl data={element} />
            break;
        case ElementType.number:
            content = <FormControlNumber data={element} />
            break;
        case ElementType.date:
            content = <FormControlDate data={element} />
            break;
        case ElementType.checkbox:
            content = <FormControlCheckbox data={element} />
            break;
        case ElementType.radio:
            content = <FormControlRadioButton data={element} />
            break;
        case ElementType.multiCheckbox:
            content = <FormControlMultiCheckbox data={element} />
            break;
        case ElementType.multiSelect:
            content = <FormControlMultiSelect data={element} />
            break;
        case ElementType.datePicker:
            content = <FormControlDatePicker data={element} />
            break;
        case ElementType.fileUpload:
            content = <FormControlFileUpload data={element} />
            break;
        case ElementType.imageUpload:
            content = <FormControlImageUpload data={element} />
            break;
        case ElementType.advancedPassword:
            content = <FormControlAdvancedPassword data={element} />
            break;
        case ElementType.staticText:
            content = <FormControlStaticText data={element} />
            break;
        default:
            console.log('element', element.type)
            content = `${element.type} type not defined`
            break;
    }


    return <Form.Group className="mb-3" controlId={element.identifier}>
        <Form.Label>{element.label}</Form.Label>
        {content}
    </Form.Group>

}

export default FormElement;