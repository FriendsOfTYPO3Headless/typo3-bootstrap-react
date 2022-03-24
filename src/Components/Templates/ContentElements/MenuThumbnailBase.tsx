import React from "react"
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces"
import {Card} from "react-bootstrap"
import AllHeader from "../../Partials/ContentElements/Header/All"

const MenuThumbnailBase: React.FC<TYPO3BootstrapContentElementBaseInterface> = props => {
    const {flexform, content} = props.data
    const {items, readmoreLabel} = content
    const itemsTemplate = items.map((item, index) => {
        const {title, subtitle, abstract, link, target, active, current, spacer, hasSubpages, media, nav_icon} = item
        return <Card key={link} className="thumbnail-menu-item">
            {media && media.length > 0 &&
                <Card.Link href={link} target={target} title={title} data-toggle={"tooltip"}
                           className={'thumbnail-menu-link'}>
                    <Card.Img variant={"top"} className={'thumbnail-menu-image'} src={media[0].publicUrl}/>
                </Card.Link>
            }
            <Card.ImgOverlay className={'thumbnail-menu-caption'}>
                <Card.Body className={'thumbnail-menu-caption-inner'}>
                    {title && title.length > 0 &&
                        <Card.Title as={'h3'} className={'thumbnail-menu-caption-title'}>
                            <Card.Link href={link} target={target} title={title}
                                       data-toggle={"tooltip"}>{title}</Card.Link>
                        </Card.Title>
                    }
                    {subtitle && subtitle.length > 0 &&
                        <Card.Subtitle as={'h4'}
                                       className={'thumbnail-menu-caption-subtitle'}>{subtitle}</Card.Subtitle>
                    }
                    {abstract && <Card.Text as={"p"}>{abstract}</Card.Text>}
                    {props.children}
                </Card.Body>
                <Card.Footer>
                    <Card.Link href={link} target={target} title={title} data-toggle={"tooltip"}>
                        {(readmoreLabel && readmoreLabel.length > 0) ? readmoreLabel : title}
                    </Card.Link>
                </Card.Footer>
            </Card.ImgOverlay>
        </Card>
    })
    return <div
        className={`thumbnail-menu thumbnail-menu-align-${flexform.align} thumbnail-menu-columns-${flexform.columns}`}>
        <AllHeader data={props.data}/>
        {itemsTemplate}
    </div>
}


export default MenuThumbnailBase