import React, { useState, useRef, useCallback } from 'react';
import * as RBT from 'react-bootstrap';
import { Figure, Col, Row, Alert, Accordion as Accordion$1, Card, Form, Button, Container } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';
import FigureImage from 'react-bootstrap/FigureImage';

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

var HeaderLink = function (props) {
    if (props.headerLink === null || typeof props.headerLink === 'string') {
        return React.createElement(React.Fragment, null, props.children);
    }
    return React.createElement("a", { href: props.headerLink.url }, props.children);
};

var Header$1 = function (props) {
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
Header$1.defaultProps = {
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
    //TODO: Date initialisieren, toLocaleDateString...
    return React.createElement("p", { className: props.positionClass }, props.date);
};

var AllHeader = function (props) {
    var _a = props.data.content, header = _a.header, subheader = _a.subheader, date = _a.date, headerPosition = _a.headerPosition, headerLink = _a.headerLink, headerLayout = _a.headerLayout;
    var content = React.createElement(React.Fragment, null);
    if (props.data.content.hasOwnProperty('headerLayout') && headerLayout !== 100) {
        if (header !== '' || subheader !== '' || date !== '') {
            content = React.createElement("div", { className: "frame-header" },
                header.length > 0 &&
                    React.createElement(Header$1, { layout: headerLayout, positionClass: headerPosition ? 'text-' + headerPosition : '', header: header, headerLink: headerLink !== '' ? headerLink : null }),
                subheader.length > 0 &&
                    React.createElement(Subheader, { layout: headerLayout, positionClass: headerPosition ? 'text-' + headerPosition : '', header: subheader, headerLink: headerLink !== '' ? headerLink : null }),
                date.length > 0 &&
                    React.createElement(HeaderDate, { date: date, positionClass: headerPosition ? 'text-' + headerPosition : '' }));
        }
    }
    return content;
};

var Text = function (props) {
    var bodytext = props.data.content.bodytext;
    return React.createElement(React.Fragment, null,
        React.createElement(AllHeader, { data: props.data }),
        React.createElement("div", { dangerouslySetInnerHTML: { __html: bodytext } }),
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
        return React.createElement(Lightbox, { mainSrc: props.images[props.photoIndex], nextSrc: props.images[(props.photoIndex + 1) % props.images.length], prevSrc: props.images[(props.photoIndex + props.images.length - 1) % props.images.length], onCloseRequest: onClose, onMovePrevRequest: prevSrc, onMoveNextRequest: nextSrc });
    }
    return React.createElement(React.Fragment, null);
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
        return React.createElement("source", { key: index, srcSet: src, media: media });
    });
    var cssClasses = 'img-fluid';
    if (className) {
        cssClasses += ' ' + className;
    }
    return React.createElement("picture", null,
        sources,
        React.createElement(FigureImage, { loading: "lazy", className: cssClasses, src: file.publicUrl, title: file.properties.title, alt: file.properties.alternative }));
};

