import React from "react"
import {TYPO3ContentElementBaseInterface} from "../../../../Interfaces";
import FormControlBase from "./FormControlBase";

const FormControlHidden:React.FC<TYPO3ContentElementBaseInterface> = props => {
    props.data.label = ''
    return <FormControlBase data={props.data} />
}

export default FormControlHidden