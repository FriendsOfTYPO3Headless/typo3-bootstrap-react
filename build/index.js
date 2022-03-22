'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var RBT = require('react-bootstrap');
var Lightbox = require('react-image-lightbox');
var FigureImage = require('react-bootstrap/FigureImage');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var RBT__namespace = /*#__PURE__*/_interopNamespace(RBT);
var Lightbox__default = /*#__PURE__*/_interopDefaultLegacy(Lightbox);
var FigureImage__default = /*#__PURE__*/_interopDefaultLegacy(FigureImage);

var section = function (props) {
    if (props.pageTemplate.hasOwnProperty(props.name)) {
        return props.pageTemplate[props.name];
    }
    return React__default["default"].createElement(React__default["default"].Fragment, null);
};

var __GenericLayout = function (props) {
    var genericSections = Object.keys(props.pageTemplate).map(function (sectionName) {
        return React__default["default"].createElement("section", { key: sectionName, className: sectionName },
            React__default["default"].createElement(section, { name: sectionName, pageTemplate: props.pageTemplate }));
    });
    return React__default["default"].createElement("div", { className: 'backendlayout-' + props.headlessData.appearance.backendLayout }, genericSections);
};

var TYPO3PageContext = React__default["default"].createContext(null);

var Page = function (props) {
    var context = React__default["default"].useContext(TYPO3PageContext);
    var pageLayout;
    if (context.pageLayouts.hasOwnProperty(context.headlessData.appearance.layout)) {
        pageLayout = context.pageLayouts[context.headlessData.appearance.layout];
    }
    else if (context.pageLayouts.hasOwnProperty('__generic')) {
        pageLayout = context.pageLayouts.__generic;
    }
    else {
        return React__default["default"].createElement(React__default["default"].Fragment, null,
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
        return React__default["default"].createElement(React__default["default"].Fragment, null,
            "Page-template not found: ",
            context.headlessData.appearance.backendLayout,
            " ");
    }
    return pageLayout(context.headlessData, pageTemplate);
};

var RenderContent = function (contentData) {
    var _a = React__default["default"].useContext(TYPO3PageContext), contentElementLayouts = _a.contentElementLayouts, contentElementTemplates = _a.contentElementTemplates;
    var layout;
    if (contentElementLayouts.hasOwnProperty(contentData.appearance.layout)) {
        layout = contentElementLayouts[contentData.appearance.layout];
    }
    else if (contentElementLayouts.hasOwnProperty('__generic')) {
        layout = contentElementLayouts.__generic;
    }
    else {
        return React__default["default"].createElement(React__default["default"].Fragment, null,
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
        return React__default["default"].createElement(React__default["default"].Fragment, null,
            "CE-template not found: ",
            contentData.type,
            " ");
    }
    return React__default["default"].createElement(React__default["default"].Fragment, { key: contentData.id }, layout({ children: template(contentData), content: contentData }));
}; //, args: _args

var PREFIX_COLPOS = 'colPos';
var Content = function (props) {
    var context = React__default["default"].useContext(TYPO3PageContext);
    var content = React__default["default"].createElement(React__default["default"].Fragment, null);
    if (context.headlessData.content.hasOwnProperty(PREFIX_COLPOS + props.colPos)) {
        content = context.headlessData.content[PREFIX_COLPOS + props.colPos].map(function (content) {
            return RenderContent(content);
        });
    }
    return content;
};

var HeaderLink = function (props) {
    if (props.headerLink === null || typeof props.headerLink === 'string') {
        return React__default["default"].createElement(React__default["default"].Fragment, null, props.children);
    }
    return React__default["default"].createElement("a", { href: props.headerLink.url }, props.children);
};

var Header$1 = function (props) {
    switch (props.layout) {
        case 1:
            return React__default["default"].createElement("h1", { className: props.class + ' ' + props.positionClass },
                React__default["default"].createElement(HeaderLink, { headerLink: props.headerLink },
                    React__default["default"].createElement("span", null, props.header)));
        case 3:
            return React__default["default"].createElement("h3", { className: props.class + ' ' + props.positionClass },
                React__default["default"].createElement(HeaderLink, { headerLink: props.headerLink },
                    React__default["default"].createElement("span", null, props.header)));
        case 4:
            return React__default["default"].createElement("h4", { className: props.class + ' ' + props.positionClass },
                React__default["default"].createElement(HeaderLink, { headerLink: props.headerLink },
                    React__default["default"].createElement("span", null, props.header)));
        case 5:
            return React__default["default"].createElement("h5", { className: props.class + ' ' + props.positionClass },
                React__default["default"].createElement(HeaderLink, { headerLink: props.headerLink },
                    React__default["default"].createElement("span", null, props.header)));
        case 100:
            return React__default["default"].createElement(React__default["default"].Fragment, null);
        default:
            return React__default["default"].createElement("h2", { className: props.class + ' ' + props.positionClass },
                React__default["default"].createElement(HeaderLink, { headerLink: props.headerLink },
                    React__default["default"].createElement("span", null, props.header)));
    }
};
Header$1.defaultProps = {
    class: 'element-header',
    headerLink: null
};

var Subheader = function (props) {
    switch (props.layout) {
        case 1:
            return React__default["default"].createElement("h2", { className: props.class + ' ' + props.positionClass },
                React__default["default"].createElement(HeaderLink, { headerLink: props.headerLink },
                    React__default["default"].createElement("span", null, props.header)));
        case 3:
            return React__default["default"].createElement("h4", { className: props.class + ' ' + props.positionClass },
                React__default["default"].createElement(HeaderLink, { headerLink: props.headerLink },
                    React__default["default"].createElement("span", null, props.header)));
        case 4:
            return React__default["default"].createElement("h5", { className: props.class + ' ' + props.positionClass },
                React__default["default"].createElement(HeaderLink, { headerLink: props.headerLink },
                    React__default["default"].createElement("span", null, props.header)));
        case 5:
            return React__default["default"].createElement("h6", { className: props.class + ' ' + props.positionClass },
                React__default["default"].createElement(HeaderLink, { headerLink: props.headerLink },
                    React__default["default"].createElement("span", null, props.header)));
        case 100:
            return React__default["default"].createElement(React__default["default"].Fragment, null);
        default:
            return React__default["default"].createElement("h3", { className: props.class + ' ' + props.positionClass },
                React__default["default"].createElement(HeaderLink, { headerLink: props.headerLink },
                    React__default["default"].createElement("span", null, props.header)));
    }
};
Subheader.defaultProps = {
    class: 'element-subheader',
    headerLink: null
};

var HeaderDate = function (props) {
    //TODO: Date initialisieren, toLocaleDateString...
    return React__default["default"].createElement("p", { className: props.positionClass }, props.date);
};

var AllHeader = function (props) {
    var _a = props.data.content, header = _a.header, subheader = _a.subheader, date = _a.date, headerPosition = _a.headerPosition, headerLink = _a.headerLink, headerLayout = _a.headerLayout;
    var content = React__default["default"].createElement(React__default["default"].Fragment, null);
    if (props.data.content.hasOwnProperty('headerLayout') && headerLayout !== 100) {
        if (header !== '' || subheader !== '' || date !== '') {
            content = React__default["default"].createElement("div", { className: "frame-header" },
                header.length > 0 &&
                    React__default["default"].createElement(Header$1, { layout: headerLayout, positionClass: headerPosition ? 'text-' + headerPosition : '', header: header, headerLink: headerLink !== '' ? headerLink : null }),
                subheader.length > 0 &&
                    React__default["default"].createElement(Subheader, { layout: headerLayout, positionClass: headerPosition ? 'text-' + headerPosition : '', header: subheader, headerLink: headerLink !== '' ? headerLink : null }),
                date.length > 0 &&
                    React__default["default"].createElement(HeaderDate, { date: date, positionClass: headerPosition ? 'text-' + headerPosition : '' }));
        }
    }
    return content;
};

var Text = function (props) {
    var bodytext = props.data.content.bodytext;
    return React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(AllHeader, { data: props.data }),
        React__default["default"].createElement("div", { dangerouslySetInnerHTML: { __html: bodytext } }),
        props.children);
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
        return React__default["default"].createElement(Lightbox__default["default"], { mainSrc: props.images[props.photoIndex], nextSrc: props.images[(props.photoIndex + 1) % props.images.length], prevSrc: props.images[(props.photoIndex + props.images.length - 1) % props.images.length], onCloseRequest: onClose, onMovePrevRequest: prevSrc, onMoveNextRequest: nextSrc });
    }
    return React__default["default"].createElement(React__default["default"].Fragment, null);
};

