import React from "react"
import { Form } from "react-bootstrap";
import {TYPO3ContentElementBaseInterface} from "../../../../Interfaces";
import FormControlBase from "./FormControlBase";
import FormControlSelectBase from "./FormControlSelectBase";

const FormControlMultiSelect:React.FC<TYPO3ContentElementBaseInterface> = props => {
    return <FormControlSelectBase data={{...props.data, multiple: true}}/>
}

export default FormControlMultiSelect