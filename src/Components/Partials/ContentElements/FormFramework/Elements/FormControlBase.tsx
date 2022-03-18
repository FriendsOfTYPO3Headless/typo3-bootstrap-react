import React from "react"
import {Form} from "react-bootstrap"
import {TYPO3ContentElementBaseInterface} from "../../../../Interfaces"


const FormControlBase: React.FC<TYPO3ContentElementBaseInterface> = (props) => {
    const {defaultValue, identifier, label, name, properties, type} = props.data
    const {fluidAdditionalAttributes, elementDescription} = properties
    return <>
        {label.length > 0 && <Form.Label>{label}</Form.Label>}
        <Form.Control
            {...fluidAdditionalAttributes}
            type={type.toLowerCase()}
            name={name}
            defaultValue={defaultValue}
        />
        {elementDescription && <Form.Text className={'inline-muted'}>{elementDescription}</Form.Text>}
    </>
}

export default FormControlBase;