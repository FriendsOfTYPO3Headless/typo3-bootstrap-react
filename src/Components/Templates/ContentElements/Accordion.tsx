import React from 'react'
import {Accordion as ReactAccordion} from "react-bootstrap"
import Gallery from "./Gallery"
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces";

const Accordion: React.FC<TYPO3BootstrapContentElementBaseInterface> = (props) => {
    const accordionItems = props.data.content.items
    const activeElement = props.data.flexform.default_element ?? ''

    if (!accordionItems || accordionItems.length < 0) {
        return <></>
    }

    const accorditionItemsTemplate = accordionItems.map((accordionItem, index: number) => {
        let galleryTemplate = <></>
        if (accordionItem.media.length > 0) {
            galleryTemplate = <Gallery data={{items: accordionItem.media, ...accordionItem}}/>
        }

        return <ReactAccordion.Item key={accordionItem.id} eventKey={accordionItem.id.toString()}>
            <ReactAccordion.Header as={"h4"} id={`accordion-heading-${accordionItem.id}`}>
                <span className="accordion-title-link-text">{accordionItem.header}</span>
            </ReactAccordion.Header>
            <ReactAccordion.Body>
                <div className={`accordion-content accordion-content-${accordionItem.mediaorient}`}>
                    {galleryTemplate}
                    <div className={'accordion-content-item accordion-content-text'}
                         dangerouslySetInnerHTML={{__html: accordionItem.bodytext}}/>
                </div>
            </ReactAccordion.Body>
        </ReactAccordion.Item>
    })

    return <ReactAccordion defaultActiveKey={activeElement}>
        {accorditionItemsTemplate}
    </ReactAccordion>
}

export default Accordion