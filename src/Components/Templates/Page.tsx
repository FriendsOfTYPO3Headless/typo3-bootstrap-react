import React from "react";
import TYPO3Page, {pageLayouts, TYPO3PageProps} from "../TYPO3Page";

const Page: React.FC<TYPO3PageProps> = props => {

    return <>Page: {props.config.navigations.navigation1[0].title}</>
}
Page.defaultProps = {
    pageLayouts: null,
    pageTemplates: null,
    contentElementLayouts: null,
    contentElementTemplates: null,
}

export default Page;