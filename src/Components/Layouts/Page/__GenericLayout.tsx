import React from "react";
import {TYPO3PagePropsInterface} from "../../Interfaces";
import Section from "../../Partials/Page/Section";

const __GenericLayout: React.FC<{ pageProps:TYPO3PagePropsInterface, pageTemplate: any}> = props => {

    return <div className={'backendlayout-' + props.pageProps.headlessData.appearance.backendLayout}>
        {Object.keys(props.pageTemplate).map(sectionName => {
            return <section key={sectionName} className={sectionName}>
                <Section name={sectionName} pageTemplate={props.pageTemplate} pageProps={props.pageProps} />
            </section>
        })}
    </div>
}

export default __GenericLayout;