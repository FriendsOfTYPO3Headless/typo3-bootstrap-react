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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

var classnames = createCommonjsModule(function (module) {
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var ThemeContext = /*#__PURE__*/React__default['default'].createContext({});
ThemeContext.Consumer;
    ThemeContext.Provider;

function useBootstrapPrefix(prefix, defaultPrefix) {
  var prefixes = React.useContext(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}

var DEVICE_SIZES$1 = ['xl', 'lg', 'md', 'sm', 'xs'];
var Col = /*#__PURE__*/React__default['default'].forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "className", "as"]);

  var prefix = useBootstrapPrefix(bsPrefix, 'col');
  var spans = [];
  var classes = [];
  DEVICE_SIZES$1.forEach(function (brkPoint) {
    var propValue = props[brkPoint];
    delete props[brkPoint];
    var span;
    var offset;
    var order;

    if (typeof propValue === 'object' && propValue != null) {
      var _propValue$span = propValue.span;
      span = _propValue$span === void 0 ? true : _propValue$span;
      offset = propValue.offset;
      order = propValue.order;
    } else {
      span = propValue;
    }

    var infix = brkPoint !== 'xs' ? "-" + brkPoint : '';
    if (span) spans.push(span === true ? "" + prefix + infix : "" + prefix + infix + "-" + span);
    if (order != null) classes.push("order" + infix + "-" + order);
    if (offset != null) classes.push("offset" + infix + "-" + offset);
  });

  if (!spans.length) {
    spans.push(prefix); // plain 'col'
  }

  return /*#__PURE__*/React__default['default'].createElement(Component, _extends({}, props, {
    ref: ref,
    className: classnames.apply(void 0, [className].concat(spans, classes))
  }));
});
Col.displayName = 'Col';

var DEVICE_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'];
var defaultProps = {
  noGutters: false
};
var Row = /*#__PURE__*/React__default['default'].forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      noGutters = _ref.noGutters,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "className", "noGutters", "as"]);

  var decoratedBsPrefix = useBootstrapPrefix(bsPrefix, 'row');
  var sizePrefix = decoratedBsPrefix + "-cols";
  var classes = [];
  DEVICE_SIZES.forEach(function (brkPoint) {
    var propValue = props[brkPoint];
    delete props[brkPoint];
    var cols;

    if (propValue != null && typeof propValue === 'object') {
      cols = propValue.cols;
    } else {
      cols = propValue;
    }

    var infix = brkPoint !== 'xs' ? "-" + brkPoint : '';
    if (cols != null) classes.push("" + sizePrefix + infix + "-" + cols);
  });
  return /*#__PURE__*/React__default['default'].createElement(Component, _extends({
    ref: ref
  }, props, {
    className: classnames.apply(void 0, [className, decoratedBsPrefix, noGutters && 'no-gutters'].concat(classes))
  }));
});
Row.displayName = 'Row';
Row.defaultProps = defaultProps;

var pageLayouts = {
    //TODO: implement example
    'layout-0': function (headlessData, pageTemplate, args) {
        return React__default['default'].createElement(React__default['default'].Fragment, null,
            React__default['default'].createElement("header", null, "LOGO"),
            React__default['default'].createElement("section", null,
                React__default['default'].createElement("h1", null, "Hier ist ist eine Section"),
                React__default['default'].createElement(section, { name: 'main', pageTemplate: pageTemplate })),
            React__default['default'].createElement("footer", null,
                React__default['default'].createElement("h3", null, "Hier ist eine andere Section"),
                React__default['default'].createElement(section, { name: 'border', pageTemplate: pageTemplate })));
    },
    __generic: function (headlessData, pageTemplate, args) {
        return React__default['default'].createElement(React__default['default'].Fragment, null,
            React__default['default'].createElement(__GenericLayout, { headlessData: headlessData, pageTemplate: pageTemplate }));
    }
};
var pageTemplates = {
    __generic: function (headlessData, contentElementLayouts, contentElementTemplates, args) {
        return {
            main: React__default['default'].createElement("div", null, "_generisch")
        };
    },
    example: function (headlessData, contentElementLayout, contentElementTemplates, args) {
        return {
            main: React__default['default'].createElement(React__default['default'].Fragment, null, "...example")
        };
    },
    'default': function (headlessData, contentElementLayouts, contentElementTemplates, args) {
        return {
            main: React__default['default'].createElement("div", null, " .... "),
            footer: React__default['default'].createElement("footer", null, "..."),
            header: React__default['default'].createElement("header", null, "...")
        };
    },
    simple: function (headlessData, contentElementLayouts, contentElementTemplates, args) {
        return {
            //    main: <Main headlessData={headlessData} contentElementLayouts={contentElementLayouts} contentElementTemplates={contentElementTemplates} args={args}/>,
            main: React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement(Content, { colPos: '8', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
                React__default['default'].createElement("div", { className: "section section-default" },
                    React__default['default'].createElement(reactBootstrap.Row, null,
                        React__default['default'].createElement(reactBootstrap.Col, null,
                            React__default['default'].createElement(Content, { colPos: '0', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React__default['default'].createElement(Content, { colPos: '9', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
            border: React__default['default'].createElement(Content, { colPos: '3', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
        };
    },
    '2_columns': function (headlessData, contentElementLayouts, contentElementTemplates, args) {
        return {
            main: React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement("div", null, "2Columns"),
                React__default['default'].createElement(Content, { colPos: '8', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }),
                React__default['default'].createElement("div", { className: "section section-default" },
                    React__default['default'].createElement(Row, null,
                        React__default['default'].createElement(Col, null,
                            React__default['default'].createElement("main", { className: " maincontent-wrap", role: "main" },
                                React__default['default'].createElement(Content, { colPos: '0', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates }))),
                        React__default['default'].createElement(Col, null,
                            React__default['default'].createElement(Content, { colPos: '2', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })))),
                React__default['default'].createElement(Content, { colPos: '9', content: headlessData.content, contentElementLayouts: contentElementLayouts, contentElementTemplates: contentElementTemplates })),
            footer: React__default['default'].createElement("footer", null, "..."),
            header: React__default['default'].createElement("header", null, "...")
        };
    }
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