var Image$2 = function (props) {
    var file = props.file, className = props.className;
    var crops = Object.keys(file.properties.crop);
    var sources = crops.map(function (cropIdentifier, index) {
        var src;
        var media;
        switch (cropIdentifier) {
            case 'extrasmall':
                media = '(max-width: 575px)';
                src = file.cropVariants ? file.cropVariants.extrasmall.publicUrl : file.publicUrl;
                break;
            case 'small':
                media = '(min-width: 576px)';
                src = file.cropVariants ? file.cropVariants.small.publicUrl : file.publicUrl;
                break;
            case 'medium':
                media = '(min-width: 768px)';
                src = file.cropVariants ? file.cropVariants.medium.publicUrl : file.publicUrl;
                break;
            case 'large':
                media = '(min-width: 992px)';
                src = file.cropVariants ? file.cropVariants.large.publicUrl : file.publicUrl;
                break;
            default:
                media = '(min-width: 1200px)';
                src = file.cropVariants ? file.cropVariants.default.publicUrl : file.publicUrl;
                break;
        }
        return React__default["default"].createElement("source", { key: index, srcSet: src, media: media });
    });
    var cssClasses = 'img-fluid';
    if (className) {
        cssClasses += ' ' + className;
    }
    return React__default["default"].createElement("picture", null,
        sources,
        React__default["default"].createElement(FigureImage__default["default"], { loading: "lazy", className: cssClasses, src: file.publicUrl, title: file.properties.title, alt: file.properties.alternative }));
};

var Image$1 = function (props) {
    var file = props.file, className = props.className;
    var caption = file.properties.description ?
        React__default["default"].createElement(RBT.Figure.Caption, { className: "caption" }, file.properties.description) : React__default["default"].createElement(React__default["default"].Fragment, null);
    return React__default["default"].createElement(RBT.Figure, { className: 'image' },
        React__default["default"].createElement(Image$2, { file: file, className: className }),
        caption);
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
    var _a = React.useState(false), showLightbox = _a[0], setShowlightbox = _a[1];
    var _b = React.useState(0), photoIndex = _b[0], setPhotoIndex = _b[1];
    var images = imageUris(props.data);
    return React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(ImageLightbox, { images: images, setShowLightbox: setShowlightbox, showLightbox: showLightbox, photoIndex: photoIndex, setPhotoIndex: setPhotoIndex }),
        Object.keys(props.data.gallery.rows).map(function (rowKey) {
            return Object.keys(props.data.gallery.rows[rowKey].columns).map(function (columnKey) {
                var file = props.data.gallery.rows[rowKey].columns[columnKey];
                var image = React__default["default"].createElement(Image$1, { file: file });
                return React__default["default"].createElement(RBT.Col, { className: "gallery-item  gallery-item-size-" + props.data.gallery.count.columns, key: rowKey + '-' + columnKey }, props.data.enlargeImageOnClick ?
                    React__default["default"].createElement("a", { onClick: function (e) {
                            e.preventDefault();
                            setPhotoIndex(images.indexOf(file.publicUrl));
                            setShowlightbox(true);
                            return true;
                        }, href: file.publicUrl }, image) : image);
            });
        }));
};

var Textpic = function (props) {
    var textpicClassName = '';
    if (props.data.content.gallery.position.horizontal === 'left' || props.data.content.gallery.position.horizontal === 'right') {
        textpicClassName = props.data.content.gallery.position.horizontal;
    }
    if (props.data.content.gallery.position.horizontal === 'center') {
        textpicClassName = props.data.content.gallery.position.vertical;
    }
    return React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: "textpic" },
            React__default["default"].createElement("div", { className: "gallery-row" },
                React__default["default"].createElement(RBT.Row, { className: "textpic textpic-" + textpicClassName },
                    React__default["default"].createElement(RBT.Col, { className: "textpic-item textpic-gallery", md: textpicClassName === props.data.content.gallery.position.vertical ? "auto" : "6" },
                        React__default["default"].createElement(RBT.Row, null,
                            React__default["default"].createElement(ImageCols, { data: props.data.content }))),
                    React__default["default"].createElement(RBT.Col, { className: "textpic-item textpic-text", md: "6" },
                        React__default["default"].createElement(AllHeader, { data: props.data }),
                        React__default["default"].createElement("div", { dangerouslySetInnerHTML: { __html: props.data.content.bodytext } }),
                        props.children)))));
};

