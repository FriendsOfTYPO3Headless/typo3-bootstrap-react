import React, { useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';

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
    return React.createElement("div", { className: 'backendlayout-' + props.headlessData.page.appearance.backendLayout }, genericSections);
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

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var RenderContent = function (contentElementLayouts, contentElementTemplates, content, args) {
    var layout;
    if (contentElementLayouts.hasOwnProperty(content.appearance.layout)) {
        layout = contentElementLayouts[content.appearance.layout];
    }
    else if (contentElementLayouts.hasOwnProperty('__generic')) {
        layout = contentElementLayouts.__generic;
    }
    else {
        return React.createElement(React.Fragment, null,
            "CE-layout not found: ",
            content.appearance.layout);
    }
    var template;
    if (contentElementTemplates.hasOwnProperty(content.type)) {
        template = contentElementTemplates[content.type];
    }
    else if (contentElementTemplates.hasOwnProperty('__generic')) {
        template = contentElementTemplates.__generic;
    }
    else {
        return React.createElement(React.Fragment, null,
            "CE-template not found: ",
            content.type,
            " ");
    }
    var _args = __assign({}, args);
    if (content.type === 'shortcut') {
        _args = __assign(__assign({}, _args), { contentElementTemplates: contentElementTemplates, contentElementLayouts: contentElementLayouts });
    }
    return React.createElement(React.Fragment, { key: content.id }, layout({ children: template(content, _args), content: content, args: _args }));
};

var PREFIX_COLPOS = 'colPos';
var Content = function (props) {
    var content = React.createElement(React.Fragment, null);
    if (props.content.hasOwnProperty(PREFIX_COLPOS + props.colPos)) {
        content = props.content[PREFIX_COLPOS + props.colPos].map(function (content) {
            return RenderContent(props.contentElementLayouts, props.contentElementTemplates, content, props.args);
        });
    }
    return content;
};

var Text = function (props) {
    return React.createElement("div", { dangerouslySetInnerHTML: { __html: props.data.bodytext } });
};

var ImageLightbox = function (props) {
    var nextSrc = function () {
        props.setPhotoIndex(function (prevPhotoIndex) { return (prevPhotoIndex + 1) % props.images.length; });
    };
    var prevSrc = function () {
        props.setPhotoIndex(function (prevPhotoIndex) { return (prevPhotoIndex + props.images.length - 1) % props.images.length; });
    };
    var onClose = function () {
        props.setShowLightbox(false);
    };
    if (props.showLightbox) {
        return React.createElement(Lightbox, { mainSrc: props.images[props.photoIndex], nextSrc: props.images[(props.photoIndex + 1) % props.images.length], prevSrc: props.images[(props.photoIndex + props.images.length - 1) % props.images.length], onCloseRequest: onClose, onMovePrevRequest: prevSrc, onMoveNextRequest: nextSrc });
    }
    return React.createElement(React.Fragment, null);
};

var Textpic = function (props) {
    var _a = useState(false), showLightbox = _a[0], setShowlightbox = _a[1];
    var _b = useState(0), photoIndex = _b[0], setPhotoIndex = _b[1];
    var images = [];
    Object.keys(props.data.gallery.rows).forEach(function (rowKey) {
        Object.keys(props.data.gallery.rows[rowKey].columns).forEach(function (columnKey) {
            images.push(props.data.gallery.rows[rowKey].columns[columnKey].publicUrl);
        });
    });
    var textpicClassName;
    if (props.data.gallery.position.horizontal === 'left' || props.data.gallery.position.horizontal === 'right') {
        textpicClassName = props.data.gallery.position.horizontal;
    }
    if (props.data.gallery.position.horizontal === 'center') {
        textpicClassName = props.data.gallery.position.vertical;
    }
    //TODO: Klick-Vergrößerung nur, wenn Option aktiviert
    var imageCols = Object.keys(props.data.gallery.rows).map(function (rowKey) {
        return Object.keys(props.data.gallery.rows[rowKey].columns).map(function (columnKey) {
            var _a, _b;
            return React.createElement(Col, { className: "gallery-item  gallery-item-size-" + props.data.gallery.count.columns, key: columnKey },
                React.createElement("a", { onClick: function (e) {
                        e.preventDefault();
                        setPhotoIndex(images.indexOf(props.data.gallery.rows[rowKey].columns[columnKey].publicUrl));
                        setShowlightbox(true);
                        return true;
                    }, href: '#' },
                    React.createElement("img", { src: props.data.gallery.rows[rowKey].columns[columnKey].publicUrl, alt: (_b = (_a = props.data.gallery.rows[rowKey].columns[columnKey]) === null || _a === void 0 ? void 0 : _a.properties) === null || _b === void 0 ? void 0 : _b.title })),
                props.data.gallery.rows[rowKey].columns[columnKey].properties.description);
        });
    });
    return React.createElement("div", { className: "textpic" },
        React.createElement(ImageLightbox, { images: images, setShowLightbox: setShowlightbox, showLightbox: showLightbox, photoIndex: photoIndex, setPhotoIndex: setPhotoIndex }),
        React.createElement("div", { className: "gallery-row" },
            React.createElement(Row, { className: "textpic textpic-" + textpicClassName },
                React.createElement(Col, { className: "textpic-item textpic-gallery", md: textpicClassName === props.data.gallery.position.vertical ? "auto" : "6" },
                    React.createElement(Row, null, imageCols)),
                React.createElement(Col, { className: "textpic-item textpic-text", md: "6", dangerouslySetInnerHTML: { __html: props.data.bodytext } }))));
};

var Image = function (props) {
    var _a = useState(false), showLightbox = _a[0], setShowlightbox = _a[1];
    var _b = useState(0), photoIndex = _b[0], setPhotoIndex = _b[1];
    var images = [];
    Object.keys(props.data.gallery.rows).forEach(function (rowKey) {
        Object.keys(props.data.gallery.rows[rowKey].columns).forEach(function (columnKey) {
            images.push(props.data.gallery.rows[rowKey].columns[columnKey].publicUrl);
        });
    });
    var imageCols = Object.keys(props.data.gallery.rows).map(function (rowKey, indexRow) {
        return Object.keys(props.data.gallery.rows[rowKey].columns).map(function (columnKey, indexCol) {
            return React.createElement(Col, { className: "gallery-item  gallery-item-size-" + props.data.gallery.count.columns, key: rowKey + '-' + columnKey },
                React.createElement("a", { onClick: function () {
                        setPhotoIndex(images.indexOf(props.data.gallery.rows[rowKey].columns[columnKey].publicUrl));
                        setShowlightbox(true);
                    } },
                    React.createElement("img", { src: props.data.gallery.rows[rowKey].columns[columnKey].publicUrl })),
                props.data.gallery.rows[rowKey].columns[columnKey].properties.description);
        });
    });
    return React.createElement("div", { className: "image" },
        React.createElement(ImageLightbox, { images: images, setShowLightbox: setShowlightbox, showLightbox: showLightbox, photoIndex: photoIndex, setPhotoIndex: setPhotoIndex }),
        React.createElement("div", { className: "gallery-row" },
            React.createElement(Row, null, imageCols)));
};

var Div = function (props) {
    return React.createElement("div", { className: "div" },
        React.createElement("hr", null));
};

var Textmedia = function (props) {
    var textmediaClassName;
    if (props.data.gallery.position.horizontal === 'left' || props.data.gallery.position.horizontal === 'right') {
        textmediaClassName = props.data.gallery.position.horizontal;
    }
    if (props.data.gallery.position.horizontal === 'center') {
        textmediaClassName = props.data.gallery.position.vertical;
    }
    return React.createElement("div", { className: "textmedia" },
        React.createElement("div", { className: "gallery-row" },
            React.createElement(Row, { className: "textmedia textmedia-" + textmediaClassName },
                React.createElement(Col, { className: "textmedia-item textmedia-gallery", md: textmediaClassName === props.data.gallery.position.vertical ? "auto" : "6" },
                    React.createElement(Row, null, Object.keys(props.data.gallery.rows).map(function (rowKey) {
                        return Object.keys(props.data.gallery.rows[rowKey].columns).map(function (columnKey) {
                            switch (props.data.gallery.rows[rowKey].columns[columnKey].properties.mimeType) {
                                case 'video/youtube':
                                    return React.createElement(Col, { className: "gallery-item  gallery-item-size-" + props.data.gallery.count.columns },
                                        React.createElement("iframe", { src: props.data.gallery.rows[rowKey].columns[columnKey].publicUrl, className: "embed-responsive-item" }),
                                        props.data.gallery.rows[rowKey].columns[columnKey].properties.description);
                                case 'image/jpeg':
                                    return React.createElement(Col, { className: "gallery-item  gallery-item-size-" + props.data.gallery.count.columns },
                                        React.createElement("img", { src: props.data.gallery.rows[rowKey].columns[columnKey].publicUrl, className: "embed-responsive-item" }),
                                        props.data.gallery.rows[rowKey].columns[columnKey].properties.description);
                                case 'image/svg+xml':
                                    return React.createElement(Col, { className: "gallery-item  gallery-item-size-" + props.data.gallery.count.columns },
                                        React.createElement("img", { src: props.data.gallery.rows[rowKey].columns[columnKey].publicUrl, className: "embed-responsive-item" }),
                                        props.data.gallery.rows[rowKey].columns[columnKey].properties.description);
                                case 'video/mp4':
                                    return React.createElement(Col, { className: "gallery-item  gallery-item-size-" + props.data.gallery.count.columns },
                                        React.createElement("video", { controls: true },
                                            React.createElement("source", { type: "video/mp4", src: props.data.gallery.rows[rowKey].columns[columnKey].publicUrl })),
                                        props.data.gallery.rows[rowKey].columns[columnKey].properties.description);
                                case 'video/vimeo':
                                    return React.createElement(Col, { className: "gallery-item  gallery-item-size-" + props.data.gallery.count.columns },
                                        React.createElement("video", { controls: true },
                                            React.createElement("source", { type: "video/mp4", src: props.data.gallery.rows[rowKey].columns[columnKey].publicUrl })),
                                        props.data.gallery.rows[rowKey].columns[columnKey].properties.description);
                                default:
                                    return React.createElement(Col, { className: "gallery-item  gallery-item-size-" + props.data.gallery.count.columns },
                                        React.createElement("iframe", { src: props.data.gallery.rows[rowKey].columns[columnKey].publicUrl, className: "embed-responsive-item" }),
                                        props.data.gallery.rows[rowKey].columns[columnKey].properties.description);
                            }
                        });
                    }))),
                React.createElement(Col, { className: "textmedia-item textmedia-text" },
                    React.createElement("div", { dangerouslySetInnerHTML: { __html: props.data.bodytext } })))));
};

var Shortcut = function (props) {
    return React.createElement("div", { className: "shortcut" }, props.data.shortcut.map(function (cObject) {
        return RenderContent(props.args.contentElementLayouts, props.args.contentElementTemplates, cObject, props.args);
    }));
};

var Html = function (props) {
    return React.createElement("div", { dangerouslySetInnerHTML: { __html: props.data.bodytext } });
};

var Table = function (props) {
    props.data.tableCaption;
    return React.createElement("div", { className: "table" }, props.data.bodytext.map(function (rowObject) {
        {
            props.data.tableCaption;
        }
        return rowObject;
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
    if (props.data.content.hasOwnProperty('headerLayout') && props.data.content.headerLayout !== 100) {
        if (props.data.content.header !== '' || props.data.content.subheader !== '' || props.data.content.date !== '') {
            content = React.createElement("div", { className: "frame-header" },
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
    'layout-0': function (headlessData, pageTemplate, args) {
        return React.createElement("div", { className: 'backendlayout-' + headlessData.page.appearance.backendLayout },
            React.createElement("header", null, "LOGO"),
            React.createElement("section", null,
                React.createElement(section, { name: 'main', pageTemplate: pageTemplate })),
            React.createElement("footer", null,
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
                React.createElement(Row, null,
                    React.createElement(Col, null,
                        React.createElement(Content, { colPos: '9', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
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
                    React.createElement(Container, null,
                        React.createElement(Row, null,
                            React.createElement(Col, { md: "8", as: "main", className: " maincontent-wrap", role: "main" },
                                React.createElement(Content, { colPos: '0', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
                            React.createElement(Col, { className: " subcontent-wrap ", md: "4" },
                                React.createElement(Content, { colPos: '2', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }))))),
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
                    React.createElement(Container, null,
                        React.createElement(Row, null,
                            React.createElement(Col, { md: "8", as: "main", className: " maincontent-wrap", role: "main" },
                                React.createElement(Content, { colPos: '0', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
                            React.createElement(Col, { className: " subcontent-wrap", md: "4" },
                                React.createElement(Content, { colPos: '1', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }))))),
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
                    React.createElement(Container, null,
                        React.createElement(Row, null,
                            React.createElement(Col, { md: "6", as: "main", className: " maincontent-wrap", role: "main" },
                                React.createElement(Content, { colPos: '0', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
                            React.createElement(Col, { className: " subcontent-wrap ", md: "6" },
                                React.createElement(Content, { colPos: '2', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }))))),
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
                    React.createElement(Container, null,
                        React.createElement(Row, null,
                            React.createElement(Col, { lg: "6", as: "main", className: " maincontent-wrap ", role: "main" },
                                React.createElement(Content, { colPos: '0', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
                            React.createElement(Col, { className: " subcontent-wrap ", lg: "3" },
                                React.createElement(Content, { colPos: '1', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
                            React.createElement(Col, { className: " subcontent-wrap ", lg: "3" },
                                React.createElement(Content, { colPos: '2', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }))))),
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
                    React.createElement(Container, null,
                        React.createElement(Row, null,
                            React.createElement(Col, { className: "section-column-half ", md: "6" },
                                React.createElement(Content, { colPos: '30', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
                            React.createElement(Col, { className: "section-column-half ", md: "6" },
                                React.createElement(Content, { colPos: '31', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }))))),
                React.createElement("div", { className: "section section-primary" },
                    React.createElement(Container, null,
                        React.createElement(Row, null,
                            React.createElement(Col, { className: "section-column-half ", md: "6" },
                                React.createElement(Content, { colPos: '32', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
                            React.createElement(Col, { className: "section-column-half ", md: "6" },
                                React.createElement(Content, { colPos: '33', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }))))),
                React.createElement("div", { className: "section section-default" },
                    React.createElement(Row, null,
                        React.createElement(Col, null,
                            React.createElement(Content, { colPos: '4', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React.createElement("div", { className: "section section-light" },
                    React.createElement(Container, null,
                        React.createElement(Row, null,
                            React.createElement(Col, { className: "section-column-half ", md: "6" },
                                React.createElement(Content, { colPos: '34', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
                            React.createElement(Col, { className: "section-column-half ", md: "6" },
                                React.createElement(Content, { colPos: '35', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }))))),
                React.createElement("div", { className: "section section-light" },
                    React.createElement(Container, null,
                        React.createElement(Row, null,
                            React.createElement(Col, { className: "section-column-half ", md: "6" },
                                React.createElement(Content, { colPos: '36', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
                            React.createElement(Col, { className: "section-column-half ", md: "6" },
                                React.createElement(Content, { colPos: '37', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }))))),
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
                    React.createElement(Container, null,
                        React.createElement(Row, null,
                            React.createElement(Col, { className: "section-column-third ", md: "4" },
                                React.createElement(Content, { colPos: '20', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
                            React.createElement(Col, { className: "section-column-third ", md: "4" },
                                React.createElement(Content, { colPos: '21', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
                            React.createElement(Col, { className: "section-column-third ", md: "4" },
                                React.createElement(Content, { colPos: '22', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }))))),
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
        return React.createElement(React.Fragment, null,
            headlessContentData.type,
            " has no Template");
    },
    text: function (headlessContentData, args) {
        return React.createElement(Text, { data: headlessContentData.content });
    },
    html: function (headlessContentData, args) {
        return React.createElement(Html, { data: headlessContentData.content });
    },
    textpic: function (headlessContentData, args) {
        return React.createElement(Textpic, { data: headlessContentData.content });
    },
    image: function (headlessContentData, args) {
        return React.createElement(Image, { data: headlessContentData.content });
    },
    textmedia: function (headlessContentData, args) {
        return React.createElement(Textmedia, { data: headlessContentData.content });
    },
    //imageModal: (headlessContentData, args = {}) => <CE.ImageModal data={headlessContentData.content}/>,
    // bullets: (headlessContentData, args = {}) => <CE.Bullets data={headlessContentData.content}/>,
    // image: (headlessContentData, args = {}) => <CE.Image data={headlessContentData.content}/>,
    shortcut: function (headlessContentData, args) {
        if (args === void 0) { args = {}; }
        return React.createElement(Shortcut, { data: headlessContentData.content, args: args });
    },
    table: function (headlessContentData, args) {
        return React.createElement(Table, { data: headlessContentData.content });
    },
    div: function (headlessContentData, args) {
        return React.createElement(Div, { data: headlessContentData.content });
    },
    // menu_sitemap: (headlessContentData, args = {}) => <CE.MenuSitemap data={headlessContentData.content}/>
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
var TYPO3Page$1 = React.memo(TYPO3Page);

export { Content, Page, section as Section, TYPO3Page$1 as TYPO3Page };
//# sourceMappingURL=index.es.js.map
