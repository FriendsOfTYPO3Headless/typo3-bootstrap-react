import React from "react"
import {TYPO3ContentElementBaseInterface} from "../../../../Interfaces"
import {Form} from "react-bootstrap"

const FormControlCheckBase: React.FC<TYPO3ContentElementBaseInterface> = props => {
    const {defaultValue, identifier, label, name, properties, type} = props.data
    const {fluidAdditionalAttributes, elementDescription, validationErrorMessages} = properties

    let options = [{
        value: "1",
        key: label
    }]
    if (properties.options) {
        options = Object.keys(properties.options).map((value: string, index) => {
            return {
                value: value,
                key: properties.options[value]
            }

        })
    }

    return <>
        {options.map((option, index: number) => {
            const selected = defaultValue !== null && defaultValue.includes(option.value) ? option.value : null
            return <Form.Check key={`${identifier}-${option.value}-${index}`}>
                <Form.Check.Input
                    {...fluidAdditionalAttributes}
                    type={type.toLowerCase()}
                    name={name}
                    id={`${name}-${option.key}`}
                    defaultValue={option.value}
                    defaultChecked={selected}
                />
                <Form.Check.Label htmlFor={`${name}-${option.key}`}>{option.key}</Form.Check.Label>
                {validationErrorMessages && validationErrorMessages.map((messageObject, index) => <Form.Control.Feedback
                    key={`${identifier}-${index}`} type={"invalid"}>{messageObject.message}</Form.Control.Feedback>)}
            </Form.Check>
        })}
        {elementDescription && <Form.Text className={'inline-muted'}>{elementDescription}</Form.Text>}

    </>
}

export default FormControlCheckBase