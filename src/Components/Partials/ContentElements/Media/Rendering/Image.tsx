import React from "react"
import FigureImage from "react-bootstrap/FigureImage";

interface ICropSize {
    cropArea: {
        height: number,
        width: number,
        x: 0,
        y: 0
    },
    selectedRatio: string,
    focusArea?: null
}

interface IImage {
    publicUrl: string,
    properties: {
        title?: string,
        alternative?: string,
        description?: string,
        link?: any,
        linkData?: any,
        mimeType?: string,
        type?: string,
        filename?: string,
        originalUrl?: string,
        uidLocal?: number,
        fileReferenceUid?: number,
        size?: string,
        dimensions?: {
            width?: number,
            height?: number
        },
        cropDimensions?: {
            width?: number,
            height?: number
        },
        crop: {
            default: ICropSize,
            large: ICropSize,
            medium: ICropSize,
            small: ICropSize,
            extrasmall: ICropSize
        },
        autoplay?: any,
        extension: string
    }
}

interface IImageProperties {
    data: any,
    file: IImage
}

 export const Image: React.FC<IImageProperties> = (props) => {
    const {data, file} = props
    const crops = Object.keys(file.properties.crop)

    const finalWidth = file.properties.dimensions.width
    const finalHeight = file.properties.dimensions.height

    const sources = crops.map((cropIdentifier: string, index: number) => {
        const src = file.publicUrl // TODO get an URL for every crop
        let media = ''
        switch (cropIdentifier) {
            case 'extrasmall':
                media = '(max-width: 575px)'
                break;
            case 'small':
                media = '(min-width: 576px)'
                break
            case 'medium':
                media = '(min-width: 768px)'
                break
            case 'large':
                media = '(min-width: 992px)'
                break
            default:
                break;
        }
        return <source key={index} src={src} media={media}/>
    })

    return <picture>
        {sources}
        <FigureImage loading="lazy"
             className={'img-fluid'}
             src={file.publicUrl}
             width={finalWidth}
             height={finalHeight}
             title={file.properties.title}
             alt={file.properties.alternative}
        />
    </picture>
}

export default Image