var Image$1 = function (props) {
    var file = props.file, className = props.className;
    var caption = file.properties.description ?
        React.createElement(Figure.Caption, { className: "caption" }, file.properties.description) : React.createElement(React.Fragment, null);
    return React.createElement(Figure, { className: 'image' },
        React.createElement(Image$2, { file: file, className: className }),
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
    var _a = useState(false), showLightbox = _a[0], setShowlightbox = _a[1];
    var _b = useState(0), photoIndex = _b[0], setPhotoIndex = _b[1];
    var images = imageUris(props.data);
    return React.createElement(React.Fragment, null,
        React.createElement(ImageLightbox, { images: images, setShowLightbox: setShowlightbox, showLightbox: showLightbox, photoIndex: photoIndex, setPhotoIndex: setPhotoIndex }),
        Object.keys(props.data.gallery.rows).map(function (rowKey) {
            return Object.keys(props.data.gallery.rows[rowKey].columns).map(function (columnKey) {
                var file = props.data.gallery.rows[rowKey].columns[columnKey];
                var image = React.createElement(Image$1, { file: file });
                return React.createElement(Col, { className: "gallery-item  gallery-item-size-" + props.data.gallery.count.columns, key: rowKey + '-' + columnKey }, props.data.enlargeImageOnClick ?
                    React.createElement("a", { onClick: function (e) {
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
    return React.createElement(React.Fragment, null,
        React.createElement("div", { className: "textpic" },
            React.createElement("div", { className: "gallery-row" },
                React.createElement(Row, { className: "textpic textpic-" + textpicClassName },
                    React.createElement(Col, { className: "textpic-item textpic-gallery", md: textpicClassName === props.data.content.gallery.position.vertical ? "auto" : "6" },
                        React.createElement(Row, null,
                            React.createElement(ImageCols, { data: props.data.content }))),
                    React.createElement(Col, { className: "textpic-item textpic-text", md: "6" },
                        React.createElement(AllHeader, { data: props.data }),
                        React.createElement("div", { dangerouslySetInnerHTML: { __html: props.data.content.bodytext } }),
                        props.children)))));
};

var Image = function (props) {
    return React.createElement(React.Fragment, null,
        React.createElement("div", { className: "image" },
            React.createElement(AllHeader, { data: props.data }),
            React.createElement("div", { className: "gallery-row" },
                React.createElement(Row, null,
                    React.createElement(ImageCols, { data: props.data.content })))),
        props.children);
};

var Div = function (props) {
    return React.createElement(React.Fragment, null,
        React.createElement(AllHeader, { data: props.data }),
        React.createElement("div", { className: "div" },
            React.createElement("hr", null)),
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
    return React.createElement(React.Fragment, null,
        React.createElement("div", { className: "textmedia" },
            React.createElement("div", { className: "gallery-row" },
                React.createElement(Row, { className: "textmedia textmedia-" + textmediaClassName },
                    React.createElement(Col, { className: "textmedia-item textmedia-gallery", md: textmediaClassName === props.data.content.gallery.position.vertical ? "auto" : "6" },
                        React.createElement(Row, null, Object.keys(props.data.content.gallery.rows).map(function (rowKey) {
                            return Object.keys(props.data.content.gallery.rows[rowKey].columns).map(function (columnKey) {
                                switch (props.data.content.gallery.rows[rowKey].columns[columnKey].properties.mimeType) {
                                    case 'video/youtube':
                                        return React.createElement(Col, { className: "gallery-item  gallery-item-size-" + props.data.content.gallery.count.columns },
                                            React.createElement("iframe", { src: props.data.content.gallery.rows[rowKey].columns[columnKey].publicUrl, className: "embed-responsive-item" }),
                                            props.data.content.gallery.rows[rowKey].columns[columnKey].properties.description);
                                    case 'image/jpeg':
                                        return React.createElement(Col, { className: "gallery-item  gallery-item-size-" + props.data.content.gallery.count.columns },
                                            React.createElement("img", { src: props.data.content.gallery.rows[rowKey].columns[columnKey].publicUrl, className: "embed-responsive-item", alt: props.data.content.gallery.rows[rowKey].columns[columnKey].properties.title }),
                                            props.data.content.gallery.rows[rowKey].columns[columnKey].properties.description);
                                    case 'image/svg+xml':
                                        return React.createElement(Col, { className: "gallery-item  gallery-item-size-" + props.data.content.gallery.count.columns },
                                            React.createElement("img", { src: props.data.content.gallery.rows[rowKey].columns[columnKey].publicUrl, className: "embed-responsive-item", alt: props.data.content.gallery.rows[rowKey].columns[columnKey].properties.title }),
                                            props.data.content.gallery.rows[rowKey].columns[columnKey].properties.description);
                                    case 'video/mp4':
                                        return React.createElement(Col, { className: "gallery-item  gallery-item-size-" + props.data.content.gallery.count.columns },
                                            React.createElement("video", { controls: true },
                                                React.createElement("source", { type: "video/mp4", src: props.data.content.gallery.rows[rowKey].columns[columnKey].publicUrl })),
                                            props.data.content.gallery.rows[rowKey].columns[columnKey].properties.description);
                                    case 'video/vimeo':
                                        return React.createElement(Col, { className: "gallery-item  gallery-item-size-" + props.data.content.gallery.count.columns },
                                            React.createElement("video", { controls: true },
                                                React.createElement("source", { type: "video/mp4", src: props.data.content.gallery.rows[rowKey].columns[columnKey].publicUrl })),
                                            props.data.content.gallery.rows[rowKey].columns[columnKey].properties.description);
                                    default:
                                        return React.createElement(React.Fragment, null);
                                }
                            });
                        }))),
                    React.createElement(Col, { className: "textmedia-item textmedia-text" },
                        React.createElement(AllHeader, { data: props.data }),
                        React.createElement("div", { dangerouslySetInnerHTML: { __html: props.data.content.bodytext } }),
                        props.children)))));
};

var Shortcut = function (props) {
    return React.createElement(React.Fragment, null,
        React.createElement(AllHeader, { data: props.data }),
        React.createElement("div", { className: "shortcut" }, props.data.content.shortcut.map(function (cObject) {
            return RenderContent(cObject);
        })),
        props.children);
};

var Html = function (props) {
    return React.createElement(React.Fragment, null,
        React.createElement(AllHeader, { data: props.data }),
        React.createElement("div", { dangerouslySetInnerHTML: { __html: props.data.content.bodytext } }),
        props.children);
};

var Uploads = function (props) {
    return React.createElement(React.Fragment, null,
        React.createElement(AllHeader, { data: props.data }),
        React.createElement("div", { className: "uploads" },
            React.createElement("ul", { className: "media-list filelink-list" }, Object.keys(props.data.content.media).map(function (key) {
                var description = props.data.content.displayDescription === '1' ?
                    React.createElement("p", { className: 'filelink-filedescription' }, props.data.content.media[key].properties.description) : null;
                var filesize = props.data.content.displayFileSizeInformation === '1' ?
                    React.createElement("span", { className: 'filelink-filesize ms-2 small' }, props.data.content.media[key].properties.size) : null;
                var title = props.data.content.media[key].properties.title;
                if (title === null || title === '') {
                    title = props.data.content.media[key].properties.filename;
                }
                var heading = function (contentBefore) {
                    if (contentBefore === void 0) { contentBefore = null; }
                    return React.createElement("span", { className: 'title' },
                        React.createElement("h5", { className: 'filelink-heading ' },
                            React.createElement("a", { href: props.data.content.media[key].publicUrl },
                                contentBefore,
                                title),
                            filesize));
                };
                var content;
                switch (props.data.content.displayInformation) {
                    case "1":
                        content = React.createElement(React.Fragment, null,
                            heading(props.data.content.media[key].properties.type === 'video' ?
                                React.createElement("i", { className: "bi bi-camera-video-fill me-2" }) :
                                React.createElement("i", { className: "bi bi-file-image me-2" })),
                            description);
                        break;
                    case "2":
                        var media = null;
                        switch (props.data.content.media[key].properties.type) {
                            case 'video':
                                media = React.createElement("iframe", { src: props.data.content.media[key].publicUrl, className: 'mw-100' });
                                break;
                            //TODO: add preview for application/*
                            case 'application':
                                if (props.data.content.media[key].properties.mimeType === 'application/pdf') {
                                    media =
                                        React.createElement("iframe", { src: props.data.content.media[key].publicUrl, className: 'mw-100' });
                                }
                                break;
                            default:
                                media =
                                    React.createElement("img", { src: props.data.content.media[key].publicUrl, alt: title, className: 'img-fluid' });
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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var Type = function (props) {
    var file = props.file; props.data;
    var fileType = file.properties.type;
    if (!isNaN(+file.properties.type)) {
        var fileExtension_1 = file.properties.filename.split('.').pop();
        if (['jpg', 'png', 'svg'].some(function (type) { return type === fileExtension_1; })) {
            fileType = 'image';
        }
    }
    switch (fileType) {
        case 'image':
            return React.createElement(Image$1, { file: file });
        default:
            return React.createElement(Alert, { variant: "info" },
                "Filetype unknown ",
                file.properties.filename);
    }
};

var Gallery = function (props) {
    var _a = props.data.content, items = _a.items, imagecols = _a.imagecols;
    var galleryItems = items.map(function (image, index) {
        return React.createElement(Col, { key: "".concat(index), className: "gallery-item gallery-item-size-".concat(imagecols), md: imagecols },
            React.createElement(Type, { data: props.data, file: image }));
    });
    return React.createElement(React.Fragment, null,
        React.createElement(AllHeader, { data: props.data }),
        React.createElement("div", { className: 'gallery-row' }, galleryItems),
        props.children);
};

var Accordion = function (props) {
    var _a;
    var accordionItems = props.data.content.items;
    var activeElement = (_a = props.data.flexform.default_element) !== null && _a !== void 0 ? _a : '';
    if (!accordionItems || accordionItems.length < 0) {
        return React.createElement(React.Fragment, null);
    }
    var accorditionItemsTemplate = accordionItems.map(function (accordionItem, index) {
        var galleryTemplate = React.createElement(React.Fragment, null);
        if (accordionItem.media.length > 0) {
            galleryTemplate = React.createElement(Gallery, { data: { content: __assign({ items: accordionItem.media }, accordionItem) } });
        }
        return React.createElement(Accordion$1.Item, { key: accordionItem.id, eventKey: accordionItem.id.toString() },
            React.createElement(Accordion$1.Header, { as: "h4", id: "accordion-heading-".concat(accordionItem.id) },
                React.createElement("span", { className: "accordion-title-link-text" }, accordionItem.header)),
            React.createElement(Accordion$1.Body, null,
                React.createElement("div", { className: "accordion-content accordion-content-".concat(accordionItem.mediaorient) },
                    galleryTemplate,
                    React.createElement("div", { className: 'accordion-content-item accordion-content-text', dangerouslySetInnerHTML: { __html: accordionItem.bodytext } }))));
    });
    return React.createElement(React.Fragment, null,
        React.createElement(AllHeader, { data: props.data }),
        React.createElement(Accordion$1, { defaultActiveKey: activeElement }, accorditionItemsTemplate),
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
    return React.createElement("a", { href: href, target: target, className: "btn ".concat(className), title: title }, linkText);
};
Link.defaultProps = defaultProperties;

var CardGroup = function (props) {
    var items = props.data.content.items;
    var flexform = props.data.flexform;
    var cards = items.map(function (cardData, index_number) {
        var header = cardData.header, subheader = cardData.subheader, bodytext = cardData.bodytext, image = cardData.image, link = cardData.link, linkTitle = cardData.linkTitle, linkClass = cardData.linkClass;
        var imageTemplate = image ? image.map(function (imageData, index) { return React.createElement(Card.Img, { key: "image-data-".concat(index), variant: "top", src: imageData.publicUrl }); }) : React.createElement(React.Fragment, null);
        var linkButton = React.createElement(React.Fragment, null);
        if (link) {
            if (linkTitle && linkTitle.length > 0) {
                link.title = linkTitle;
            }
            if (linkClass && linkClass.length > 0) {
                link["class"] = "".concat(link["class"], " btn-").concat(linkClass);
            }
            linkButton = React.createElement(Link, { href: link.href, title: link.title, className: link['class'], target: link.target, linkText: link.linkText });
        }
        return React.createElement(Col, { key: "card-group-col-".concat(index_number) },
            React.createElement(Card, null,
                header.length > 0 && React.createElement(Card.Header, null, header),
                imageTemplate,
                React.createElement(Card.Body, null,
                    subheader.length > 0 && React.createElement(Card.Title, null, subheader),
                    bodytext.length > 0 && React.createElement(Card.Text, { as: "div" },
                        React.createElement("div", { dangerouslySetInnerHTML: { __html: bodytext } })),
                    linkButton)));
    });
    var alignment = 'justify-content-left';
    if (flexform.align.length > 0) {
        alignment = "justify-content-".concat(flexform.align);
    }
    return React.createElement(React.Fragment, null,
        React.createElement(AllHeader, { data: props.data }),
        React.createElement(Row, { xs: 1, md: flexform.columns, className: "card-group ".concat(alignment) }, cards),
        props.children);
};

var TextColumns = function (props) {
    var bodytext = props.data.content.bodytext;
    return React.createElement(React.Fragment, null,
        React.createElement(AllHeader, { data: props.data }),
        React.createElement("div", { className: "text-column" },
            React.createElement("div", { dangerouslySetInnerHTML: { __html: bodytext } })),
        props.children);
};

var Quote = function (props) {
    var _a = props.data.content, bodytext = _a.bodytext, quoteSource = _a.quoteSource, quoteLink = _a.quoteLink;
    var sourceLink = function () {
        if (typeof quoteLink === 'object' && quoteLink !== null) {
            var href = quoteLink.href, target = quoteLink.target, title = quoteLink.title, linkText = quoteLink.linkText;
            var className = quoteLink['class'];
            return React.createElement("span", null,
                "(",
                React.createElement("a", { href: href, target: target, title: title, className: className }, linkText),
                ")");
        }
        return React.createElement(React.Fragment, null);
    };
    var bodyTemplate = function () {
        return (bodytext.length > 0) ?
            React.createElement("blockquote", { className: 'blockquote', dangerouslySetInnerHTML: { __html: bodytext } }) : React.createElement(React.Fragment, null);
    };
    var figcaptionTemplate = function () {
        if (quoteSource.length > 0) {
            return React.createElement("figcaption", { className: "blockquote-footer" },
                React.createElement("cite", { title: quoteSource },
                    quoteSource,
                    sourceLink()));
        }
        return React.createElement(React.Fragment, null);
    };
    return React.createElement(React.Fragment, null,
        React.createElement(AllHeader, { data: props.data }),
        React.createElement("figure", null,
            bodyTemplate(),
            figcaptionTemplate()),
        props.children);
};

var Header = function (props) {
    return React.createElement("div", { className: "header" });
};

// import AllHeader from "../../Partials/ContentElements/Header/All"
var carouselItem = function (itemHeadless, isFirst) {
    if (isFirst === void 0) { isFirst = false; }
    var itemType = itemHeadless.itemType, layout = itemHeadless.layout, image = itemHeadless.image;
    var item = React.createElement(React.Fragment, null);
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
            item = React.createElement("div", { className: "carousel-image" },
                React.createElement(Image$1, { file: image[0], className: '' }));
            break;
        default:
            item = React.createElement(Alert, { variant: "danger" },
                React.createElement(Alert.Heading, null, "Templatetype unknown"),
                React.createElement("p", null,
                    itemType,
                    " has no Template"));
    }
    return React.createElement(RBT.Carousel.Item, { key: image[0].publicUrl, className: itemClass },
        React.createElement("div", { className: 'carousel-content' },
            React.createElement("div", { className: 'carousel-content-inner' }, item)));
};
var Carousel = function (props) {
    var _a = props.data, content = _a.content; _a.type; var flexform = _a.flexform;
    content.header; content.subheader; var items = content.items;
    var _b = useState(0); _b[0]; _b[1];
    var itemsTemplate = items.map(function (itemHeadless, index) {
        return carouselItem(itemHeadless, index === 0);
    });
    return React.createElement(React.Fragment, null,
        React.createElement(RBT.Carousel, { fade: flexform.transition === 'fade', interval: flexform.interval, wrap: flexform.wrap }, itemsTemplate));
};

var MenuCardDir$1 = function (props) {
    var _a = props.data, flexform = _a.flexform, content = _a.content;
    var items = content.items, readmoreLabel = content.readmoreLabel;
    var itemsTemplate = items.map(function (item) {
        var title = item.title, subtitle = item.subtitle, abstract = item.abstract, link = item.link, target = item.target, thumbnail = item.thumbnail;
        return React.createElement("div", { key: link, className: "card-menu-item" },
            React.createElement(Card, null,
                thumbnail && thumbnail.length > 0 &&
                    React.createElement(Card.Link, { href: link, target: target, title: title, "data-toggle": "tooltip" },
                        React.createElement(Card.Img, { variant: "top", src: thumbnail[0].publicUrl })),
                React.createElement(Card.Body, null,
                    title && title.length > 0 &&
                        React.createElement(Card.Title, { as: 'h3' },
                            React.createElement(Card.Link, { href: link, target: target, title: title, "data-toggle": "tooltip" }, title)),
                    subtitle && subtitle.length > 0 &&
                        React.createElement(Card.Subtitle, { as: 'h4' }, subtitle),
                    React.createElement(Card.Text, { as: "p" }, abstract),
                    props.children),
                React.createElement(Card.Footer, null,
                    React.createElement(Card.Link, { href: link, target: target, title: title, "data-toggle": "tooltip" }, (readmoreLabel && readmoreLabel.length > 0) ? readmoreLabel : title))));
    });
    return React.createElement(React.Fragment, null,
        React.createElement(AllHeader, { data: props.data }),
        React.createElement("div", { className: "card-menu card-menu card-menu-align-".concat(flexform.align, " card-menu-columns-").concat(flexform.columns) }, itemsTemplate));
};

var MenuCardList = function (props) {
    return React.createElement(MenuCardDir$1, __assign({}, props));
};

var MenuCardDir = function (props) {
    props.data.content.items = props.data.content.items.map(function (item) {
        return __assign(__assign({}, item), { thumbnail: item.media });
    });
    return React.createElement(MenuCardDir$1, __assign({}, props));
};

var MenuThumbnailBase = function (props) {
    var _a = props.data, flexform = _a.flexform, content = _a.content;
    var items = content.items;
    var itemsTemplate = items.map(function (item, index) {
        var title = item.title, subtitle = item.subtitle, link = item.link, target = item.target, media = item.media;
        if (!media || media.length <= 0) {
            return React.createElement(React.Fragment, { key: "".concat(title, "-").concat(index) });
        }
        return React.createElement("div", { key: link, className: "thumbnail-menu-item" },
            React.createElement("a", { href: link, target: target, title: title, "data-toggle": "tooltip", className: 'thumbnail-menu-link' },
                media && media.length > 0 &&
                    React.createElement("span", { className: 'thumbnail-menu-image' },
                        React.createElement(Image$1, { file: media[0] })),
                React.createElement("span", { className: 'thumbnail-menu-caption' },
                    React.createElement("span", { className: 'thumbnail-menu-caption-inner' },
                        title && title.length > 0 &&
                            React.createElement("span", { className: 'h3 thumbnail-menu-caption-title' }, title),
                        subtitle && subtitle.length > 0 &&
                            React.createElement("p", { className: 'thumbnail-menu-caption-subtitle' }, subtitle)))),
            props.children);
    });
    return React.createElement(React.Fragment, null,
        React.createElement(AllHeader, { data: props.data }),
        React.createElement("div", { className: "thumbnail-menu thumbnail-menu-align-".concat(flexform.align, " thumbnail-menu-columns-").concat(flexform.columns) }, itemsTemplate));
};

var FormControlTextarea = function (props) {
    var _a = props.data, type = _a.type, name = _a.name, defaultValue = _a.defaultValue, label = _a.label, properties = _a.properties;
    var fluidAdditionalAttributes = properties.fluidAdditionalAttributes, elementDescription = properties.elementDescription;
    return React.createElement(React.Fragment, null,
        label.length > 0 && React.createElement(Form.Label, null, label),
        React.createElement(Form.Control, __assign({}, fluidAdditionalAttributes, { as: type.toLowerCase(), name: name, defaultValue: defaultValue })),
        elementDescription && React.createElement(Form.Text, { className: 'inline-muted' }, elementDescription));
};

var Fieldset = function (props) {
    var _a = props.data, elements = _a.elements, identifier = _a.identifier, label = _a.label;
    console.log('elements', elements);
    var fieldSetElements = elements.map(function (element, index) {
        return React.createElement(FormElement, { element: element, key: "".concat(identifier, "-").concat(element.name, "-").concat(index) });
    });
    return React.createElement("fieldset", { name: identifier },
        label && label.length > 0 && React.createElement("legend", null, label),
        fieldSetElements);
};

function CSSstring(string) {
    var css_json = "{".concat(string
        .replace(/(\w*:)/g, '$1"') //create json format
        .replace(/[;]/g, '";')
        .replace(/(\'{2,})/g, '"')
        .replace(/;/g, ',')
        .replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:/g, '"$2": ')
        .replace(/,\s*\}/, '}')
        .replace(/,\s*$/, "")
        .trim(), "}");
    var obj = JSON.parse(css_json);
    var keyValues = Object.keys(obj).map(function (key) {
        var _a;
        var camelCased = key.replace(/-[a-z]/g, function (g) { return g[1].toUpperCase(); });
        return _a = {}, _a[camelCased] = obj[key], _a;
    });
    return Object.assign.apply(Object, __spreadArray([{}], keyValues, false));
}
var Honeypot = function (props) {
    var _a = props.data, defaultValue = _a.defaultValue, label = _a.label, name = _a.name, properties = _a.properties;
    var containerClassAttribute = properties.containerClassAttribute, elementClassAttribute = properties.elementClassAttribute, renderAsHiddenField = properties.renderAsHiddenField, styleAttribute = properties.styleAttribute;
    return React.createElement("div", { className: containerClassAttribute },
        label.length > 0 && React.createElement(Form.Label, null, label),
        React.createElement(Form.Control, { type: renderAsHiddenField.length > 0 ? 'hidden' : 'text', name: name, className: elementClassAttribute, defaultValue: defaultValue, style: CSSstring(styleAttribute) }));
};

var FormControlBase = function (props) {
    var _a = props.data, defaultValue = _a.defaultValue, identifier = _a.identifier, label = _a.label, name = _a.name, properties = _a.properties, type = _a.type;
    var fluidAdditionalAttributes = properties.fluidAdditionalAttributes, elementDescription = properties.elementDescription, validationErrorMessages = properties.validationErrorMessages;
    return React.createElement(React.Fragment, null,
        label.length > 0 && React.createElement(Form.Label, null, label),
        React.createElement(Form.Control, __assign({}, fluidAdditionalAttributes, { type: type.toLowerCase(), name: name, defaultValue: defaultValue })),
        validationErrorMessages && validationErrorMessages.map(function (messageObject, index) {
            return React.createElement(Form.Control.Feedback, { key: "".concat(identifier, "-").concat(index), type: "invalid", tooltip: true }, messageObject.message);
        }),
        elementDescription && React.createElement(Form.Text, { className: 'inline-muted' }, elementDescription));
};

var FormControlHidden = function (props) {
    props.data.label = '';
    return React.createElement(FormControlBase, { data: props.data });
};

var FormControlInput = function (props) {
    return React.createElement(FormControlBase, { data: props.data });
};

var FormControlText = function (props) {
    return React.createElement(FormControlBase, { data: props.data });
};

var FormControlPassword = function (props) {
    return React.createElement(FormControlBase, { data: props.data });
};

var FormControlEmail = function (props) {
    return React.createElement(FormControlBase, { data: props.data });
};

var FormControlTelephone = function (props) {
    return React.createElement(FormControlBase, { data: props.data });
};

var FormControlUrl = function (props) {
    return React.createElement(FormControlBase, { data: props.data });
};

var FormControlNumber = function (props) {
    return React.createElement(FormControlBase, { data: props.data });
};

var FormControlDate = function (props) {
    return React.createElement(FormControlBase, { data: props.data });
};

var FormControlCheckBase = function (props) {
    var _a = props.data, defaultValue = _a.defaultValue, identifier = _a.identifier, label = _a.label, name = _a.name, properties = _a.properties, type = _a.type;
    var fluidAdditionalAttributes = properties.fluidAdditionalAttributes, elementDescription = properties.elementDescription, validationErrorMessages = properties.validationErrorMessages;
    var options = [{
            value: "1",
            key: label
        }];
    if (properties.options) {
        options = Object.keys(properties.options).map(function (value, index) {
            return {
                value: value,
                key: properties.options[value]
            };
        });
    }
    return React.createElement(React.Fragment, null,
        options.map(function (option, index) {
            var selected = defaultValue !== null && defaultValue.includes(option.value) ? option.value : null;
            return React.createElement(Form.Check, { key: "".concat(identifier, "-").concat(option.value, "-").concat(index) },
                React.createElement(Form.Check.Input, __assign({}, fluidAdditionalAttributes, { type: type.toLowerCase(), name: name, id: "".concat(name, "-").concat(option.key), defaultValue: option.value, defaultChecked: selected })),
                React.createElement(Form.Check.Label, { htmlFor: "".concat(name, "-").concat(option.key) }, option.key),
                validationErrorMessages && validationErrorMessages.map(function (messageObject, index) { return React.createElement(Form.Control.Feedback, { key: "".concat(identifier, "-").concat(index), type: "invalid" }, messageObject.message); }));
        }),
        elementDescription && React.createElement(Form.Text, { className: 'inline-muted' }, elementDescription));
};

var FormControlCheckbox = function (props) {
    return React.createElement(FormControlCheckBase, { data: props.data });
};

var FormControlRadioButton = function (props) {
    return React.createElement(FormControlCheckBase, { data: __assign(__assign({}, props.data), { type: 'radio' }) });
};

var FormControlMultiCheckbox = function (props) {
    return React.createElement(FormControlCheckBase, { data: __assign(__assign({}, props.data), { type: 'checkbox' }) });
};

var FormControlSelectBase = function (props) {
    var _a = props.data, defaultValue = _a.defaultValue, identifier = _a.identifier, label = _a.label, name = _a.name, properties = _a.properties, multiple = _a.multiple;
    var options = properties.options, fluidAdditionalAttributes = properties.fluidAdditionalAttributes, prependOptionLabel = properties.prependOptionLabel, validationErrorMessages = properties.validationErrorMessages;
    var optionTemplate = function () {
        var template = [];
        template.push(React.createElement("option", { key: "".concat(identifier, "-0"), value: '' }, prependOptionLabel));
        Object.keys(options).map(function (optionValue, index) {
            template.push(React.createElement("option", { key: "".concat(identifier, "-").concat(index + 1), value: optionValue }, options[optionValue]));
        });
        return template;
    };
    return React.createElement(React.Fragment, null,
        label.length > 0 && React.createElement(Form.Label, null, label),
        React.createElement(Form.Select, __assign({}, fluidAdditionalAttributes, { name: name, multiple: multiple, defaultValue: defaultValue }), optionTemplate()),
        validationErrorMessages && validationErrorMessages.map(function (messageObject, index) {
            return React.createElement(Form.Control.Feedback, { key: "".concat(identifier, "-").concat(index), type: "invalid" }, messageObject.message);
        }));
};

var FormControlMultiSelect = function (props) {
    return React.createElement(FormControlSelectBase, { data: __assign(__assign({}, props.data), { multiple: true }) });
};

var FormControlDatePicker = function (props) {
    return React.createElement(FormControlBase, { data: props.data });
};

var FormControlFileUpload = function (props) {
    return React.createElement(FormControlBase, { data: __assign(__assign({}, props.data), { type: 'file' }) });
};

var FormControlImageUpload = function (props) {
    return React.createElement(FormControlFileUpload, { data: props.data });
};

var FormControlAdvancedPassword = function (props) {
    return React.createElement(FormControlBase, { data: props.data });
};

var FormControlStaticText = function (props) {
    return React.createElement(FormControlBase, { data: props.data });
};

var FormControlSingleSelect = function (props) {
    return React.createElement(FormControlSelectBase, { data: __assign(__assign({}, props.data), { multiple: false }) });
};

var ElementType;
(function (ElementType) {
    ElementType["select"] = "SingleSelect";
    ElementType["textarea"] = "Textarea";
    ElementType["input"] = "input";
    ElementType["fieldset"] = "Fieldset";
    ElementType["honeypot"] = "Honeypot";
    ElementType["hidden"] = "Hidden";
    ElementType["text"] = "Text";
    ElementType["password"] = "Password";
    ElementType["email"] = "Email";
    ElementType["telephone"] = "Telephone";
    ElementType["url"] = "Url";
    ElementType["number"] = "Number";
    ElementType["date"] = "Date";
    ElementType["checkbox"] = "Checkbox";
    ElementType["radioButton"] = "RadioButton";
    ElementType["radio"] = "radio";
    ElementType["multiCheckbox"] = "MultiCheckbox";
    ElementType["multiSelect"] = "MultiSelect";
    ElementType["datePicker"] = "DatePicker";
    ElementType["fileUpload"] = "FileUpload";
    ElementType["imageUpload"] = "ImageUpload";
    ElementType["advancedPassword"] = "AdvancedPassword";
    ElementType["staticText"] = "StaticText";
})(ElementType || (ElementType = {}));
var FormElement = function (props) {
    var element = props.element;
    var content;
    switch (element.type) {
        case ElementType.textarea:
            content = React.createElement(FormControlTextarea, { data: element });
            break;
        case ElementType.fieldset:
            content = React.createElement(Fieldset, { data: element });
            break;
        case ElementType.select:
            content = React.createElement(FormControlSingleSelect, { data: element });
            break;
        case ElementType.honeypot:
            content = React.createElement(Honeypot, { data: element });
            break;
        case ElementType.hidden:
            return React.createElement(FormControlHidden, { data: element });
        case ElementType.input:
            content = React.createElement(FormControlInput, { data: element });
            break;
        case ElementType.text:
            content = React.createElement(FormControlText, { data: element });
            break;
        case ElementType.password:
            content = React.createElement(FormControlPassword, { data: element });
            break;
        case ElementType.email:
            content = React.createElement(FormControlEmail, { data: element });
            break;
        case ElementType.telephone:
            content = React.createElement(FormControlTelephone, { data: element });
            break;
        case ElementType.url:
            content = React.createElement(FormControlUrl, { data: element });
            break;
        case ElementType.number:
            content = React.createElement(FormControlNumber, { data: element });
            break;
        case ElementType.date:
            content = React.createElement(FormControlDate, { data: element });
            break;
        case ElementType.checkbox:
            content = React.createElement(FormControlCheckbox, { data: element });
            break;
        case ElementType.radioButton:
            content = React.createElement(FormControlRadioButton, { data: element });
            break;
        case ElementType.radio:
            content = React.createElement(FormControlRadioButton, { data: __assign(__assign({}, element), { type: 'radio' }) });
            break;
        case ElementType.multiCheckbox:
            content = React.createElement(FormControlMultiCheckbox, { data: element });
            break;
        case ElementType.multiSelect:
            content = React.createElement(FormControlMultiSelect, { data: element });
            break;
        case ElementType.datePicker:
            content = React.createElement(FormControlDatePicker, { data: element });
            break;
        case ElementType.fileUpload:
            content = React.createElement(FormControlFileUpload, { data: element });
            break;
        case ElementType.imageUpload:
            content = React.createElement(FormControlImageUpload, { data: element });
            break;
        case ElementType.advancedPassword:
            content = React.createElement(FormControlAdvancedPassword, { data: element });
            break;
        case ElementType.staticText:
            content = React.createElement(FormControlStaticText, { data: element });
            break;
        default:
            console.log('element', element);
            content = React.createElement(Alert, { variant: "danger" },
                React.createElement(Alert.Heading, null, "Contentelement type unknown"),
                React.createElement("p", null,
                    element.type,
                    " type not defined"));
            break;
    }
    return React.createElement(Form.Group, { className: "mb-3", controlId: element.identifier }, content);
};

var FormFormFramework = function (props) {
    var _a = props.data, form = _a.form, link = _a.link;
    var _b = useState(false), validated = _b[0], setValidated = _b[1];
    var formRef = useRef();
    form.id;
    var submitHandler = useCallback(function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var formElement, formData;
        return __generator(this, function (_a) {
            event.preventDefault();
            if (formRef) {
                formElement = formRef.current;
                if (formElement) {
                    formData = new FormData(formElement);
                    // formData.append('responseElementId', responseElementId)
                    // formData.append('responseElementRecursive', "1")
                    // formData.append('form valid', (formElement.checkValidity()? '1' : '0'))
                    if (formElement.checkValidity() === false) {
                        event.stopPropagation();
                    }
                    else {
                        fetch("https://cms.trixie.localhost".concat(link.href), {
                            method: 'POST',
                            // headers: {'Content-Type': 'multipart/form-data'},
                            body: formData,
                        }).then(function (response) { return response.json(); })
                            .then(function (data) {
                            console.log(data);
                            console.log(data.content.colPos0['0'].content.form.api.actionAfterSuccess);
                        });
                        // const result = await response.json()
                        // console.log('RESULT', result)
                    }
                    setValidated(true);
                }
            }
            return [2 /*return*/];
        });
    }); }, [form, link]);
    return React.createElement("div", { className: "formFormFramework" },
        React.createElement(Form, { id: form.id, noValidate: true, validated: validated, onSubmit: submitHandler, method: 'POST', action: link.href, ref: formRef },
            form.elements.map(function (element, index) {
                return React.createElement(FormElement, { element: element, key: "".concat(form.id, "-").concat(index) });
            }),
            React.createElement(Form.Control, { type: 'hidden', name: 'responseElementId', defaultValue: form.id }),
            React.createElement(Button, { type: "submit" }, "Submit")));
};

var ContentElements = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Text: Text,
    Html: Html,
    Textpic: Textpic,
    Image: Image,
    ImageLightbox: Image,
    Div: Div,
    FormFormFramework: FormFormFramework,
    Shortcut: Shortcut,
    Textmedia: Textmedia,
    Uploads: Uploads,
    Accordion: Accordion,
    Gallery: Gallery,
    CardGroup: CardGroup,
    TextColumns: TextColumns,
    Quote: Quote,
    Header: Header,
    Carousel: Carousel,
    MenuCardList: MenuCardList,
    MenuCardDir: MenuCardDir,
    MenuThumbnailBase: MenuThumbnailBase
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
    return React.createElement("div", { className: "frame-backgroundimage-container" },
        React.createElement("div", { id: backgroundImageIdentifier, className: backgroundImageClasses, style: { backgroundImage: 'url("' + backgroundImageObject.publicUrl + '")' } }));
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
        content = React.createElement("div", { id: "c" + props.data.id, className: "frame frame-size-default " +
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
                    props.children)));
    }
    else {
        content = React.createElement(React.Fragment, null,
            React.createElement("a", { id: "c" + props.data.id }),
            props.data._localizedUid ? React.createElement("a", { id: "c" + props.data._localizedUid }) : null,
            props.data.appearance.spaceBefore ? React.createElement("div", { className: spaceBeforeClass }) : null,
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
    var _a, _b;
    switch (element.type) {
        case 'row':
            var children = element.children.map(function (child, index) {
                return getGridElement(child, content, contentElementLayouts, contentElementTemplates, index);
            });
            return React.createElement(Row, { as: (_a = element.tag) !== null && _a !== void 0 ? _a : 'div', key: index }, children);
        case 'col':
            return React.createElement(Col, { as: (_b = element.tag) !== null && _b !== void 0 ? _b : 'div', lg: element.colspan, md: element.colspan, sm: element.colspan, xl: element.colspan, key: index },
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
    text: function (headlessContentData) { return React.createElement(Text, { data: headlessContentData }); },
    html: function (headlessContentData) { return React.createElement(Html, { data: headlessContentData }); },
    textpic: function (headlessContentData) { return React.createElement(Textpic, { data: headlessContentData }); },
    image: function (headlessContentData) { return React.createElement(Image, { data: headlessContentData }); },
    shortcut: function (headlessContentData) { return React.createElement(Shortcut, { data: headlessContentData }); },
    div: function (headlessContentData) { return React.createElement(Div, { data: headlessContentData }); },
    uploads: function (headlessContentData) { return React.createElement(Uploads, { data: headlessContentData }); },
    accordion: function (headlessContentData) { return React.createElement(Accordion, { data: headlessContentData }); },
    gallery: function (headlessContentData) { return React.createElement(Gallery, { data: headlessContentData }); },
    textmedia: function (headlessContentData) { return React.createElement(Textmedia, { data: headlessContentData }); },
    card_group: function (headlessContentData) { return React.createElement(CardGroup, { data: headlessContentData }); },
    textcolumn: function (headlessContentData) { return React.createElement(TextColumns, { data: headlessContentData }); },
    quote: function (headlessContentData) { return React.createElement(Quote, { data: headlessContentData }); },
    header: function (headlessContentData) { return React.createElement(Header, { data: headlessContentData }); },
    carousel: function (headlessContentData) { return React.createElement(Carousel, { data: headlessContentData }); },
    menu_card_list: function (headlessContentData) { return React.createElement(MenuCardList, { data: headlessContentData }); },
    menu_card_dir: function (headlessContentData) { return React.createElement(MenuCardDir, { data: headlessContentData }); },
    menu_thumbnail_dir: function (headlessContentData) { return React.createElement(MenuThumbnailBase, { data: headlessContentData }); },
    menu_thumbnail_list: function (headlessContentData) { return React.createElement(MenuThumbnailBase, { data: headlessContentData }); },
    form_formframework: function (headlessContentData) { return React.createElement(FormFormFramework, { data: headlessContentData.content }); }
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

export { AllHeader, Content, ContentElements, Type as MediaType, Page, section as Section, TYPO3Page$1 as TYPO3Page, TYPO3PageContext };
//# sourceMappingURL=index.es.js.map
