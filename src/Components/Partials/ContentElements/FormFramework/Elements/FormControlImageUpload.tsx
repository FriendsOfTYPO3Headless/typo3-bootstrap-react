import React from "react"
import {TYPO3ContentElementBaseInterface} from "../../../../Interfaces";
import FormControlBase from "./FormControlBase";
import FormControlFileUpload from "./FormControlFileUpload";

const FormControlImageUpload:React.FC<TYPO3ContentElementBaseInterface> = props => {
    return <FormControlFileUpload data={props.data} />
}

export default FormControlImageUpload