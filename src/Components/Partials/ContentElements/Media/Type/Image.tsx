import React from "react"

import * as Render from '../Rendering/Image'
import {Figure} from "react-bootstrap";

const Image: React.FC<{ file: any, data: any }> = (props) => {
    const {file, data} = props
    const caption = file.properties.description ?
        <Figure.Caption className="caption">{file.properties.description}</Figure.Caption> : <></>
    return <Figure className={'image'}>
        <Render.Image data={data} file={file}/>
        {caption}
    </Figure>
}

export default Image