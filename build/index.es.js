import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

var section = function (props) {
    if (props.pageTemplate.hasOwnProperty(props.name)) {
        return props.pageTemplate[props.name];
    }
    return React.createElement(React.Fragment, null,
        "Template section ",
        props.name,
        " not found");
};

var __GenericLayout = function (props) {
    var genericSections = Object.keys(props.pageTemplate).map(function (sectionName) {
        return React.createElement("section", { key: sectionName, className: sectionName },
            React.createElement(section, { name: sectionName, pageTemplate: props.pageTemplate }));
    });
    return React.createElement(React.Fragment, null, genericSections);
};

var Page = function (props) {
    var layout;
    if (props.pageLayouts.hasOwnProperty(props.headlessData.page.appearance.layout)) {
        layout = props.pageLayouts[props.headlessData.page.appearance.layout];
    }
    else if (props.pageLayouts.hasOwnProperty('__generic')) {
        layout = props.pageLayouts.__generic;
    }
    else {
        return React.createElement(React.Fragment, null,
            "Page-layout not found: ",
            props.headlessData.page.appearance.layout);
    }
    var template;
    if (props.pageTemplates.hasOwnProperty(props.headlessData.page.appearance.backendLayout)) {
        template = props.pageTemplates[props.headlessData.page.appearance.backendLayout];
    }
    else if (props.pageTemplates.hasOwnProperty('__generic')) {
        template = props.pageTemplates.__generic;
    }
    else {
        return React.createElement(React.Fragment, null,
            "Page-template not found: ",
            props.headlessData.page.appereance.backendLayout,
            " ");
    }
    return layout(props.headlessData, template(props.headlessData, props.contentElementLayouts, props.contentElementTemplates));
    // return <>Page: {props.config.navigations.navigation1[0].title}</>
};

var PREFIX_COLPOS = 'colPos';
var Content = function (props) {
    var content = React.createElement(React.Fragment, null);
    if (props.content.hasOwnProperty(PREFIX_COLPOS + props.colPos)) {
        content = props.content[PREFIX_COLPOS + props.colPos].map(function (content) {
            var layout;
            if (props.contentElementLayouts.hasOwnProperty(content.appearance.layout)) {
                layout = props.contentElementLayouts[content.appearance.layout];
            }
            else if (props.contentElementLayouts.hasOwnProperty('__generic')) {
                layout = props.contentElementLayouts.__generic;
            }
            else {
                return React.createElement(React.Fragment, null,
                    "CE-layout not found: ",
                    props.content.appearance.layout);
            }
            var template;
            if (props.contentElementTemplates.hasOwnProperty(content.type)) {
                template = props.contentElementTemplates[content.type];
            }
            else if (props.contentElementTemplates.hasOwnProperty('__generic')) {
                template = props.contentElementTemplates.__generic;
            }
            else {
                return React.createElement(React.Fragment, null,
                    "CE-template not found: ",
                    props.content.type,
                    " ");
            }
            return React.createElement(React.Fragment, { key: content.id }, layout({ children: template(content, props.args), content: content, args: props.args }));
        });
    }
    return content;
};

var Text = function (props) {
    return React.createElement("div", { dangerouslySetInnerHTML: { __html: props.data.bodytext } });
};

var Textpic = function (props) {
    return React.createElement("div", { className: "textpic" },
        React.createElement("div", { className: "textpic-item textpic-gallery" }),
        React.createElement("div", { className: "textpic-item textpic-text" },
            React.createElement("div", { dangerouslySetInnerHTML: { __html: props.data.bodytext } })));
};

var Bullets = function (props) {
    console.log(props.data);
    return React.createElement("div", { className: "bullets" }, Object.keys(props.data).map(function (key) {
        switch (props.data.bulletsType) {
            case "1":
                React.createElement("ol", null,
                    React.createElement("li", null, props.data));
                break;
            case "2":
                break;
            default:
                React.createElement("ul", null,
                    React.createElement("li", null, props.data));
                break;
        }
    }));
};

var Image = function (props) {
    return React.createElement("div", { className: "image" });
};

