import React, {useState} from "react"
import {Form} from "react-bootstrap"
import {TYPO3ContentElementBaseInterface} from "../../../../Interfaces"

const Textarea: React.FC<TYPO3ContentElementBaseInterface> = props => {
    const {type, name, defaultValue, label} = props.data
    return <>
        {label.length > 0 && <Form.Label>{label}</Form.Label>}
        <Form.Control
            as={type.toLowerCase()}
            name={name}
            defaultValue={defaultValue}
        />
    </>;

}

export default Textarea;