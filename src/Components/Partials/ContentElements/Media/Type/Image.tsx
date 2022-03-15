import React from "react"

import * as Rendering from '../Rendering/Image'
import {Figure} from "react-bootstrap";

const Image: React.FC<IImageCompomentProperties> = (props) => {
    const {file, data} = props
    const caption = file.properties.description ?
        <Figure.Caption className="caption">{file.properties.description}</Figure.Caption> : <></>
    return <Figure className={'image'}>
        <Rendering.Image data={data} file={file}/>
        {caption}
    </Figure>
}

export default Image