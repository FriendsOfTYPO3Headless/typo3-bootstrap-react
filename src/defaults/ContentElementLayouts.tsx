import * as CELayouts from "../Components/Layouts/ContentElementsLayouts";
import React from "react";

const ContentElementLayouts = {
    'default': async (content, children) => {
        "use server";
        return <CELayouts.Layout0 data={content}>{children}</CELayouts.Layout0>;
    }
}

export {ContentElementLayouts};