var Image = function (props) {
    return React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: "image" },
            React__default["default"].createElement(AllHeader, { data: props.data }),
            React__default["default"].createElement("div", { className: "gallery-row" },
                React__default["default"].createElement(RBT.Row, null,
                    React__default["default"].createElement(ImageCols, { data: props.data.content })))),
        props.children);
};

var Div = function (props) {
    return React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(AllHeader, { data: props.data }),
        React__default["default"].createElement("div", { className: "div" },
            React__default["default"].createElement("hr", null)),
        props.children);
};

var Textmedia = function (props) {
    var textmediaClassName;
    if (props.data.content.gallery.position.horizontal === 'left' || props.data.content.gallery.position.horizontal === 'right') {
        textmediaClassName = props.data.content.gallery.position.horizontal;
    }
    if (props.data.content.gallery.position.horizontal === 'center') {
        textmediaClassName = props.data.content.gallery.position.vertical;
    }
    return React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: "textmedia" },
            React__default["default"].createElement("div", { className: "gallery-row" },
                React__default["default"].createElement(RBT.Row, { className: "textmedia textmedia-" + textmediaClassName },
                    React__default["default"].createElement(RBT.Col, { className: "textmedia-item textmedia-gallery", md: textmediaClassName === props.data.content.gallery.position.vertical ? "auto" : "6" },
                        React__default["default"].createElement(RBT.Row, null, Object.keys(props.data.content.gallery.rows).map(function (rowKey) {
                            return Object.keys(props.data.content.gallery.rows[rowKey].columns).map(function (columnKey) {
                                switch (props.data.content.gallery.rows[rowKey].columns[columnKey].properties.mimeType) {
                                    case 'video/youtube':
                                        return React__default["default"].createElement(RBT.Col, { className: "gallery-item  gallery-item-size-" + props.data.content.gallery.count.columns },
                                            React__default["default"].createElement("iframe", { src: props.data.content.gallery.rows[rowKey].columns[columnKey].publicUrl, className: "embed-responsive-item" }),
                                            props.data.content.gallery.rows[rowKey].columns[columnKey].properties.description);
                                    case 'image/jpeg':
                                        return React__default["default"].createElement(RBT.Col, { className: "gallery-item  gallery-item-size-" + props.data.content.gallery.count.columns },
                                            React__default["default"].createElement("img", { src: props.data.content.gallery.rows[rowKey].columns[columnKey].publicUrl, className: "embed-responsive-item", alt: props.data.content.gallery.rows[rowKey].columns[columnKey].properties.title }),
                                            props.data.content.gallery.rows[rowKey].columns[columnKey].properties.description);
                                    case 'image/svg+xml':
                                        return React__default["default"].createElement(RBT.Col, { className: "gallery-item  gallery-item-size-" + props.data.content.gallery.count.columns },
                                            React__default["default"].createElement("img", { src: props.data.content.gallery.rows[rowKey].columns[columnKey].publicUrl, className: "embed-responsive-item", alt: props.data.content.gallery.rows[rowKey].columns[columnKey].properties.title }),
                                            props.data.content.gallery.rows[rowKey].columns[columnKey].properties.description);
                                    case 'video/mp4':
                                        return React__default["default"].createElement(RBT.Col, { className: "gallery-item  gallery-item-size-" + props.data.content.gallery.count.columns },
                                            React__default["default"].createElement("video", { controls: true },
                                                React__default["default"].createElement("source", { type: "video/mp4", src: props.data.content.gallery.rows[rowKey].columns[columnKey].publicUrl })),
                                            props.data.content.gallery.rows[rowKey].columns[columnKey].properties.description);
                                    case 'video/vimeo':
                                        return React__default["default"].createElement(RBT.Col, { className: "gallery-item  gallery-item-size-" + props.data.content.gallery.count.columns },
                                            React__default["default"].createElement("video", { controls: true },
                                                React__default["default"].createElement("source", { type: "video/mp4", src: props.data.content.gallery.rows[rowKey].columns[columnKey].publicUrl })),
                                            props.data.content.gallery.rows[rowKey].columns[columnKey].properties.description);
                                    default:
                                        return React__default["default"].createElement(React__default["default"].Fragment, null);
                                }
                            });
                        }))),
                    React__default["default"].createElement(RBT.Col, { className: "textmedia-item textmedia-text" },
                        React__default["default"].createElement(AllHeader, { data: props.data }),
                        React__default["default"].createElement("div", { dangerouslySetInnerHTML: { __html: props.data.content.bodytext } }),
                        props.children)))));
};

var Shortcut = function (props) {
    return React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(AllHeader, { data: props.data }),
        React__default["default"].createElement("div", { className: "shortcut" }, props.data.content.shortcut.map(function (cObject) {
            return RenderContent(cObject);
        })),
        props.children);
};

var Html = function (props) {
    return React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(AllHeader, { data: props.data }),
        React__default["default"].createElement("div", { dangerouslySetInnerHTML: { __html: props.data.content.bodytext } }),
        props.children);
};

