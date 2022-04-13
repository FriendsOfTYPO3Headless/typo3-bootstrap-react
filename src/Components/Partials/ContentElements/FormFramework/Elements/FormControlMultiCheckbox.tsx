import React from "react"
import {TYPO3ContentElementBaseInterface} from "../../../../Interfaces";
import FormControlBase from "./FormControlBase";
import FormControlCheckBase from "./FormControlCheckBase";

const FormControlMultiCheckbox:React.FC<TYPO3ContentElementBaseInterface> = props => {
    return <FormControlCheckBase data={{...props.data, type: 'checkbox'}}/>
}

export default FormControlMultiCheckbox