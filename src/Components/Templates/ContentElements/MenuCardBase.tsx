import React from "react"
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces"
import {Card} from "react-bootstrap"
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
        return <div key={link} className={`card-menu-item ${(thumbnail[0]?.publicUrl ? 'hasImage': 'noImage')}`}>
            <Card>
                {thumbnail && thumbnail.length > 0 &&
                    <Card.Link href={link} target={target} title={title} data-toggle={"tooltip"}>
                        <Card.Img variant={"top"} src={thumbnail[0].publicUrl}/>
                    </Card.Link>
                }
                <Card.Body>
                    {title && title.length > 0 &&
                        <Card.Title as={'h3'}>
                            <Card.Link href={link} target={target} title={title}
                                       data-toggle={"tooltip"}>{title}</Card.Link>
                        </Card.Title>
                    }
                    {description &&
                        <Card.Text as={"p"}>{description}</Card.Text> }
                    {props.children}
                </Card.Body>
                {(readmoreLabel && readmoreLabel.length > 0) && <Card.Footer>
                     <Card.Link href={link} target={target} title={title} data-toggle={"tooltip"}>
                         {readmoreLabel}
                    </Card.Link>
                </Card.Footer>}
            </Card>
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