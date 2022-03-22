import React, {useRef, useState} from "react"
import * as RBT from "react-bootstrap"
import {Alert} from "react-bootstrap"
import AllHeader from "../../Partials/ContentElements/Header/All"
import CarouselItem from "../../Partials/ContentElements/Carousell/CarouselItem";

const Carousel: React.FC<{ data: any }> = props => {
    const {content, type, flexform} = props.data
    const {header, subheader, items} = content
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        console.log(selectedIndex);
        setIndex(selectedIndex);
    };

    const itemsTemplate: JSX.Element[] = []
    let item = <></>
    items.forEach((itemHeadless: any, index) => {
        let item = <CarouselItem key={itemHeadless.image[0].publicUrl} data={itemHeadless} />
        itemsTemplate.push(item)
    })


    return <>
        <AllHeader data={props.data}/>
        <RBT.Carousel fade={flexform.transition === 'fade'} interval={flexform.interval} wrap={flexform.wrap}>
            {itemsTemplate}
        </RBT.Carousel>
    </>
}

export default Carousel