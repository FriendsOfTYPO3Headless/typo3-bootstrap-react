'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __GenericLayout = function (props) {
    //  console.log(props);
    return React__default['default'].createElement(React__default['default'].Fragment, null, "generischsssss");
};

var Page = function (props) {
    var layout;
    if (props.pageLayouts.hasOwnProperty(props.config.page.appearance.layout)) {
        layout = props.pageLayouts[props.config.page.appearance.layout];
    }
    else if (props.pageLayouts.hasOwnProperty('__generic')) {
        layout = props.pageLayouts.__generic;
    }
    else {
        return React__default['default'].createElement(React__default['default'].Fragment, null,
            "Page Layout not found: ",
            props.config.page.appearance.layout);
    }
    var pageTemplate;
    if (props.pageTemplates.hasOwnProperty(props.config.page.appearance.backendLayout)) {
        pageTemplate = props.pageTemplates[props.config.page.appearance.backendLayout];
    }
    else if (props.pageTemplates.hasOwnProperty('__generic')) {
        pageTemplate = props.pageTemplates.__generic;
    }
    else {
        return React__default['default'].createElement(React__default['default'].Fragment, null,
            "Page Template not found: ",
            props.config.page.appereance.backendLayout,
            " ");
    }
    return layout(props.config, pageTemplate(props.config, props.contentElementLayouts, props.contentElementTemplates), props.contentElementLayouts, props.contentElementTemplates);
    // return <>Page: {props.config.navigations.navigation1[0].title}</>
};
Page.defaultProps = {
    pageLayouts: pageLayouts,
    pageTemplates: pageTemplates,
    contentElementLayouts: contentElementLayouts,
    contentElementTemplates: contentElementTemplates,
};

var pageLayouts = {
    //TODO: implement example
    //'layout-0': (TYPO3PageConfig) => <__GenericLayout config={TYPO3PageConfig} />,
    __generic: function (config, pageTemplate, contentElementLayouts, contentElementTemplates) { return React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(__GenericLayout, { config: config, pageTemplate: pageTemplate, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })); }
};
var pageTemplates = {
    __generic: function (config, contentElementLayouts, contentElementTemplates) {
        return {
            main: React__default['default'].createElement("div", null, "_generisch")
        };
    },
    example: function (config, contentElementLayout, contentElementTemplates) {
        return {
            main: React__default['default'].createElement(React__default['default'].Fragment, null, "...example")
        };
    },
    default: function (config, contentElementLayouts, contentElementTemplates) {
        return {
            main: React__default['default'].createElement("div", null, " .... "),
            footer: React__default['default'].createElement("footer", null, "..."),
            header: React__default['default'].createElement("header", null, "...")
        };
    },
    simple: function (config, contentElementLayouts, contentElementTemplates) {
        return {
            main: React__default['default'].createElement("div", null, "simple"),
            footer: React__default['default'].createElement(React__default['default'].Fragment, null),
            header: React__default['default'].createElement(React__default['default'].Fragment, null),
        };
    },
    '2Columns': function (config, contentElementLayouts, contentElementTemplates) {
        return {
            main: React__default['default'].createElement("div", null, "2Columns"),
            footer: React__default['default'].createElement("footer", null, "..."),
            header: React__default['default'].createElement("header", null, "...")
        };
    }
};
var contentElementLayouts = {
    __generic: '',
};
var contentElementTemplates = {
    __generic: ''
};
var TYPO3Page = function (props) {
    // console.log(props.config.navigations.navigation1[0].title);
    var _pageLayouts = Object.assign({}, pageLayouts, props.pageLayouts);
    var _pageTemplates = Object.assign({}, pageTemplates, props.pageTemplates);
    Object.assign({}, contentElementLayouts, props.contentElementLayouts);
    Object.assign({}, contentElementTemplates, props.contentElementTemplates);
    //console.log(_pageLayouts);
    // console.log(_pageTemplates);
    // console.log(_contentElementLayouts);
    // console.log(_contentElementTemplates);
    return React__default['default'].createElement(Page, { config: props.config, pageLayouts: _pageLayouts, pageTemplates: _pageTemplates, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates });
};
TYPO3Page.defaultProps = {
    pageLayouts: null,
    pageTemplates: null,
    contentElementLayouts: null,
    contentElementTemplates: null,
};

exports.Page = Page;
exports.TYPO3Page = TYPO3Page;
//# sourceMappingURL=index.js.map
