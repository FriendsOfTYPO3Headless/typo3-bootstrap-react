import React from 'react';

const BackgroundImage: React.FC<{ data: any }> = props => {

    if (props.data.appearance.backgroundImage.length < 1) {
        return null;
    }

    const backgroundImageObject = props.data.appearance.backgroundImage[0];
    const backgroundImageIdentifier = 'frame-backgroundimage-' + props.data.id;
    let backgroundImageClasses = 'frame-backgroundimage';

    if (props.data.appearance.backgroundImageOptions.parallax === '1') {
        backgroundImageClasses += ' frame-backgroundimage-parallax';
    }

    if (props.data.appearance.backgroundImageOptions.fade === '1') {
        backgroundImageClasses += ' frame-backgroundimage-fade';
    }

    if (props.data.appearance.backgroundImageOptions.filter !== '') {
        backgroundImageClasses += ' frame-backgroundimage-' + props.data.appearance.backgroundImageOptions.filter;
    }

    //TODO: Implement crop sizes


    return <div className="frame-backgroundimage-container">
        <div id={backgroundImageIdentifier}
             className={backgroundImageClasses}
             style={{backgroundImage: 'url("' + backgroundImageObject.publicUrl + '")'}}
        />
    </div>

}

export default BackgroundImage;