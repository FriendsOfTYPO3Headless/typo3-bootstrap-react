'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactBootstrap = require('react-bootstrap');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var section = function (props) {
    if (props.pageTemplate.hasOwnProperty(props.name)) {
        return props.pageTemplate[props.name];
    }
    return React__default['default'].createElement(React__default['default'].Fragment, null,
        "Template section ",
        props.name,
        " not found");
};

var __GenericLayout = function (props) {
    var genericSections = Object.keys(props.pageTemplate).map(function (sectionName) {
        return React__default['default'].createElement("section", { key: sectionName, className: sectionName },
            React__default['default'].createElement(section, { name: sectionName, pageTemplate: props.pageTemplate }));
    });
    return React__default['default'].createElement(React__default['default'].Fragment, null, genericSections);
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
        return React__default['default'].createElement(React__default['default'].Fragment, null,
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
        return React__default['default'].createElement(React__default['default'].Fragment, null,
            "Page-template not found: ",
            props.headlessData.page.appereance.backendLayout,
            " ");
    }
    return layout(props.headlessData, template(props.headlessData, props.contentElementLayouts, props.contentElementTemplates));
    // return <>Page: {props.config.navigations.navigation1[0].title}</>
};

var PREFIX_COLPOS = 'colPos';
var Content = function (props) {
    var content = React__default['default'].createElement(React__default['default'].Fragment, null);
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
                return React__default['default'].createElement(React__default['default'].Fragment, null,
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
                return React__default['default'].createElement(React__default['default'].Fragment, null,
                    "CE-template not found: ",
                    props.content.type,
                    " ");
            }
            return React__default['default'].createElement(React__default['default'].Fragment, { key: content.id }, layout({ children: template(content, props.args), content: content, args: props.args }));
        });
    }
    return content;
};

var Text = function (props) {
    return React__default['default'].createElement("div", { dangerouslySetInnerHTML: { __html: props.data.bodytext } });
};

var Textpic = function (props) {
    return React__default['default'].createElement("div", { className: "textpic" },
        React__default['default'].createElement("div", { className: "textpic-item textpic-gallery" }),
        React__default['default'].createElement("div", { className: "textpic-item textpic-text" },
            React__default['default'].createElement("div", { dangerouslySetInnerHTML: { __html: props.data.bodytext } })));
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
    return React__default['default'].createElement("div", { className: "frame-backgroundimage-container" },
        React__default['default'].createElement("div", { id: backgroundImageIdentifier, className: backgroundImageClasses, style: { backgroundImage: 'url("' + backgroundImageObject.publicUrl + '")' } }));
};

var HeaderLink = function (props) {
    if (props.headerLink === null || typeof props.headerLink === 'string') {
        return React__default['default'].createElement(React__default['default'].Fragment, null, props.children);
    }
    return React__default['default'].createElement("a", { href: props.headerLink.url }, props.children);
};

var Header = function (props) {
    switch (props.layout) {
        case 1:
            return React__default['default'].createElement("h1", { className: props.class + ' ' + props.positionClass },
                React__default['default'].createElement(HeaderLink, { headerLink: props.headerLink },
                    React__default['default'].createElement("span", null, props.header)));
        case 3:
            return React__default['default'].createElement("h3", { className: props.class + ' ' + props.positionClass },
                React__default['default'].createElement(HeaderLink, { headerLink: props.headerLink },
                    React__default['default'].createElement("span", null, props.header)));
        case 4:
            return React__default['default'].createElement("h4", { className: props.class + ' ' + props.positionClass },
                React__default['default'].createElement(HeaderLink, { headerLink: props.headerLink },
                    React__default['default'].createElement("span", null, props.header)));
        case 5:
            return React__default['default'].createElement("h5", { className: props.class + ' ' + props.positionClass },
                React__default['default'].createElement(HeaderLink, { headerLink: props.headerLink },
                    React__default['default'].createElement("span", null, props.header)));
        case 100:
            return React__default['default'].createElement(React__default['default'].Fragment, null);
        default:
            return React__default['default'].createElement("h2", { className: props.class + ' ' + props.positionClass },
                React__default['default'].createElement(HeaderLink, { headerLink: props.headerLink },
                    React__default['default'].createElement("span", null, props.header)));
    }
};
Header.defaultProps = {
    class: 'element-header',
    headerLink: null
};

