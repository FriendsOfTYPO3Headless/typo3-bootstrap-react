import React from "react";
interface ICropSize {
    cropArea: {
        height: number;
        width: number;
        x: 0;
        y: 0;
    };
    selectedRatio: string;
    focusArea?: null;
}
interface IImage {
    publicUrl: string;
    properties: {
        title?: string;
        alternative?: string;
        description?: string;
        link?: any;
        linkData?: any;
        mimeType?: string;
        type?: string;
        filename?: string;
        originalUrl?: string;
        uidLocal?: number;
        fileReferenceUid?: number;
        size?: string;
        dimensions?: {
            width?: number;
            height?: number;
        };
        cropDimensions?: {
            width?: number;
            height?: number;
        };
        crop: {
            default: ICropSize;
            large: ICropSize;
            medium: ICropSize;
            small: ICropSize;
            extrasmall: ICropSize;
        };
        autoplay?: any;
        extension: string;
    };
}
interface IImageProperties {
    data: any;
    file: IImage;
}
export declare const Image: React.FC<IImageProperties>;
export default Image;
