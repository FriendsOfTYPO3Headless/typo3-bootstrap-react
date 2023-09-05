import * as CE from "../Components/Templates/ContentElements";
import React from "react";

const ContentElementTemplates = {
    __generic: async (headlessContentData, pageProps) => {
        "use server";
        return <>{headlessContentData.type} has no Template</>
    },
    text: async (headlessContentData, pageProps) => {
        "use server";
        return <CE.Text data={headlessContentData}
                        children={headlessContentData.children}
                        pageProps={pageProps}/>
    },
    html: async (headlessContentData, pageProps) => {
        "use server";
        return <CE.Html data={headlessContentData}
                        children={headlessContentData.children}
                        pageProps={pageProps}/>
    },
    textpic: async (headlessContentData, pageProps) => {
        "use server";
        return <CE.Textpic data={headlessContentData}
                           children={headlessContentData.children}
                           pageProps={pageProps}/>
    },
    image: async (headlessContentData, pageProps) => {
        "use server";
        return <CE.Image data={headlessContentData}
                         children={headlessContentData.children}
                         pageProps={pageProps}/>
    },
    shortcut: async (headlessContentData, pageProps) => {
        "use server";
        return <CE.Shortcut data={headlessContentData}
                            children={headlessContentData.children}
                            pageProps={pageProps}/>
    },
    div: async (headlessContentData, pageProps) => {
        "use server";
        return <CE.Div data={headlessContentData}
                       children={headlessContentData.children}
                       pageProps={pageProps}/>
    },
    uploads: async (headlessContentData, pageProps) => {
        "use server";
        return <CE.Uploads data={headlessContentData}
                           children={headlessContentData.children}
                           pageProps={pageProps}/>
    },
    accordion: async (headlessContentData, pageProps) => {
        "use server";
        return <CE.Accordion data={headlessContentData}
                             children={headlessContentData.children}
                             pageProps={pageProps}/>
    },
    gallery: async (headlessContentData, pageProps) => {
        "use server";
        return <CE.Gallery data={headlessContentData}
                           children={headlessContentData.children}
                           pageProps={pageProps}/>
    },
    textmedia: async (headlessContentData, pageProps) => {
        "use server";
        return <CE.Textmedia data={headlessContentData}
                             children={headlessContentData.children}
                             pageProps={pageProps}/>
    },
    card_group: async (headlessContentData, pageProps) => {
        "use server";
        return <CE.CardGroup data={headlessContentData}
                             children={headlessContentData.children}
                             pageProps={pageProps}/>
    },
    textcolumn: async (headlessContentData, pageProps) => {
        "use server";
        return <CE.TextColumns data={headlessContentData}
                               children={headlessContentData.children}
                               pageProps={pageProps}/>
    },
    quote: async (headlessContentData, pageProps) => {
        "use server";
        return <CE.Quote data={headlessContentData}
                         children={headlessContentData.children}
                         pageProps={pageProps}/>
    },
    header: async (headlessContentData, pageProps) => {
        "use server";
        return <CE.Header data={headlessContentData}
                          children={headlessContentData.children}
                          pageProps={pageProps}/>
    },
    carousel: async (headlessContentData, pageProps) => {
        "use server";
        return <CE.Carousel data={headlessContentData}
                            children={headlessContentData.children}
                            pageProps={pageProps}/>
    },
    menu_card_list: async (headlessContentData, pageProps) => {
        "use server";
        return <CE.MenuCardList data={headlessContentData}
                                children={headlessContentData.children}
                                pageProps={pageProps}/>
    },
    menu_card_dir: async (headlessContentData, pageProps) => {
        "use server";
        return <CE.MenuCardDir data={headlessContentData}
                               children={headlessContentData.children}
                               pageProps={pageProps}/>
    },
    menu_thumbnail_dir: async (headlessContentData, pageProps) => {
        "use server";
        return <CE.MenuThumbnailBase data={headlessContentData}
                                     children={headlessContentData.children}
                                     pageProps={pageProps}/>
    },
    menu_thumbnail_list: async (headlessContentData, pageProps) => {
        "use server";
        return <CE.MenuThumbnailBase data={headlessContentData}
                                     children={headlessContentData.children}
                                     pageProps={pageProps}/>
    }
}

export {ContentElementTemplates};