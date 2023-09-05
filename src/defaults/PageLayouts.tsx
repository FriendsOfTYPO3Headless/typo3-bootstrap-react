import React from "react";
import Section from "../Components/Partials/Page/Section";
import __GenericLayout from "../Components/Layouts/Page/__GenericLayout";

const PageLayouts = {

    'layout-0': async (pageProps, pageTemplate) => {
        "use server";
        return <div
            className={'backendlayout-' + pageProps.headlessData.appearance.backendLayout}>
            <header>
            </header>
            <section>
                <Section name={'main'} pageTemplate={pageTemplate} pageProps={pageProps}/>
            </section>
            <footer>
                <Section name={'footer'} pageTemplate={pageTemplate} pageProps={pageProps}/>
            </footer>
        </div>
    },
    '__generic': async (pageProps, pageTemplate) => {
        "use server";
        return <__GenericLayout
            pageProps={pageProps}
            pageTemplate={pageTemplate}
        />
    }

}

export {PageLayouts}