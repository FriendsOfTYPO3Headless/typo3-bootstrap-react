import * as CE from "../Components/Templates/ContentElements";
import React from "react";

const ContentElementTemplates = {
    __generic:  (headlessContentData, pageProps) => {
        return <>{headlessContentData.type} has no Template</>
    },
    text:  (headlessContentData, pageProps) => {

        return <CE.Text data={headlessContentData}
                        children={headlessContentData.children}
                        pageProps={pageProps}/>
    },
    html:  (headlessContentData, pageProps) => {

        return <CE.Html data={headlessContentData}
                        children={headlessContentData.children}
                        pageProps={pageProps}/>
    },
    textpic:  (headlessContentData, pageProps) => {

        return <CE.Textpic data={headlessContentData}
                           children={headlessContentData.children}
                           pageProps={pageProps}/>
    },
    image:  (headlessContentData, pageProps) => {

        return <CE.Image data={headlessContentData}
                         children={headlessContentData.children}
                         pageProps={pageProps}/>
    },
    shortcut:  (headlessContentData, pageProps) => {

        return <CE.Shortcut data={headlessContentData}
                            children={headlessContentData.children}
                            pageProps={pageProps}/>
    },
    div:  (headlessContentData, pageProps) => {

        return <CE.Div data={headlessContentData}
                       children={headlessContentData.children}
                       pageProps={pageProps}/>
    },
    uploads:  (headlessContentData, pageProps) => {

        return <CE.Uploads data={headlessContentData}
                           children={headlessContentData.children}
                           pageProps={pageProps}/>
    },
    accordion:  (headlessContentData, pageProps) => {
        return <CE.Accordion data={headlessContentData}>{headlessContentData.children}</CE.Accordion>
    },
    gallery:  (headlessContentData, pageProps) => {

        return <CE.Gallery data={headlessContentData}
                           children={headlessContentData.children}
                           pageProps={pageProps}/>
    },
    textmedia:  (headlessContentData, pageProps) => {

        return <CE.Textmedia data={headlessContentData}
                             children={headlessContentData.children}
                             pageProps={pageProps}/>
    },
    card_group:  (headlessContentData, pageProps) => {

        return <CE.CardGroup data={headlessContentData}
                             children={headlessContentData.children}
                             pageProps={pageProps}/>
    },
    textcolumn:  (headlessContentData, pageProps) => {

        return <CE.TextColumns data={headlessContentData}
                               children={headlessContentData.children}
                               pageProps={pageProps}/>
    },
    quote:  (headlessContentData, pageProps) => {

        return <CE.Quote data={headlessContentData}
                         children={headlessContentData.children}
                         pageProps={pageProps}/>
    },
    header:  (headlessContentData, pageProps) => {

        return <CE.Header data={headlessContentData}
                          children={headlessContentData.children}
                          pageProps={pageProps}/>
    },
    carousel:  (headlessContentData, pageProps) => {

        return <CE.Carousel data={headlessContentData}
                            children={headlessContentData.children}
                            pageProps={pageProps}/>
    },
    menu_card_list:  (headlessContentData, pageProps) => {

        return <CE.MenuCardList data={headlessContentData}
                                children={headlessContentData.children}
                                pageProps={pageProps}/>
    },
    menu_card_dir:  (headlessContentData, pageProps) => {

        return <CE.MenuCardDir data={headlessContentData}
                               children={headlessContentData.children}
                               pageProps={pageProps}/>
    },
    menu_thumbnail_dir:  (headlessContentData, pageProps) => {

        return <CE.MenuThumbnailBase data={headlessContentData}
                                     children={headlessContentData.children}
                                     pageProps={pageProps}/>
    },
    menu_thumbnail_list:  (headlessContentData, pageProps) => {

        return <CE.MenuThumbnailBase data={headlessContentData}
                                     children={headlessContentData.children}
                                     pageProps={pageProps}/>
    }
}

export {ContentElementTemplates};