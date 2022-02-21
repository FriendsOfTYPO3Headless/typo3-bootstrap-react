import React from 'react'
import {Accordion as ReactAccordion} from "react-bootstrap"
import Image from "./Image";
import Gallery from "./Gallery";

const Accordion: React.FC<{ data: any }> = (props) => {
    const {accordionItems, pi_flexform} = props.data
    const activeElement = pi_flexform.default_element ?? ''

    if (!accordionItems || accordionItems.length < 0) {
        return <></>
    }

    console.log(accordionItems)


    const accorditionItemsTemplate = accordionItems.map((accordionItem) => {
        let galleryTemplate = <></>
        if(accordionItem.media.length > 0) {
            galleryTemplate = <Gallery data={{images: accordionItem.media, ...accordionItem}} />
        }

        return <ReactAccordion.Item key={accordionItem.uid} eventKey={accordionItem.uid.toString()} >
            <ReactAccordion.Header as={"h4"} id={`accordion-heading-${accordionItem.uid}`}>
                <span className="accordion-title-link-text">{accordionItem.header}</span>
            </ReactAccordion.Header>
            <ReactAccordion.Body>
                <div className={`accordion-content accordion-content-${accordionItem.mediaorient}`}>
                    {galleryTemplate}
                    <div className={'accordion-content-item accordion-content-text'} dangerouslySetInnerHTML={{__html: accordionItem.bodytext}}/>
                </div>
            </ReactAccordion.Body>
        </ReactAccordion.Item>
    })

    return <ReactAccordion defaultActiveKey={activeElement} >
        {accorditionItemsTemplate}
    </ReactAccordion>
}

export default Accordion