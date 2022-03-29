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
            subtitle,
            abstract,
            link,
            target,
            thumbnail
        } = item
        return <div key={link} className="card-menu-item">
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
                    {subtitle && subtitle.length > 0 &&
                        <Card.Subtitle as={'h4'}>{subtitle}</Card.Subtitle>
                    }
                    {abstract &&
                        <Card.Text as={"p"}>{abstract}</Card.Text> }
                    {props.children}
                </Card.Body>
                <Card.Footer>
                    <Card.Link href={link} target={target} title={title} data-toggle={"tooltip"}>
                        {(readmoreLabel && readmoreLabel.length > 0) ? readmoreLabel : title}
                    </Card.Link>
                </Card.Footer>
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