var Subheader = function (props) {
    switch (props.layout) {
        case 1:
            return React__default['default'].createElement("h2", { className: props.class + ' ' + props.positionClass },
                React__default['default'].createElement(HeaderLink, { headerLink: props.headerLink },
                    React__default['default'].createElement("span", null, props.header)));
        case 3:
            return React__default['default'].createElement("h4", { className: props.class + ' ' + props.positionClass },
                React__default['default'].createElement(HeaderLink, { headerLink: props.headerLink },
                    React__default['default'].createElement("span", null, props.header)));
        case 4:
            return React__default['default'].createElement("h5", { className: props.class + ' ' + props.positionClass },
                React__default['default'].createElement(HeaderLink, { headerLink: props.headerLink },
                    React__default['default'].createElement("span", null, props.header)));
        case 5:
            return React__default['default'].createElement("h6", { className: props.class + ' ' + props.positionClass },
                React__default['default'].createElement(HeaderLink, { headerLink: props.headerLink },
                    React__default['default'].createElement("span", null, props.header)));
        case 100:
            return React__default['default'].createElement(React__default['default'].Fragment, null);
        default:
            return React__default['default'].createElement("h3", { className: props.class + ' ' + props.positionClass },
                React__default['default'].createElement(HeaderLink, { headerLink: props.headerLink },
                    React__default['default'].createElement("span", null, props.header)));
    }
};
Subheader.defaultProps = {
    class: 'element-subheader',
    headerLink: null
};

var HeaderDate = function (props) {
    return React__default['default'].createElement("p", { className: props.positionClass }, props.date);
};

