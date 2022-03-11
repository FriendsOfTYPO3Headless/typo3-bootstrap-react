import React, { useState } from 'react';
import { Figure, Col, Row, Alert, Accordion as Accordion$1, Card, Container } from 'react-bootstrap';
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

var Image$2 = function (props) {
    var file = props.file;
    var crops = Object.keys(file.properties.crop);
    var sources = crops.map(function (cropIdentifier, index) {
        var src;
        var media;
        switch (cropIdentifier) {
            case 'extrasmall':
                media = '(max-width: 575px)';
                src = file.cropVariants.extrasmall.publicUrl;
                break;
            case 'small':
                media = '(min-width: 576px)';
                src = file.cropVariants.small.publicUrl;
                break;
            case 'medium':
                media = '(min-width: 768px)';
                src = file.cropVariants.medium.publicUrl;
                break;
            case 'large':
                media = '(min-width: 992px)';
                src = file.cropVariants.large.publicUrl;
                break;
            default:
                media = '(min-width: 1200px)';
                src = file.cropVariants.default.publicUrl;
                break;
        }
        return React.createElement("source", { key: index, srcSet: src, media: media });
    });
    return React.createElement("picture", null,
        sources,
        React.createElement(FigureImage, { loading: "lazy", className: 'img-fluid', src: file.publicUrl, title: file.properties.title, alt: file.properties.alternative }));
};

var Image$1 = function (props) {
    var file = props.file, data = props.data;
    var caption = file.properties.description ?
        React.createElement(Figure.Caption, { className: "caption" }, file.properties.description) : React.createElement(React.Fragment, null);
    return React.createElement(Figure, { className: 'image' },
        React.createElement(Image$2, { data: data, file: file }),
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
                var image = React.createElement(Image$1, { data: props.data, file: file });
                return React.createElement(Col, { className: "gallery-item  gallery-item-size-" + props.data.gallery.count.columns, key: rowKey + '-' + columnKey }, props.data.enlargeImageOnClick ?
                    React.createElement("a", { onClick: function (e) {
                            e.preventDefault();
                            setPhotoIndex(images.indexOf(file.publicUrl));
                            setShowlightbox(true);
                            return true;
                        }, href: '#' }, image) : image);
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
                                    return React.createElement(React.Fragment, null);
                            }
                        });
                    }))),
                React.createElement(Col, { className: "textmedia-item textmedia-text" },
                    React.createElement("div", { dangerouslySetInnerHTML: { __html: props.data.bodytext } })))));
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
    var file = props.file, data = props.data;
    var fileType = file.properties.type;
    if (!isNaN(+file.properties.type)) {
        var fileExtension_1 = file.properties.filename.split('.').pop();
        if (['jpg', 'png'].some(function (type) { return type === fileExtension_1; })) {
            fileType = 'image';
        }
    }
    switch (fileType) {
        case 'image':
            return React.createElement(Image$1, { file: file, data: data });
        default:
            return React.createElement(Alert, { variant: "info" },
                "Filetype unknown ",
                file.properties.filename);
    }
};

// TODO Add
var Gallery = function (props) {
    var _a = props.data, images = _a.images, imagecols = _a.imagecols;
    var galleryItems = images.map(function (image, index) {
        return React.createElement(Col, { className: "gallery-item gallery-item-size-".concat(imagecols), md: imagecols },
            React.createElement(Type, { data: props.data, file: image }));
    });
    return React.createElement("div", { className: 'gallery-row' }, galleryItems);
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
            galleryTemplate = React.createElement(Gallery, { data: __assign({ images: accordionItem.media }, accordionItem) });
        }
        return React.createElement(Accordion$1.Item, { key: accordionItem.id, eventKey: accordionItem.id.toString() },
            React.createElement(Accordion$1.Header, { as: "h4", id: "accordion-heading-".concat(accordionItem.id) },
                React.createElement("span", { className: "accordion-title-link-text" }, accordionItem.header)),
            React.createElement(Accordion$1.Body, null,
                React.createElement("div", { className: "accordion-content accordion-content-".concat(accordionItem.mediaorient) },
                    galleryTemplate,
                    React.createElement("div", { className: 'accordion-content-item accordion-content-text', dangerouslySetInnerHTML: { __html: accordionItem.bodytext } }))));
    });
    return React.createElement(Accordion$1, { defaultActiveKey: activeElement }, accorditionItemsTemplate);
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
    return React.createElement(Row, { xs: 1, md: flexform.columns, className: "card-group ".concat(alignment) }, cards);
};

var TextColumns = function (props) {
    var bodytext = props.data.bodytext;
    return React.createElement("div", { className: "text-column" },
        React.createElement("div", { dangerouslySetInnerHTML: { __html: bodytext } }));
};

var Quote = function (props) {
    var _a = props.data, bodytext = _a.bodytext, quoteSource = _a.quoteSource, quoteLink = _a.quoteLink;
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
        return (bodytext.length > 0) ? React.createElement("blockquote", { className: 'blockquote', dangerouslySetInnerHTML: { __html: bodytext } }) : React.createElement(React.Fragment, null);
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
    return React.createElement("figure", null,
        bodyTemplate(),
        figcaptionTemplate());
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
    //TODO: Date initialisieren, toLocaleDateString...
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
    text: function (headlessContentData) { return React.createElement(Text, { data: headlessContentData.content }); },
    html: function (headlessContentData) { return React.createElement(Html, { data: headlessContentData.content }); },
    textpic: function (headlessContentData) { return React.createElement(Textpic, { data: headlessContentData.content }); },
    image: function (headlessContentData) { return React.createElement(Image, { data: headlessContentData.content }); },
    shortcut: function (headlessContentData) { return React.createElement(Shortcut, { data: headlessContentData.content }); },
    div: function (headlessContentData) { return React.createElement(Div, { data: headlessContentData.content }); },
    uploads: function (headlessContentData) { return React.createElement(Uploads, { data: headlessContentData.content }); },
    accordion: function (headlessContentData) { return React.createElement(Accordion, { data: headlessContentData }); },
    gallery: function (headlessContentData) { return React.createElement(Gallery, { data: headlessContentData.content }); },
    textmedia: function (headlessContentData) { return React.createElement(Textmedia, { data: headlessContentData.content }); },
    card_group: function (headlessContentData) { return React.createElement(CardGroup, { data: headlessContentData }); },
    textcolumn: function (headlessContentData) { return React.createElement(TextColumns, { data: headlessContentData.content }); },
    quote: function (headlessContentData) { return React.createElement(Quote, { data: headlessContentData.content }); },
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

export { Content, Page, section as Section, TYPO3Page$1 as TYPO3Page, TYPO3PageContext };
//# sourceMappingURL=index.es.js.map
