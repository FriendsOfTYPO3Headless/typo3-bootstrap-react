import React from "react"
import {TYPO3ContentElementBaseInterface} from "../../../../Interfaces";
import FormControlBase from "./FormControlBase";

const FormControlFileUpload:React.FC<TYPO3ContentElementBaseInterface> = props => {
    return <FormControlBase data={{...props.data, type: 'file'}} />
}

export default FormControlFileUpload