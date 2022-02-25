import React from "react"
import {Card, Col, Row} from "react-bootstrap"
import Link from "../../Partials/ContentElements/Link"

const CardGroup: React.FC<{ data: any }> = (props) => {
    const {items, pi_flexform} = props.data
    const cards = items.map((cardData: any, index_number: number) => {
        const {header, subheader, bodytext, image, link, link_title, link_class} = cardData
        const imageTemplate = image ? image.map((imageData: any, index) => <Card.Img key={`image-data-${index}`}
                                                                                     variant={"top"}
                                                                                     src={imageData.publicUrl}/>) : <></>
        let linkButton = <></>
        if (link) {
            if (link_title && link_title.length > 0) {
                link.title = link_title
            }

            if (link_class && link_class.length > 0) {
                link["class"] = `${link["class"]} btn-${link_class}`
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
    if(pi_flexform.align.length > 0) {
        alignment = `justify-content-${pi_flexform.align}`
    }
    return <Row xs={1} md={pi_flexform.columns} className={`card-group ${alignment}` } >
        {cards}
    </Row>
}

export default CardGroup