var Uploads = function (props) {
    return React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(AllHeader, { data: props.data }),
        React__default["default"].createElement("div", { className: "uploads" },
            React__default["default"].createElement("ul", { className: "media-list filelink-list" }, Object.keys(props.data.content.media).map(function (key) {
                var description = props.data.content.displayDescription === '1' ?
                    React__default["default"].createElement("p", { className: 'filelink-filedescription' }, props.data.content.media[key].properties.description) : null;
                var filesize = props.data.content.displayFileSizeInformation === '1' ?
                    React__default["default"].createElement("span", { className: 'filelink-filesize ms-2 small' }, props.data.content.media[key].properties.size) : null;
                var title = props.data.content.media[key].properties.title;
                if (title === null || title === '') {
                    title = props.data.content.media[key].properties.filename;
                }
                var heading = function (contentBefore) {
                    if (contentBefore === void 0) { contentBefore = null; }
                    return React__default["default"].createElement("span", { className: 'title' },
                        React__default["default"].createElement("h5", { className: 'filelink-heading ' },
                            React__default["default"].createElement("a", { href: props.data.content.media[key].publicUrl },
                                contentBefore,
                                title),
                            filesize));
                };
                var content;
                switch (props.data.content.displayInformation) {
                    case "1":
                        content = React__default["default"].createElement(React__default["default"].Fragment, null,
                            heading(props.data.content.media[key].properties.type === 'video' ?
                                React__default["default"].createElement("i", { className: "bi bi-camera-video-fill me-2" }) :
                                React__default["default"].createElement("i", { className: "bi bi-file-image me-2" })),
                            description);
                        break;
                    case "2":
                        var media = null;
                        switch (props.data.content.media[key].properties.type) {
                            case 'video':
                                media = React__default["default"].createElement("iframe", { src: props.data.content.media[key].publicUrl, className: 'mw-100' });
                                break;
                            //TODO: add preview for application/*
                            case 'application':
                                if (props.data.content.media[key].properties.mimeType === 'application/pdf') {
                                    media =
                                        React__default["default"].createElement("iframe", { src: props.data.content.media[key].publicUrl, className: 'mw-100' });
                                }
                                break;
                            default:
                                media =
                                    React__default["default"].createElement("img", { src: props.data.content.media[key].publicUrl, alt: title, className: 'img-fluid' });
                        }
                        content = React__default["default"].createElement(RBT.Row, null,
                            React__default["default"].createElement(RBT.Col, { className: 'filelink-media', xs: 3, sm: 3, md: 3, lg: 2, xl: 2, xxl: 2 }, media),
                            React__default["default"].createElement(RBT.Col, { className: 'filelink-body' },
                                heading(),
                                description));
                        break;
                    default:
                        content = React__default["default"].createElement(React__default["default"].Fragment, null,
                            heading(),
                            description);
                }
                return React__default["default"].createElement("li", { className: 'filelink-item mb-2', key: key }, content);
            }))),
        props.children);
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

var Type = function (props) {
    var file = props.file; props.data;
    var fileType = file.properties.type;
    if (!isNaN(+file.properties.type)) {
        var fileExtension_1 = file.properties.filename.split('.').pop();
        if (['jpg', 'png'].some(function (type) { return type === fileExtension_1; })) {
            fileType = 'image';
        }
    }
    switch (fileType) {
        case 'image':
            return React__default["default"].createElement(Image$1, { file: file });
        default:
            return React__default["default"].createElement(RBT.Alert, { variant: "info" },
                "Filetype unknown ",
                file.properties.filename);
    }
};

var Gallery = function (props) {
    var _a = props.data.content, items = _a.items, imagecols = _a.imagecols;
    var galleryItems = items.map(function (image, index) {
        return React__default["default"].createElement(RBT.Col, { key: "".concat(index), className: "gallery-item gallery-item-size-".concat(imagecols), md: imagecols },
            React__default["default"].createElement(Type, { data: props.data, file: image }));
    });
    return React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(AllHeader, { data: props.data }),
        React__default["default"].createElement("div", { className: 'gallery-row' }, galleryItems),
        props.children);
};

var Accordion = function (props) {
    var _a;
    var accordionItems = props.data.content.items;
    var activeElement = (_a = props.data.flexform.default_element) !== null && _a !== void 0 ? _a : '';
    if (!accordionItems || accordionItems.length < 0) {
        return React__default["default"].createElement(React__default["default"].Fragment, null);
    }
    var accorditionItemsTemplate = accordionItems.map(function (accordionItem, index) {
        var galleryTemplate = React__default["default"].createElement(React__default["default"].Fragment, null);
        if (accordionItem.media.length > 0) {
            galleryTemplate = React__default["default"].createElement(Gallery, { data: { content: __assign({ items: accordionItem.media }, accordionItem) } });
        }
        return React__default["default"].createElement(RBT.Accordion.Item, { key: accordionItem.id, eventKey: accordionItem.id.toString() },
            React__default["default"].createElement(RBT.Accordion.Header, { as: "h4", id: "accordion-heading-".concat(accordionItem.id) },
                React__default["default"].createElement("span", { className: "accordion-title-link-text" }, accordionItem.header)),
            React__default["default"].createElement(RBT.Accordion.Body, null,
                React__default["default"].createElement("div", { className: "accordion-content accordion-content-".concat(accordionItem.mediaorient) },
                    galleryTemplate,
                    React__default["default"].createElement("div", { className: 'accordion-content-item accordion-content-text', dangerouslySetInnerHTML: { __html: accordionItem.bodytext } }))));
    });
    return React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(AllHeader, { data: props.data }),
        React__default["default"].createElement(RBT.Accordion, { defaultActiveKey: activeElement }, accorditionItemsTemplate),
        props.children);
};

var defaultProperties = {
    href: '',
    target: '',
    className: 'btn-link',
    title: '',
    linkText: '',
    additionalAttributes: []
};
var Link = function (props) {
    var href = props.href, target = props.target, className = props.className, title = props.title, linkText = props.linkText; props.additionalAttributes;
    return React__default["default"].createElement("a", { href: href, target: target, className: "btn ".concat(className), title: title }, linkText);
};
Link.defaultProps = defaultProperties;

