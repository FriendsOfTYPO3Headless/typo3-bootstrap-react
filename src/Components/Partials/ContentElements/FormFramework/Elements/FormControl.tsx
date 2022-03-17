import React, {useState} from "react"
import {Form} from "react-bootstrap"
import {TYPO3ContentElementBaseInterface} from "../../../../Interfaces"


const FormControl: React.FC<TYPO3ContentElementBaseInterface> = (props) => {
    const {defaultValue, identifier, label, name, properties, type} = props.data
    const [value, SetValue] = useState(defaultValue ?? '')

    return <>
        {label.length > 0 && <Form.Label>{label}</Form.Label>}
        <Form.Control
        type={type.toLowerCase()}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={(e) => SetValue(e.target.value)}
    />
    </>
}

export default FormControl;