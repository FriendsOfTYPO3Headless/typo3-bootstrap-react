import React from "react"
import {TYPO3ContentElementBaseInterface} from "../../../../Interfaces";
import FormControlBase from "./FormControlBase";

const FormControlUrl:React.FC<TYPO3ContentElementBaseInterface> = props => {
    return <FormControlBase data={props.data} />
}

export default FormControlUrl