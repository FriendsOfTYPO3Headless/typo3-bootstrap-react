import React from "react"
import FigureImage from "react-bootstrap/FigureImage";

export const Image: React.FC<IImageCompomentProperties> = (props) => {
    const {file} = props
    const crops = Object.keys(file.properties.crop)
    const sources = crops.map((cropIdentifier: string, index: number) => {
        let src: string
        let media: string
        switch (cropIdentifier) {
            case 'extrasmall':
                media = '(max-width: 575px)'
                src = file.cropVariants.extrasmall.publicUrl
                break;
            case 'small':
                media = '(min-width: 576px)'
                src = file.cropVariants.small.publicUrl
                break
            case 'medium':
                media = '(min-width: 768px)'
                src = file.cropVariants.medium.publicUrl
                break
            case 'large':
                media = '(min-width: 992px)'
                src = file.cropVariants.large.publicUrl
                break
            default:
                media = '(min-width: 1200px)'
                src = file.cropVariants.default.publicUrl
                break;
        }
        return <source key={index} srcSet={src} media={media}/>
    })

    return <picture>
        {sources}
        <FigureImage loading="lazy"
                     className={'img-fluid'}
                     src={file.publicUrl} title={file.properties.title}
                     alt={file.properties.alternative}
        />
    </picture>
}

export default Image