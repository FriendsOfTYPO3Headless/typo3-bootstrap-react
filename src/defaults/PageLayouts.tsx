import React from "react";
import Section from "../Components/Partials/Page/Section";
import __GenericLayout from "../Components/Layouts/Page/__GenericLayout";
import {TYPO3PagePropsInterface} from "../Components/Interfaces";


const Layout0:React.FC<{pageTemplate:any, pageProps:TYPO3PagePropsInterface}> = ({pageTemplate, pageProps}) => {
    return <div
        className={'backendlayout-' + pageProps.headlessData.appearance.backendLayout}>
        <header>
        </header>
        <section>
            <Section name={'main'} pageTemplate={pageTemplate} />
        </section>
        <footer>
            <Section name={'footer'} pageTemplate={pageTemplate} />
        </footer>
    </div>
}


const PageLayouts = {
    'layout-0':  Layout0,
    '__generic': __GenericLayout
}

export {PageLayouts}