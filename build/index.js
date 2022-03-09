'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactBootstrap = require('react-bootstrap');
var Lightbox = require('react-image-lightbox');
var FigureImage = require('react-bootstrap/FigureImage');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
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

var Text = function (props) {
    return React__default["default"].createElement("div", { dangerouslySetInnerHTML: { __html: props.data.bodytext } });
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
    props.data; var file = props.file;
    var crops = Object.keys(file.properties.crop);
    file.properties.dimensions.width;
    file.properties.dimensions.height;
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
        return React__default["default"].createElement("source", { key: index, srcSet: src, media: media });
    });
    return React__default["default"].createElement("picture", null,
        sources,
        React__default["default"].createElement(FigureImage__default["default"], { loading: "lazy", className: 'img-fluid', src: file.publicUrl, title: file.properties.title, alt: file.properties.alternative }));
};

var Image$1 = function (props) {
    var file = props.file, data = props.data;
    var caption = file.properties.description ?
        React__default["default"].createElement(reactBootstrap.Figure.Caption, { className: "caption" }, file.properties.description) : React__default["default"].createElement(React__default["default"].Fragment, null);
    return React__default["default"].createElement(reactBootstrap.Figure, { className: 'image' },
        React__default["default"].createElement(Image$2, { data: data, file: file }),
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
                var image = React__default["default"].createElement(Image$1, { data: props.data, file: file });
                return React__default["default"].createElement(reactBootstrap.Col, { className: "gallery-item  gallery-item-size-" + props.data.gallery.count.columns, key: rowKey + '-' + columnKey }, props.data.enlargeImageOnClick ?
                    React__default["default"].createElement("a", { onClick: function (e) {
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
    return React__default["default"].createElement("div", { className: "textpic" },
        React__default["default"].createElement("div", { className: "gallery-row" },
            React__default["default"].createElement(reactBootstrap.Row, { className: "textpic textpic-" + textpicClassName },
                React__default["default"].createElement(reactBootstrap.Col, { className: "textpic-item textpic-gallery", md: textpicClassName === props.data.gallery.position.vertical ? "auto" : "6" },
                    React__default["default"].createElement(reactBootstrap.Row, null,
                        React__default["default"].createElement(ImageCols, { data: props.data }))),
                React__default["default"].createElement(reactBootstrap.Col, { className: "textpic-item textpic-text", md: "6", dangerouslySetInnerHTML: { __html: props.data.bodytext } }))));
};

var Image = function (props) {
    return React__default["default"].createElement("div", { className: "image" },
        React__default["default"].createElement("div", { className: "gallery-row" },
            React__default["default"].createElement(reactBootstrap.Row, null,
                React__default["default"].createElement(ImageCols, { data: props.data }))));
};

var Div = function (props) {
    return React__default["default"].createElement("div", { className: "div" },
        React__default["default"].createElement("hr", null));
};

var Textmedia = function (props) {
    var textmediaClassName;
    if (props.data.gallery.position.horizontal === 'left' || props.data.gallery.position.horizontal === 'right') {
        textmediaClassName = props.data.gallery.position.horizontal;
    }
    if (props.data.gallery.position.horizontal === 'center') {
        textmediaClassName = props.data.gallery.position.vertical;
    }
    return React__default["default"].createElement("div", { className: "textmedia" },
        React__default["default"].createElement("div", { className: "gallery-row" },
            React__default["default"].createElement(reactBootstrap.Row, { className: "textmedia textmedia-" + textmediaClassName },
                React__default["default"].createElement(reactBootstrap.Col, { className: "textmedia-item textmedia-gallery", md: textmediaClassName === props.data.gallery.position.vertical ? "auto" : "6" },
                    React__default["default"].createElement(reactBootstrap.Row, null, Object.keys(props.data.gallery.rows).map(function (rowKey) {
                        return Object.keys(props.data.gallery.rows[rowKey].columns).map(function (columnKey) {
                            switch (props.data.gallery.rows[rowKey].columns[columnKey].properties.mimeType) {
                                case 'video/youtube':
                                    return React__default["default"].createElement(reactBootstrap.Col, { className: "gallery-item  gallery-item-size-" + props.data.gallery.count.columns },
                                        React__default["default"].createElement("iframe", { src: props.data.gallery.rows[rowKey].columns[columnKey].publicUrl, className: "embed-responsive-item" }),
                                        props.data.gallery.rows[rowKey].columns[columnKey].properties.description);
                                case 'image/jpeg':
                                    return React__default["default"].createElement(reactBootstrap.Col, { className: "gallery-item  gallery-item-size-" + props.data.gallery.count.columns },
                                        React__default["default"].createElement("img", { src: props.data.gallery.rows[rowKey].columns[columnKey].publicUrl, className: "embed-responsive-item" }),
                                        props.data.gallery.rows[rowKey].columns[columnKey].properties.description);
                                case 'image/svg+xml':
                                    return React__default["default"].createElement(reactBootstrap.Col, { className: "gallery-item  gallery-item-size-" + props.data.gallery.count.columns },
                                        React__default["default"].createElement("img", { src: props.data.gallery.rows[rowKey].columns[columnKey].publicUrl, className: "embed-responsive-item" }),
                                        props.data.gallery.rows[rowKey].columns[columnKey].properties.description);
                                case 'video/mp4':
                                    return React__default["default"].createElement(reactBootstrap.Col, { className: "gallery-item  gallery-item-size-" + props.data.gallery.count.columns },
                                        React__default["default"].createElement("video", { controls: true },
                                            React__default["default"].createElement("source", { type: "video/mp4", src: props.data.gallery.rows[rowKey].columns[columnKey].publicUrl })),
                                        props.data.gallery.rows[rowKey].columns[columnKey].properties.description);
                                case 'video/vimeo':
                                    return React__default["default"].createElement(reactBootstrap.Col, { className: "gallery-item  gallery-item-size-" + props.data.gallery.count.columns },
                                        React__default["default"].createElement("video", { controls: true },
                                            React__default["default"].createElement("source", { type: "video/mp4", src: props.data.gallery.rows[rowKey].columns[columnKey].publicUrl })),
                                        props.data.gallery.rows[rowKey].columns[columnKey].properties.description);
                                default:
                                    return React__default["default"].createElement(React__default["default"].Fragment, null);
                            }
                        });
                    }))),
                React__default["default"].createElement(reactBootstrap.Col, { className: "textmedia-item textmedia-text" },
                    React__default["default"].createElement("div", { dangerouslySetInnerHTML: { __html: props.data.bodytext } })))));
};

var Shortcut = function (props) {
    return React__default["default"].createElement("div", { className: "shortcut" }, props.data.shortcut.map(function (cObject) {
        return RenderContent(cObject);
    }));
};

var Html = function (props) {
    return React__default["default"].createElement("div", { dangerouslySetInnerHTML: { __html: props.data.bodytext } });
};

var Uploads = function (props) {
    return React__default["default"].createElement("div", { className: "uploads" },
        React__default["default"].createElement("ul", { className: "media-list filelink-list" }, Object.keys(props.data.media).map(function (key) {
            var description = props.data.displayDescription === '1' ?
                React__default["default"].createElement("p", { className: 'filelink-filedescription' }, props.data.media[key].properties.description) : null;
            var filesize = props.data.displayFileSizeInformation === '1' ?
                React__default["default"].createElement("span", { className: 'filelink-filesize ms-2 small' }, props.data.media[key].properties.size) : null;
            var title = props.data.media[key].properties.title;
            if (title === null || title === '') {
                title = props.data.media[key].properties.filename;
            }
            var heading = function (contentBefore) {
                if (contentBefore === void 0) { contentBefore = null; }
                return React__default["default"].createElement("span", { className: 'title' },
                    React__default["default"].createElement("h5", { className: 'filelink-heading ' },
                        React__default["default"].createElement("a", { href: props.data.media[key].publicUrl },
                            contentBefore,
                            title),
                        filesize));
            };
            var content;
            switch (props.data.displayInformation) {
                case "1":
                    content = React__default["default"].createElement(React__default["default"].Fragment, null,
                        heading(props.data.media[key].properties.type === 'video' ?
                            React__default["default"].createElement("i", { className: "bi bi-camera-video-fill me-2" }) : React__default["default"].createElement("i", { className: "bi bi-file-image me-2" })),
                        description);
                    break;
                case "2":
                    var media = null;
                    switch (props.data.media[key].properties.type) {
                        case 'video':
                            media = React__default["default"].createElement("iframe", { src: props.data.media[key].publicUrl, className: 'mw-100' });
                            break;
                        //TODO: add preview for application/*
                        case 'application':
                            if (props.data.media[key].properties.mimeType === 'application/pdf') {
                                media = React__default["default"].createElement("iframe", { src: props.data.media[key].publicUrl, className: 'mw-100' });
                            }
                            break;
                        default:
                            media = React__default["default"].createElement("img", { src: props.data.media[key].publicUrl, alt: title, className: 'img-fluid' });
                    }
                    content = React__default["default"].createElement(reactBootstrap.Row, null,
                        React__default["default"].createElement(reactBootstrap.Col, { className: 'filelink-media', xs: 3, sm: 3, md: 3, lg: 2, xl: 2, xxl: 2 }, media),
                        React__default["default"].createElement(reactBootstrap.Col, { className: 'filelink-body' },
                            heading(),
                            description));
                    break;
                default:
                    content = React__default["default"].createElement(React__default["default"].Fragment, null,
                        heading(),
                        description);
            }
            return React__default["default"].createElement("li", { className: 'filelink-item mb-2', key: key }, content);
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
            return React__default["default"].createElement(Image$1, { file: file, data: data });
        default:
            return React__default["default"].createElement(reactBootstrap.Alert, { variant: "info" },
                "Filetype unknown ",
                file.properties.filename);
    }
};

// TODO Add
var Gallery = function (props) {
    var _a = props.data, images = _a.images, imagecols = _a.imagecols;
    var galleryItems = images.map(function (image, index) {
        return React__default["default"].createElement(reactBootstrap.Col, { className: "gallery-item gallery-item-size-".concat(imagecols), md: imagecols },
            React__default["default"].createElement(Type, { data: props.data, file: image }));
    });
    return React__default["default"].createElement("div", { className: 'gallery-row' }, galleryItems);
};

var Accordion = function (props) {
    var _a;
    var _b = props.data, accordionItems = _b.accordionItems, pi_flexform = _b.pi_flexform;
    var activeElement = (_a = pi_flexform.default_element) !== null && _a !== void 0 ? _a : '';
    if (!accordionItems || accordionItems.length < 0) {
        return React__default["default"].createElement(React__default["default"].Fragment, null);
    }
    var accorditionItemsTemplate = accordionItems.map(function (accordionItem) {
        var galleryTemplate = React__default["default"].createElement(React__default["default"].Fragment, null);
        if (accordionItem.media.length > 0) {
            galleryTemplate = React__default["default"].createElement(Gallery, { data: __assign({ images: accordionItem.media }, accordionItem) });
        }
        return React__default["default"].createElement(reactBootstrap.Accordion.Item, { key: accordionItem.uid, eventKey: accordionItem.uid.toString() },
            React__default["default"].createElement(reactBootstrap.Accordion.Header, { as: "h4", id: "accordion-heading-".concat(accordionItem.uid) },
                React__default["default"].createElement("span", { className: "accordion-title-link-text" }, accordionItem.header)),
            React__default["default"].createElement(reactBootstrap.Accordion.Body, null,
                React__default["default"].createElement("div", { className: "accordion-content accordion-content-".concat(accordionItem.mediaorient) },
                    galleryTemplate,
                    React__default["default"].createElement("div", { className: 'accordion-content-item accordion-content-text', dangerouslySetInnerHTML: { __html: accordionItem.bodytext } }))));
    });
    return React__default["default"].createElement(reactBootstrap.Accordion, { defaultActiveKey: activeElement }, accorditionItemsTemplate);
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
    var _a = props.data, items = _a.items, pi_flexform = _a.pi_flexform;
    var cards = items.map(function (cardData, index_number) {
        var header = cardData.header, subheader = cardData.subheader, bodytext = cardData.bodytext, image = cardData.image, link = cardData.link, link_title = cardData.link_title, link_class = cardData.link_class;
        var imageTemplate = image ? image.map(function (imageData, index) { return React__default["default"].createElement(reactBootstrap.Card.Img, { key: "image-data-".concat(index), variant: "top", src: imageData.publicUrl }); }) : React__default["default"].createElement(React__default["default"].Fragment, null);
        var linkButton = React__default["default"].createElement(React__default["default"].Fragment, null);
        if (link) {
            if (link_title && link_title.length > 0) {
                link.title = link_title;
            }
            if (link_class && link_class.length > 0) {
                link["class"] = "".concat(link["class"], " btn-").concat(link_class);
            }
            linkButton = React__default["default"].createElement(Link, { href: link.href, title: link.title, className: link['class'], target: link.target, linkText: link.linkText });
        }
        return React__default["default"].createElement(reactBootstrap.Col, { key: "card-group-col-".concat(index_number) },
            React__default["default"].createElement(reactBootstrap.Card, null,
                header.length > 0 && React__default["default"].createElement(reactBootstrap.Card.Header, null, header),
                imageTemplate,
                React__default["default"].createElement(reactBootstrap.Card.Body, null,
                    subheader.length > 0 && React__default["default"].createElement(reactBootstrap.Card.Title, null, subheader),
                    bodytext.length > 0 && React__default["default"].createElement(reactBootstrap.Card.Text, { as: "div" },
                        React__default["default"].createElement("div", { dangerouslySetInnerHTML: { __html: bodytext } })),
                    linkButton)));
    });
    var alignment = 'justify-content-left';
    if (pi_flexform.align.length > 0) {
        alignment = "justify-content-".concat(pi_flexform.align);
    }
    return React__default["default"].createElement(reactBootstrap.Row, { xs: 1, md: pi_flexform.columns, className: "card-group ".concat(alignment) }, cards);
};

var TextColumns = function (props) {
    var bodytext = props.data.bodytext;
    return React__default["default"].createElement("div", { className: "text-column" },
        React__default["default"].createElement("div", { dangerouslySetInnerHTML: { __html: bodytext } }));
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
    return React__default["default"].createElement("div", { className: "frame-backgroundimage-container" },
        React__default["default"].createElement("div", { id: backgroundImageIdentifier, className: backgroundImageClasses, style: { backgroundImage: 'url("' + backgroundImageObject.publicUrl + '")' } }));
};

var HeaderLink = function (props) {
    if (props.headerLink === null || typeof props.headerLink === 'string') {
        return React__default["default"].createElement(React__default["default"].Fragment, null, props.children);
    }
    return React__default["default"].createElement("a", { href: props.headerLink.url }, props.children);
};

var Header = function (props) {
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
Header.defaultProps = {
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
    return React__default["default"].createElement("p", { className: props.positionClass }, props.date);
};

var AllHeader = function (props) {
    var content = React__default["default"].createElement(React__default["default"].Fragment, null);
    if (props.data.content.hasOwnProperty('headerLayout') && props.data.content.headerLayout !== 100) {
        if (props.data.content.header !== '' || props.data.content.subheader !== '' || props.data.content.date !== '') {
            content = React__default["default"].createElement("div", { className: "frame-header" },
                props.data.content.header !== '' ?
                    React__default["default"].createElement(Header, { layout: props.data.content.headerLayout, positionClass: props.data.content.headerPosition ? 'text-' + props.data.content.headerPosition : '', header: props.data.content.header, headerLink: props.data.content.headerLink !== '' ? props.data.content.headerLink : null })
                    :
                        null,
                props.data.content.subheader !== '' ?
                    React__default["default"].createElement(Subheader, { layout: props.data.content.headerLayout, positionClass: props.data.content.headerPosition ? 'text-' + props.data.content.headerPosition : '', header: props.data.content.subheader, headerLink: props.data.content.headerLink !== '' ? props.data.content.headerLink : null })
                    :
                        null,
                props.data.content.date !== '' ?
                    React__default["default"].createElement(HeaderDate, { date: props.data.content.date, positionClass: props.data.content.headerPosition ? 'text-' + props.data.content.headerPosition : '' })
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
        content = React__default["default"].createElement("div", { id: "c" + props.data.id, className: "frame " +
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
                    React__default["default"].createElement(AllHeader, { data: props.data }),
                    props.children)));
    }
    else {
        content = React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement("a", { id: "c" + props.data.id }),
            props.data._localizedUid ? React__default["default"].createElement("a", { id: "c" + props.data._localizedUid }) : null,
            props.data.appearance.spaceBefore ? React__default["default"].createElement("div", { className: spaceBeforeClass }) : null,
            React__default["default"].createElement(AllHeader, { data: props.data }),
            props.children,
            props.data.appearance.spaceAfter ? React__default["default"].createElement("div", { className: spaceAfterClass }) : null);
    }
    return content;
};

var FooterContent = function () {
    return React__default["default"].createElement("footer", { className: "section footer-section footer-section-content" },
        React__default["default"].createElement(reactBootstrap.Container, null,
            React__default["default"].createElement(reactBootstrap.Row, null,
                React__default["default"].createElement(reactBootstrap.Col, { className: "footer-section-content-column footer-section-content-column-left" },
                    React__default["default"].createElement(Content, { colPos: '10' })),
                React__default["default"].createElement(reactBootstrap.Col, { className: " footer-section-content-column footer-section-content-column-middle" },
                    React__default["default"].createElement(Content, { colPos: '11' })),
                React__default["default"].createElement(reactBootstrap.Col, { className: " footer-section-content-column footer-section-content-column-right" },
                    React__default["default"].createElement(Content, { colPos: '12' })))));
};

var getGridElement = function (element, content, contentElementLayouts, contentElementTemplates, index) {
    switch (element.type) {
        case 'row':
            var children = element.children.map(function (child, index) {
                return getGridElement(child, content, contentElementLayouts, contentElementTemplates, index);
            });
            return React__default["default"].createElement(reactBootstrap.Row, { as: element.tag, key: index }, children);
        case 'col':
            return React__default["default"].createElement(reactBootstrap.Col, { as: element.tag, lg: element.size, md: element.size, sm: element.size, xl: element.size, key: index },
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
        border: React__default["default"].createElement(reactBootstrap.Row, null,
            React__default["default"].createElement(reactBootstrap.Col, null,
                React__default["default"].createElement(Content, { colPos: '3' }))),
        main: React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement(reactBootstrap.Row, null,
                React__default["default"].createElement(reactBootstrap.Col, null,
                    React__default["default"].createElement(Content, { colPos: '8' }))),
            React__default["default"].createElement("div", { className: "section section-default" },
                React__default["default"].createElement(reactBootstrap.Row, null,
                    React__default["default"].createElement(reactBootstrap.Col, null,
                        React__default["default"].createElement(Content, { colPos: '0' })))),
            React__default["default"].createElement(reactBootstrap.Row, null,
                React__default["default"].createElement(reactBootstrap.Col, null,
                    React__default["default"].createElement(Content, { colPos: '9' })))),
        footer: React__default["default"].createElement(FooterContent, null),
    },
    simple: {
        border: React__default["default"].createElement(reactBootstrap.Row, null,
            React__default["default"].createElement(reactBootstrap.Col, null,
                React__default["default"].createElement(Content, { colPos: '3' }))),
        main: React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement(reactBootstrap.Row, null,
                React__default["default"].createElement(reactBootstrap.Col, null,
                    React__default["default"].createElement(Content, { colPos: '8' }))),
            React__default["default"].createElement("div", { className: "section section-default" },
                React__default["default"].createElement(reactBootstrap.Row, null,
                    React__default["default"].createElement(reactBootstrap.Col, null,
                        React__default["default"].createElement(Content, { colPos: '0' })))),
            React__default["default"].createElement(reactBootstrap.Row, null,
                React__default["default"].createElement(reactBootstrap.Col, null,
                    React__default["default"].createElement(Content, { colPos: '9' })))),
    },
    '2_columns': {
        border: React__default["default"].createElement(reactBootstrap.Row, null,
            React__default["default"].createElement(reactBootstrap.Col, null,
                React__default["default"].createElement(Content, { colPos: '3' }))),
        main: React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement(reactBootstrap.Row, null,
                React__default["default"].createElement(reactBootstrap.Col, null,
                    React__default["default"].createElement(Content, { colPos: '8' }))),
            React__default["default"].createElement("div", { className: "section section-default" },
                React__default["default"].createElement(reactBootstrap.Container, null,
                    React__default["default"].createElement(reactBootstrap.Row, null,
                        React__default["default"].createElement(reactBootstrap.Col, { md: "8", as: "main", className: " maincontent-wrap", role: "main" },
                            React__default["default"].createElement(Content, { colPos: '0' })),
                        React__default["default"].createElement(reactBootstrap.Col, { className: " subcontent-wrap ", md: "4" },
                            React__default["default"].createElement(Content, { colPos: '2' }))))),
            React__default["default"].createElement(reactBootstrap.Row, null,
                React__default["default"].createElement(reactBootstrap.Col, null,
                    React__default["default"].createElement(Content, { colPos: '9' })))),
        footer: React__default["default"].createElement(FooterContent, null),
    },
    '2_columns_25_75': {
        border: React__default["default"].createElement(reactBootstrap.Row, null,
            React__default["default"].createElement(reactBootstrap.Col, null,
                React__default["default"].createElement(Content, { colPos: '3' }))),
        main: React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement(reactBootstrap.Row, null,
                React__default["default"].createElement(reactBootstrap.Col, null,
                    React__default["default"].createElement(Content, { colPos: '8' }))),
            React__default["default"].createElement("div", { className: "section section-default" },
                React__default["default"].createElement(reactBootstrap.Container, null,
                    React__default["default"].createElement(reactBootstrap.Row, null,
                        React__default["default"].createElement(reactBootstrap.Col, { md: "8", as: "main", className: " maincontent-wrap", role: "main" },
                            React__default["default"].createElement(Content, { colPos: '0' })),
                        React__default["default"].createElement(reactBootstrap.Col, { className: " subcontent-wrap", md: "4" },
                            React__default["default"].createElement(Content, { colPos: '1' }))))),
            React__default["default"].createElement(reactBootstrap.Row, null,
                React__default["default"].createElement(reactBootstrap.Col, null,
                    React__default["default"].createElement(Content, { colPos: '9' })))),
        footer: React__default["default"].createElement(FooterContent, null),
    },
    '2_columns_50_50': {
        border: React__default["default"].createElement(reactBootstrap.Row, null,
            React__default["default"].createElement(reactBootstrap.Col, null,
                React__default["default"].createElement(Content, { colPos: '3' }))),
        main: React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement(reactBootstrap.Row, null,
                React__default["default"].createElement(reactBootstrap.Col, null,
                    React__default["default"].createElement(Content, { colPos: '8' }))),
            React__default["default"].createElement("div", { className: "section section-default" },
                React__default["default"].createElement(reactBootstrap.Container, null,
                    React__default["default"].createElement(reactBootstrap.Row, null,
                        React__default["default"].createElement(reactBootstrap.Col, { md: "6", as: "main", className: " maincontent-wrap", role: "main" },
                            React__default["default"].createElement(Content, { colPos: '0' })),
                        React__default["default"].createElement(reactBootstrap.Col, { className: " subcontent-wrap ", md: "6" },
                            React__default["default"].createElement(Content, { colPos: '2' }))))),
            React__default["default"].createElement(reactBootstrap.Row, null,
                React__default["default"].createElement(reactBootstrap.Col, null,
                    React__default["default"].createElement(Content, { colPos: '9' })))),
        footer: React__default["default"].createElement(FooterContent, null),
    },
    '3_columns': {
        border: React__default["default"].createElement(reactBootstrap.Row, null,
            React__default["default"].createElement(reactBootstrap.Col, null,
                React__default["default"].createElement(Content, { colPos: '3' }))),
        main: React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement(reactBootstrap.Row, null,
                React__default["default"].createElement(reactBootstrap.Col, null,
                    React__default["default"].createElement(Content, { colPos: '8' }))),
            React__default["default"].createElement("div", { className: "section section-default" },
                React__default["default"].createElement(reactBootstrap.Container, null,
                    React__default["default"].createElement(reactBootstrap.Row, null,
                        React__default["default"].createElement(reactBootstrap.Col, { lg: "6", as: "main", className: " maincontent-wrap ", role: "main" },
                            React__default["default"].createElement(Content, { colPos: '0' })),
                        React__default["default"].createElement(reactBootstrap.Col, { className: " subcontent-wrap ", lg: "3" },
                            React__default["default"].createElement(Content, { colPos: '1' })),
                        React__default["default"].createElement(reactBootstrap.Col, { className: " subcontent-wrap ", lg: "3" },
                            React__default["default"].createElement(Content, { colPos: '2' }))))),
            React__default["default"].createElement(reactBootstrap.Row, null,
                React__default["default"].createElement(reactBootstrap.Col, null,
                    React__default["default"].createElement(Content, { colPos: '9' })))),
        footer: React__default["default"].createElement(FooterContent, null),
    },
    'special_feature': {
        border: React__default["default"].createElement(reactBootstrap.Row, null,
            React__default["default"].createElement(reactBootstrap.Col, null,
                React__default["default"].createElement(Content, { colPos: '3' }))),
        main: React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement(reactBootstrap.Row, null,
                React__default["default"].createElement(reactBootstrap.Col, null,
                    React__default["default"].createElement(Content, { colPos: '8' }))),
            React__default["default"].createElement("div", { className: "section section-default" },
                React__default["default"].createElement(reactBootstrap.Row, null,
                    React__default["default"].createElement(reactBootstrap.Col, null,
                        React__default["default"].createElement(Content, { colPos: '0' })))),
            React__default["default"].createElement("div", { className: "section section-primary" },
                React__default["default"].createElement(reactBootstrap.Container, null,
                    React__default["default"].createElement(reactBootstrap.Row, null,
                        React__default["default"].createElement(reactBootstrap.Col, { className: "section-column-half ", md: "6" },
                            React__default["default"].createElement(Content, { colPos: '30' })),
                        React__default["default"].createElement(reactBootstrap.Col, { className: "section-column-half ", md: "6" },
                            React__default["default"].createElement(Content, { colPos: '31' }))))),
            React__default["default"].createElement("div", { className: "section section-primary" },
                React__default["default"].createElement(reactBootstrap.Container, null,
                    React__default["default"].createElement(reactBootstrap.Row, null,
                        React__default["default"].createElement(reactBootstrap.Col, { className: "section-column-half ", md: "6" },
                            React__default["default"].createElement(Content, { colPos: '32' })),
                        React__default["default"].createElement(reactBootstrap.Col, { className: "section-column-half ", md: "6" },
                            React__default["default"].createElement(Content, { colPos: '33' }))))),
            React__default["default"].createElement("div", { className: "section section-default" },
                React__default["default"].createElement(reactBootstrap.Row, null,
                    React__default["default"].createElement(reactBootstrap.Col, null,
                        React__default["default"].createElement(Content, { colPos: '4' })))),
            React__default["default"].createElement("div", { className: "section section-light" },
                React__default["default"].createElement(reactBootstrap.Container, null,
                    React__default["default"].createElement(reactBootstrap.Row, null,
                        React__default["default"].createElement(reactBootstrap.Col, { className: "section-column-half ", md: "6" },
                            React__default["default"].createElement(Content, { colPos: '34' })),
                        React__default["default"].createElement(reactBootstrap.Col, { className: "section-column-half ", md: "6" },
                            React__default["default"].createElement(Content, { colPos: '35' }))))),
            React__default["default"].createElement("div", { className: "section section-light" },
                React__default["default"].createElement(reactBootstrap.Container, null,
                    React__default["default"].createElement(reactBootstrap.Row, null,
                        React__default["default"].createElement(reactBootstrap.Col, { className: "section-column-half ", md: "6" },
                            React__default["default"].createElement(Content, { colPos: '36' })),
                        React__default["default"].createElement(reactBootstrap.Col, { className: "section-column-half ", md: "6" },
                            React__default["default"].createElement(Content, { colPos: '37' }))))),
            React__default["default"].createElement(reactBootstrap.Row, null,
                React__default["default"].createElement(reactBootstrap.Col, null,
                    React__default["default"].createElement(Content, { colPos: '9' })))),
        footer: React__default["default"].createElement(FooterContent, null),
    },
    'special_start': {
        border: React__default["default"].createElement(reactBootstrap.Row, null,
            React__default["default"].createElement(reactBootstrap.Col, null,
                React__default["default"].createElement(Content, { colPos: '3' }))),
        main: React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement(reactBootstrap.Row, null,
                React__default["default"].createElement(reactBootstrap.Col, null,
                    React__default["default"].createElement(Content, { colPos: '8' }))),
            React__default["default"].createElement("div", { className: "section section-default" },
                React__default["default"].createElement(reactBootstrap.Container, null,
                    React__default["default"].createElement(reactBootstrap.Row, null,
                        React__default["default"].createElement(reactBootstrap.Col, { className: "section-column-third ", md: "4" },
                            React__default["default"].createElement(Content, { colPos: '20' })),
                        React__default["default"].createElement(reactBootstrap.Col, { className: "section-column-third ", md: "4" },
                            React__default["default"].createElement(Content, { colPos: '21' })),
                        React__default["default"].createElement(reactBootstrap.Col, { className: "section-column-third ", md: "4" },
                            React__default["default"].createElement(Content, { colPos: '22' }))))),
            React__default["default"].createElement("div", { className: "section section-light" },
                React__default["default"].createElement(reactBootstrap.Row, null,
                    React__default["default"].createElement(reactBootstrap.Col, null,
                        React__default["default"].createElement(Content, { colPos: '0' })))),
            React__default["default"].createElement(reactBootstrap.Row, null,
                React__default["default"].createElement(reactBootstrap.Col, null,
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
    text: function (headlessContentData) { return React__default["default"].createElement(Text, { data: headlessContentData.content }); },
    html: function (headlessContentData) { return React__default["default"].createElement(Html, { data: headlessContentData.content }); },
    textpic: function (headlessContentData) { return React__default["default"].createElement(Textpic, { data: headlessContentData.content }); },
    image: function (headlessContentData) { return React__default["default"].createElement(Image, { data: headlessContentData.content }); },
    shortcut: function (headlessContentData) { return React__default["default"].createElement(Shortcut, { data: headlessContentData.content }); },
    div: function (headlessContentData) { return React__default["default"].createElement(Div, { data: headlessContentData.content }); },
    uploads: function (headlessContentData) { return React__default["default"].createElement(Uploads, { data: headlessContentData.content }); },
    accordion: function (headlessContentData) { return React__default["default"].createElement(Accordion, { data: headlessContentData.content }); },
    gallery: function (headlessContentData) { return React__default["default"].createElement(Gallery, { data: headlessContentData.content }); },
    textmedia: function (headlessContentData) { return React__default["default"].createElement(Textmedia, { data: headlessContentData.content }); },
    card_group: function (headlessContentData) { return React__default["default"].createElement(CardGroup, { data: headlessContentData.content }); },
    textcolumn: function (headlessContentData) { return React__default["default"].createElement(TextColumns, { data: headlessContentData.content }); },
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
exports.Page = Page;
exports.Section = section;
exports.TYPO3Page = TYPO3Page$1;
exports.TYPO3PageContext = TYPO3PageContext;
//# sourceMappingURL=index.js.map
