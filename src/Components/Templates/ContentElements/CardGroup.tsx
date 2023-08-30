import React from "react"
import Link from "../../Partials/ContentElements/Link"
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces"
import AllHeader from "../../Partials/ContentElements/Header/All";

const CardGroup: React.FC<TYPO3BootstrapContentElementBaseInterface> = (props) => {
    const {items} = props.data.content
    const flexform = props.data.flexform;
    const cards = items.map((cardData: any, index_number: number) => {
        const {header, subheader, bodytext, image, link, linkTitle, linkClass} = cardData
        const imageTemplate = image ? image.map((imageData: any, index) => <img key={`image-data-${index}`}
                                                                                className={"card-image-top"}
                                                                                src={imageData.publicUrl}
                                                                                alt={''}/>) : <></>
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
        return <div key={`col card-group-col-${index_number}`}>
            <div className={'card'}>
                {header.length > 0 && <div className={'card-header'}>{header}</div>}
                {imageTemplate}
                <div className={'card-body'}>
                    {subheader.length > 0 && <div className={'card-title'}>{subheader}</div>}
                    {bodytext.length > 0 && <div className={'card-text'}>
                        <div dangerouslySetInnerHTML={{__html: bodytext}}/>
                    </div>}
                    {linkButton}
                </div>
            </div>
        </div>
    })


    let alignment = 'justify-content-left'
    if (flexform.align.length > 0) {
        alignment = `justify-content-${flexform.align}`
    }
    return <>
        <AllHeader data={props.data}/>
        <div className={`row row-xs-1 row-md-${flexform.columns} card-group ${alignment}`}>
             {cards}
        </div>
        {props.children}
    </>
}

export default CardGroup