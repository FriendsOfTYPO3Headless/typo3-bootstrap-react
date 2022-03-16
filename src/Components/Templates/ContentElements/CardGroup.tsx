import React from "react"
import {Card, Col, Row} from "react-bootstrap"
import Link from "../../Partials/ContentElements/Link"
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces"
import AllHeader from "../../Partials/ContentElements/Header/All";

const CardGroup: React.FC<TYPO3BootstrapContentElementBaseInterface> = (props) => {
    const {items} = props.data.content
    const flexform = props.data.flexform;
    const cards = items.map((cardData: any, index_number: number) => {
        const {header, subheader, bodytext, image, link, linkTitle, linkClass} = cardData
        const imageTemplate = image ? image.map((imageData: any, index) => <Card.Img key={`image-data-${index}`}
                                                                                     variant={"top"}
                                                                                     src={imageData.publicUrl}/>) : <></>
        let linkButton = <></>
        if (link) {
            if (linkTitle && linkTitle.length > 0) {
                link.title = linkTitle
            }

            if (linkClass && linkClass.length > 0) {
                link["class"] = `${link["class"]} btn-${linkClass}`
            }
            linkButton = <Link
                href={link.href}
                title={link.title}
                className={link['class']}
                target={link.target}
                linkText={link.linkText}
            />
        }
        return <Col key={`card-group-col-${index_number}`}>
            <Card>
                {header.length > 0 && <Card.Header>{header}</Card.Header>}
                {imageTemplate}
                <Card.Body>
                    {subheader.length > 0 && <Card.Title>{subheader}</Card.Title>}
                    {bodytext.length > 0 && <Card.Text as={"div"}>
                        <div dangerouslySetInnerHTML={{__html: bodytext}}/>
                    </Card.Text>}
                    {linkButton}
                </Card.Body>
            </Card>
        </Col>
    })


    let alignment = 'justify-content-left'
    if (flexform.align.length > 0) {
        alignment = `justify-content-${flexform.align}`
    }
    return <>
        <AllHeader data={props.data}/>
        <Row xs={1} md={flexform.columns} className={`card-group ${alignment}`}>
            {cards}
        </Row>
    </>
}

export default CardGroup