var CardGroup = function (props) {
    var items = props.data.content.items;
    var flexform = props.data.flexform;
    var cards = items.map(function (cardData, index_number) {
        var header = cardData.header, subheader = cardData.subheader, bodytext = cardData.bodytext, image = cardData.image, link = cardData.link, linkTitle = cardData.linkTitle, linkClass = cardData.linkClass;
        var imageTemplate = image ? image.map(function (imageData, index) { return React__default["default"].createElement(RBT.Card.Img, { key: "image-data-".concat(index), variant: "top", src: imageData.publicUrl }); }) : React__default["default"].createElement(React__default["default"].Fragment, null);
        var linkButton = React__default["default"].createElement(React__default["default"].Fragment, null);
        if (link) {
            if (linkTitle && linkTitle.length > 0) {
                link.title = linkTitle;
            }
            if (linkClass && linkClass.length > 0) {
                link["class"] = "".concat(link["class"], " btn-").concat(linkClass);
            }
            linkButton = React__default["default"].createElement(Link, { href: link.href, title: link.title, className: link['class'], target: link.target, linkText: link.linkText });
        }
        return React__default["default"].createElement(RBT.Col, { key: "card-group-col-".concat(index_number) },
            React__default["default"].createElement(RBT.Card, null,
                header.length > 0 && React__default["default"].createElement(RBT.Card.Header, null, header),
                imageTemplate,
                React__default["default"].createElement(RBT.Card.Body, null,
                    subheader.length > 0 && React__default["default"].createElement(RBT.Card.Title, null, subheader),
                    bodytext.length > 0 && React__default["default"].createElement(RBT.Card.Text, { as: "div" },
                        React__default["default"].createElement("div", { dangerouslySetInnerHTML: { __html: bodytext } })),
                    linkButton)));
    });
    var alignment = 'justify-content-left';
    if (flexform.align.length > 0) {
        alignment = "justify-content-".concat(flexform.align);
    }
    return React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(AllHeader, { data: props.data }),
        React__default["default"].createElement(RBT.Row, { xs: 1, md: flexform.columns, className: "card-group ".concat(alignment) }, cards),
        props.children);
};

var TextColumns = function (props) {
    var bodytext = props.data.content.bodytext;
    return React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(AllHeader, { data: props.data }),
        React__default["default"].createElement("div", { className: "text-column" },
            React__default["default"].createElement("div", { dangerouslySetInnerHTML: { __html: bodytext } })),
        props.children);
};

var Quote = function (props) {
    var _a = props.data.content, bodytext = _a.bodytext, quoteSource = _a.quoteSource, quoteLink = _a.quoteLink;
    var sourceLink = function () {
        if (typeof quoteLink === 'object' && quoteLink !== null) {
            var href = quoteLink.href, target = quoteLink.target, title = quoteLink.title, linkText = quoteLink.linkText;
            var className = quoteLink['class'];
            return React__default["default"].createElement("span", null,
                "(",
                React__default["default"].createElement("a", { href: href, target: target, title: title, className: className }, linkText),
                ")");
        }
        return React__default["default"].createElement(React__default["default"].Fragment, null);
    };
    var bodyTemplate = function () {
        return (bodytext.length > 0) ?
            React__default["default"].createElement("blockquote", { className: 'blockquote', dangerouslySetInnerHTML: { __html: bodytext } }) : React__default["default"].createElement(React__default["default"].Fragment, null);
    };
    var figcaptionTemplate = function () {
        if (quoteSource.length > 0) {
            return React__default["default"].createElement("figcaption", { className: "blockquote-footer" },
                React__default["default"].createElement("cite", { title: quoteSource },
                    quoteSource,
                    sourceLink()));
        }
        return React__default["default"].createElement(React__default["default"].Fragment, null);
    };
    return React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(AllHeader, { data: props.data }),
        React__default["default"].createElement("figure", null,
            bodyTemplate(),
            figcaptionTemplate()),
        props.children);
};

var Header = function (props) {
    return React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(AllHeader, { data: props.data }),
        React__default["default"].createElement("div", { className: "header" }),
        props.children);
};

var carouselItem = function (itemHeadless, isFirst) {
    if (isFirst === void 0) { isFirst = false; }
    var itemType = itemHeadless.itemType, layout = itemHeadless.layout, image = itemHeadless.image;
    var item = React__default["default"].createElement(React__default["default"].Fragment, null);
    var itemClass = 'item carousel-item';
    if (isFirst) {
        itemClass += " active";
    }
    if (layout) {
        itemClass += " carousel-item-layout-".concat(layout);
    }
    if (itemType) {
        itemClass += " carousel-item-type-".concat(itemType);
    }
    switch (itemType) {
        case 'image':
            item = React__default["default"].createElement("div", { className: "carousel-image" },
                React__default["default"].createElement(Image$1, { file: image[0], className: '' }));
            break;
        default:
            item = React__default["default"].createElement("div", { className: 'carousel-text-inner' },
                React__default["default"].createElement(RBT.Alert, { variant: "danger" },
                    React__default["default"].createElement(RBT.Alert.Heading, null, "Templatetype unknown"),
                    React__default["default"].createElement("p", null,
                        itemType,
                        " has no Template")));
    }
    return React__default["default"].createElement(RBT__namespace.Carousel.Item, { key: image[0].publicUrl, className: itemClass },
        React__default["default"].createElement("div", { className: 'carousel-content' },
            React__default["default"].createElement("div", { className: 'carousel-content-inner' }, item)));
};
var Carousel = function (props) {
    var _a = props.data, content = _a.content; _a.type; var flexform = _a.flexform;
    content.header; content.subheader; var items = content.items;
    var _b = React.useState(0); _b[0]; _b[1];
    var itemsTemplate = items.map(function (itemHeadless, index) {
        return carouselItem(itemHeadless, index === 0);
    });
    return React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(AllHeader, { data: props.data }),
        React__default["default"].createElement(RBT__namespace.Carousel, { fade: flexform.transition === 'fade', interval: flexform.interval, wrap: flexform.wrap }, itemsTemplate));
};

var ContentElements = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Text: Text,
    Html: Html,
    Textpic: Textpic,
    Image: Image,
    ImageLightbox: Image,
    Div: Div,
    Shortcut: Shortcut,
    Textmedia: Textmedia,
    Uploads: Uploads,
    Accordion: Accordion,
    Gallery: Gallery,
    CardGroup: CardGroup,
    TextColumns: TextColumns,
    Quote: Quote,
    Header: Header,
    Carousel: Carousel
});

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
    return React__default["default"].createElement("div", { className: "frame-backgroundimage-container" },
        React__default["default"].createElement("div", { id: backgroundImageIdentifier, className: backgroundImageClasses, style: { backgroundImage: 'url("' + backgroundImageObject.publicUrl + '")' } }));
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
        content = React__default["default"].createElement("div", { id: "c" + props.data.id, className: "frame frame-size-default " +
                frameClass + " " +
                typeClass + " " +
                layoutClass + " " +
                backgroundClass + " " +
                backgroundImageClass + " " +
                spaceBeforeClass + " " +
                spaceAfterClass },
            React__default["default"].createElement(BackgroundImage, { data: props.data }),
            React__default["default"].createElement("div", { className: "frame-container" },
                React__default["default"].createElement("div", { className: "frame-inner" },
                    props.data._localizedUid ? React__default["default"].createElement("a", { id: "c" + props.data._localizedUid }) : null,
                    props.children)));
    }
    else {
        content = React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement("a", { id: "c" + props.data.id }),
            props.data._localizedUid ? React__default["default"].createElement("a", { id: "c" + props.data._localizedUid }) : null,
            props.data.appearance.spaceBefore ? React__default["default"].createElement("div", { className: spaceBeforeClass }) : null,
            props.children,
            props.data.appearance.spaceAfter ? React__default["default"].createElement("div", { className: spaceAfterClass }) : null);
    }
    return content;
};

