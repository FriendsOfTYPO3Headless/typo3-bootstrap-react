'use client'
import React from "react"
import FigureImage from "react-bootstrap/FigureImage"
import {IImageCompomentProperties} from "../../../../../Types/Image";

export const Image: React.FC<IImageCompomentProperties> = (props) => {
    const {file, className} = props
    const {properties, cropVariants, publicUrl} = file
    const {link, linkData} = properties
    const crops = Object.keys(properties.crop)

    const sources = crops.map((cropIdentifier: string, index: number) => {
        let src: string
        let media: string
        switch (cropIdentifier) {
            case 'extrasmall':
                media = '(max-width: 575px)'
                src = cropVariants ? cropVariants.extrasmall.publicUrl : publicUrl
                break;
            case 'small':
                media = '(min-width: 576px)'
                src = cropVariants ? cropVariants.small.publicUrl : publicUrl
                break
            case 'medium':
                media = '(min-width: 768px)'
                src = cropVariants ? cropVariants.medium.publicUrl : publicUrl
                break
            case 'large':
                media = '(min-width: 992px)'
                src = cropVariants ? cropVariants.large.publicUrl : publicUrl
                break
            default:
                media = '(min-width: 1200px)'
                src = cropVariants ? cropVariants.default.publicUrl : publicUrl
                break;
        }
        return <source key={index} srcSet={src} media={media}/>
    })

    let cssClasses = 'img-fluid'
    if (className) {
        cssClasses += ' ' + className
    }

    let imageContent = <picture>
        {sources}

        <FigureImage
            loading={"lazy"}
            className={cssClasses}
            src={publicUrl} title={properties.title?.replace(/&quot;/gi , '"')}
            alt={properties.alternative}
        />
    </picture>


    if ((link !== null && link.length > 0) || (linkData !== undefined && linkData !== null)) {
        let linkProperties = {
            className: '',
            href: link,
            target: null,
            title: null
        }

        if (linkData !== undefined && linkData !== null) {
            linkProperties = {
                ...linkProperties,
                className: linkData['class'],
                href: linkData.href,
                target: linkData.target,
                title: linkData.title?.replace(/&quot;/gi , '"'),
                ...linkData.additionalAttributes
            }
        }
        imageContent = <a {...linkProperties}>
            {imageContent}
        </a>
    }

    return imageContent
}

export default Image