export interface ICropSize {
    cropArea: {
        height: number,
        width: number,
        x: 0,
        y: 0
    },
    selectedRatio: string,
    focusArea?: null
}

export interface IImageProperties {
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


export interface ICropVariant {
    publicUrl: string,
    properties: IImageProperties
}

export interface ICropVariants {
    default: ICropVariant,
    large: ICropVariant,
    medium: ICropVariant,
    small: ICropVariant,
    extrasmall: ICropVariant
}

export interface IImage {
    publicUrl: string,
    properties: IImageProperties,
    cropVariants: ICropVariants

}

export interface IImageCompomentProperties {
    file: IImage,
    className?: string
}