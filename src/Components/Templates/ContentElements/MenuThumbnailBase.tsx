import React from "react"
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces"
import AllHeader from "../../Partials/ContentElements/Header/All"
import Image from "../../Partials/ContentElements/Media/Type/Image"

const MenuThumbnailBase: React.FC<TYPO3BootstrapContentElementBaseInterface> = props => {
    const {flexform, content} = props.data
    const {items, readmoreLabel} = content
    const itemsTemplate = items.map((item, index) => {
        const {title, subtitle, abstract, link, target, active, current, spacer, hasSubpages, media, nav_icon} = item
        if (!media || media.length <= 0) {
            return <></>
        }
        return <div key={link} className="thumbnail-menu-item">
            <div className={'thumbnail-menu-link'}>
                {media && media.length > 0 &&
                    <a href={link} target={target} title={title} data-toggle={"tooltip"}
                       className={'thumbnail-menu-link'}>
                        <div className={'thumbnail-menu-image'}>
                            <Image file={media[0]}/>
                        </div>
                    </a>
                }
                <div className={'thumbnail-menu-caption'}>
                    <div className={'thumbnail-menu-caption-inner'}>
                        {title && title.length > 0 &&
                            <h3 className={'thumbnail-menu-caption-title'}>
                                <a href={link} target={target} title={title}
                                   data-toggle={"tooltip"}>{title}</a>
                            </h3>
                        }
                        {subtitle && subtitle.length > 0 &&
                            <p className={'thumbnail-menu-caption-subtitle'}>{subtitle}</p>
                        }
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    })
    return <div
        className={`thumbnail-menu thumbnail-menu-align-${flexform.align} thumbnail-menu-columns-${flexform.columns}`}>
        <AllHeader data={props.data}/>
        {itemsTemplate}
    </div>
}


export default MenuThumbnailBase