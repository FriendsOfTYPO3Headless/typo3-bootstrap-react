import React from "react"
import * as RBT from "react-bootstrap"
import {Alert} from "react-bootstrap"
import Image from "../../Partials/ContentElements/Media/Type/Image"
import AllHeader from "../../Partials/ContentElements/Header/All"
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces";

const carouselItem = (itemHeadless: any, isFirst = false): JSX.Element => {
    const {itemType, layout, image} = itemHeadless
    let item = <></>
    let itemClass = 'item carousel-item'

    if (isFirst) {
        itemClass += ` active`
    }

    if (layout) {
        itemClass += ` carousel-item-layout-${layout}`

    }

    if (itemType) {
        itemClass += ` carousel-item-type-${itemType}`
    }

    switch (itemType) {
        case 'image':
            item = <div className="carousel-image">
                <Image file={image[0]} className={''}/>
            </div>
            break;
        default:
            item = <div className={'carousel-text-inner'}>
                <Alert variant={"danger"}>
                    <Alert.Heading>Templatetype unknown</Alert.Heading>
                    <p>{itemType} has no Template</p>
                </Alert>
            </div>
    }


    return <RBT.Carousel.Item key={image[0].publicUrl} className={itemClass}>
        <div className={'carousel-content'}>
            <div className={'carousel-content-inner'}>
                {item}
            </div>
        </div>
    </RBT.Carousel.Item>
}

const Carousel: React.FC<TYPO3BootstrapContentElementBaseInterface> = props => {
    const {content, flexform} = props.data
    const {items} = content

    const itemsTemplate: JSX.Element[] = items.map((itemHeadless: any, index) => {
        return carouselItem(itemHeadless, index === 0)
    })


    return <>
        <AllHeader data={props.data}/>
        <RBT.Carousel fade={flexform.transition === 'fade'} interval={flexform.interval} wrap={flexform.wrap}>
            {itemsTemplate}
        </RBT.Carousel>
    </>
}

export default Carousel