var FooterContent = function () {
    return React__default["default"].createElement("footer", { className: "section footer-section footer-section-content" },
        React__default["default"].createElement(RBT.Container, null,
            React__default["default"].createElement(RBT.Row, null,
                React__default["default"].createElement(RBT.Col, { className: "footer-section-content-column footer-section-content-column-left" },
                    React__default["default"].createElement(Content, { colPos: '10' })),
                React__default["default"].createElement(RBT.Col, { className: " footer-section-content-column footer-section-content-column-middle" },
                    React__default["default"].createElement(Content, { colPos: '11' })),
                React__default["default"].createElement(RBT.Col, { className: " footer-section-content-column footer-section-content-column-right" },
                    React__default["default"].createElement(Content, { colPos: '12' })))));
};

var getGridElement = function (element, content, contentElementLayouts, contentElementTemplates, index) {
    var _a, _b;
    switch (element.type) {
        case 'row':
            var children = element.children.map(function (child, index) {
                return getGridElement(child, content, contentElementLayouts, contentElementTemplates, index);
            });
            return React__default["default"].createElement(RBT.Row, { as: (_a = element.tag) !== null && _a !== void 0 ? _a : 'div', key: index }, children);
        case 'col':
            return React__default["default"].createElement(RBT.Col, { as: (_b = element.tag) !== null && _b !== void 0 ? _b : 'div', lg: element.colspan, md: element.colspan, sm: element.colspan, xl: element.colspan, key: index },
                React__default["default"].createElement(Content, { colPos: element.colPos }));
        default:
            return React__default["default"].createElement(React__default["default"].Fragment, null);
    }
};
var GenericPage = function () {
    var context = React__default["default"].useContext(TYPO3PageContext);
    var content = React__default["default"].createElement(React__default["default"].Fragment, null);
    if (context.headlessData.appearance.pageContentRows) {
        content = context.headlessData.appearance.pageContentRows.map(function (gridElement, index) {
            return getGridElement(gridElement, context.headlessData.content, context.contentElementLayouts, context.contentElementTemplates, index);
        });
    }
    return content;
};

