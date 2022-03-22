import React from "react"
import {Alert, Carousel} from "react-bootstrap"
import Image from "../Media/Type/Image";

const carouselItemContentElements = {

    // header: (headlessData) => <></>,
    // text: (headlessData) => <></>,
    // call_to_action: (headlessData) => <></>,
    // text_and_image: (headlessData) => <></>,
    // background_image: (headlessData) => <></>,
    // html: (headlessData) => <></>,
}

const CarouselItem: React.FC<{ data: any }> = props => {
    let item = <></>
    switch (props.data.itemType) {

        case 'image':
            // item = <Image file={props.data.image[0]}  className={'d-block w-100'}/>
            // item = <img src={props.data.image[0].publicUrl}  className={'d-block w-100'}/>
            item = <img src={props.data.image[0].publicUrl}  className={'d-block w-100'}/>
            break;
        default:
            item = <Alert variant={"danger"}>
                <Alert.Heading>Templatetype unknown</Alert.Heading>
                <p>{props.data.itemType} has no Template</p>
            </Alert>
    }


    return <Carousel.Item>
        {item}
    </Carousel.Item>
}

export default CarouselItem