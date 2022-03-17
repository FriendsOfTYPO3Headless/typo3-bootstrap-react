import React from "react"
import {TYPO3ContentElementBaseInterface} from "../../../../Interfaces";
import {Form} from "react-bootstrap";

const SingleSelect: React.FC<TYPO3ContentElementBaseInterface> = props => {
    console.log('SingleSelect data', props.data)
    const {defaultValue, identifier, label, name, properties} = props.data
    const {options, fluidAdditionalAttributes, prependOptionLabel} = properties

    let optionTemplate = () => {
        const template = []
        template.push(<option key={`${identifier}-0`} value={''}>{prependOptionLabel}</option>)
        Object.keys(options).map((optionValue: string, index: number) => {
            template.push(<option key={`${identifier}-${index+1}`} value={optionValue}>{options[optionValue]}</option>)
        })
        return template
    }

    return <Form.Select name={name}>
        {optionTemplate()}
    </Form.Select>
}

export default SingleSelect