var AllHeader = function (props) {
    var content = React__default['default'].createElement(React__default['default'].Fragment, null);
    if (props.data.content.headerLayout !== 100) {
        if (props.data.content.header !== '' || props.data.content.header !== '' || props.data.content.date !== '') {
            content = React__default['default'].createElement("header", { className: "frame-header" },
                props.data.content.header !== '' ?
                    React__default['default'].createElement(Header, { layout: props.data.content.headerLayout, positionClass: props.data.content.headerPosition ? 'text-' + props.data.content.headerPosition : '', header: props.data.content.header, headerLink: props.data.content.headerLink !== '' ? props.data.content.headerLink : null })
                    :
                        null,
                props.data.content.subheader !== '' ?
                    React__default['default'].createElement(Subheader, { layout: props.data.content.headerLayout, positionClass: props.data.content.headerPosition ? 'text-' + props.data.content.headerPosition : '', header: props.data.content.subheader, headerLink: props.data.content.headerLink !== '' ? props.data.content.headerLink : null })
                    :
                        null,
                props.data.content.date !== '' ?
                    React__default['default'].createElement(HeaderDate, { date: props.data.content.date, positionClass: props.data.content.headerPosition ? 'text-' + props.data.content.headerPosition : '' })
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
        content = React__default['default'].createElement("div", { id: "c" + props.data.id, className: "frame " +
                frameClass + " " +
                typeClass + " " +
                layoutClass + " " +
                backgroundClass + " " +
                backgroundImageClass + " " +
                spaceBeforeClass + " " +
                spaceAfterClass },
            React__default['default'].createElement(BackgroundImage, { data: props.data }),
            React__default['default'].createElement("div", { className: "frame-container" },
                React__default['default'].createElement("div", { className: "frame-inner" },
                    props.data._localizedUid ? React__default['default'].createElement("a", { id: "c" + props.data._localizedUid }) : null,
                    React__default['default'].createElement(AllHeader, { data: props.data }),
                    props.children)));
    }
    else {
        content = React__default['default'].createElement(React__default['default'].Fragment, null,
            React__default['default'].createElement("a", { id: "c" + props.data.id }),
            props.data._localizedUid ? React__default['default'].createElement("a", { id: "c" + props.data._localizedUid }) : null,
            props.data.appearance.spaceBefore ? React__default['default'].createElement("div", { className: spaceBeforeClass }) : null,
            React__default['default'].createElement(AllHeader, { data: props.data }),
            props.children,
            props.data.appearance.spaceAfter ? React__default['default'].createElement("div", { className: spaceAfterClass }) : null);
    }
    return content;
};

var FooterContent = function (props) {
    return React__default['default'].createElement("footer", { className: "section footer-section footer-section-content" },
        React__default['default'].createElement(reactBootstrap.Container, null,
            React__default['default'].createElement(reactBootstrap.Row, null,
                React__default['default'].createElement(reactBootstrap.Col, { className: "footer-section-content-column footer-section-content-column-left" },
                    React__default['default'].createElement(Content, { colPos: '10', slide: -1, content: props.content, contentElementLayouts: props.contentElementLayouts, contentElementTemplates: props.contentElementTemplates })),
                React__default['default'].createElement(reactBootstrap.Col, { className: " footer-section-content-column footer-section-content-column-middle" },
                    React__default['default'].createElement(Content, { colPos: '11', slide: -1, content: props.content, contentElementLayouts: props.contentElementLayouts, contentElementTemplates: props.contentElementTemplates })),
                React__default['default'].createElement(reactBootstrap.Col, { className: " footer-section-content-column footer-section-content-column-right" },
                    React__default['default'].createElement(Content, { colPos: '12', slide: -1, content: props.content, contentElementLayouts: props.contentElementLayouts, contentElementTemplates: props.contentElementTemplates })))));
};

var getGridElement = function (element, content, contentElementLayouts, contentElementTemplates, index) {
    switch (element.type) {
        case 'row':
            var children = element.children.map(function (child, index) {
                return getGridElement(child, content, contentElementLayouts, contentElementTemplates, index);
            });
            return React__default['default'].createElement(reactBootstrap.Row, { as: element.tag, key: index }, children);
        case 'col':
            return React__default['default'].createElement(reactBootstrap.Col, { as: element.tag, lg: element.size, md: element.size, sm: element.size, xl: element.size, key: index },
                React__default['default'].createElement(Content, { colPos: element.colPos, content: content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }));
        default:
            return React__default['default'].createElement(React__default['default'].Fragment, null);
    }
};
var GenericPage = function (props) {
    var content = React__default['default'].createElement(React__default['default'].Fragment, null);
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
        return React__default['default'].createElement(React__default['default'].Fragment, null,
            React__default['default'].createElement("header", null, "LOGO"),
            React__default['default'].createElement("section", null,
                React__default['default'].createElement("h1", null, "Hier ist ist eine Section"),
                React__default['default'].createElement(section, { name: 'main', pageTemplate: pageTemplate })),
            React__default['default'].createElement("footer", null,
                React__default['default'].createElement("h3", null, "Hier ist eine andere Section"),
                React__default['default'].createElement(section, { name: 'footer', pageTemplate: pageTemplate })));
    },
    __generic: function (headlessData, pageTemplate, args) {
        return React__default['default'].createElement(React__default['default'].Fragment, null,
            React__default['default'].createElement(__GenericLayout, { headlessData: headlessData, pageTemplate: pageTemplate }));
    },
    Default: function (headlessData, pageTemplate, args) {
        return React__default['default'].createElement(React__default['default'].Fragment, null,
            React__default['default'].createElement(__GenericLayout, { headlessData: headlessData, pageTemplate: pageTemplate }));
    }
};
var pageTemplates = {
    __generic: function (headlessData, contentElementLayouts, contentElementTemplates, args) {
        return {
            main: React__default['default'].createElement(GenericPage, { headlessData: headlessData, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })
        };
    },
    example: function (headlessData, contentElementLayout, contentElementTemplates, args) {
        return {
            main: React__default['default'].createElement(React__default['default'].Fragment, null, "...example")
        };
    },
    default: function (headlessData, contentElementLayouts, contentElementTemplates, args) {
        return {
            border: React__default['default'].createElement(Content, { colPos: '3', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
            main: React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement(Content, { colPos: '8', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
                React__default['default'].createElement("div", { className: "section section-default" },
                    React__default['default'].createElement(reactBootstrap.Row, null,
                        React__default['default'].createElement(reactBootstrap.Col, null,
                            React__default['default'].createElement(Content, { colPos: '0', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React__default['default'].createElement(Content, { colPos: '9', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
            main: React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement(Content, { colPos: '8', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
                React__default['default'].createElement("div", { className: "section section-default" },
                    React__default['default'].createElement(reactBootstrap.Row, null,
                        React__default['default'].createElement(reactBootstrap.Col, null,
                            React__default['default'].createElement(Content, { colPos: '0', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React__default['default'].createElement(Content, { colPos: '9', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
            border: React__default['default'].createElement(Content, { colPos: '3', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
            footer: React__default['default'].createElement(FooterContent, { content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
        };
    },
    simple: function (headlessData, contentElementLayouts, contentElementTemplates, args) {
        return {
            border: React__default['default'].createElement(Content, { colPos: '3', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
            //    main: <Main headlessData={headlessData} contentElementLayouts={contentElementLayouts} contentElementTemplates={contentElementTemplates} args={args}/>,
            main: React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement(Content, { colPos: '8', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
                React__default['default'].createElement("div", { className: "section section-default" },
                    React__default['default'].createElement(reactBootstrap.Row, null,
                        React__default['default'].createElement(reactBootstrap.Col, null,
                            React__default['default'].createElement(Content, { colPos: '0', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React__default['default'].createElement(Content, { colPos: '9', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
        };
    },
    '2_columns': function (headlessData, contentElementLayouts, contentElementTemplates, args) {
        return {
            border: React__default['default'].createElement(Content, { colPos: '3', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
            main: React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement("div", null, "2Columns"),
                React__default['default'].createElement(Content, { colPos: '8', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
                React__default['default'].createElement("div", { className: "section section-default" },
                    React__default['default'].createElement(reactBootstrap.Row, null,
                        React__default['default'].createElement(reactBootstrap.Col, { className: "col-sm-8" },
                            React__default['default'].createElement("main", { className: " maincontent-wrap", role: "main" },
                                React__default['default'].createElement(Content, { colPos: '0', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }))),
                        React__default['default'].createElement(reactBootstrap.Col, { className: " subcontent-wrap col-sm-4" },
                            React__default['default'].createElement(Content, { colPos: '2', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React__default['default'].createElement(Content, { colPos: '9', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
            footer: React__default['default'].createElement(FooterContent, { content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
        };
    },
    '2_columns_25_75': function (headlessData, contentElementLayouts, contentElementTemplates, args) {
        return {
            border: React__default['default'].createElement(Content, { colPos: '3', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
            main: React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement("div", null, "2Columns2575"),
                React__default['default'].createElement(Content, { colPos: '8', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
                React__default['default'].createElement("div", { className: "section section-default" },
                    React__default['default'].createElement(reactBootstrap.Row, null,
                        React__default['default'].createElement(reactBootstrap.Col, { className: "col-sm-4" },
                            React__default['default'].createElement("main", { className: " maincontent-wrap", role: "main" },
                                React__default['default'].createElement(Content, { colPos: '0', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }))),
                        React__default['default'].createElement(reactBootstrap.Col, { className: " subcontent-wrap col-sm-8" },
                            React__default['default'].createElement(Content, { colPos: '1', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React__default['default'].createElement(Content, { colPos: '9', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
            footer: React__default['default'].createElement(FooterContent, { content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
        };
    },
    '2_columns_50_50': function (headlessData, contentElementLayouts, contentElementTemplates, args) {
        return {
            border: React__default['default'].createElement(Content, { colPos: '3', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
            main: React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement("div", null, "2Columns5050"),
                React__default['default'].createElement(Content, { colPos: '8', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
                React__default['default'].createElement("div", { className: "section section-default" },
                    React__default['default'].createElement(reactBootstrap.Row, null,
                        React__default['default'].createElement(reactBootstrap.Col, { className: "col-sm-6" },
                            React__default['default'].createElement("main", { className: " maincontent-wrap", role: "main" },
                                React__default['default'].createElement(Content, { colPos: '0', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }))),
                        React__default['default'].createElement(reactBootstrap.Col, { className: " subcontent-wrap" },
                            React__default['default'].createElement(Content, { colPos: '2', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React__default['default'].createElement(Content, { colPos: '9', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
            footer: React__default['default'].createElement(FooterContent, { content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
            border: React__default['default'].createElement(Content, { colPos: '3', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
        };
    },
    '2_columns_25_75': function (headlessData, contentElementLayouts, contentElementTemplates, args) {
        return {
            main: React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement("div", null, "2Columns2575"),
                React__default['default'].createElement(Content, { colPos: '8', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
                React__default['default'].createElement("div", { className: "section section-default" },
                    React__default['default'].createElement(reactBootstrap.Row, null,
                        React__default['default'].createElement(reactBootstrap.Col, null,
                            React__default['default'].createElement("main", { className: " maincontent-wrap", role: "main" },
                                React__default['default'].createElement(Content, { colPos: '0', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }))),
                        React__default['default'].createElement(reactBootstrap.Col, { className: " subcontent-wrap" },
                            React__default['default'].createElement(Content, { colPos: '1', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React__default['default'].createElement(Content, { colPos: '9', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
            footer: React__default['default'].createElement(FooterContent, { content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
            border: React__default['default'].createElement(Content, { colPos: '3', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })
        };
    },
    '2_columns_50_50': function (headlessData, contentElementLayouts, contentElementTemplates, args) {
        return {
            main: React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement("div", null, "2Columns5050"),
                React__default['default'].createElement(Content, { colPos: '8', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
                React__default['default'].createElement("div", { className: "section section-default" },
                    React__default['default'].createElement(reactBootstrap.Row, null,
                        React__default['default'].createElement(reactBootstrap.Col, null,
                            React__default['default'].createElement("main", { className: " maincontent-wrap", role: "main" },
                                React__default['default'].createElement(Content, { colPos: '0', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }))),
                        React__default['default'].createElement(reactBootstrap.Col, { className: " subcontent-wrap" },
                            React__default['default'].createElement(Content, { colPos: '2', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React__default['default'].createElement(Content, { colPos: '9', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
            footer: React__default['default'].createElement(FooterContent, { content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
        };
    },
    '3_columns': function (headlessData, contentElementLayouts, contentElementTemplates, args) {
        return {
            main: React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement("div", null, "2Columns5050"),
                React__default['default'].createElement(Content, { colPos: '8', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
                React__default['default'].createElement("div", { className: "section section-default" },
                    React__default['default'].createElement(reactBootstrap.Row, null,
                        React__default['default'].createElement(reactBootstrap.Col, null,
                            React__default['default'].createElement("main", { className: " maincontent-wrap", role: "main" },
                                React__default['default'].createElement(Content, { colPos: '0', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }))),
                        React__default['default'].createElement(reactBootstrap.Col, { className: " subcontent-wrap" },
                            React__default['default'].createElement(Content, { colPos: '1', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
                        React__default['default'].createElement(reactBootstrap.Col, { className: " subcontent-wrap" },
                            React__default['default'].createElement(Content, { colPos: '2', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React__default['default'].createElement(Content, { colPos: '9', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
            footer: React__default['default'].createElement(FooterContent, { content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
        };
    },
    'special_feature': function (headlessData, contentElementLayouts, contentElementTemplates, args) {
        return {
            border: React__default['default'].createElement(Content, { colPos: '3', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
            main: React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement("div", null, "special start"),
                React__default['default'].createElement(Content, { colPos: '8', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
                React__default['default'].createElement("div", { className: "section section-default" },
                    React__default['default'].createElement(reactBootstrap.Row, null,
                        React__default['default'].createElement(reactBootstrap.Col, null,
                            React__default['default'].createElement(Content, { colPos: '0', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React__default['default'].createElement("div", { className: "section section-primary" },
                    React__default['default'].createElement(reactBootstrap.Row, null,
                        React__default['default'].createElement(reactBootstrap.Col, { className: "section-column-half col-sm-6" },
                            React__default['default'].createElement(Content, { colPos: '30', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
                        React__default['default'].createElement(reactBootstrap.Col, { className: "section-column-half col-sm-6" },
                            React__default['default'].createElement(Content, { colPos: '31', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React__default['default'].createElement("div", { className: "section section-primary" },
                    React__default['default'].createElement(reactBootstrap.Row, null,
                        React__default['default'].createElement(reactBootstrap.Col, { className: "section-column-half col-sm-6" },
                            React__default['default'].createElement(Content, { colPos: '32', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
                        React__default['default'].createElement(reactBootstrap.Col, { className: "section-column-half col-sm-6" },
                            React__default['default'].createElement(Content, { colPos: '33', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React__default['default'].createElement("div", { className: "section section-default" },
                    React__default['default'].createElement(reactBootstrap.Row, null,
                        React__default['default'].createElement(reactBootstrap.Col, null,
                            React__default['default'].createElement(Content, { colPos: '4', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React__default['default'].createElement("div", { className: "section section-light" },
                    React__default['default'].createElement(reactBootstrap.Row, null,
                        React__default['default'].createElement(reactBootstrap.Col, { className: "section-column-half col-sm-6" },
                            React__default['default'].createElement(Content, { colPos: '34', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
                        React__default['default'].createElement(reactBootstrap.Col, { className: "section-column-half col-sm-6" },
                            React__default['default'].createElement(Content, { colPos: '35', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React__default['default'].createElement("div", { className: "section section-light" },
                    React__default['default'].createElement(reactBootstrap.Row, null,
                        React__default['default'].createElement(reactBootstrap.Col, { className: "section-column-half col-sm-6" },
                            React__default['default'].createElement(Content, { colPos: '36', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
                        React__default['default'].createElement(reactBootstrap.Col, { className: "section-column-half col-sm-6" },
                            React__default['default'].createElement(Content, { colPos: '37', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React__default['default'].createElement(Content, { colPos: '9', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
            footer: React__default['default'].createElement(FooterContent, { content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
        };
    },
    'special_start': function (headlessData, contentElementLayouts, contentElementTemplates, args) {
        return {
            border: React__default['default'].createElement(Content, { colPos: '3', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
            main: React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement("div", null, "special start"),
                React__default['default'].createElement(Content, { colPos: '8', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
                React__default['default'].createElement("div", { className: "section section-default" },
                    React__default['default'].createElement(reactBootstrap.Row, null,
                        React__default['default'].createElement(reactBootstrap.Col, { className: "section-column-third col-sm-4" },
                            React__default['default'].createElement(Content, { colPos: '20', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
                        React__default['default'].createElement(reactBootstrap.Col, { className: "section-column-third col-sm-4" },
                            React__default['default'].createElement(Content, { colPos: '21', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
                        React__default['default'].createElement(reactBootstrap.Col, { className: "section-column-third col-sm-4" },
                            React__default['default'].createElement(Content, { colPos: '22', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React__default['default'].createElement("div", { className: "section section-light" },
                    React__default['default'].createElement(reactBootstrap.Row, null,
                        React__default['default'].createElement(reactBootstrap.Col, null,
                            React__default['default'].createElement(Content, { colPos: '0', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React__default['default'].createElement(Content, { colPos: '9', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
            footer: React__default['default'].createElement(FooterContent, { content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
        };
    },
    },
    'special_feature': function (headlessData, contentElementLayouts, contentElementTemplates, args) {
        return {};
    },
    'special_start': function (headlessData, contentElementLayouts, contentElementTemplates, args) {
        return {
            main: React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement("div", null, "special start"),
                React__default['default'].createElement(Content, { colPos: '8', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
                React__default['default'].createElement("div", { className: "section section-default" },
                    React__default['default'].createElement(reactBootstrap.Row, null,
                        React__default['default'].createElement(reactBootstrap.Col, { className: "section-column-third " },
                            React__default['default'].createElement(Content, { colPos: '20', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
                        React__default['default'].createElement(reactBootstrap.Col, { className: "section-column-third " },
                            React__default['default'].createElement(Content, { colPos: '21', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
                        React__default['default'].createElement(reactBootstrap.Col, { className: "section-column-third " },
                            React__default['default'].createElement(Content, { colPos: '22', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React__default['default'].createElement("div", { className: "section section-light" },
                    React__default['default'].createElement(reactBootstrap.Row, null,
                        React__default['default'].createElement(reactBootstrap.Col, null,
                            React__default['default'].createElement(Content, { colPos: '0', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React__default['default'].createElement(Content, { colPos: '9', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
            footer: React__default['default'].createElement(FooterContent, { content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
        };
    },
};
var contentElementLayouts = {
    __generic: function (props) {
        return React__default['default'].createElement(Layout0, { data: props.content }, props.children);
    },
};
var contentElementTemplates = {
    //Resources/Private/Templates/ContentElements/**
    __generic: function (headlessContentData, args) {
        return React__default['default'].createElement(React__default['default'].Fragment, null, headlessContentData.type);
    },
    text: function (headlessContentData, args) {
        return React__default['default'].createElement(Text, { data: headlessContentData.content });
    },
    textpic: function (headlessContentData, args) {
        return React__default['default'].createElement(Textpic, { data: headlessContentData.content });
    }
};
var TYPO3Page = function (props) {
    var _pageLayouts = Object.assign({}, pageLayouts, props.pageLayouts);
    var _pageTemplates = Object.assign({}, pageTemplates, props.pageTemplates);
    var _contentElementLayouts = Object.assign({}, contentElementLayouts, props.contentElementLayouts);
    var _contentElementTemplates = Object.assign({}, contentElementTemplates, props.contentElementTemplates);
    return React__default['default'].createElement(Page, { headlessData: props.headlessData, pageLayouts: _pageLayouts, pageTemplates: _pageTemplates, contentElementLayouts: _contentElementLayouts, contentElementTemplates: _contentElementTemplates });
};
TYPO3Page.defaultProps = {
    pageLayouts: null,
    pageTemplates: null,
    contentElementLayouts: null,
    contentElementTemplates: null,
};

exports.Content = Content;
exports.Page = Page;
exports.Section = section;
exports.TYPO3Page = TYPO3Page;
//# sourceMappingURL=index.js.map
