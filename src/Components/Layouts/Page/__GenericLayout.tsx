import React from "react";
import {TYPO3PageHeadlessDataInterface} from "../../Interfaces";
import Section from "../../Partials/Page/Section";


const __GenericLayout: React.FC<{headlessData:TYPO3PageHeadlessDataInterface, pageTemplate: any}> = props => {

    const genericSections = Object.keys(props.pageTemplate).map(sectionName => {
        return <section key={sectionName} className={sectionName}>
            <Section name={sectionName} pageTemplate={props.pageTemplate} />
        </section>
    });


    return <>
        {genericSections}
    </>
}

export default __GenericLayout;