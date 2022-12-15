import React from "react";

declare const ImageLightbox: React.FC<{
    images: Array<any>;
    showLightbox: boolean;
    setShowLightbox: (showLightbox: boolean) => void;
    photoIndex: number;
    setPhotoIndex: (value: (((prevState: number) => number) | number)) => void;
}>;
export default ImageLightbox;
