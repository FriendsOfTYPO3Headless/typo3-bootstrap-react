import React from "react"
import {TYPO3ContentElementBaseInterface} from "../../../../Interfaces";
import FormControl from "./FormControl";

const FormControlPassword:React.FC<TYPO3ContentElementBaseInterface> = props => {
    return <FormControl data={props.data} />
}

export default FormControlPassword