import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import { Story, Meta } from '@storybook/react/types-6-0';
import TYPO3Page, {TYPO3PageProps} from "../Components/TYPO3Page";

export default {
    title: 'Example/TYPO3Page',
    component: TYPO3Page,
} as Meta;

const Template: Story<TYPO3PageProps> = (args) => <TYPO3Page {...args} />;

export const Test = Template.bind({});
Test.args = {
    config: {
        "page": {
            "id": 44,
            "pid": 37,
            "title": "test1",
            "type": "Standard",
            "meta": {
                "title": "",
                "subtitle": "",
                "abstract": "",
                "description": "",
                "keywords": "",
                "canonical": ""
            },
            "socialMedia": {
                "ogTitle": "",
                "ogDescription": "",
                "ogImage": [],
                "twitterTitle": "",
                "twitterDescription": "",
                "twitterCard": "summary",
                "twitterImage": []
            },
            "resources": {
                "media": []
            },
            "categories": "",
            "editorial": {
                "author": "",
                "authorEmail": ""
            },
            "navigation": {
                "slug": "/test1",
                "navTitle": "",
                "target": "",
                "noSearch": "0"
            },
            "cache": {
                "timeout": "",
                "tags": ""
            },
            "appearance": {
                "layout": "layout-0",
                "backendLayout": "example",
                "backendLayoutNextLevel": "",
                "newUntil": "0",
                "pageContentRows": [
                    {
                        "type": "row",
                        "tag": "header",
                        "children": [
                            {
                                "type": "col",
                                "contentColPos": "",
                                "colPos": "0",
                                "size": 12,
                                "tag": "div"
                            }
                        ]
                    },
                    {
                        "type": "row",
                        "tag": "div",
                        "children": [
                            {
                                "type": "col",
                                "contentColPos": "colPos1235",
                                "colPos": "1235",
                                "size": "",
                                "tag": "div"
                            },
                            {
                                "type": "col",
                                "contentColPos": "colPos1234",
                                "colPos": "1234",
                                "size": "",
                                "tag": "div"
                            },
                            {
                                "type": "col",
                                "contentColPos": "",
                                "colPos": "",
                                "size": "",
                                "tag": "div"
                            }
                        ]
                    },
                    {
                        "type": "row",
                        "tag": "div",
                        "children": [
                            {
                                "type": "col",
                                "contentColPos": "colPos1233",
                                "colPos": "1233",
                                "size": 8,
                                "tag": "div"
                            },
                            {
                                "type": "col",
                                "contentColPos": "",
                                "colPos": "",
                                "size": "",
                                "tag": "div"
                            }
                        ]
                    },
                    {
                        "type": "row",
                        "tag": "div",
                        "children": [
                            {
                                "type": "col",
                                "contentColPos": "",
                                "colPos": "",
                                "size": "",
                                "tag": "div"
                            },
                            {
                                "type": "col",
                                "contentColPos": "",
                                "colPos": "",
                                "size": 8,
                                "tag": "div"
                            }
                        ]
                    },
                    {
                        "type": "row",
                        "tag": "div",
                        "children": [
                            {
                                "type": "col",
                                "contentColPos": "",
                                "colPos": "",
                                "size": "",
                                "tag": "aside"
                            },
                            {
                                "type": "col",
                                "contentColPos": "",
                                "colPos": "",
                                "size": "",
                                "tag": "div"
                            },
                            {
                                "type": "col",
                                "contentColPos": "",
                                "colPos": "",
                                "size": "",
                                "tag": "div"
                            }
                        ]
                    },
                    {
                        "type": "row",
                        "tag": "div",
                        "children": [
                            {
                                "type": "col",
                                "contentColPos": "",
                                "colPos": "",
                                "size": "",
                                "tag": "div"
                            },
                            {
                                "type": "col",
                                "contentColPos": "",
                                "colPos": "",
                                "size": "",
                                "tag": "div"
                            },
                            {
                                "type": "col",
                                "contentColPos": "",
                                "colPos": "",
                                "size": "",
                                "tag": "div"
                            }
                        ]
                    },
                    {
                        "type": "row",
                        "tag": "div",
                        "children": [
                            {
                                "type": "col",
                                "contentColPos": "",
                                "colPos": "",
                                "size": "",
                                "tag": "div"
                            }
                        ]
                    },
                    {
                        "type": "row",
                        "tag": "div",
                        "children": [
                            {
                                "type": "col",
                                "contentColPos": "",
                                "colPos": "",
                                "size": "",
                                "tag": "div"
                            },
                            {
                                "type": "col",
                                "contentColPos": "",
                                "colPos": "",
                                "size": "",
                                "tag": "div"
                            }
                        ]
                    }
                ]
            },
            "l10n": {
                "languageId": 0
            },
            "system": {
                "tstamp": 1614844158,
                "crdate": 1614696742,
                "starttime": 0,
                "endtime": 0,
                "feGroup": "",
                "sorting": 256
            }
        },
        "content": {
            "colPos1235": [
                {
                    "id": 27,
                    "pid": 44,
                    "type": "text",
                    "colPos": 1235,
                    "categories": "",
                    "appearance": {
                        "layout": "default",
                        "frameClass": "default",
                        "spaceBefore": "",
                        "spaceAfter": ""
                    },
                    "content": {
                        "header": "0x11 Hadleine",
                        "subheader": "asd",
                        "headerLayout": 0,
                        "headerPosition": "",
                        "headerLink": "",
                        "bodytext": "<p>asdasdasdasd</p>"
                    }
                }
            ],
            "colPos1233": [
                {
                    "id": 26,
                    "pid": 44,
                    "type": "text",
                    "colPos": 1233,
                    "categories": "",
                    "appearance": {
                        "layout": "default",
                        "frameClass": "default",
                        "spaceBefore": "",
                        "spaceAfter": ""
                    },
                    "content": {
                        "header": "asd2",
                        "subheader": "",
                        "headerLayout": 0,
                        "headerPosition": "",
                        "headerLink": "",
                        "bodytext": "<p>asd asd asfasfdasd222</p>"
                    }
                }
            ]
        },
        "navigations": {
            "navigation1": [
                {
                    "title": "test1",
                    "link": "/pos/de/test1",
                    "target": "",
                    "active": 1,
                    "current": 1,
                    "spacer": 0
                }
            ],
            "navigation2": [
                {
                    "title": "Datenschutz",
                    "link": "/pos/de/datenschutz",
                    "target": "",
                    "active": 0,
                    "current": 0,
                    "spacer": 0
                },
                {
                    "title": "Impressum",
                    "link": "/pos/de/impressum",
                    "target": "",
                    "active": 0,
                    "current": 0,
                    "spacer": 0
                }
            ],
            "navigation3": [
                {
                    "title": "Hund",
                    "link": "/pos/de/hund",
                    "target": "",
                    "active": 0,
                    "current": 0,
                    "spacer": 0
                }
            ],
            "breadcrumbs": [
                {
                    "title": "poscms.trixie.de",
                    "link": "/pos/de/",
                    "target": "",
                    "active": 1,
                    "current": 0,
                    "spacer": 0
                },
                {
                    "title": "test1",
                    "link": "/pos/de/test1",
                    "target": "",
                    "active": 1,
                    "current": 1,
                    "spacer": 0
                }
            ],
            "languages": [
                {
                    "languageId": 0,
                    "locale": "de_DE.UTF8",
                    "title": "Deutsch",
                    "navigationTitle": "Deutsch",
                    "twoLetterIsoCode": "de",
                    "hreflang": "de-de",
                    "direction": "ltr",
                    "flag": "flags-de",
                    "link": "/pos/de/test1",
                    "active": 1,
                    "current": 0,
                    "available": 1
                },
                {
                    "languageId": 2,
                    "locale": "en_GB.UTF-8",
                    "title": "Englisch",
                    "navigationTitle": "Englisch",
                    "twoLetterIsoCode": "en",
                    "hreflang": "en-US",
                    "direction": "",
                    "flag": "flags-england",
                    "link": "",
                    "active": 0,
                    "current": 0,
                    "available": 0
                }
            ]
        }
    },

};