var Div = function (props) {
    return React.createElement("div", { className: "div" },
        React.createElement("hr", null, " "));
};

var Table = function (props) {
    console.log(props.data);
    return React.createElement("div", { className: "table" }, Object.keys(props.data).map(function (key) {
        if (props.data.tableCaption === true) {
            {
                props.data.tableCaption;
            }
        }
        if (props.data.headerPosition === 1) ;
        if (props.data.tabelTfoot) ;
    }));
};

var Shortcut = function (props) {
    return React.createElement("div", { dangerouslySetInnerHTML: { __html: props.data.shortcuts } });
};

var Textmedia = function (props) {
    console.log(props.data);
    return React.createElement("div", { className: "textmedia" },
        React.createElement("div", { className: "textmedia textmedia-gallery" }),
        React.createElement("div", { className: "textmedia-item textmedia-text" },
            React.createElement("div", { dangerouslySetInnerHTML: { __html: props.data.bodytext } })));
};

var Uploads = function (props) {
    //console.log(props.data.media)
    return React.createElement("div", { className: "uploads" },
        React.createElement("ul", { className: "media-list" }, Object.keys(props.data.media).map(function (key) {
            // console.log(props.data)
            var description = props.data.media[key].properties.description;
            if (description === true) {
                description = props.data.media[key].properties.description;
            }
            var content;
            switch (props.data.displayInformation) {
                case "2":
                    content = React.createElement(React.Fragment, null,
                        "  ",
                        React.createElement("img", { src: props.data.media[key].publicUrl }),
                        React.createElement("a", { href: props.data.media[key].publicUrl },
                            " ",
                            props.data.media[key].properties.filename,
                            "  "));
                    break;
                default:
                    content = React.createElement("a", { href: props.data.media[key].publicUrl },
                        " ",
                        props.data.media[key].properties.filename,
                        "  ");
            }
            return React.createElement("li", { key: key },
                content,
                description);
        })));
};

var MenuSitemap = function (props) {
    console.log(props.data);
    return React.createElement("div", { className: "menuSitemap" }, Object.keys(props.data).map(function (key) {
        //  <li> <a href={props.data}> {props.data}  </a></li>
    }));
};

var BackgroundImage = function (props) {
    if (props.data.appearance.backgroundImage.length < 1) {
        return null;
    }
    var backgroundImageObject = props.data.appearance.backgroundImage[0];
    var backgroundImageIdentifier = 'frame-backgroundimage-' + props.data.id;
    var backgroundImageClasses = 'frame-backgroundimage';
    if (props.data.appearance.backgroundImageOptions.parallax === '1') {
        backgroundImageClasses += ' frame-backgroundimage-parallax';
    }
    if (props.data.appearance.backgroundImageOptions.fade === '1') {
        backgroundImageClasses += ' frame-backgroundimage-fade';
    }
    if (props.data.appearance.backgroundImageOptions.filter !== '') {
        backgroundImageClasses += ' frame-backgroundimage-' + props.data.appearance.backgroundImageOptions.filter;
    }
    //TODO: Implement crop sizes
    return React.createElement("div", { className: "frame-backgroundimage-container" },
        React.createElement("div", { id: backgroundImageIdentifier, className: backgroundImageClasses, style: { backgroundImage: 'url("' + backgroundImageObject.publicUrl + '")' } }));
};

var HeaderLink = function (props) {
    if (props.headerLink === null || typeof props.headerLink === 'string') {
        return React.createElement(React.Fragment, null, props.children);
    }
    return React.createElement("a", { href: props.headerLink.url }, props.children);
};

