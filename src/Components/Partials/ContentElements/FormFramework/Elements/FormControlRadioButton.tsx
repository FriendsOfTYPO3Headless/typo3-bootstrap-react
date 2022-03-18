import React from "react"
import {TYPO3ContentElementBaseInterface} from "../../../../Interfaces";
import FormControl from "./FormControl";
import {Form} from "react-bootstrap";
import FormControlCheckBase from "./FormControlCheckBase";

const FormControlRadioButton:React.FC<TYPO3ContentElementBaseInterface> = props => {
    return <FormControlCheckBase data={{...props.data, type: 'radio'}}/>
}

export default FormControlRadioButton