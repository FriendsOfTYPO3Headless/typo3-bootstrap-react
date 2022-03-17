import React, {useState} from "react"
import {Form} from "react-bootstrap"
import {TYPO3ContentElementBaseInterface} from "../../../../Interfaces"

const Textarea: React.FC<TYPO3ContentElementBaseInterface> = props => {
    const {type, name, defaultValue} = props.data
    const [value, SetValue] = useState(defaultValue ?? '')
    return <Form.Control
        as={type.toLowerCase()}
        name={name}
        value={value}
        onChange={(e) => SetValue(e.target.value)}
    />;

}

export default Textarea;