var Header = function (props) {
    switch (props.layout) {
        case 1:
            return React.createElement("h1", { className: props.class + ' ' + props.positionClass },
                React.createElement(HeaderLink, { headerLink: props.headerLink },
                    React.createElement("span", null, props.header)));
        case 3:
            return React.createElement("h3", { className: props.class + ' ' + props.positionClass },
                React.createElement(HeaderLink, { headerLink: props.headerLink },
                    React.createElement("span", null, props.header)));
        case 4:
            return React.createElement("h4", { className: props.class + ' ' + props.positionClass },
                React.createElement(HeaderLink, { headerLink: props.headerLink },
                    React.createElement("span", null, props.header)));
        case 5:
            return React.createElement("h5", { className: props.class + ' ' + props.positionClass },
                React.createElement(HeaderLink, { headerLink: props.headerLink },
                    React.createElement("span", null, props.header)));
        case 100:
            return React.createElement(React.Fragment, null);
        default:
            return React.createElement("h2", { className: props.class + ' ' + props.positionClass },
                React.createElement(HeaderLink, { headerLink: props.headerLink },
                    React.createElement("span", null, props.header)));
    }
};
Header.defaultProps = {
    class: 'element-header',
    headerLink: null
};

var Subheader = function (props) {
    switch (props.layout) {
        case 1:
            return React.createElement("h2", { className: props.class + ' ' + props.positionClass },
                React.createElement(HeaderLink, { headerLink: props.headerLink },
                    React.createElement("span", null, props.header)));
        case 3:
            return React.createElement("h4", { className: props.class + ' ' + props.positionClass },
                React.createElement(HeaderLink, { headerLink: props.headerLink },
                    React.createElement("span", null, props.header)));
        case 4:
            return React.createElement("h5", { className: props.class + ' ' + props.positionClass },
                React.createElement(HeaderLink, { headerLink: props.headerLink },
                    React.createElement("span", null, props.header)));
        case 5:
            return React.createElement("h6", { className: props.class + ' ' + props.positionClass },
                React.createElement(HeaderLink, { headerLink: props.headerLink },
                    React.createElement("span", null, props.header)));
        case 100:
            return React.createElement(React.Fragment, null);
        default:
            return React.createElement("h3", { className: props.class + ' ' + props.positionClass },
                React.createElement(HeaderLink, { headerLink: props.headerLink },
                    React.createElement("span", null, props.header)));
    }
};
Subheader.defaultProps = {
    class: 'element-subheader',
    headerLink: null
};

var HeaderDate = function (props) {
    return React.createElement("p", { className: props.positionClass }, props.date);
};

var AllHeader = function (props) {
    var content = React.createElement(React.Fragment, null);
    if (props.data.content.headerLayout !== 100) {
        if (props.data.content.header !== '' || props.data.content.header !== '' || props.data.content.date !== '') {
            content = React.createElement("header", { className: "frame-header" },
                props.data.content.header !== '' ?
                    React.createElement(Header, { layout: props.data.content.headerLayout, positionClass: props.data.content.headerPosition ? 'text-' + props.data.content.headerPosition : '', header: props.data.content.header, headerLink: props.data.content.headerLink !== '' ? props.data.content.headerLink : null })
                    :
                        null,
                props.data.content.subheader !== '' ?
                    React.createElement(Subheader, { layout: props.data.content.headerLayout, positionClass: props.data.content.headerPosition ? 'text-' + props.data.content.headerPosition : '', header: props.data.content.subheader, headerLink: props.data.content.headerLink !== '' ? props.data.content.headerLink : null })
                    :
                        null,
                props.data.content.date !== '' ?
                    React.createElement(HeaderDate, { date: props.data.content.date, positionClass: props.data.content.headerPosition ? 'text-' + props.data.content.headerPosition : '' })
                    :
                        null);
        }
    }
    return content;
};

