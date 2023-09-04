import * as CE from "../Components/Templates/ContentElements";
import React from "react";

const ContentElementTemplates = {
    __generic: (headlessContentData, pageProps) => {
        return <>{headlessContentData.type} has no Template</>
    },
    text: (headlessContentData, pageProps) => <CE.Text data={headlessContentData}
                                                       children={headlessContentData.children} pageProps={pageProps}/>,
    html: (headlessContentData, pageProps) => <CE.Html data={headlessContentData}
                                                       children={headlessContentData.children} pageProps={pageProps}/>,
    textpic: (headlessContentData, pageProps) => <CE.Textpic data={headlessContentData}
                                                             children={headlessContentData.children}
                                                             pageProps={pageProps}/>,
    image: (headlessContentData, pageProps) => <CE.Image data={headlessContentData}
                                                         children={headlessContentData.children}
                                                         pageProps={pageProps}/>,
    shortcut: (headlessContentData, pageProps) => <CE.Shortcut data={headlessContentData}
                                                               children={headlessContentData.children}
                                                               pageProps={pageProps}/>,
    div: (headlessContentData, pageProps) => <CE.Div data={headlessContentData} children={headlessContentData.children}
                                                     pageProps={pageProps}/>,
    uploads: (headlessContentData, pageProps) => <CE.Uploads data={headlessContentData}
                                                             children={headlessContentData.children}
                                                             pageProps={pageProps}/>,
    accordion: (headlessContentData, pageProps) => <CE.Accordion data={headlessContentData}
                                                                 children={headlessContentData.children}
                                                                 pageProps={pageProps}/>,
    gallery: (headlessContentData, pageProps) => <CE.Gallery data={headlessContentData}
                                                             children={headlessContentData.children}
                                                             pageProps={pageProps}/>,
    textmedia: (headlessContentData, pageProps) => <CE.Textmedia data={headlessContentData}
                                                                 children={headlessContentData.children}
                                                                 pageProps={pageProps}/>,
    card_group: (headlessContentData, pageProps) => <CE.CardGroup data={headlessContentData}
                                                                  children={headlessContentData.children}
                                                                  pageProps={pageProps}/>,
    textcolumn: (headlessContentData, pageProps) => <CE.TextColumns data={headlessContentData}
                                                                    children={headlessContentData.children}
                                                                    pageProps={pageProps}/>,
    quote: (headlessContentData, pageProps) => <CE.Quote data={headlessContentData}
                                                         children={headlessContentData.children}
                                                         pageProps={pageProps}/>,
    header: (headlessContentData, pageProps) => <CE.Header data={headlessContentData}
                                                           children={headlessContentData.children}
                                                           pageProps={pageProps}/>,
    carousel: (headlessContentData, pageProps) => <CE.Carousel data={headlessContentData}
                                                               children={headlessContentData.children}
                                                               pageProps={pageProps}/>,
    menu_card_list: (headlessContentData, pageProps) => <CE.MenuCardList data={headlessContentData}
                                                                         children={headlessContentData.children}
                                                                         pageProps={pageProps}/>,
    menu_card_dir: (headlessContentData, pageProps) => <CE.MenuCardDir data={headlessContentData}
                                                                       children={headlessContentData.children}
                                                                       pageProps={pageProps}/>,
    menu_thumbnail_dir: (headlessContentData, pageProps) => <CE.MenuThumbnailBase data={headlessContentData}
                                                                                  children={headlessContentData.children}
                                                                                  pageProps={pageProps}/>,
    menu_thumbnail_list: (headlessContentData, pageProps) => <CE.MenuThumbnailBase data={headlessContentData}
                                                                                   children={headlessContentData.children}
                                                                                   pageProps={pageProps}/>,
}

export {ContentElementTemplates};