var pageLayouts = {
    //TODO: implement example
    'layout-0': function (headlessData, pageTemplate) { return React__default["default"].createElement("div", { className: 'backendlayout-' + headlessData.appearance.backendLayout },
        React__default["default"].createElement("header", null),
        React__default["default"].createElement("section", null,
            React__default["default"].createElement(section, { name: 'main', pageTemplate: pageTemplate })),
        React__default["default"].createElement("footer", null,
            React__default["default"].createElement(section, { name: 'footer', pageTemplate: pageTemplate }))); },
    __generic: function (headlessData, pageTemplate) { return React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(__GenericLayout, { headlessData: headlessData, pageTemplate: pageTemplate })); },
    Default: function (headlessData, pageTemplate) { return React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(__GenericLayout, { headlessData: headlessData, pageTemplate: pageTemplate })); }
};
var pageTemplates = {
    __generic: {
        main: React__default["default"].createElement(GenericPage, null)
    },
    default: {
        border: React__default["default"].createElement(RBT.Row, null,
            React__default["default"].createElement(RBT.Col, null,
                React__default["default"].createElement(Content, { colPos: '3' }))),
        main: React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement(RBT.Row, null,
                React__default["default"].createElement(RBT.Col, null,
                    React__default["default"].createElement(Content, { colPos: '8' }))),
            React__default["default"].createElement("div", { className: "section section-default" },
                React__default["default"].createElement(RBT.Row, null,
                    React__default["default"].createElement(RBT.Col, null,
                        React__default["default"].createElement(Content, { colPos: '0' })))),
            React__default["default"].createElement(RBT.Row, null,
                React__default["default"].createElement(RBT.Col, null,
                    React__default["default"].createElement(Content, { colPos: '9' })))),
        footer: React__default["default"].createElement(FooterContent, null),
    },
    simple: {
        border: React__default["default"].createElement(RBT.Row, null,
            React__default["default"].createElement(RBT.Col, null,
                React__default["default"].createElement(Content, { colPos: '3' }))),
        main: React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement(RBT.Row, null,
                React__default["default"].createElement(RBT.Col, null,
                    React__default["default"].createElement(Content, { colPos: '8' }))),
            React__default["default"].createElement("div", { className: "section section-default" },
                React__default["default"].createElement(RBT.Row, null,
                    React__default["default"].createElement(RBT.Col, null,
                        React__default["default"].createElement(Content, { colPos: '0' })))),
            React__default["default"].createElement(RBT.Row, null,
                React__default["default"].createElement(RBT.Col, null,
                    React__default["default"].createElement(Content, { colPos: '9' })))),
    },
    '2_columns': {
        border: React__default["default"].createElement(RBT.Row, null,
            React__default["default"].createElement(RBT.Col, null,
                React__default["default"].createElement(Content, { colPos: '3' }))),
        main: React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement(RBT.Row, null,
                React__default["default"].createElement(RBT.Col, null,
                    React__default["default"].createElement(Content, { colPos: '8' }))),
            React__default["default"].createElement("div", { className: "section section-default" },
                React__default["default"].createElement(RBT.Container, null,
                    React__default["default"].createElement(RBT.Row, null,
                        React__default["default"].createElement(RBT.Col, { md: "8", as: "main", className: " maincontent-wrap", role: "main" },
                            React__default["default"].createElement(Content, { colPos: '0' })),
                        React__default["default"].createElement(RBT.Col, { className: " subcontent-wrap ", md: "4" },
                            React__default["default"].createElement(Content, { colPos: '2' }))))),
            React__default["default"].createElement(RBT.Row, null,
                React__default["default"].createElement(RBT.Col, null,
                    React__default["default"].createElement(Content, { colPos: '9' })))),
        footer: React__default["default"].createElement(FooterContent, null),
    },
    '2_columns_25_75': {
        border: React__default["default"].createElement(RBT.Row, null,
            React__default["default"].createElement(RBT.Col, null,
                React__default["default"].createElement(Content, { colPos: '3' }))),
        main: React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement(RBT.Row, null,
                React__default["default"].createElement(RBT.Col, null,
                    React__default["default"].createElement(Content, { colPos: '8' }))),
            React__default["default"].createElement("div", { className: "section section-default" },
                React__default["default"].createElement(RBT.Container, null,
                    React__default["default"].createElement(RBT.Row, null,
                        React__default["default"].createElement(RBT.Col, { md: "8", as: "main", className: " maincontent-wrap", role: "main" },
                            React__default["default"].createElement(Content, { colPos: '0' })),
                        React__default["default"].createElement(RBT.Col, { className: " subcontent-wrap", md: "4" },
                            React__default["default"].createElement(Content, { colPos: '1' }))))),
            React__default["default"].createElement(RBT.Row, null,
                React__default["default"].createElement(RBT.Col, null,
                    React__default["default"].createElement(Content, { colPos: '9' })))),
        footer: React__default["default"].createElement(FooterContent, null),
    },
    '2_columns_50_50': {
        border: React__default["default"].createElement(RBT.Row, null,
            React__default["default"].createElement(RBT.Col, null,
                React__default["default"].createElement(Content, { colPos: '3' }))),
        main: React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement(RBT.Row, null,
                React__default["default"].createElement(RBT.Col, null,
                    React__default["default"].createElement(Content, { colPos: '8' }))),
            React__default["default"].createElement("div", { className: "section section-default" },
                React__default["default"].createElement(RBT.Container, null,
                    React__default["default"].createElement(RBT.Row, null,
                        React__default["default"].createElement(RBT.Col, { md: "6", as: "main", className: " maincontent-wrap", role: "main" },
                            React__default["default"].createElement(Content, { colPos: '0' })),
                        React__default["default"].createElement(RBT.Col, { className: " subcontent-wrap ", md: "6" },
                            React__default["default"].createElement(Content, { colPos: '2' }))))),
            React__default["default"].createElement(RBT.Row, null,
                React__default["default"].createElement(RBT.Col, null,
                    React__default["default"].createElement(Content, { colPos: '9' })))),
        footer: React__default["default"].createElement(FooterContent, null),
    },
    '3_columns': {
        border: React__default["default"].createElement(RBT.Row, null,
            React__default["default"].createElement(RBT.Col, null,
                React__default["default"].createElement(Content, { colPos: '3' }))),
        main: React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement(RBT.Row, null,
                React__default["default"].createElement(RBT.Col, null,
                    React__default["default"].createElement(Content, { colPos: '8' }))),
            React__default["default"].createElement("div", { className: "section section-default" },
                React__default["default"].createElement(RBT.Container, null,
                    React__default["default"].createElement(RBT.Row, null,
                        React__default["default"].createElement(RBT.Col, { lg: "6", as: "main", className: " maincontent-wrap ", role: "main" },
                            React__default["default"].createElement(Content, { colPos: '0' })),
                        React__default["default"].createElement(RBT.Col, { className: " subcontent-wrap ", lg: "3" },
                            React__default["default"].createElement(Content, { colPos: '1' })),
                        React__default["default"].createElement(RBT.Col, { className: " subcontent-wrap ", lg: "3" },
                            React__default["default"].createElement(Content, { colPos: '2' }))))),
            React__default["default"].createElement(RBT.Row, null,
                React__default["default"].createElement(RBT.Col, null,
                    React__default["default"].createElement(Content, { colPos: '9' })))),
        footer: React__default["default"].createElement(FooterContent, null),
    },
    'special_feature': {
        border: React__default["default"].createElement(RBT.Row, null,
            React__default["default"].createElement(RBT.Col, null,
                React__default["default"].createElement(Content, { colPos: '3' }))),
        main: React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement(RBT.Row, null,
                React__default["default"].createElement(RBT.Col, null,
                    React__default["default"].createElement(Content, { colPos: '8' }))),
            React__default["default"].createElement("div", { className: "section section-default" },
                React__default["default"].createElement(RBT.Row, null,
                    React__default["default"].createElement(RBT.Col, null,
                        React__default["default"].createElement(Content, { colPos: '0' })))),
            React__default["default"].createElement("div", { className: "section section-primary" },
                React__default["default"].createElement(RBT.Container, null,
                    React__default["default"].createElement(RBT.Row, null,
                        React__default["default"].createElement(RBT.Col, { className: "section-column-half ", md: "6" },
                            React__default["default"].createElement(Content, { colPos: '30' })),
                        React__default["default"].createElement(RBT.Col, { className: "section-column-half ", md: "6" },
                            React__default["default"].createElement(Content, { colPos: '31' }))))),
            React__default["default"].createElement("div", { className: "section section-primary" },
                React__default["default"].createElement(RBT.Container, null,
                    React__default["default"].createElement(RBT.Row, null,
                        React__default["default"].createElement(RBT.Col, { className: "section-column-half ", md: "6" },
                            React__default["default"].createElement(Content, { colPos: '32' })),
                        React__default["default"].createElement(RBT.Col, { className: "section-column-half ", md: "6" },
                            React__default["default"].createElement(Content, { colPos: '33' }))))),
            React__default["default"].createElement("div", { className: "section section-default" },
                React__default["default"].createElement(RBT.Row, null,
                    React__default["default"].createElement(RBT.Col, null,
                        React__default["default"].createElement(Content, { colPos: '4' })))),
            React__default["default"].createElement("div", { className: "section section-light" },
                React__default["default"].createElement(RBT.Container, null,
                    React__default["default"].createElement(RBT.Row, null,
                        React__default["default"].createElement(RBT.Col, { className: "section-column-half ", md: "6" },
                            React__default["default"].createElement(Content, { colPos: '34' })),
                        React__default["default"].createElement(RBT.Col, { className: "section-column-half ", md: "6" },
                            React__default["default"].createElement(Content, { colPos: '35' }))))),
            React__default["default"].createElement("div", { className: "section section-light" },
                React__default["default"].createElement(RBT.Container, null,
                    React__default["default"].createElement(RBT.Row, null,
                        React__default["default"].createElement(RBT.Col, { className: "section-column-half ", md: "6" },
                            React__default["default"].createElement(Content, { colPos: '36' })),
                        React__default["default"].createElement(RBT.Col, { className: "section-column-half ", md: "6" },
                            React__default["default"].createElement(Content, { colPos: '37' }))))),
            React__default["default"].createElement(RBT.Row, null,
                React__default["default"].createElement(RBT.Col, null,
                    React__default["default"].createElement(Content, { colPos: '9' })))),
        footer: React__default["default"].createElement(FooterContent, null),
    },
    'special_start': {
        border: React__default["default"].createElement(RBT.Row, null,
            React__default["default"].createElement(RBT.Col, null,
                React__default["default"].createElement(Content, { colPos: '3' }))),
        main: React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement(RBT.Row, null,
                React__default["default"].createElement(RBT.Col, null,
                    React__default["default"].createElement(Content, { colPos: '8' }))),
            React__default["default"].createElement("div", { className: "section section-default" },
                React__default["default"].createElement(RBT.Container, null,
                    React__default["default"].createElement(RBT.Row, null,
                        React__default["default"].createElement(RBT.Col, { className: "section-column-third ", md: "4" },
                            React__default["default"].createElement(Content, { colPos: '20' })),
                        React__default["default"].createElement(RBT.Col, { className: "section-column-third ", md: "4" },
                            React__default["default"].createElement(Content, { colPos: '21' })),
                        React__default["default"].createElement(RBT.Col, { className: "section-column-third ", md: "4" },
                            React__default["default"].createElement(Content, { colPos: '22' }))))),
            React__default["default"].createElement("div", { className: "section section-light" },
                React__default["default"].createElement(RBT.Row, null,
                    React__default["default"].createElement(RBT.Col, null,
                        React__default["default"].createElement(Content, { colPos: '0' })))),
            React__default["default"].createElement(RBT.Row, null,
                React__default["default"].createElement(RBT.Col, null,
                    React__default["default"].createElement(Content, { colPos: '9' })))),
        footer: React__default["default"].createElement(FooterContent, null),
    },
};
var contentElementLayouts = {
    __generic: function (props) {
        return React__default["default"].createElement(Layout0, { data: props.content }, props.children);
    },
};
var contentElementTemplates = {
    //Resources/Private/Templates/ContentElements/**
    __generic: function (headlessContentData) {
        return React__default["default"].createElement(React__default["default"].Fragment, null,
            headlessContentData.type,
            " has no Template");
    },
    text: function (headlessContentData) { return React__default["default"].createElement(Text, { data: headlessContentData }); },
    html: function (headlessContentData) { return React__default["default"].createElement(Html, { data: headlessContentData }); },
    textpic: function (headlessContentData) { return React__default["default"].createElement(Textpic, { data: headlessContentData }); },
    image: function (headlessContentData) { return React__default["default"].createElement(Image, { data: headlessContentData }); },
    shortcut: function (headlessContentData) { return React__default["default"].createElement(Shortcut, { data: headlessContentData }); },
    div: function (headlessContentData) { return React__default["default"].createElement(Div, { data: headlessContentData }); },
    uploads: function (headlessContentData) { return React__default["default"].createElement(Uploads, { data: headlessContentData }); },
    accordion: function (headlessContentData) { return React__default["default"].createElement(Accordion, { data: headlessContentData }); },
    gallery: function (headlessContentData) { return React__default["default"].createElement(Gallery, { data: headlessContentData }); },
    textmedia: function (headlessContentData) { return React__default["default"].createElement(Textmedia, { data: headlessContentData }); },
    card_group: function (headlessContentData) { return React__default["default"].createElement(CardGroup, { data: headlessContentData }); },
    textcolumn: function (headlessContentData) { return React__default["default"].createElement(TextColumns, { data: headlessContentData }); },
    quote: function (headlessContentData) { return React__default["default"].createElement(Quote, { data: headlessContentData }); },
    header: function (headlessContentData) { return React__default["default"].createElement(Header, { data: headlessContentData }); },
    carousel: function (headlessContentData) { return React__default["default"].createElement(Carousel, { data: headlessContentData }); },
    // table: (headlessContentData, args = {}) => <CE.Table data={headlessContentData.content}/>,
    // menu_sitemap: (headlessContentData, args = {}) => <CE.MenuSitemap data={headlessContentData.content}/>
    //imageModal: (headlessContentData, args = {}) => <CE.ImageModal data={headlessContentData.content}/>,
    // bullets: (headlessContentData, args = {}) => <CE.Bullets data={headlessContentData.content}/>,
    // image: (headlessContentData, args = {}) => <CE.Image data={headlessContentData.content}/>,
};
var TYPO3Page = function (props) {
    var _pageLayouts = Object.assign({}, pageLayouts, props.pageLayouts);
    var _pageTemplates = Object.assign({}, pageTemplates, props.pageTemplates);
    var _contentElementLayouts = Object.assign({}, contentElementLayouts, props.contentElementLayouts);
    var _contentElementTemplates = Object.assign({}, contentElementTemplates, props.contentElementTemplates);
    return React__default["default"].createElement(TYPO3PageContext.Provider, { value: {
            headlessData: props.headlessData,
            pageLayouts: _pageLayouts,
            pageTemplates: _pageTemplates,
            contentElementLayouts: _contentElementLayouts,
            contentElementTemplates: _contentElementTemplates,
            additionalParams: props.additionalParams,
        } },
        React__default["default"].createElement(Page, null));
};
TYPO3Page.defaultProps = {
    pageLayouts: null,
    pageTemplates: null,
    contentElementLayouts: null,
    contentElementTemplates: null,
    additionalParams: null,
};
var TYPO3Page$1 = React__default["default"].memo(TYPO3Page);

exports.Content = Content;
exports.ContentElements = ContentElements;
exports.Page = Page;
exports.Section = section;
exports.TYPO3Page = TYPO3Page$1;
exports.TYPO3PageContext = TYPO3PageContext;
//# sourceMappingURL=index.js.map