var Layout0 = function (props) {
    var frameClass = 'frame-' + props.data.appearance.frameClass;
    var typeClass = 'frame-type-' + props.data.type;
    var layoutClass = 'frame-layout-' + props.data.appearance.layout;
    var backgroundClass = 'frame-background-' + (props.data.appearance.backgroundColor !== '' ? props.data.appearance.backgroundColor : 'none');
    var spaceBeforeClass = 'frame-space-before-' + (props.data.appearance.spaceBefore !== '' ? props.data.appearance.spaceBefore : 'none');
    var spaceAfterClass = 'frame-space-after-' + (props.data.appearance.spaceAfter !== '' ? props.data.appearance.spaceAfter : 'none');
    var content;
    if (props.data.appearance.frameClass !== 'none') {
        var backgroundImageClass = (props.data.appearance.backgroundImage.length > 0 ? 'frame-has-backgroundimage' : 'frame-no-backgroundimage');
        content = React.createElement("div", { id: "c" + props.data.id, className: "frame " +
                frameClass + " " +
                typeClass + " " +
                layoutClass + " " +
                backgroundClass + " " +
                backgroundImageClass + " " +
                spaceBeforeClass + " " +
                spaceAfterClass },
            React.createElement(BackgroundImage, { data: props.data }),
            React.createElement("div", { className: "frame-container" },
                React.createElement("div", { className: "frame-inner" },
                    props.data._localizedUid ? React.createElement("a", { id: "c" + props.data._localizedUid }) : null,
                    React.createElement(AllHeader, { data: props.data }),
                    props.children)));
    }
    else {
        content = React.createElement(React.Fragment, null,
            React.createElement("a", { id: "c" + props.data.id }),
            props.data._localizedUid ? React.createElement("a", { id: "c" + props.data._localizedUid }) : null,
            props.data.appearance.spaceBefore ? React.createElement("div", { className: spaceBeforeClass }) : null,
            React.createElement(AllHeader, { data: props.data }),
            props.children,
            props.data.appearance.spaceAfter ? React.createElement("div", { className: spaceAfterClass }) : null);
    }
    return content;
};

var FooterContent = function (props) {
    return React.createElement("footer", { className: "section footer-section footer-section-content" },
        React.createElement(Container, null,
            React.createElement(Row, null,
                React.createElement(Col, { className: "footer-section-content-column footer-section-content-column-left" },
                    React.createElement(Content, { colPos: '10', slide: -1, content: props.content, contentElementLayouts: props.contentElementLayouts, contentElementTemplates: props.contentElementTemplates })),
                React.createElement(Col, { className: " footer-section-content-column footer-section-content-column-middle" },
                    React.createElement(Content, { colPos: '11', slide: -1, content: props.content, contentElementLayouts: props.contentElementLayouts, contentElementTemplates: props.contentElementTemplates })),
                React.createElement(Col, { className: " footer-section-content-column footer-section-content-column-right" },
                    React.createElement(Content, { colPos: '12', slide: -1, content: props.content, contentElementLayouts: props.contentElementLayouts, contentElementTemplates: props.contentElementTemplates })))));
};

var getGridElement = function (element, content, contentElementLayouts, contentElementTemplates, index) {
    switch (element.type) {
        case 'row':
            var children = element.children.map(function (child, index) {
                return getGridElement(child, content, contentElementLayouts, contentElementTemplates, index);
            });
            return React.createElement(Row, { as: element.tag, key: index }, children);
        case 'col':
            return React.createElement(Col, { as: element.tag, lg: element.size, md: element.size, sm: element.size, xl: element.size, key: index },
                React.createElement(Content, { colPos: element.colPos, content: content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }));
        default:
            return React.createElement(React.Fragment, null);
    }
};
var GenericPage = function (props) {
    var content = React.createElement(React.Fragment, null);
    if (props.headlessData.page.appearance.pageContentRows) {
        content = props.headlessData.page.appearance.pageContentRows.map(function (gridElement, index) {
            return getGridElement(gridElement, props.headlessData.content, props.contentElementLayouts, props.contentElementTemplates, index);
        });
    }
    return content;
};

