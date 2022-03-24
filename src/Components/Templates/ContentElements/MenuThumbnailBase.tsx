import React from "react"
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces"
import AllHeader from "../../Partials/ContentElements/Header/All"
import Image from "../../Partials/ContentElements/Media/Type/Image"

const MenuThumbnailBase: React.FC<TYPO3BootstrapContentElementBaseInterface> = props => {
    const {flexform, content} = props.data
    const {items} = content
    const itemsTemplate = items.map((item,index) => {
        const {title, subtitle, link, target, media} = item
        if (!media || media.length <= 0) {
            return <React.Fragment key={`${title}-${index}`}/>
        }
        return <div key={link} className="thumbnail-menu-item">
            <a href={link} target={target} title={title}
               data-toggle={"tooltip"} className={'thumbnail-menu-link'}>
                {media && media.length > 0 &&
                    <span className={'thumbnail-menu-image'}>
                        <Image file={media[0]}/>
                    </span>
                }
                <span className={'thumbnail-menu-caption'}>
                    <span className={'thumbnail-menu-caption-inner'}>
                        {title && title.length > 0 &&
                            <span className={'h3 thumbnail-menu-caption-title'}>{title}</span>
                        }
                        {subtitle && subtitle.length > 0 &&
                            <p className={'thumbnail-menu-caption-subtitle'}>{subtitle}</p>
                        }

                    </span>
                </span>
            </a>
            {props.children}
        </div>
    })
    return <>
        <AllHeader data={props.data}/>
        <div className={`thumbnail-menu thumbnail-menu-align-${flexform.align} thumbnail-menu-columns-${flexform.columns}`}>
        {itemsTemplate}
    </div></>
}


export default MenuThumbnailBase