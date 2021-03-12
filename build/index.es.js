import React from 'react';

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
            "Pagelayout not found: ",
            props.headlessData.page.appearance.layout);
    }
    var pageTemplate;
    if (props.pageTemplates.hasOwnProperty(props.headlessData.page.appearance.backendLayout)) {
        pageTemplate = props.pageTemplates[props.headlessData.page.appearance.backendLayout];
    }
    else if (props.pageTemplates.hasOwnProperty('__generic')) {
        pageTemplate = props.pageTemplates.__generic;
    }
    else {
        return React.createElement(React.Fragment, null,
            "Pagetemplate not found: ",
            props.headlessData.page.appereance.backendLayout,
            " ");
    }
    return layout(props.headlessData, pageTemplate(props.headlessData, props.contentElementLayouts, props.contentElementTemplates));
    // return <>Page: {props.config.navigations.navigation1[0].title}</>
};

var PREFIX_COLPOS = 'colPos';
var Content = function (props) {
    React.createElement(React.Fragment, null);
    if (props.content.hasOwnProperty(PREFIX_COLPOS + props.colPos)) {
        props.content[PREFIX_COLPOS + props.colPos].map(function (content) {
            if (props.contentElementLayouts.hasOwnProperty(props.content.appearance.layout)) {
                props.contentElementLayouts[props.content.appearance.layout];
            }
            else if (props.contentElementLayouts.hasOwnProperty('__generic')) {
                props.contentElementLayouts.__generic;
            }
            else {
                return React.createElement(React.Fragment, null,
                    "Page Layout not found: ",
                    props.content.appearance.layout);
            }
        });
    }
    //content prüfen, ob da für die angegebene colPos Daten vorhanden sind.
    //Diese in einer Schleife durchgehen
    //Dann wie in der Page das CE-Layout und das CE-Template ermitteln
    //CE-Layout zurückgeben
    return React.createElement(React.Fragment, null, props.colPos);
    // let layout;
    // if(props.contentElementLayouts.hasOwnProperty(props.contentElementLayouts.page.appearance.layout)) {
    //     layout = props.pageLayouts[props.headlessData.page.appearance.layout];
    // } else if(props.pageLayouts.hasOwnProperty('__generic')) {
    //     layout = props.pageLayouts.__generic;
    // } else {
    //     return <>Page Layout not found: {props.headlessData.page.appearance.layout}</>
    // }
    //
    // let pageTemplate;
    // if(props.pageTemplates.hasOwnProperty(props.headlessData.page.appearance.backendLayout)) {
    //     pageTemplate = props.pageTemplates[props.headlessData.page.appearance.backendLayout];
    // } else if (props.pageTemplates.hasOwnProperty('__generic')) {
    //     pageTemplate = props.pageTemplates.__generic;
    // } else {
    //     return <>Page Template not found: {props.headlessData.page.appereance.backendLayout} </>
    // }
    //
    //
    // return layout(
    //     props.headlessData,
    //     pageTemplate(props.headlessData, props.contentElementLayouts, props.contentElementTemplates),
    // );
    // return <>Page: {props.config.navigations.navigation1[0].title}</>
};

var pageLayouts = {
    //TODO: implement example
    'layout-0': function (headlessData, pageTemplate) { return React.createElement(React.Fragment, null,
        React.createElement("header", null, "LOGO"),
        React.createElement("section", null,
            React.createElement("h1", null, "Hier ist ist eine Section"),
            React.createElement(section, { name: 'main', pageTemplate: pageTemplate })),
        React.createElement("footer", null,
            React.createElement("h3", null, "Hier ist eine andere Section"),
            React.createElement(section, { name: 'border', pageTemplate: pageTemplate }))); },
    __generic: function (headlessData, pageTemplate) { return React.createElement(React.Fragment, null,
        React.createElement(__GenericLayout, { headlessData: headlessData, pageTemplate: pageTemplate })); }
};
var pageTemplates = {
    __generic: function (headlessData, contentElementLayouts, contentElementTemplates) {
        return {
            main: React.createElement("div", null, "_generisch")
        };
    },
    example: function (headlessData, contentElementLayout, contentElementTemplates) {
        return {
            main: React.createElement(React.Fragment, null, "...example")
        };
    },
    default: function (headlessData, contentElementLayouts, contentElementTemplates) {
        return {
            main: React.createElement("div", null, " .... "),
            footer: React.createElement("footer", null, "..."),
            header: React.createElement("header", null, "...")
        };
    },
    simple: function (headlessData, contentElementLayouts, contentElementTemplates) {
        return {
            main: React.createElement("div", null, "simple"),
            border: React.createElement(React.Fragment, null,
                React.createElement(Content, { colPos: '3', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
        };
    },
    '2Columns': function (headlessData, contentElementLayouts, contentElementTemplates) {
        return {
            main: React.createElement("div", null, "2Columns"),
            footer: React.createElement("footer", null, "..."),
            header: React.createElement("header", null, "...")
        };
    }
};
var contentElementLayouts = {
    __generic: function (props) {
        return React.createElement("div", { className: 'contentWrapper' }, props.children);
    },
};
var contentElementTemplates = {
    //Resources/Private/Templates/ContentElements/**
    __generic: function (headlessContentData) { return React.createElement(React.Fragment, null); },
    //text: (headlessContentData) => <Text {...headlessContentData} />,
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

export { Page, section as Section, TYPO3Page };
//# sourceMappingURL=index.es.js.map
