import React, {useState} from "react"
import {Form} from "react-bootstrap"
import {TYPO3ContentElementBaseInterface} from "../../../../Interfaces"


const FormControl: React.FC<TYPO3ContentElementBaseInterface> = (props) => {
    const {defaultValue, identifier, label, name, properties, type} = props.data
    const [value, SetValue] = useState(defaultValue ?? '')

    return <Form.Control
        type={type.toLowerCase()}
        name={name}
        value={value}
        onChange={(e) => SetValue(e.target.value)}
    />
}

export default FormControl;