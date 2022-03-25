import React from "react"
import FigureImage from "react-bootstrap/FigureImage";

export const Image: React.FC<IImageCompomentProperties> = (props) => {
    const {file, className} = props
    const crops = Object.keys(file.properties.crop)
    const sources = crops.map((cropIdentifier: string, index: number) => {
        let src: string
        let media: string
        switch (cropIdentifier) {
            case 'extrasmall':
                media = '(max-width: 575px)'
                src = file.cropVariants ? file.cropVariants.extrasmall.publicUrl : file.publicUrl
                break;
            case 'small':
                media = '(min-width: 576px)'
                src = file.cropVariants ? file.cropVariants.small.publicUrl : file.publicUrl
                break
            case 'medium':
                media = '(min-width: 768px)'
                src = file.cropVariants ? file.cropVariants.medium.publicUrl : file.publicUrl
                break
            case 'large':
                media = '(min-width: 992px)'
                src = file.cropVariants ? file.cropVariants.large.publicUrl : file.publicUrl
                break
            default:
                media = '(min-width: 1200px)'
                src = file.cropVariants ? file.cropVariants.default.publicUrl : file.publicUrl
                break;
        }
        return <source key={index} srcSet={src} media={media}/>
    })

    let cssClasses= 'img-fluid'
    if(className) {
        cssClasses += ' ' + className
    }

    return <picture>
        {sources}
        <FigureImage loading="lazy"
                     className={cssClasses}
                     src={file.publicUrl} title={file.properties.title}
                     alt={file.properties.alternative}
        />
    </picture>
}

export default Image