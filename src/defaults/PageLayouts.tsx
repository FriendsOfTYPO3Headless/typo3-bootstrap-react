import React from "react";
import Section from "../Components/Partials/Page/Section";
import __GenericLayout from "../Components/Layouts/Page/__GenericLayout";
import {TYPO3PageLayoutProps} from "../Components/Interfaces";

const PageLayouts: React.FC<TYPO3PageLayoutProps> = props => {

    if (props.type === 'layout-0') {
        return <div
            className={'backendlayout-' + props.pageProps.headlessData.appearance.backendLayout}>
            <header>
            </header>
            <section>
                <Section name={'main'} pageTemplate={props.pageTemplate} pageProps={props.pageProps}/>
            </section>
            <footer>
                <Section name={'footer'} pageTemplate={props.pageTemplate} pageProps={props.pageProps}/>
            </footer>
        </div>
    } // else if (props.type === '__generic') {
    //     return <__GenericLayout
    //         pageProps={props.pageProps}
    //         pageTemplate={props.pageTemplate}
    //     />
    // }
    return <__GenericLayout
        pageProps={props.pageProps}
        pageTemplate={props.pageTemplate}
    />

}

export {PageLayouts}