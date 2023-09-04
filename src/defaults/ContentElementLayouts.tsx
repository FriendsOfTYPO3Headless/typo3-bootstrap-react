import * as CELayouts from "../Components/Layouts/ContentElementsLayouts";
import React from "react";

const ContentElementLayouts = props => {
    if (props.type === '__generic') {
        return <CELayouts.Layout0 data={props.content}>
            {props.children}
        </CELayouts.Layout0>
    }
}

export {ContentElementLayouts};
