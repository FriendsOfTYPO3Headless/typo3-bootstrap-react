import React from "react"
import {Form} from "react-bootstrap"
import {TYPO3ContentElementBaseInterface} from "../../../../Interfaces"


const FormControl: React.FC<TYPO3ContentElementBaseInterface> = (props) => {
    const {defaultValue, identifier, label, name, properties, type} = props.data

    return <>
        {label.length > 0 && <Form.Label>{label}</Form.Label>}
        <Form.Control
            {...properties.fluidAdditionalAttributes}
            type={type.toLowerCase()}
            name={name}
            defaultValue={defaultValue}

        />
    </>
}

export default FormControl;