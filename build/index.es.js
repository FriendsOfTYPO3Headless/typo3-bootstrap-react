import React, { useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';

var section = function (props) {
    if (props.pageTemplate.hasOwnProperty(props.name)) {
        return props.pageTemplate[props.name];
    }
    return React.createElement(React.Fragment, null);
};

var __GenericLayout = function (props) {
    var genericSections = Object.keys(props.pageTemplate).map(function (sectionName) {
        return React.createElement("section", { key: sectionName, className: sectionName },
            React.createElement(section, { name: sectionName, pageTemplate: props.pageTemplate }));
    });
    return React.createElement("div", { className: 'backendlayout-' + props.headlessData.appearance.backendLayout }, genericSections);
};

var TYPO3PageContext = React.createContext(null);

var Page = function (props) {
    var context = React.useContext(TYPO3PageContext);
    var pageLayout;
    if (context.pageLayouts.hasOwnProperty(context.headlessData.appearance.layout)) {
        pageLayout = context.pageLayouts[context.headlessData.appearance.layout];
    }
    else if (context.pageLayouts.hasOwnProperty('__generic')) {
        pageLayout = context.pageLayouts.__generic;
    }
    else {
        return React.createElement(React.Fragment, null,
            "Page-layout not found: ",
            context.headlessData.appearance.layout);
    }
    var pageTemplate;
    if (context.pageTemplates.hasOwnProperty(context.headlessData.appearance.backendLayout)) {
        pageTemplate = context.pageTemplates[context.headlessData.appearance.backendLayout];
    }
    else if (context.pageTemplates.hasOwnProperty('__generic')) {
        pageTemplate = context.pageTemplates.__generic;
    }
    else {
        return React.createElement(React.Fragment, null,
            "Page-template not found: ",
            context.headlessData.appearance.backendLayout,
            " ");
    }
    return pageLayout(context.headlessData, pageTemplate);
};

var RenderContent = function (contentData) {
    var _a = React.useContext(TYPO3PageContext), contentElementLayouts = _a.contentElementLayouts, contentElementTemplates = _a.contentElementTemplates;
    var layout;
    if (contentElementLayouts.hasOwnProperty(contentData.appearance.layout)) {
        layout = contentElementLayouts[contentData.appearance.layout];
    }
    else if (contentElementLayouts.hasOwnProperty('__generic')) {
        layout = contentElementLayouts.__generic;
    }
    else {
        return React.createElement(React.Fragment, null,
            "CE-layout not found: ",
            contentData.appearance.layout);
    }
    var template;
    if (contentElementTemplates.hasOwnProperty(contentData.type)) {
        template = contentElementTemplates[contentData.type];
    }
    else if (contentElementTemplates.hasOwnProperty('__generic')) {
        template = contentElementTemplates.__generic;
    }
    else {
        return React.createElement(React.Fragment, null,
            "CE-template not found: ",
            contentData.type,
            " ");
    }
    return React.createElement(React.Fragment, { key: contentData.id }, layout({ children: template(contentData), content: contentData }));
}; //, args: _args

var PREFIX_COLPOS = 'colPos';
var Content = function (props) {
    var context = React.useContext(TYPO3PageContext);
    var content = React.createElement(React.Fragment, null);
    if (context.headlessData.content.hasOwnProperty(PREFIX_COLPOS + props.colPos)) {
        content = context.headlessData.content[PREFIX_COLPOS + props.colPos].map(function (content) {
            return RenderContent(content);
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

var imageUris = function (data) {
    var _images = [];
    Object.keys(data.gallery.rows).forEach(function (rowKey) {
        Object.keys(data.gallery.rows[rowKey].columns).forEach(function (columnKey) {
            _images.push(data.gallery.rows[rowKey].columns[columnKey].publicUrl);
        });
    });
    return _images;
};
var ImageCols = function (props) {
    var _a = useState(false), showLightbox = _a[0], setShowlightbox = _a[1];
    var _b = useState(0), photoIndex = _b[0], setPhotoIndex = _b[1];
    var images = imageUris(props.data);
    return React.createElement(React.Fragment, null,
        React.createElement(ImageLightbox, { images: images, setShowLightbox: setShowlightbox, showLightbox: showLightbox, photoIndex: photoIndex, setPhotoIndex: setPhotoIndex }),
        Object.keys(props.data.gallery.rows).map(function (rowKey) {
            return Object.keys(props.data.gallery.rows[rowKey].columns).map(function (columnKey) {
                var _a, _b;
                var image = React.createElement("img", { src: props.data.gallery.rows[rowKey].columns[columnKey].publicUrl, alt: (_b = (_a = props.data.gallery.rows[rowKey].columns[columnKey]) === null || _a === void 0 ? void 0 : _a.properties) === null || _b === void 0 ? void 0 : _b.title });
                return React.createElement(Col, { className: "gallery-item  gallery-item-size-" + props.data.gallery.count.columns, key: rowKey + '-' + columnKey },
                    props.data.enlargeImageOnClick ?
                        React.createElement("a", { onClick: function (e) {
                                e.preventDefault();
                                setPhotoIndex(images.indexOf(props.data.gallery.rows[rowKey].columns[columnKey].publicUrl));
                                setShowlightbox(true);
                                return true;
                            }, href: '#' }, image) : image,
                    props.data.gallery.rows[rowKey].columns[columnKey].properties.description);
            });
        }));
};

var Textpic = function (props) {
    var textpicClassName = '';
    if (props.data.gallery.position.horizontal === 'left' || props.data.gallery.position.horizontal === 'right') {
        textpicClassName = props.data.gallery.position.horizontal;
    }
    if (props.data.gallery.position.horizontal === 'center') {
        textpicClassName = props.data.gallery.position.vertical;
    }
    return React.createElement("div", { className: "textpic" },
        React.createElement("div", { className: "gallery-row" },
            React.createElement(Row, { className: "textpic textpic-" + textpicClassName },
                React.createElement(Col, { className: "textpic-item textpic-gallery", md: textpicClassName === props.data.gallery.position.vertical ? "auto" : "6" },
                    React.createElement(Row, null,
                        React.createElement(ImageCols, { data: props.data }))),
                React.createElement(Col, { className: "textpic-item textpic-text", md: "6", dangerouslySetInnerHTML: { __html: props.data.bodytext } }))));
};

var Image = function (props) {
    return React.createElement("div", { className: "image" },
        React.createElement("div", { className: "gallery-row" },
            React.createElement(Row, null,
                React.createElement(ImageCols, { data: props.data }))));
};

var Div = function (props) {
    return React.createElement("div", { className: "div" },
        React.createElement("hr", null));
};

var Shortcut = function (props) {
    return React.createElement("div", { className: "shortcut" }, props.data.shortcut.map(function (cObject) {
        return RenderContent(cObject);
    }));
};

var Html = function (props) {
    return React.createElement("div", { dangerouslySetInnerHTML: { __html: props.data.bodytext } });
};

var Uploads = function (props) {
    return React.createElement("div", { className: "uploads" },
        React.createElement("ul", { className: "media-list filelink-list" }, Object.keys(props.data.media).map(function (key) {
            var description = props.data.displayDescription === '1' ?
                React.createElement("p", { className: 'filelink-filedescription' }, props.data.media[key].properties.description) : null;
            var filesize = props.data.displayFileSizeInformation === '1' ?
                React.createElement("span", { className: 'filelink-filesize ms-2 small' }, props.data.media[key].properties.size) : null;
            var title = props.data.media[key].properties.title;
            if (title === null || title === '') {
                title = props.data.media[key].properties.filename;
            }
            var heading = function (contentBefore) {
                if (contentBefore === void 0) { contentBefore = null; }
                return React.createElement("span", { className: 'title' },
                    React.createElement("h5", { className: 'filelink-heading ' },
                        React.createElement("a", { href: props.data.media[key].publicUrl },
                            contentBefore,
                            title),
                        filesize));
            };
            var content;
            switch (props.data.displayInformation) {
                case "1":
                    content = React.createElement(React.Fragment, null,
                        heading(props.data.media[key].properties.type === 'video' ?
                            React.createElement("i", { className: "bi bi-camera-video-fill me-2" }) : React.createElement("i", { className: "bi bi-file-image me-2" })),
                        description);
                    break;
                case "2":
                    var media = null;
                    switch (props.data.media[key].properties.type) {
                        case 'video':
                            media = React.createElement("iframe", { src: props.data.media[key].publicUrl, className: 'mw-100' });
                            break;
                        //TODO: add preview for application/*
                        case 'application':
                            if (props.data.media[key].properties.mimeType === 'application/pdf') {
                                media = React.createElement("iframe", { src: props.data.media[key].publicUrl, className: 'mw-100' });
                            }
                            break;
                        default:
                            media = React.createElement("img", { src: props.data.media[key].publicUrl, alt: title, className: 'img-fluid' });
                    }
                    content = React.createElement(Row, null,
                        React.createElement(Col, { className: 'filelink-media', xs: 3, sm: 3, md: 3, lg: 2, xl: 2, xxl: 2 }, media),
                        React.createElement(Col, { className: 'filelink-body' },
                            heading(),
                            description));
                    break;
                default:
                    content = React.createElement(React.Fragment, null,
                        heading(),
                        description);
            }
            return React.createElement("li", { className: 'filelink-item mb-2', key: key }, content);
        })));
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

//Data is ContentData
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

var FooterContent = function () {
    return React.createElement("footer", { className: "section footer-section footer-section-content" },
        React.createElement(Container, null,
            React.createElement(Row, null,
                React.createElement(Col, { className: "footer-section-content-column footer-section-content-column-left" },
                    React.createElement(Content, { colPos: '10' })),
                React.createElement(Col, { className: " footer-section-content-column footer-section-content-column-middle" },
                    React.createElement(Content, { colPos: '11' })),
                React.createElement(Col, { className: " footer-section-content-column footer-section-content-column-right" },
                    React.createElement(Content, { colPos: '12' })))));
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
                React.createElement(Content, { colPos: element.colPos }));
        default:
            return React.createElement(React.Fragment, null);
    }
};
var GenericPage = function () {
    var context = React.useContext(TYPO3PageContext);
    var content = React.createElement(React.Fragment, null);
    if (context.headlessData.appearance.pageContentRows) {
        content = context.headlessData.appearance.pageContentRows.map(function (gridElement, index) {
            return getGridElement(gridElement, context.headlessData.content, context.contentElementLayouts, context.contentElementTemplates, index);
        });
    }
    return content;
};

var pageLayouts = {
    //TODO: implement example
    'layout-0': function (headlessData, pageTemplate) { return React.createElement("div", { className: 'backendlayout-' + headlessData.appearance.backendLayout },
        React.createElement("header", null),
        React.createElement("section", null,
            React.createElement(section, { name: 'main', pageTemplate: pageTemplate })),
        React.createElement("footer", null,
            React.createElement(section, { name: 'footer', pageTemplate: pageTemplate }))); },
    __generic: function (headlessData, pageTemplate) { return React.createElement(React.Fragment, null,
        React.createElement(__GenericLayout, { headlessData: headlessData, pageTemplate: pageTemplate })); },
    Default: function (headlessData, pageTemplate) { return React.createElement(React.Fragment, null,
        React.createElement(__GenericLayout, { headlessData: headlessData, pageTemplate: pageTemplate })); }
};
var pageTemplates = {
    __generic: {
        main: React.createElement(GenericPage, null)
    },
    default: {
        border: React.createElement(Row, null,
            React.createElement(Col, null,
                React.createElement(Content, { colPos: '3' }))),
        main: React.createElement(React.Fragment, null,
            React.createElement(Row, null,
                React.createElement(Col, null,
                    React.createElement(Content, { colPos: '8' }))),
            React.createElement("div", { className: "section section-default" },
                React.createElement(Row, null,
                    React.createElement(Col, null,
                        React.createElement(Content, { colPos: '0' })))),
            React.createElement(Row, null,
                React.createElement(Col, null,
                    React.createElement(Content, { colPos: '9' })))),
        footer: React.createElement(FooterContent, null),
    },
    simple: {
        border: React.createElement(Row, null,
            React.createElement(Col, null,
                React.createElement(Content, { colPos: '3' }))),
        main: React.createElement(React.Fragment, null,
            React.createElement(Row, null,
                React.createElement(Col, null,
                    React.createElement(Content, { colPos: '8' }))),
            React.createElement("div", { className: "section section-default" },
                React.createElement(Row, null,
                    React.createElement(Col, null,
                        React.createElement(Content, { colPos: '0' })))),
            React.createElement(Row, null,
                React.createElement(Col, null,
                    React.createElement(Content, { colPos: '9' })))),
    },
    '2_columns': {
        border: React.createElement(Row, null,
            React.createElement(Col, null,
                React.createElement(Content, { colPos: '3' }))),
        main: React.createElement(React.Fragment, null,
            React.createElement(Row, null,
                React.createElement(Col, null,
                    React.createElement(Content, { colPos: '8' }))),
            React.createElement("div", { className: "section section-default" },
                React.createElement(Container, null,
                    React.createElement(Row, null,
                        React.createElement(Col, { md: "8", as: "main", className: " maincontent-wrap", role: "main" },
                            React.createElement(Content, { colPos: '0' })),
                        React.createElement(Col, { className: " subcontent-wrap ", md: "4" },
                            React.createElement(Content, { colPos: '2' }))))),
            React.createElement(Row, null,
                React.createElement(Col, null,
                    React.createElement(Content, { colPos: '9' })))),
        footer: React.createElement(FooterContent, null),
    },
    '2_columns_25_75': {
        border: React.createElement(Row, null,
            React.createElement(Col, null,
                React.createElement(Content, { colPos: '3' }))),
        main: React.createElement(React.Fragment, null,
            React.createElement(Row, null,
                React.createElement(Col, null,
                    React.createElement(Content, { colPos: '8' }))),
            React.createElement("div", { className: "section section-default" },
                React.createElement(Container, null,
                    React.createElement(Row, null,
                        React.createElement(Col, { md: "8", as: "main", className: " maincontent-wrap", role: "main" },
                            React.createElement(Content, { colPos: '0' })),
                        React.createElement(Col, { className: " subcontent-wrap", md: "4" },
                            React.createElement(Content, { colPos: '1' }))))),
            React.createElement(Row, null,
                React.createElement(Col, null,
                    React.createElement(Content, { colPos: '9' })))),
        footer: React.createElement(FooterContent, null),
    },
    '2_columns_50_50': {
        border: React.createElement(Row, null,
            React.createElement(Col, null,
                React.createElement(Content, { colPos: '3' }))),
        main: React.createElement(React.Fragment, null,
            React.createElement(Row, null,
                React.createElement(Col, null,
                    React.createElement(Content, { colPos: '8' }))),
            React.createElement("div", { className: "section section-default" },
                React.createElement(Container, null,
                    React.createElement(Row, null,
                        React.createElement(Col, { md: "6", as: "main", className: " maincontent-wrap", role: "main" },
                            React.createElement(Content, { colPos: '0' })),
                        React.createElement(Col, { className: " subcontent-wrap ", md: "6" },
                            React.createElement(Content, { colPos: '2' }))))),
            React.createElement(Row, null,
                React.createElement(Col, null,
                    React.createElement(Content, { colPos: '9' })))),
        footer: React.createElement(FooterContent, null),
    },
    '3_columns': {
        border: React.createElement(Row, null,
            React.createElement(Col, null,
                React.createElement(Content, { colPos: '3' }))),
        main: React.createElement(React.Fragment, null,
            React.createElement(Row, null,
                React.createElement(Col, null,
                    React.createElement(Content, { colPos: '8' }))),
            React.createElement("div", { className: "section section-default" },
                React.createElement(Container, null,
                    React.createElement(Row, null,
                        React.createElement(Col, { lg: "6", as: "main", className: " maincontent-wrap ", role: "main" },
                            React.createElement(Content, { colPos: '0' })),
                        React.createElement(Col, { className: " subcontent-wrap ", lg: "3" },
                            React.createElement(Content, { colPos: '1' })),
                        React.createElement(Col, { className: " subcontent-wrap ", lg: "3" },
                            React.createElement(Content, { colPos: '2' }))))),
            React.createElement(Row, null,
                React.createElement(Col, null,
                    React.createElement(Content, { colPos: '9' })))),
        footer: React.createElement(FooterContent, null),
    },
    'special_feature': {
        border: React.createElement(Row, null,
            React.createElement(Col, null,
                React.createElement(Content, { colPos: '3' }))),
        main: React.createElement(React.Fragment, null,
            React.createElement(Row, null,
                React.createElement(Col, null,
                    React.createElement(Content, { colPos: '8' }))),
            React.createElement("div", { className: "section section-default" },
                React.createElement(Row, null,
                    React.createElement(Col, null,
                        React.createElement(Content, { colPos: '0' })))),
            React.createElement("div", { className: "section section-primary" },
                React.createElement(Container, null,
                    React.createElement(Row, null,
                        React.createElement(Col, { className: "section-column-half ", md: "6" },
                            React.createElement(Content, { colPos: '30' })),
                        React.createElement(Col, { className: "section-column-half ", md: "6" },
                            React.createElement(Content, { colPos: '31' }))))),
            React.createElement("div", { className: "section section-primary" },
                React.createElement(Container, null,
                    React.createElement(Row, null,
                        React.createElement(Col, { className: "section-column-half ", md: "6" },
                            React.createElement(Content, { colPos: '32' })),
                        React.createElement(Col, { className: "section-column-half ", md: "6" },
                            React.createElement(Content, { colPos: '33' }))))),
            React.createElement("div", { className: "section section-default" },
                React.createElement(Row, null,
                    React.createElement(Col, null,
                        React.createElement(Content, { colPos: '4' })))),
            React.createElement("div", { className: "section section-light" },
                React.createElement(Container, null,
                    React.createElement(Row, null,
                        React.createElement(Col, { className: "section-column-half ", md: "6" },
                            React.createElement(Content, { colPos: '34' })),
                        React.createElement(Col, { className: "section-column-half ", md: "6" },
                            React.createElement(Content, { colPos: '35' }))))),
            React.createElement("div", { className: "section section-light" },
                React.createElement(Container, null,
                    React.createElement(Row, null,
                        React.createElement(Col, { className: "section-column-half ", md: "6" },
                            React.createElement(Content, { colPos: '36' })),
                        React.createElement(Col, { className: "section-column-half ", md: "6" },
                            React.createElement(Content, { colPos: '37' }))))),
            React.createElement(Row, null,
                React.createElement(Col, null,
                    React.createElement(Content, { colPos: '9' })))),
        footer: React.createElement(FooterContent, null),
    },
    'special_start': {
        border: React.createElement(Row, null,
            React.createElement(Col, null,
                React.createElement(Content, { colPos: '3' }))),
        main: React.createElement(React.Fragment, null,
            React.createElement(Row, null,
                React.createElement(Col, null,
                    React.createElement(Content, { colPos: '8' }))),
            React.createElement("div", { className: "section section-default" },
                React.createElement(Container, null,
                    React.createElement(Row, null,
                        React.createElement(Col, { className: "section-column-third ", md: "4" },
                            React.createElement(Content, { colPos: '20' })),
                        React.createElement(Col, { className: "section-column-third ", md: "4" },
                            React.createElement(Content, { colPos: '21' })),
                        React.createElement(Col, { className: "section-column-third ", md: "4" },
                            React.createElement(Content, { colPos: '22' }))))),
            React.createElement("div", { className: "section section-light" },
                React.createElement(Row, null,
                    React.createElement(Col, null,
                        React.createElement(Content, { colPos: '0' })))),
            React.createElement(Row, null,
                React.createElement(Col, null,
                    React.createElement(Content, { colPos: '9' })))),
        footer: React.createElement(FooterContent, null),
    },
};
var contentElementLayouts = {
    __generic: function (props) {
        return React.createElement(Layout0, { data: props.content }, props.children);
    },
};
var contentElementTemplates = {
    //Resources/Private/Templates/ContentElements/**
    __generic: function (headlessContentData) {
        return React.createElement(React.Fragment, null,
            headlessContentData.type,
            " has no Template");
    },
    text: function (headlessContentData) { return React.createElement(Text, { data: headlessContentData.content }); },
    html: function (headlessContentData) { return React.createElement(Html, { data: headlessContentData.content }); },
    textpic: function (headlessContentData) { return React.createElement(Textpic, { data: headlessContentData.content }); },
    image: function (headlessContentData) { return React.createElement(Image, { data: headlessContentData.content }); },
    shortcut: function (headlessContentData) { return React.createElement(Shortcut, { data: headlessContentData.content }); },
    div: function (headlessContentData) { return React.createElement(Div, { data: headlessContentData.content }); },
    uploads: function (headlessContentData) { return React.createElement(Uploads, { data: headlessContentData.content }); },
    // table: (headlessContentData, args = {}) => <CE.Table data={headlessContentData.content}/>,
    // menu_sitemap: (headlessContentData, args = {}) => <CE.MenuSitemap data={headlessContentData.content}/>
    // textmedia: (headlessContentData, args = {}) => <CE.Textmedia data={headlessContentData.content}/>,
    //imageModal: (headlessContentData, args = {}) => <CE.ImageModal data={headlessContentData.content}/>,
    // bullets: (headlessContentData, args = {}) => <CE.Bullets data={headlessContentData.content}/>,
    // image: (headlessContentData, args = {}) => <CE.Image data={headlessContentData.content}/>,
};
var TYPO3Page = function (props) {
    var _pageLayouts = Object.assign({}, pageLayouts, props.pageLayouts);
    var _pageTemplates = Object.assign({}, pageTemplates, props.pageTemplates);
    var _contentElementLayouts = Object.assign({}, contentElementLayouts, props.contentElementLayouts);
    var _contentElementTemplates = Object.assign({}, contentElementTemplates, props.contentElementTemplates);
    return React.createElement(TYPO3PageContext.Provider, { value: {
            headlessData: props.headlessData,
            pageLayouts: _pageLayouts,
            pageTemplates: _pageTemplates,
            contentElementLayouts: _contentElementLayouts,
            contentElementTemplates: _contentElementTemplates,
            additionalParams: props.additionalParams,
        } },
        React.createElement(Page, null));
};
TYPO3Page.defaultProps = {
    pageLayouts: null,
    pageTemplates: null,
    contentElementLayouts: null,
    contentElementTemplates: null,
    additionalParams: null,
};
var TYPO3Page$1 = React.memo(TYPO3Page);

export { Content, Page, section as Section, TYPO3Page$1 as TYPO3Page, TYPO3PageContext };
//# sourceMappingURL=index.es.js.map
