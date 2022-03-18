import React, {useState} from "react"
import {Form} from "react-bootstrap"
import {TYPO3ContentElementBaseInterface} from "../../../../Interfaces"

const FormControlTextarea: React.FC<TYPO3ContentElementBaseInterface> = props => {
    const {type, name, defaultValue, label, properties} = props.data
    const {fluidAdditionalAttributes, elementDescription} = properties
    return <>
        {label.length > 0 && <Form.Label>{label}</Form.Label>}
        <Form.Control
            {...fluidAdditionalAttributes}
            as={type.toLowerCase()}
            name={name}
            defaultValue={defaultValue}
        />
        {elementDescription && <Form.Text className={'inline-muted'}>{elementDescription}</Form.Text>}
    </>;

}

export default FormControlTextarea;