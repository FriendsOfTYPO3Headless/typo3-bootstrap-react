import React from "react"
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces"
import AllHeader from "../../Partials/ContentElements/Header/All";

const MenuCardDir: React.FC<TYPO3BootstrapContentElementBaseInterface> = props => {
    const {flexform, content} = props.data
    const {items, readmoreLabel} = content
    const itemsTemplate = items.map((item) => {
        const {
            title,
            description,
            link,
            target,
            thumbnail
        } = item
        return <div key={link}
                    className={`card-menu-item ${(thumbnail && thumbnail[0]?.publicUrl ? 'hasImage' : 'noImage')}`}>
            <div className={'card'}>
                {thumbnail && thumbnail.length > 0 &&
                    <a href={link} className={'card-link'} target={target} title={title} data-toggle={"tooltip"}>
                        <img className={"card-img-top"} src={thumbnail[0].publicUrl} alt={''}/>
                    </a>
                }
                <div className={'card-body'}>
                    {title && title.length > 0 &&
                        <h3 className={'card-title'}>
                            <a href={link} target={target} title={title} className={'card-link'}
                               data-toggle={"tooltip"}>{title}</a>
                        </h3>
                    }

                    {description && <p className={'card-text'}>{description}</p>}
                    {props.children}
                </div>
                {(readmoreLabel && readmoreLabel.length > 0) && <div className={'card-footer'}>
                    <a href={link} target={target} title={title} data-toggle={"tooltip"} className={'card-link'}>
                        {readmoreLabel}
                    </a>
                </div>}
            </div>
        </div>
    })
    return <>
        <AllHeader data={props.data}/>
        <div
            className={`card-menu card-menu card-menu-align-${flexform.align} card-menu-columns-${flexform.columns}`}>
            {itemsTemplate}
        </div>
    </>
}

export default MenuCardDir