import React from "react"
import {TYPO3ContentElementBaseInterface} from "../../../../Interfaces"
import {Form} from "react-bootstrap"

const FormControlSelectBase: React.FC<TYPO3ContentElementBaseInterface> = props => {
    console.log('SingleSelect data', props.data)
    const {defaultValue, identifier, label, name, properties, multiple} = props.data
    const {options, fluidAdditionalAttributes, prependOptionLabel, validationErrorMessages} = properties

    let optionTemplate = () => {
        const template = []
        template.push(<option key={`${identifier}-0`} value={''}>{prependOptionLabel}</option>)
        Object.keys(options).map((optionValue: string, index: number) => {
            template.push(<option key={`${identifier}-${index + 1}`}
                                  value={optionValue}>{options[optionValue]}</option>)
        })
        return template
    }


    return <>
        {label.length > 0 && <Form.Label>{label}</Form.Label>}
        <Form.Select {...fluidAdditionalAttributes} name={name} multiple={multiple} defaultValue={defaultValue}>
            {optionTemplate()}
        </Form.Select>
        {validationErrorMessages && validationErrorMessages.map((messageObject, index) =>
            <Form.Control.Feedback key={`${identifier}-${index}`} type={"invalid"}>
                {messageObject.message}
            </Form.Control.Feedback>
        )}
    </>
}

export default FormControlSelectBase