var pageLayouts = {
    //TODO: implement example
    'layout0': function (headlessData, pageTemplate, args) {
        return React.createElement(React.Fragment, null,
            React.createElement("header", null, "LOGO"),
            React.createElement("section", null,
                React.createElement("h1", null, "Hier ist ist eine Section"),
                React.createElement(section, { name: 'main', pageTemplate: pageTemplate })),
            React.createElement("footer", null,
                React.createElement("h3", null, "Hier ist eine andere Section"),
                React.createElement(section, { name: 'footer', pageTemplate: pageTemplate })));
    },
    __generic: function (headlessData, pageTemplate, args) {
        return React.createElement(React.Fragment, null,
            React.createElement(__GenericLayout, { headlessData: headlessData, pageTemplate: pageTemplate }));
    },
    Default: function (headlessData, pageTemplate, args) {
        return React.createElement(React.Fragment, null,
            React.createElement(__GenericLayout, { headlessData: headlessData, pageTemplate: pageTemplate }));
    }
};
var pageTemplates = {
    __generic: function (headlessData, contentElementLayouts, contentElementTemplates, args) {
        return {
            main: React.createElement(GenericPage, { headlessData: headlessData, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })
        };
    },
    example: function (headlessData, contentElementLayout, contentElementTemplates, args) {
        return {
            main: React.createElement(React.Fragment, null, "...example")
        };
    },
    default: function (headlessData, contentElementLayouts, contentElementTemplates, args) {
        return {
            border: React.createElement(Row, null,
                React.createElement(Col, null,
                    React.createElement(Content, { colPos: '3', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }))),
            main: React.createElement(React.Fragment, null,
                React.createElement(Row, null,
                    React.createElement(Col, null,
                        React.createElement(Content, { colPos: '8', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }))),
                React.createElement("div", { className: "section section-default" },
                    React.createElement(Row, null,
                        React.createElement(Col, null,
                            React.createElement(Content, { colPos: '0', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React.createElement(Content, { colPos: '9', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
            footer: React.createElement(FooterContent, { content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
        };
    },
    simple: function (headlessData, contentElementLayouts, contentElementTemplates, args) {
        return {
            border: React.createElement(Row, null,
                React.createElement(Col, null,
                    React.createElement(Content, { colPos: '3', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }))),
            main: React.createElement(React.Fragment, null,
                React.createElement(Row, null,
                    React.createElement(Col, null,
                        React.createElement(Content, { colPos: '8', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }))),
                React.createElement("div", { className: "section section-default" },
                    React.createElement(Row, null,
                        React.createElement(Col, null,
                            React.createElement(Content, { colPos: '0', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React.createElement(Row, null,
                    React.createElement(Col, null,
                        React.createElement(Content, { colPos: '9', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
        };
    },
    '2_columns': function (headlessData, contentElementLayouts, contentElementTemplates, args) {
        return {
            border: React.createElement(Row, null,
                React.createElement(Col, null,
                    React.createElement(Content, { colPos: '3', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }))),
            main: React.createElement(React.Fragment, null,
                React.createElement(Row, null,
                    React.createElement(Col, null,
                        React.createElement(Content, { colPos: '8', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }))),
                React.createElement("div", { className: "section section-default" },
                    React.createElement(Row, null,
                        React.createElement(Col, { md: "8", as: "main", className: " maincontent-wrap", role: "main" },
                            React.createElement(Content, { colPos: '0', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
                        React.createElement(Col, { className: " subcontent-wrap ", md: "4" },
                            React.createElement(Content, { colPos: '2', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React.createElement(Row, null,
                    React.createElement(Col, null,
                        React.createElement(Content, { colPos: '9', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
            footer: React.createElement(FooterContent, { content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
        };
    },
    '2_columns_25_75': function (headlessData, contentElementLayouts, contentElementTemplates, args) {
        return {
            border: React.createElement(Row, null,
                React.createElement(Col, null,
                    React.createElement(Content, { colPos: '3', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }))),
            main: React.createElement(React.Fragment, null,
                React.createElement(Row, null,
                    React.createElement(Col, null,
                        React.createElement(Content, { colPos: '8', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }))),
                React.createElement("div", { className: "section section-default" },
                    React.createElement(Row, null,
                        React.createElement(Col, { md: "4", as: "main", className: " maincontent-wrap", role: "main" },
                            React.createElement(Content, { colPos: '0', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
                        React.createElement(Col, { className: " subcontent-wrap", md: "8" },
                            React.createElement(Content, { colPos: '1', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React.createElement(Row, null,
                    React.createElement(Col, null,
                        React.createElement(Content, { colPos: '9', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
            footer: React.createElement(FooterContent, { content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
        };
    },
    '2_columns_50_50': function (headlessData, contentElementLayouts, contentElementTemplates, args) {
        return {
            border: React.createElement(Row, null,
                React.createElement(Col, null,
                    React.createElement(Content, { colPos: '3', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }))),
            main: React.createElement(React.Fragment, null,
                React.createElement(Row, null,
                    React.createElement(Col, null,
                        React.createElement(Content, { colPos: '8', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }))),
                React.createElement("div", { className: "section section-default" },
                    React.createElement(Row, null,
                        React.createElement(Col, { md: "6", as: "main", className: " maincontent-wrap", role: "main" },
                            React.createElement(Content, { colPos: '0', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
                        React.createElement(Col, { className: " subcontent-wrap ", md: "6" },
                            React.createElement(Content, { colPos: '2', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React.createElement(Row, null,
                    React.createElement(Col, null,
                        React.createElement(Content, { colPos: '9', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
            footer: React.createElement(FooterContent, { content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
        };
    },
    '3_columns': function (headlessData, contentElementLayouts, contentElementTemplates, args) {
        return {
            border: React.createElement(Row, null,
                React.createElement(Col, null,
                    " ",
                    React.createElement(Content, { colPos: '3', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
                    " ")),
            main: React.createElement(React.Fragment, null,
                React.createElement(Row, null,
                    React.createElement(Col, null,
                        React.createElement(Content, { colPos: '8', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }))),
                React.createElement("div", { className: "section section-default" },
                    React.createElement(Row, null,
                        React.createElement(Col, { md: "3", as: "main", className: " maincontent-wrap ", role: "main" },
                            React.createElement(Content, { colPos: '0', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
                        React.createElement(Col, { className: " subcontent-wrap ", md: "5" },
                            React.createElement(Content, { colPos: '1', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
                        React.createElement(Col, { className: " subcontent-wrap ", md: "3" },
                            React.createElement(Content, { colPos: '2', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React.createElement(Row, null,
                    React.createElement(Col, null,
                        React.createElement(Content, { colPos: '9', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
            footer: React.createElement(FooterContent, { content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
        };
    },
    'special_feature': function (headlessData, contentElementLayouts, contentElementTemplates, args) {
        return {
            border: React.createElement(Row, null,
                React.createElement(Col, null,
                    React.createElement(Content, { colPos: '3', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }))),
            main: React.createElement(React.Fragment, null,
                React.createElement(Row, null,
                    React.createElement(Col, null,
                        React.createElement(Content, { colPos: '8', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }))),
                React.createElement("div", { className: "section section-default" },
                    React.createElement(Row, null,
                        React.createElement(Col, null,
                            React.createElement(Content, { colPos: '0', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React.createElement("div", { className: "section section-primary" },
                    React.createElement(Row, null,
                        React.createElement(Col, { className: "section-column-half ", md: "6" },
                            React.createElement(Content, { colPos: '30', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
                        React.createElement(Col, { className: "section-column-half ", md: "6" },
                            React.createElement(Content, { colPos: '31', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React.createElement("div", { className: "section section-primary" },
                    React.createElement(Row, null,
                        React.createElement(Col, { className: "section-column-half ", md: "6" },
                            React.createElement(Content, { colPos: '32', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
                        React.createElement(Col, { className: "section-column-half ", md: "6" },
                            React.createElement(Content, { colPos: '33', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React.createElement("div", { className: "section section-default" },
                    React.createElement(Row, null,
                        React.createElement(Col, null,
                            React.createElement(Content, { colPos: '4', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React.createElement("div", { className: "section section-light" },
                    React.createElement(Row, null,
                        React.createElement(Col, { className: "section-column-half ", md: "6" },
                            React.createElement(Content, { colPos: '34', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
                        React.createElement(Col, { className: "section-column-half ", md: "6" },
                            React.createElement(Content, { colPos: '35', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React.createElement("div", { className: "section section-light" },
                    React.createElement(Row, null,
                        React.createElement(Col, { className: "section-column-half ", md: "6" },
                            React.createElement(Content, { colPos: '36', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
                        React.createElement(Col, { className: "section-column-half ", md: "6" },
                            React.createElement(Content, { colPos: '37', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React.createElement(Row, null,
                    React.createElement(Col, null,
                        React.createElement(Content, { colPos: '9', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
            footer: React.createElement(FooterContent, { content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
        };
    },
    'special_start': function (headlessData, contentElementLayouts, contentElementTemplates, args) {
        return {
            border: React.createElement(Row, null,
                React.createElement(Col, null,
                    React.createElement(Content, { colPos: '3', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }))),
            main: React.createElement(React.Fragment, null,
                React.createElement(Row, null,
                    React.createElement(Col, null,
                        React.createElement(Content, { colPos: '8', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }))),
                React.createElement("div", { className: "section section-default" },
                    React.createElement(Row, null,
                        React.createElement(Col, { className: "section-column-third ", md: "4" },
                            React.createElement(Content, { colPos: '20', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
                        React.createElement(Col, { className: "section-column-third ", md: "4" },
                            React.createElement(Content, { colPos: '21', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
                        React.createElement(Col, { className: "section-column-third ", md: "4" },
                            React.createElement(Content, { colPos: '22', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React.createElement("div", { className: "section section-light" },
                    React.createElement(Row, null,
                        React.createElement(Col, null,
                            React.createElement(Content, { colPos: '0', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React.createElement(Row, null,
                    React.createElement(Col, null,
                        React.createElement(Content, { colPos: '9', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
            footer: React.createElement(FooterContent, { content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
        };
    },
};
var contentElementLayouts = {
    __generic: function (props) {
        return React.createElement(Layout0, { data: props.content }, props.children);
    },
};
var contentElementTemplates = {
    //Resources/Private/Templates/ContentElements/**
    __generic: function (headlessContentData, args) {
        return React.createElement(React.Fragment, null, headlessContentData.type);
    },
    text: function (headlessContentData, args) {
        return React.createElement(Text, { data: headlessContentData.content });
    },
    textpic: function (headlessContentData, args) {
        return React.createElement(Textpic, { data: headlessContentData.content });
    },
    uploads: function (headlessContentData, args) {
        return React.createElement(Uploads, { data: headlessContentData.content });
    },
    textmedia: function (headlessContentData, args) {
        return React.createElement(Textmedia, { data: headlessContentData.content });
    },
    bullets: function (headlessContentData, args) {
        return React.createElement(Bullets, { data: headlessContentData.content });
    },
    image: function (headlessContentData, args) {
        return React.createElement(Image, { data: headlessContentData.content });
    },
    shortcut: function (headlessContentData, args) {
        return React.createElement(Shortcut, { data: headlessContentData.content });
    },
    table: function (headlessContentData, args) {
        return React.createElement(Table, { data: headlessContentData.content });
    },
    div: function (headlessContentData, args) {
        return React.createElement(Div, { data: headlessContentData.content });
    },
    menu_sitemap: function (headlessContentData, args) {
        return React.createElement(MenuSitemap, { data: headlessContentData.content });
    }
};
var TYPO3Page = function (props) {
    var _pageLayouts = Object.assign({}, pageLayouts, props.pageLayouts);
    var _pageTemplates = Object.assign({}, pageTemplates, props.pageTemplates);
    var _contentElementLayouts = Object.assign({}, contentElementLayouts, props.contentElementLayouts);
    var _contentElementTemplates = Object.assign({}, contentElementTemplates, props.contentElementTemplates);
    return React.createElement(Page, { headlessData: props.headlessData, pageLayouts: _pageLayouts, pageTemplates: _pageTemplates, contentElementLayouts: _contentElementLayouts, contentElementTemplates: _contentElementTemplates });
};
TYPO3Page.defaultProps = {
    pageLayouts: null,
    pageTemplates: null,
    contentElementLayouts: null,
    contentElementTemplates: null,
};

export { Content, Page, section as Section, TYPO3Page };
//# sourceMappingURL=index.es.js.map
