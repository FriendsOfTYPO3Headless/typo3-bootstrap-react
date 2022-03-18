import React from "react"
import {Form} from "react-bootstrap"
import {TYPO3ContentElementBaseInterface} from "../../../../Interfaces"
import FormControlCheckBase from "./FormControlCheckBase";

const FormControlCheckbox: React.FC<TYPO3ContentElementBaseInterface> = props => {
    return <FormControlCheckBase data={props.data}/>
}

export default FormControlCheckbox