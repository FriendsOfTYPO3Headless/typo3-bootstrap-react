import * as React from 'react';
import React__default, { useRef, useState, useCallback, useContext, useMemo, useEffect, useImperativeHandle, Component } from 'react';
import ReactDOM from 'react-dom';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var classnames = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

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
}(classnames));

var classNames = classnames.exports;

function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function (target) {
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
  return _extends$2.apply(this, arguments);
}

function _objectWithoutPropertiesLoose$2(source, excluded) {
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

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

process.env.NODE_ENV;

function defaultKey(key) {
  return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
}

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function useUncontrolledProp(propValue, defaultValue, handler) {
  var wasPropRef = useRef(propValue !== undefined);

  var _useState = useState(defaultValue),
      stateValue = _useState[0],
      setState = _useState[1];

  var isProp = propValue !== undefined;
  var wasProp = wasPropRef.current;
  wasPropRef.current = isProp;
  /**
   * If a prop switches from controlled to Uncontrolled
   * reset its value to the defaultValue
   */

  if (!isProp && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }

  return [isProp ? propValue : stateValue, useCallback(function (value) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (handler) handler.apply(void 0, [value].concat(args));
    setState(value);
  }, [handler])];
}
function useUncontrolled(props, config) {
  return Object.keys(config).reduce(function (result, fieldName) {
    var _extends2;

    var _ref = result,
        defaultValue = _ref[defaultKey(fieldName)],
        propsValue = _ref[fieldName],
        rest = _objectWithoutPropertiesLoose$2(_ref, [defaultKey(fieldName), fieldName].map(_toPropertyKey));

    var handlerName = config[fieldName];

    var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]),
        value = _useUncontrolledProp[0],
        handler = _useUncontrolledProp[1];

    return _extends$2({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
  }, props);
}

function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf$1(o, p);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf$1(subClass, superClass);
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}

var reactLifecyclesCompat_es = /*#__PURE__*/Object.freeze({
	__proto__: null,
	polyfill: polyfill
});

const DEFAULT_BREAKPOINTS = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
const DEFAULT_MIN_BREAKPOINT = 'xs';
const ThemeContext = /*#__PURE__*/React.createContext({
  prefixes: {},
  breakpoints: DEFAULT_BREAKPOINTS,
  minBreakpoint: DEFAULT_MIN_BREAKPOINT
});
function useBootstrapPrefix(prefix, defaultPrefix) {
  const {
    prefixes
  } = useContext(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}
function useBootstrapBreakpoints() {
  const {
    breakpoints
  } = useContext(ThemeContext);
  return breakpoints;
}
function useBootstrapMinBreakpoint() {
  const {
    minBreakpoint
  } = useContext(ThemeContext);
  return minBreakpoint;
}
function useIsRTL() {
  const {
    dir
  } = useContext(ThemeContext);
  return dir === 'rtl';
}

/**
 * Returns the owner document of a given element.
 * 
 * @param node the element
 */
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

/**
 * Returns the owner window of a given element.
 * 
 * @param node the element
 */

function ownerWindow(node) {
  var doc = ownerDocument(node);
  return doc && doc.defaultView || window;
}

/**
 * Returns one or all computed style properties of an element.
 * 
 * @param node the element
 * @param psuedoElement the style property
 */

function getComputedStyle$1(node, psuedoElement) {
  return ownerWindow(node).getComputedStyle(node, psuedoElement);
}

var rUpper = /([A-Z])/g;
function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}

/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */
var msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
  return !!(value && supportedTransforms.test(value));
}

function style(node, property) {
  var css = '';
  var transforms = '';

  if (typeof property === 'string') {
    return node.style.getPropertyValue(hyphenateStyleName(property)) || getComputedStyle$1(node).getPropertyValue(hyphenateStyleName(property));
  }

  Object.keys(property).forEach(function (key) {
    var value = property[key];

    if (!value && value !== 0) {
      node.style.removeProperty(hyphenateStyleName(key));
    } else if (isTransform(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += hyphenateStyleName(key) + ": " + value + ";";
    }
  });

  if (transforms) {
    css += "transform: " + transforms + ";";
  }

  node.style.cssText += ";" + css;
}

var propTypes$2 = {exports: {}};

var reactIs = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

reactIs_development.AsyncMode = AsyncMode;
reactIs_development.ConcurrentMode = ConcurrentMode;
reactIs_development.ContextConsumer = ContextConsumer;
reactIs_development.ContextProvider = ContextProvider;
reactIs_development.Element = Element;
reactIs_development.ForwardRef = ForwardRef;
reactIs_development.Fragment = Fragment;
reactIs_development.Lazy = Lazy;
reactIs_development.Memo = Memo;
reactIs_development.Portal = Portal;
reactIs_development.Profiler = Profiler;
reactIs_development.StrictMode = StrictMode;
reactIs_development.Suspense = Suspense;
reactIs_development.isAsyncMode = isAsyncMode;
reactIs_development.isConcurrentMode = isConcurrentMode;
reactIs_development.isContextConsumer = isContextConsumer;
reactIs_development.isContextProvider = isContextProvider;
reactIs_development.isElement = isElement;
reactIs_development.isForwardRef = isForwardRef;
reactIs_development.isFragment = isFragment;
reactIs_development.isLazy = isLazy;
reactIs_development.isMemo = isMemo;
reactIs_development.isPortal = isPortal;
reactIs_development.isProfiler = isProfiler;
reactIs_development.isStrictMode = isStrictMode;
reactIs_development.isSuspense = isSuspense;
reactIs_development.isValidElementType = isValidElementType;
reactIs_development.typeOf = typeOf;
  })();
}

if (process.env.NODE_ENV === 'production') {
  reactIs.exports = reactIs_production_min;
} else {
  reactIs.exports = reactIs_development;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$3 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$3;

var has$2 = Function.call.bind(Object.prototype.hasOwnProperty);

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var printWarning$2 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$2 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = has$2;

  printWarning$2 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$2);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$2(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$2(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes$1.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactIs$1 = reactIs.exports;
var assign = objectAssign;

var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
var has = has$2;
var checkPropTypes = checkPropTypes_1;

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret$1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret$1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs$1.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret$1);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = ReactPropTypesSecret_1;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs.exports;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes$2.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes$2.exports = factoryWithThrowingShims();
}

var PropTypes = propTypes$2.exports;

var config = {
  disabled: false
};

var timeoutsShape = process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
  enter: PropTypes.number,
  exit: PropTypes.number,
  appear: PropTypes.number
}).isRequired]) : null;
process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
  enter: PropTypes.string,
  exit: PropTypes.string,
  active: PropTypes.string
}), PropTypes.shape({
  enter: PropTypes.string,
  enterDone: PropTypes.string,
  enterActive: PropTypes.string,
  exit: PropTypes.string,
  exitDone: PropTypes.string,
  exitActive: PropTypes.string
})]) : null;

var TransitionGroupContext = React__default.createContext(null);

var forceReflow = function forceReflow(node) {
  return node.scrollTop;
};

var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
          // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
          // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.

          if (node) forceReflow(node);
        }

        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : ReactDOM.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children;
        _this$props.in;
        _this$props.mountOnEnter;
        _this$props.unmountOnExit;
        _this$props.appear;
        _this$props.enter;
        _this$props.exit;
        _this$props.timeout;
        _this$props.addEndListener;
        _this$props.onEnter;
        _this$props.onEntering;
        _this$props.onEntered;
        _this$props.onExit;
        _this$props.onExiting;
        _this$props.onExited;
        _this$props.nodeRef;
        var childProps = _objectWithoutPropertiesLoose$2(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      React__default.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : React__default.cloneElement(React__default.Children.only(children), childProps))
    );
  };

  return Transition;
}(React__default.Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: PropTypes.shape({
    current: typeof Element === 'undefined' ? PropTypes.any : function (propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return PropTypes.instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func
} : {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/* eslint-disable no-return-assign */
var optionsSupported = false;
var onceSupported = false;

try {
  var options = {
    get passive() {
      return optionsSupported = true;
    },

    get once() {
      // eslint-disable-next-line no-multi-assign
      return onceSupported = optionsSupported = true;
    }

  };

  if (canUseDOM) {
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, true);
  }
} catch (e) {
  /* */
}

/**
 * An `addEventListener` ponyfill, supports the `once` option
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */
function addEventListener(node, eventName, handler, options) {
  if (options && typeof options !== 'boolean' && !onceSupported) {
    var once = options.once,
        capture = options.capture;
    var wrappedHandler = handler;

    if (!onceSupported && once) {
      wrappedHandler = handler.__once || function onceHandler(event) {
        this.removeEventListener(eventName, onceHandler, capture);
        handler.call(this, event);
      };

      handler.__once = wrappedHandler;
    }

    node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
  }

  node.addEventListener(eventName, handler, options);
}

/**
 * A `removeEventListener` ponyfill
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */
function removeEventListener(node, eventName, handler, options) {
  var capture = options && typeof options !== 'boolean' ? options.capture : options;
  node.removeEventListener(eventName, handler, capture);

  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture);
  }
}

function listen(node, eventName, handler, options) {
  addEventListener(node, eventName, handler, options);
  return function () {
    removeEventListener(node, eventName, handler, options);
  };
}

/**
 * Triggers an event on a given element.
 * 
 * @param node the element
 * @param eventName the event name to trigger
 * @param bubbles whether the event should bubble up
 * @param cancelable whether the event should be cancelable
 */
function triggerEvent(node, eventName, bubbles, cancelable) {
  if (bubbles === void 0) {
    bubbles = false;
  }

  if (cancelable === void 0) {
    cancelable = true;
  }

  if (node) {
    var event = document.createEvent('HTMLEvents');
    event.initEvent(eventName, bubbles, cancelable);
    node.dispatchEvent(event);
  }
}

function parseDuration$1(node) {
  var str = style(node, 'transitionDuration') || '';
  var mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}

function emulateTransitionEnd(element, duration, padding) {
  if (padding === void 0) {
    padding = 5;
  }

  var called = false;
  var handle = setTimeout(function () {
    if (!called) triggerEvent(element, 'transitionend', true);
  }, duration + padding);
  var remove = listen(element, 'transitionend', function () {
    called = true;
  }, {
    once: true
  });
  return function () {
    clearTimeout(handle);
    remove();
  };
}

function transitionEnd(element, handler, duration, padding) {
  if (duration == null) duration = parseDuration$1(element) || 0;
  var removeEmulate = emulateTransitionEnd(element, duration, padding);
  var remove = listen(element, 'transitionend', handler);
  return function () {
    removeEmulate();
    remove();
  };
}

function parseDuration(node, property) {
  const str = style(node, property) || '';
  const mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}
function transitionEndListener(element, handler) {
  const duration = parseDuration(element, 'transitionDuration');
  const delay = parseDuration(element, 'transitionDelay');
  const remove = transitionEnd(element, e => {
    if (e.target === element) {
      remove();
      handler(e);
    }
  }, duration + delay);
}

/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction(...funcs) {
  return funcs.filter(f => f != null).reduce((acc, f) => {
    if (typeof f !== 'function') {
      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
    }
    if (acc === null) return f;
    return function chainedFunction(...args) {
      // @ts-ignore
      acc.apply(this, args);
      // @ts-ignore
      f.apply(this, args);
    };
  }, null);
}

// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
function triggerBrowserReflow(node) {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  node.offsetHeight;
}

const toFnRef = ref => !ref || typeof ref === 'function' ? ref : value => {
  ref.current = value;
};
function mergeRefs(refA, refB) {
  const a = toFnRef(refA);
  const b = toFnRef(refB);
  return value => {
    if (a) a(value);
    if (b) b(value);
  };
}

/**
 * Create and returns a single callback ref composed from two other Refs.
 *
 * ```tsx
 * const Button = React.forwardRef((props, ref) => {
 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
 *   const mergedRef = useMergedRefs(ref, attachRef);
 *
 *   return <button ref={mergedRef} {...props}/>
 * })
 * ```
 *
 * @param refA A Callback or mutable Ref
 * @param refB A Callback or mutable Ref
 * @category refs
 */
function useMergedRefs(refA, refB) {
  return useMemo(() => mergeRefs(refA, refB), [refA, refB]);
}

function safeFindDOMNode(componentOrElement) {
  if (componentOrElement && 'setState' in componentOrElement) {
    return ReactDOM.findDOMNode(componentOrElement);
  }
  return componentOrElement != null ? componentOrElement : null;
}

// Normalizes Transition callbacks when nodeRef is used.
const TransitionWrapper = /*#__PURE__*/React__default.forwardRef(({
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
  addEndListener,
  children,
  childRef,
  ...props
}, ref) => {
  const nodeRef = useRef(null);
  const mergedRef = useMergedRefs(nodeRef, childRef);
  const attachRef = r => {
    mergedRef(safeFindDOMNode(r));
  };
  const normalize = callback => param => {
    if (callback && nodeRef.current) {
      callback(nodeRef.current, param);
    }
  };

  /* eslint-disable react-hooks/exhaustive-deps */
  const handleEnter = useCallback(normalize(onEnter), [onEnter]);
  const handleEntering = useCallback(normalize(onEntering), [onEntering]);
  const handleEntered = useCallback(normalize(onEntered), [onEntered]);
  const handleExit = useCallback(normalize(onExit), [onExit]);
  const handleExiting = useCallback(normalize(onExiting), [onExiting]);
  const handleExited = useCallback(normalize(onExited), [onExited]);
  const handleAddEndListener = useCallback(normalize(addEndListener), [addEndListener]);
  /* eslint-enable react-hooks/exhaustive-deps */

  return /*#__PURE__*/jsx(Transition, {
    ref: ref,
    ...props,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    nodeRef: nodeRef,
    children: typeof children === 'function' ? (status, innerProps) =>
    // TODO: Types for RTG missing innerProps, so need to cast.
    children(status, {
      ...innerProps,
      ref: attachRef
    }) : /*#__PURE__*/React__default.cloneElement(children, {
      ref: attachRef
    })
  });
});
var TransitionWrapper$1 = TransitionWrapper;

const MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight']
};
function getDefaultDimensionValue(dimension, elem) {
  const offset = `offset${dimension[0].toUpperCase()}${dimension.slice(1)}`;
  const value = elem[offset];
  const margins = MARGINS[dimension];
  return value +
  // @ts-ignore
  parseInt(style(elem, margins[0]), 10) +
  // @ts-ignore
  parseInt(style(elem, margins[1]), 10);
}
const collapseStyles = {
  [EXITED]: 'collapse',
  [EXITING]: 'collapsing',
  [ENTERING]: 'collapsing',
  [ENTERED]: 'collapse show'
};
const Collapse = /*#__PURE__*/React__default.forwardRef(({
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  className,
  children,
  dimension = 'height',
  in: inProp = false,
  timeout = 300,
  mountOnEnter = false,
  unmountOnExit = false,
  appear = false,
  getDimensionValue = getDefaultDimensionValue,
  ...props
}, ref) => {
  /* Compute dimension */
  const computedDimension = typeof dimension === 'function' ? dimension() : dimension;

  /* -- Expanding -- */
  const handleEnter = useMemo(() => createChainedFunction(elem => {
    elem.style[computedDimension] = '0';
  }, onEnter), [computedDimension, onEnter]);
  const handleEntering = useMemo(() => createChainedFunction(elem => {
    const scroll = `scroll${computedDimension[0].toUpperCase()}${computedDimension.slice(1)}`;
    elem.style[computedDimension] = `${elem[scroll]}px`;
  }, onEntering), [computedDimension, onEntering]);
  const handleEntered = useMemo(() => createChainedFunction(elem => {
    elem.style[computedDimension] = null;
  }, onEntered), [computedDimension, onEntered]);

  /* -- Collapsing -- */
  const handleExit = useMemo(() => createChainedFunction(elem => {
    elem.style[computedDimension] = `${getDimensionValue(computedDimension, elem)}px`;
    triggerBrowserReflow(elem);
  }, onExit), [onExit, getDimensionValue, computedDimension]);
  const handleExiting = useMemo(() => createChainedFunction(elem => {
    elem.style[computedDimension] = null;
  }, onExiting), [computedDimension, onExiting]);
  return /*#__PURE__*/jsx(TransitionWrapper$1, {
    ref: ref,
    addEndListener: transitionEndListener,
    ...props,
    "aria-expanded": props.role ? inProp : null,
    onEnter: handleEnter,
    onEntering: handleEntering,
    onEntered: handleEntered,
    onExit: handleExit,
    onExiting: handleExiting,
    childRef: children.ref,
    in: inProp,
    timeout: timeout,
    mountOnEnter: mountOnEnter,
    unmountOnExit: unmountOnExit,
    appear: appear,
    children: (state, innerProps) => /*#__PURE__*/React__default.cloneElement(children, {
      ...innerProps,
      className: classNames(className, children.props.className, collapseStyles[state], computedDimension === 'width' && 'collapse-horizontal')
    })
  });
});

// @ts-ignore

var Collapse$1 = Collapse;

function isAccordionItemSelected(activeEventKey, eventKey) {
  return Array.isArray(activeEventKey) ? activeEventKey.includes(eventKey) : activeEventKey === eventKey;
}
const context$2 = /*#__PURE__*/React.createContext({});
context$2.displayName = 'AccordionContext';
var AccordionContext = context$2;

/**
 * This component accepts all of [`Collapse`'s props](/docs/utilities/transitions#collapse-1).
 */
const AccordionCollapse = /*#__PURE__*/React.forwardRef(({
  as: Component = 'div',
  bsPrefix,
  className,
  children,
  eventKey,
  ...props
}, ref) => {
  const {
    activeEventKey
  } = useContext(AccordionContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'accordion-collapse');
  return /*#__PURE__*/jsx(Collapse$1, {
    ref: ref,
    in: isAccordionItemSelected(activeEventKey, eventKey),
    ...props,
    className: classNames(className, bsPrefix),
    children: /*#__PURE__*/jsx(Component, {
      children: React.Children.only(children)
    })
  });
});
AccordionCollapse.displayName = 'AccordionCollapse';
var AccordionCollapse$1 = AccordionCollapse;

const context$1 = /*#__PURE__*/React.createContext({
  eventKey: ''
});
context$1.displayName = 'AccordionItemContext';
var AccordionItemContext = context$1;

const AccordionBody = /*#__PURE__*/React.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  bsPrefix,
  className,
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'accordion-body');
  const {
    eventKey
  } = useContext(AccordionItemContext);
  return /*#__PURE__*/jsx(AccordionCollapse$1, {
    eventKey: eventKey,
    onEnter: onEnter,
    onEntering: onEntering,
    onEntered: onEntered,
    onExit: onExit,
    onExiting: onExiting,
    onExited: onExited,
    children: /*#__PURE__*/jsx(Component, {
      ref: ref,
      ...props,
      className: classNames(className, bsPrefix)
    })
  });
});
AccordionBody.displayName = 'AccordionBody';
var AccordionBody$1 = AccordionBody;

function useAccordionButton(eventKey, onClick) {
  const {
    activeEventKey,
    onSelect,
    alwaysOpen
  } = useContext(AccordionContext);
  return e => {
    /*
      Compare the event key in context with the given event key.
      If they are the same, then collapse the component.
    */
    let eventKeyPassed = eventKey === activeEventKey ? null : eventKey;
    if (alwaysOpen) {
      if (Array.isArray(activeEventKey)) {
        if (activeEventKey.includes(eventKey)) {
          eventKeyPassed = activeEventKey.filter(k => k !== eventKey);
        } else {
          eventKeyPassed = [...activeEventKey, eventKey];
        }
      } else {
        // activeEventKey is undefined.
        eventKeyPassed = [eventKey];
      }
    }
    onSelect == null ? void 0 : onSelect(eventKeyPassed, e);
    onClick == null ? void 0 : onClick(e);
  };
}
const AccordionButton = /*#__PURE__*/React.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'button',
  bsPrefix,
  className,
  onClick,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'accordion-button');
  const {
    eventKey
  } = useContext(AccordionItemContext);
  const accordionOnClick = useAccordionButton(eventKey, onClick);
  const {
    activeEventKey
  } = useContext(AccordionContext);
  if (Component === 'button') {
    props.type = 'button';
  }
  return /*#__PURE__*/jsx(Component, {
    ref: ref,
    onClick: accordionOnClick,
    ...props,
    "aria-expanded": Array.isArray(activeEventKey) ? activeEventKey.includes(eventKey) : eventKey === activeEventKey,
    className: classNames(className, bsPrefix, !isAccordionItemSelected(activeEventKey, eventKey) && 'collapsed')
  });
});
AccordionButton.displayName = 'AccordionButton';
var AccordionButton$1 = AccordionButton;

const AccordionHeader = /*#__PURE__*/React.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'h2',
  bsPrefix,
  className,
  children,
  onClick,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'accordion-header');
  return /*#__PURE__*/jsx(Component, {
    ref: ref,
    ...props,
    className: classNames(className, bsPrefix),
    children: /*#__PURE__*/jsx(AccordionButton$1, {
      onClick: onClick,
      children: children
    })
  });
});
AccordionHeader.displayName = 'AccordionHeader';
var AccordionHeader$1 = AccordionHeader;

const AccordionItem = /*#__PURE__*/React.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  bsPrefix,
  className,
  eventKey,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'accordion-item');
  const contextValue = useMemo(() => ({
    eventKey
  }), [eventKey]);
  return /*#__PURE__*/jsx(AccordionItemContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/jsx(Component, {
      ref: ref,
      ...props,
      className: classNames(className, bsPrefix)
    })
  });
});
AccordionItem.displayName = 'AccordionItem';
var AccordionItem$1 = AccordionItem;

const Accordion$1 = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    activeKey,
    bsPrefix,
    className,
    onSelect,
    flush,
    alwaysOpen,
    ...controlledProps
  } = useUncontrolled(props, {
    activeKey: 'onSelect'
  });
  const prefix = useBootstrapPrefix(bsPrefix, 'accordion');
  const contextValue = useMemo(() => ({
    activeEventKey: activeKey,
    onSelect,
    alwaysOpen
  }), [activeKey, onSelect, alwaysOpen]);
  return /*#__PURE__*/jsx(AccordionContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/jsx(Component, {
      ref: ref,
      ...controlledProps,
      className: classNames(className, prefix, flush && `${prefix}-flush`)
    })
  });
});
Accordion$1.displayName = 'Accordion';
var ReactAccordion = Object.assign(Accordion$1, {
  Button: AccordionButton$1,
  Collapse: AccordionCollapse$1,
  Item: AccordionItem$1,
  Header: AccordionHeader$1,
  Body: AccordionBody$1
});

/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded before being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */
function useCommittedRef(value) {
  const ref = useRef(value);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref;
}

function useEventCallback(fn) {
  const ref = useCommittedRef(fn);
  return useCallback(function (...args) {
    return ref.current && ref.current(...args);
  }, [ref]);
}

/**
 * Track whether a component is current mounted. Generally less preferable than
 * properlly canceling effects so they don't run after a component is unmounted,
 * but helpful in cases where that isn't feasible, such as a `Promise` resolution.
 *
 * @returns a function that returns the current isMounted state of the component
 *
 * ```ts
 * const [data, setData] = useState(null)
 * const isMounted = useMounted()
 *
 * useEffect(() => {
 *   fetchdata().then((newData) => {
 *      if (isMounted()) {
 *        setData(newData);
 *      }
 *   })
 * })
 * ```
 */
function useMounted() {
  const mounted = useRef(true);
  const isMounted = useRef(() => mounted.current);
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}

const _excluded$1 = ["as", "disabled"];
function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function isTrivialHref$1(href) {
  return !href || href.trim() === '#';
}
function useButtonProps({
  tagName,
  disabled,
  href,
  target,
  rel,
  role,
  onClick,
  tabIndex = 0,
  type
}) {
  if (!tagName) {
    if (href != null || target != null || rel != null) {
      tagName = 'a';
    } else {
      tagName = 'button';
    }
  }
  const meta = {
    tagName
  };
  if (tagName === 'button') {
    return [{
      type: type || 'button',
      disabled
    }, meta];
  }
  const handleClick = event => {
    if (disabled || tagName === 'a' && isTrivialHref$1(href)) {
      event.preventDefault();
    }
    if (disabled) {
      event.stopPropagation();
      return;
    }
    onClick == null ? void 0 : onClick(event);
  };
  const handleKeyDown = event => {
    if (event.key === ' ') {
      event.preventDefault();
      handleClick(event);
    }
  };
  if (tagName === 'a') {
    // Ensure there's a href so Enter can trigger anchor button.
    href || (href = '#');
    if (disabled) {
      href = undefined;
    }
  }
  return [{
    role: role != null ? role : 'button',
    // explicitly undefined so that it overrides the props disabled in a spread
    // e.g. <Tag {...props} {...hookProps} />
    disabled: undefined,
    tabIndex: disabled ? undefined : tabIndex,
    href,
    target: tagName === 'a' ? target : undefined,
    'aria-disabled': !disabled ? undefined : disabled,
    rel: tagName === 'a' ? rel : undefined,
    onClick: handleClick,
    onKeyDown: handleKeyDown
  }, meta];
}
const Button = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
      as: asProp,
      disabled
    } = _ref,
    props = _objectWithoutPropertiesLoose$1(_ref, _excluded$1);
  const [buttonProps, {
    tagName: Component
  }] = useButtonProps(Object.assign({
    tagName: asProp,
    disabled
  }, props));
  return /*#__PURE__*/jsx(Component, Object.assign({}, props, buttonProps, {
    ref: ref
  }));
});
Button.displayName = 'Button';

const _excluded = ["onKeyDown"];
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function isTrivialHref(href) {
  return !href || href.trim() === '#';
}
/**
 * An generic `<a>` component that covers a few A11y cases, ensuring that
 * cases where the `href` is missing or trivial like "#" are treated like buttons.
 */
const Anchor = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
      onKeyDown
    } = _ref,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  const [buttonProps] = useButtonProps(Object.assign({
    tagName: 'a'
  }, props));
  const handleKeyDown = useEventCallback(e => {
    buttonProps.onKeyDown(e);
    onKeyDown == null ? void 0 : onKeyDown(e);
  });
  if (isTrivialHref(props.href) || props.role === 'button') {
    return /*#__PURE__*/jsx("a", Object.assign({
      ref: ref
    }, props, buttonProps, {
      onKeyDown: handleKeyDown
    }));
  }
  return /*#__PURE__*/jsx("a", Object.assign({
    ref: ref
  }, props, {
    onKeyDown: onKeyDown
  }));
});
Anchor.displayName = 'Anchor';
var Anchor$1 = Anchor;

const fadeStyles = {
  [ENTERING]: 'show',
  [ENTERED]: 'show'
};
const Fade = /*#__PURE__*/React.forwardRef(({
  className,
  children,
  transitionClasses = {},
  onEnter,
  ...rest
}, ref) => {
  const props = {
    in: false,
    timeout: 300,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    ...rest
  };
  const handleEnter = useCallback((node, isAppearing) => {
    triggerBrowserReflow(node);
    onEnter == null ? void 0 : onEnter(node, isAppearing);
  }, [onEnter]);
  return /*#__PURE__*/jsx(TransitionWrapper$1, {
    ref: ref,
    addEndListener: transitionEndListener,
    ...props,
    onEnter: handleEnter,
    childRef: children.ref,
    children: (status, innerProps) => /*#__PURE__*/React.cloneElement(children, {
      ...innerProps,
      className: classNames('fade', className, children.props.className, fadeStyles[status], transitionClasses[status])
    })
  });
});
Fade.displayName = 'Fade';
var Fade$1 = Fade;

const propTypes$1 = {
  /** An accessible label indicating the relevant information about the Close Button. */
  'aria-label': PropTypes.string,
  /** A callback fired after the Close Button is clicked. */
  onClick: PropTypes.func,
  /**
   * Render different color variant for the button.
   *
   * Omitting this will render the default dark color.
   */
  variant: PropTypes.oneOf(['white'])
};
const CloseButton = /*#__PURE__*/React.forwardRef(({
  className,
  variant,
  'aria-label': ariaLabel = 'Close',
  ...props
}, ref) => /*#__PURE__*/jsx("button", {
  ref: ref,
  type: "button",
  className: classNames('btn-close', variant && `btn-close-${variant}`, className),
  "aria-label": ariaLabel,
  ...props
}));
CloseButton.displayName = 'CloseButton';
CloseButton.propTypes = propTypes$1;
var CloseButton$1 = CloseButton;

var divWithClassName = (className => /*#__PURE__*/React.forwardRef((p, ref) => /*#__PURE__*/jsx("div", {
  ...p,
  ref: ref,
  className: classNames(p.className, className)
})));

var rHyphen = /-(.)/g;
function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
}

const pascalCase = str => str[0].toUpperCase() + camelize(str).slice(1);
// TODO: emstricten & fix the typing here! `createWithBsPrefix<TElementType>...`
function createWithBsPrefix(prefix, {
  displayName = pascalCase(prefix),
  Component,
  defaultProps
} = {}) {
  const BsComponent = /*#__PURE__*/React.forwardRef(({
    className,
    bsPrefix,
    as: Tag = Component || 'div',
    ...props
  }, ref) => {
    const componentProps = {
      ...defaultProps,
      ...props
    };
    const resolvedPrefix = useBootstrapPrefix(bsPrefix, prefix);
    return /*#__PURE__*/jsx(Tag, {
      ref: ref,
      className: classNames(className, resolvedPrefix),
      ...componentProps
    });
  });
  BsComponent.displayName = displayName;
  return BsComponent;
}

const DivStyledAsH4 = divWithClassName('h4');
DivStyledAsH4.displayName = 'DivStyledAsH4';
const AlertHeading = createWithBsPrefix('alert-heading', {
  Component: DivStyledAsH4
});
const AlertLink = createWithBsPrefix('alert-link', {
  Component: Anchor$1
});
const Alert = /*#__PURE__*/React.forwardRef((uncontrolledProps, ref) => {
  const {
    bsPrefix,
    show = true,
    closeLabel = 'Close alert',
    closeVariant,
    className,
    children,
    variant = 'primary',
    onClose,
    dismissible,
    transition = Fade$1,
    ...props
  } = useUncontrolled(uncontrolledProps, {
    show: 'onClose'
  });
  const prefix = useBootstrapPrefix(bsPrefix, 'alert');
  const handleClose = useEventCallback(e => {
    if (onClose) {
      onClose(false, e);
    }
  });
  const Transition = transition === true ? Fade$1 : transition;
  const alert = /*#__PURE__*/jsxs("div", {
    role: "alert",
    ...(!Transition ? props : undefined),
    ref: ref,
    className: classNames(className, prefix, variant && `${prefix}-${variant}`, dismissible && `${prefix}-dismissible`),
    children: [dismissible && /*#__PURE__*/jsx(CloseButton$1, {
      onClick: handleClose,
      "aria-label": closeLabel,
      variant: closeVariant
    }), children]
  });
  if (!Transition) return show ? alert : null;
  return /*#__PURE__*/jsx(Transition, {
    unmountOnExit: true,
    ...props,
    ref: undefined,
    in: show,
    children: alert
  });
});
Alert.displayName = 'Alert';
var Alert$1 = Object.assign(Alert, {
  Link: AlertLink,
  Heading: AlertHeading
});

const CardImg = /*#__PURE__*/React.forwardRef(
// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({
  bsPrefix,
  className,
  variant,
  as: Component = 'img',
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'card-img');
  return /*#__PURE__*/jsx(Component, {
    ref: ref,
    className: classNames(variant ? `${prefix}-${variant}` : prefix, className),
    ...props
  });
});
CardImg.displayName = 'CardImg';
var CardImg$1 = CardImg;

const context = /*#__PURE__*/React.createContext(null);
context.displayName = 'CardHeaderContext';
var CardHeaderContext = context;

const CardHeader = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'card-header');
  const contextValue = useMemo(() => ({
    cardHeaderBsPrefix: prefix
  }), [prefix]);
  return /*#__PURE__*/jsx(CardHeaderContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/jsx(Component, {
      ref: ref,
      ...props,
      className: classNames(className, prefix)
    })
  });
});
CardHeader.displayName = 'CardHeader';
var CardHeader$1 = CardHeader;

const DivStyledAsH5 = divWithClassName('h5');
const DivStyledAsH6 = divWithClassName('h6');
const CardBody = createWithBsPrefix('card-body');
const CardTitle = createWithBsPrefix('card-title', {
  Component: DivStyledAsH5
});
const CardSubtitle = createWithBsPrefix('card-subtitle', {
  Component: DivStyledAsH6
});
const CardLink = createWithBsPrefix('card-link', {
  Component: 'a'
});
const CardText = createWithBsPrefix('card-text', {
  Component: 'p'
});
const CardFooter = createWithBsPrefix('card-footer');
const CardImgOverlay = createWithBsPrefix('card-img-overlay');
const Card = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  bg,
  text,
  border,
  body = false,
  children,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'card');
  return /*#__PURE__*/jsx(Component, {
    ref: ref,
    ...props,
    className: classNames(className, prefix, bg && `bg-${bg}`, text && `text-${text}`, border && `border-${border}`),
    children: body ? /*#__PURE__*/jsx(CardBody, {
      children: children
    }) : children
  });
});
Card.displayName = 'Card';
var Card$1 = Object.assign(Card, {
  Img: CardImg$1,
  Title: CardTitle,
  Subtitle: CardSubtitle,
  Body: CardBody,
  Link: CardLink,
  Text: CardText,
  Header: CardHeader$1,
  Footer: CardFooter,
  ImgOverlay: CardImgOverlay
});

/**
 * Runs an effect only when the dependencies have changed, skipping the
 * initial "on mount" run. Caution, if the dependency list never changes,
 * the effect is **never run**
 *
 * ```ts
 *  const ref = useRef<HTMLInput>(null);
 *
 *  // focuses an element only if the focus changes, and not on mount
 *  useUpdateEffect(() => {
 *    const element = ref.current?.children[focusedIdx] as HTMLElement
 *
 *    element?.focus()
 *
 *  }, [focusedIndex])
 * ```
 * @param effect An effect to run on mount
 *
 * @category effects
 */
function useUpdateEffect(fn, deps) {
  const isFirst = useRef(true);
  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    return fn();
  }, deps);
}

/**
 * Returns a ref that is immediately updated with the new value
 *
 * @param value The Ref value
 * @category refs
 */
function useUpdatedRef(value) {
  const valueRef = useRef(value);
  valueRef.current = value;
  return valueRef;
}

/**
 * Attach a callback that fires when a component unmounts
 *
 * @param fn Handler to run when the component unmounts
 * @category effects
 */
function useWillUnmount(fn) {
  const onUnmount = useUpdatedRef(fn);
  useEffect(() => () => onUnmount.current(), []);
}

/*
 * Browsers including Internet Explorer, Chrome, Safari, and Firefox store the
 * delay as a 32-bit signed integer internally. This causes an integer overflow
 * when using delays larger than 2,147,483,647 ms (about 24.8 days),
 * resulting in the timeout being executed immediately.
 *
 * via: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
 */
const MAX_DELAY_MS = 2 ** 31 - 1;
function setChainedTimeout(handleRef, fn, timeoutAtMs) {
  const delayMs = timeoutAtMs - Date.now();
  handleRef.current = delayMs <= MAX_DELAY_MS ? setTimeout(fn, delayMs) : setTimeout(() => setChainedTimeout(handleRef, fn, timeoutAtMs), MAX_DELAY_MS);
}

/**
 * Returns a controller object for setting a timeout that is properly cleaned up
 * once the component unmounts. New timeouts cancel and replace existing ones.
 *
 *
 *
 * ```tsx
 * const { set, clear } = useTimeout();
 * const [hello, showHello] = useState(false);
 * //Display hello after 5 seconds
 * set(() => showHello(true), 5000);
 * return (
 *   <div className="App">
 *     {hello ? <h3>Hello</h3> : null}
 *   </div>
 * );
 * ```
 */
function useTimeout() {
  const isMounted = useMounted();

  // types are confused between node and web here IDK
  const handleRef = useRef();
  useWillUnmount(() => clearTimeout(handleRef.current));
  return useMemo(() => {
    const clear = () => clearTimeout(handleRef.current);
    function set(fn, delayMs = 0) {
      if (!isMounted()) return;
      clear();
      if (delayMs <= MAX_DELAY_MS) {
        // For simplicity, if the timeout is short, just set a normal timeout.
        handleRef.current = setTimeout(fn, delayMs);
      } else {
        setChainedTimeout(handleRef, fn, Date.now() + delayMs);
      }
    }
    return {
      set,
      clear
    };
  }, []);
}

var CarouselCaption = createWithBsPrefix('carousel-caption');

const CarouselItem = /*#__PURE__*/React.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  bsPrefix,
  className,
  ...props
}, ref) => {
  const finalClassName = classNames(className, useBootstrapPrefix(bsPrefix, 'carousel-item'));
  return /*#__PURE__*/jsx(Component, {
    ref: ref,
    ...props,
    className: finalClassName
  });
});
CarouselItem.displayName = 'CarouselItem';
var CarouselItem$1 = CarouselItem;

/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid elements".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 */
function map(children, func) {
  let index = 0;
  return React.Children.map(children, child => /*#__PURE__*/React.isValidElement(child) ? func(child, index++) : child);
}

/**
 * Iterates through children that are "valid elements".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 */
function forEach(children, func) {
  let index = 0;
  React.Children.forEach(children, child => {
    if ( /*#__PURE__*/React.isValidElement(child)) func(child, index++);
  });
}

const SWIPE_THRESHOLD = 40;
function isVisible(element) {
  if (!element || !element.style || !element.parentNode || !element.parentNode.style) {
    return false;
  }
  const elementStyle = getComputedStyle(element);
  return elementStyle.display !== 'none' && elementStyle.visibility !== 'hidden' && getComputedStyle(element.parentNode).display !== 'none';
}
const Carousel$1 = /*#__PURE__*/React.forwardRef(({
  defaultActiveIndex = 0,
  ...uncontrolledProps
}, ref) => {
  const {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    bsPrefix,
    slide = true,
    fade = false,
    controls = true,
    indicators = true,
    indicatorLabels = [],
    activeIndex,
    onSelect,
    onSlide,
    onSlid,
    interval = 5000,
    keyboard = true,
    onKeyDown,
    pause = 'hover',
    onMouseOver,
    onMouseOut,
    wrap = true,
    touch = true,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    prevIcon = /*#__PURE__*/jsx("span", {
      "aria-hidden": "true",
      className: "carousel-control-prev-icon"
    }),
    prevLabel = 'Previous',
    nextIcon = /*#__PURE__*/jsx("span", {
      "aria-hidden": "true",
      className: "carousel-control-next-icon"
    }),
    nextLabel = 'Next',
    variant,
    className,
    children,
    ...props
  } = useUncontrolled({
    defaultActiveIndex,
    ...uncontrolledProps
  }, {
    activeIndex: 'onSelect'
  });
  const prefix = useBootstrapPrefix(bsPrefix, 'carousel');
  const isRTL = useIsRTL();
  const nextDirectionRef = useRef(null);
  const [direction, setDirection] = useState('next');
  const [paused, setPaused] = useState(false);
  const [isSliding, setIsSliding] = useState(false);
  const [renderedActiveIndex, setRenderedActiveIndex] = useState(activeIndex || 0);
  useEffect(() => {
    if (!isSliding && activeIndex !== renderedActiveIndex) {
      if (nextDirectionRef.current) {
        setDirection(nextDirectionRef.current);
      } else {
        setDirection((activeIndex || 0) > renderedActiveIndex ? 'next' : 'prev');
      }
      if (slide) {
        setIsSliding(true);
      }
      setRenderedActiveIndex(activeIndex || 0);
    }
  }, [activeIndex, isSliding, renderedActiveIndex, slide]);
  useEffect(() => {
    if (nextDirectionRef.current) {
      nextDirectionRef.current = null;
    }
  });
  let numChildren = 0;
  let activeChildInterval;

  // Iterate to grab all of the children's interval values
  // (and count them, too)
  forEach(children, (child, index) => {
    ++numChildren;
    if (index === activeIndex) {
      activeChildInterval = child.props.interval;
    }
  });
  const activeChildIntervalRef = useCommittedRef(activeChildInterval);
  const prev = useCallback(event => {
    if (isSliding) {
      return;
    }
    let nextActiveIndex = renderedActiveIndex - 1;
    if (nextActiveIndex < 0) {
      if (!wrap) {
        return;
      }
      nextActiveIndex = numChildren - 1;
    }
    nextDirectionRef.current = 'prev';
    onSelect == null ? void 0 : onSelect(nextActiveIndex, event);
  }, [isSliding, renderedActiveIndex, onSelect, wrap, numChildren]);

  // This is used in the setInterval, so it should not invalidate.
  const next = useEventCallback(event => {
    if (isSliding) {
      return;
    }
    let nextActiveIndex = renderedActiveIndex + 1;
    if (nextActiveIndex >= numChildren) {
      if (!wrap) {
        return;
      }
      nextActiveIndex = 0;
    }
    nextDirectionRef.current = 'next';
    onSelect == null ? void 0 : onSelect(nextActiveIndex, event);
  });
  const elementRef = useRef();
  useImperativeHandle(ref, () => ({
    element: elementRef.current,
    prev,
    next
  }));

  // This is used in the setInterval, so it should not invalidate.
  const nextWhenVisible = useEventCallback(() => {
    if (!document.hidden && isVisible(elementRef.current)) {
      if (isRTL) {
        prev();
      } else {
        next();
      }
    }
  });
  const slideDirection = direction === 'next' ? 'start' : 'end';
  useUpdateEffect(() => {
    if (slide) {
      // These callbacks will be handled by the <Transition> callbacks.
      return;
    }
    onSlide == null ? void 0 : onSlide(renderedActiveIndex, slideDirection);
    onSlid == null ? void 0 : onSlid(renderedActiveIndex, slideDirection);
  }, [renderedActiveIndex]);
  const orderClassName = `${prefix}-item-${direction}`;
  const directionalClassName = `${prefix}-item-${slideDirection}`;
  const handleEnter = useCallback(node => {
    triggerBrowserReflow(node);
    onSlide == null ? void 0 : onSlide(renderedActiveIndex, slideDirection);
  }, [onSlide, renderedActiveIndex, slideDirection]);
  const handleEntered = useCallback(() => {
    setIsSliding(false);
    onSlid == null ? void 0 : onSlid(renderedActiveIndex, slideDirection);
  }, [onSlid, renderedActiveIndex, slideDirection]);
  const handleKeyDown = useCallback(event => {
    if (keyboard && !/input|textarea/i.test(event.target.tagName)) {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          if (isRTL) {
            next(event);
          } else {
            prev(event);
          }
          return;
        case 'ArrowRight':
          event.preventDefault();
          if (isRTL) {
            prev(event);
          } else {
            next(event);
          }
          return;
      }
    }
    onKeyDown == null ? void 0 : onKeyDown(event);
  }, [keyboard, onKeyDown, prev, next, isRTL]);
  const handleMouseOver = useCallback(event => {
    if (pause === 'hover') {
      setPaused(true);
    }
    onMouseOver == null ? void 0 : onMouseOver(event);
  }, [pause, onMouseOver]);
  const handleMouseOut = useCallback(event => {
    setPaused(false);
    onMouseOut == null ? void 0 : onMouseOut(event);
  }, [onMouseOut]);
  const touchStartXRef = useRef(0);
  const touchDeltaXRef = useRef(0);
  const touchUnpauseTimeout = useTimeout();
  const handleTouchStart = useCallback(event => {
    touchStartXRef.current = event.touches[0].clientX;
    touchDeltaXRef.current = 0;
    if (pause === 'hover') {
      setPaused(true);
    }
    onTouchStart == null ? void 0 : onTouchStart(event);
  }, [pause, onTouchStart]);
  const handleTouchMove = useCallback(event => {
    if (event.touches && event.touches.length > 1) {
      touchDeltaXRef.current = 0;
    } else {
      touchDeltaXRef.current = event.touches[0].clientX - touchStartXRef.current;
    }
    onTouchMove == null ? void 0 : onTouchMove(event);
  }, [onTouchMove]);
  const handleTouchEnd = useCallback(event => {
    if (touch) {
      const touchDeltaX = touchDeltaXRef.current;
      if (Math.abs(touchDeltaX) > SWIPE_THRESHOLD) {
        if (touchDeltaX > 0) {
          prev(event);
        } else {
          next(event);
        }
      }
    }
    if (pause === 'hover') {
      touchUnpauseTimeout.set(() => {
        setPaused(false);
      }, interval || undefined);
    }
    onTouchEnd == null ? void 0 : onTouchEnd(event);
  }, [touch, pause, prev, next, touchUnpauseTimeout, interval, onTouchEnd]);
  const shouldPlay = interval != null && !paused && !isSliding;
  const intervalHandleRef = useRef();
  useEffect(() => {
    var _ref, _activeChildIntervalR;
    if (!shouldPlay) {
      return undefined;
    }
    const nextFunc = isRTL ? prev : next;
    intervalHandleRef.current = window.setInterval(document.visibilityState ? nextWhenVisible : nextFunc, (_ref = (_activeChildIntervalR = activeChildIntervalRef.current) != null ? _activeChildIntervalR : interval) != null ? _ref : undefined);
    return () => {
      if (intervalHandleRef.current !== null) {
        clearInterval(intervalHandleRef.current);
      }
    };
  }, [shouldPlay, prev, next, activeChildIntervalRef, interval, nextWhenVisible, isRTL]);
  const indicatorOnClicks = useMemo(() => indicators && Array.from({
    length: numChildren
  }, (_, index) => event => {
    onSelect == null ? void 0 : onSelect(index, event);
  }), [indicators, numChildren, onSelect]);
  return /*#__PURE__*/jsxs(Component, {
    ref: elementRef,
    ...props,
    onKeyDown: handleKeyDown,
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut,
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    className: classNames(className, prefix, slide && 'slide', fade && `${prefix}-fade`, variant && `${prefix}-${variant}`),
    children: [indicators && /*#__PURE__*/jsx("div", {
      className: `${prefix}-indicators`,
      children: map(children, (_, index) => /*#__PURE__*/jsx("button", {
        type: "button",
        "data-bs-target": "" // Bootstrap requires this in their css.
        ,
        "aria-label": indicatorLabels != null && indicatorLabels.length ? indicatorLabels[index] : `Slide ${index + 1}`,
        className: index === renderedActiveIndex ? 'active' : undefined,
        onClick: indicatorOnClicks ? indicatorOnClicks[index] : undefined,
        "aria-current": index === renderedActiveIndex
      }, index))
    }), /*#__PURE__*/jsx("div", {
      className: `${prefix}-inner`,
      children: map(children, (child, index) => {
        const isActive = index === renderedActiveIndex;
        return slide ? /*#__PURE__*/jsx(TransitionWrapper$1, {
          in: isActive,
          onEnter: isActive ? handleEnter : undefined,
          onEntered: isActive ? handleEntered : undefined,
          addEndListener: transitionEndListener,
          children: (status, innerProps) => /*#__PURE__*/React.cloneElement(child, {
            ...innerProps,
            className: classNames(child.props.className, isActive && status !== 'entered' && orderClassName, (status === 'entered' || status === 'exiting') && 'active', (status === 'entering' || status === 'exiting') && directionalClassName)
          })
        }) : /*#__PURE__*/React.cloneElement(child, {
          className: classNames(child.props.className, isActive && 'active')
        });
      })
    }), controls && /*#__PURE__*/jsxs(Fragment, {
      children: [(wrap || activeIndex !== 0) && /*#__PURE__*/jsxs(Anchor$1, {
        className: `${prefix}-control-prev`,
        onClick: prev,
        children: [prevIcon, prevLabel && /*#__PURE__*/jsx("span", {
          className: "visually-hidden",
          children: prevLabel
        })]
      }), (wrap || activeIndex !== numChildren - 1) && /*#__PURE__*/jsxs(Anchor$1, {
        className: `${prefix}-control-next`,
        onClick: next,
        children: [nextIcon, nextLabel && /*#__PURE__*/jsx("span", {
          className: "visually-hidden",
          children: nextLabel
        })]
      })]
    })]
  });
});
Carousel$1.displayName = 'Carousel';
var Carousel$2 = Object.assign(Carousel$1, {
  Caption: CarouselCaption,
  Item: CarouselItem$1
});

function useCol({
  as,
  bsPrefix,
  className,
  ...props
}) {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'col');
  const breakpoints = useBootstrapBreakpoints();
  const minBreakpoint = useBootstrapMinBreakpoint();
  const spans = [];
  const classes = [];
  breakpoints.forEach(brkPoint => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let span;
    let offset;
    let order;
    if (typeof propValue === 'object' && propValue != null) {
      ({
        span,
        offset,
        order
      } = propValue);
    } else {
      span = propValue;
    }
    const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : '';
    if (span) spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);
    if (order != null) classes.push(`order${infix}-${order}`);
    if (offset != null) classes.push(`offset${infix}-${offset}`);
  });
  return [{
    ...props,
    className: classNames(className, ...spans, ...classes)
  }, {
    as,
    bsPrefix,
    spans
  }];
}
const Col = /*#__PURE__*/React.forwardRef(
// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
(props, ref) => {
  const [{
    className,
    ...colProps
  }, {
    as: Component = 'div',
    bsPrefix,
    spans
  }] = useCol(props);
  return /*#__PURE__*/jsx(Component, {
    ...colProps,
    ref: ref,
    className: classNames(className, !spans.length && bsPrefix)
  });
});
Col.displayName = 'Col';
var Col$1 = Col;

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = process.env.NODE_ENV !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

var warning_1 = warning;

const Container = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  fluid = false,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'container');
  const suffix = typeof fluid === 'string' ? `-${fluid}` : '-fluid';
  return /*#__PURE__*/jsx(Component, {
    ref: ref,
    ...props,
    className: classNames(className, fluid ? `${prefix}${suffix}` : prefix)
  });
});
Container.displayName = 'Container';
var Container$1 = Container;

const propTypes = {
  /**
   * @default 'img'
   */
  bsPrefix: PropTypes.string,
  /**
   * Sets image as fluid image.
   */
  fluid: PropTypes.bool,
  /**
   * Sets image shape as rounded.
   */
  rounded: PropTypes.bool,
  /**
   * Sets image shape as circle.
   */
  roundedCircle: PropTypes.bool,
  /**
   * Sets image shape as thumbnail.
   */
  thumbnail: PropTypes.bool
};
const Image$3 = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  fluid = false,
  rounded = false,
  roundedCircle = false,
  thumbnail = false,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'img');
  return /*#__PURE__*/jsx("img", {
    // eslint-disable-line jsx-a11y/alt-text
    ref: ref,
    ...props,
    className: classNames(className, fluid && `${bsPrefix}-fluid`, rounded && `rounded`, roundedCircle && `rounded-circle`, thumbnail && `${bsPrefix}-thumbnail`)
  });
});
Image$3.displayName = 'Image';
var Image$4 = Image$3;

const FigureImage = /*#__PURE__*/React.forwardRef(({
  className,
  fluid = true,
  ...props
}, ref) => /*#__PURE__*/jsx(Image$4, {
  ref: ref,
  ...props,
  fluid: fluid,
  className: classNames(className, 'figure-img')
}));
FigureImage.displayName = 'FigureImage';
FigureImage.propTypes = propTypes;
var FigureImage$1 = FigureImage;

const FigureCaption = createWithBsPrefix('figure-caption', {
  Component: 'figcaption'
});
var FigureCaption$1 = FigureCaption;

const Figure = createWithBsPrefix('figure', {
  Component: 'figure'
});
var Figure$1 = Object.assign(Figure, {
  Image: FigureImage$1,
  Caption: FigureCaption$1
});

const Row = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, 'row');
  const breakpoints = useBootstrapBreakpoints();
  const minBreakpoint = useBootstrapMinBreakpoint();
  const sizePrefix = `${decoratedBsPrefix}-cols`;
  const classes = [];
  breakpoints.forEach(brkPoint => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let cols;
    if (propValue != null && typeof propValue === 'object') {
      ({
        cols
      } = propValue);
    } else {
      cols = propValue;
    }
    const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : '';
    if (cols != null) classes.push(`${sizePrefix}${infix}-${cols}`);
  });
  return /*#__PURE__*/jsx(Component, {
    ref: ref,
    ...props,
    className: classNames(className, decoratedBsPrefix, ...classes)
  });
});
Row.displayName = 'Row';
var Row$1 = Row;

var section = function (props) {
    if (props.pageTemplate.hasOwnProperty(props.name)) {
        return props.pageTemplate[props.name];
    }
    return React__default.createElement(React__default.Fragment, null);
};

var __GenericLayout = function (props) {
    var genericSections = Object.keys(props.pageTemplate).map(function (sectionName) {
        return React__default.createElement("section", { key: sectionName, className: sectionName },
            React__default.createElement(section, { name: sectionName, pageTemplate: props.pageTemplate, pageProps: props.pageProps }));
    });
    return React__default.createElement("div", { className: 'backendlayout-' + props.pageProps.headlessData.appearance.backendLayout }, genericSections);
};

var Page = function (_a) {
    var pageProps = _a.pageProps;
    var pageLayout;
    if (pageProps.pageLayouts.hasOwnProperty(pageProps.headlessData.appearance.layout)) {
        pageLayout = pageProps.pageLayouts[pageProps.headlessData.appearance.layout];
    }
    else if (pageProps.pageLayouts.hasOwnProperty('__generic')) {
        pageLayout = pageProps.pageLayouts.__generic;
    }
    else {
        return React__default.createElement(React__default.Fragment, null,
            "Page-layout not found: ",
            pageProps.headlessData.appearance.layout);
    }
    var pageTemplate;
    if (pageProps.pageTemplates.hasOwnProperty(pageProps.headlessData.appearance.backendLayout)) {
        pageTemplate = pageProps.pageTemplates[pageProps.headlessData.appearance.backendLayout];
    }
    else if (pageProps.pageTemplates.hasOwnProperty('__generic')) {
        pageTemplate = pageProps.pageTemplates.__generic;
    }
    else {
        return React__default.createElement(React__default.Fragment, null,
            "Page-template not found: ",
            pageProps.headlessData.appearance.backendLayout,
            " ");
    }
    return pageLayout(pageProps, pageTemplate(pageProps));
};

var RenderContent = function (contentData, pageProps) {
    var contentElementLayouts = pageProps.contentElementLayouts, contentElementTemplates = pageProps.contentElementTemplates;
    var layout;
    if (contentElementLayouts.hasOwnProperty(contentData.appearance.layout)) {
        layout = contentElementLayouts[contentData.appearance.layout];
    }
    else if (contentElementLayouts.hasOwnProperty('__generic')) {
        layout = contentElementLayouts.__generic;
    }
    else {
        return React__default.createElement(React__default.Fragment, null,
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
        return React__default.createElement(React__default.Fragment, null,
            "CE-template not found: ",
            contentData.type,
            " ");
    }
    return React__default.createElement(React__default.Fragment, { key: contentData.id }, layout({ children: template(contentData, pageProps), content: contentData }));
}; //, args: _args

var PREFIX_COLPOS = 'colPos';
var Content = function (props) {
    var content = React__default.createElement(React__default.Fragment, null);
    if (props.pageProps.headlessData.content.hasOwnProperty(PREFIX_COLPOS + props.colPos)) {
        content = props.pageProps.headlessData.content[PREFIX_COLPOS + props.colPos].map(function (content) {
            return RenderContent(content, props.pageProps);
        });
    }
    return content;
};

var HeaderLink = function (props) {
    if (props.headerLink === null || typeof props.headerLink === 'string') {
        return React__default.createElement(React__default.Fragment, null, props.children);
    }
    return React__default.createElement("a", { href: props.headerLink.url }, props.children);
};

var Header$1 = function (props) {
    var cssClass = 'element-header';
    switch (props.layout) {
        case 1:
            return React__default.createElement("h1", { className: cssClass + ' ' + props.positionClass },
                React__default.createElement(HeaderLink, { headerLink: props.headerLink },
                    React__default.createElement("span", null, props.header)));
        case 3:
            return React__default.createElement("h3", { className: cssClass + ' ' + props.positionClass },
                React__default.createElement(HeaderLink, { headerLink: props.headerLink },
                    React__default.createElement("span", null, props.header)));
        case 4:
            return React__default.createElement("h4", { className: cssClass + ' ' + props.positionClass },
                React__default.createElement(HeaderLink, { headerLink: props.headerLink },
                    React__default.createElement("span", null, props.header)));
        case 5:
            return React__default.createElement("h5", { className: cssClass + ' ' + props.positionClass },
                React__default.createElement(HeaderLink, { headerLink: props.headerLink },
                    React__default.createElement("span", null, props.header)));
        case 100:
            return React__default.createElement(React__default.Fragment, null);
        default:
            return React__default.createElement("h2", { className: cssClass + ' ' + props.positionClass },
                React__default.createElement(HeaderLink, { headerLink: props.headerLink },
                    React__default.createElement("span", null, props.header)));
    }
};

var Subheader = function (props) {
    var cssClass = 'element-subheader';
    switch (props.layout) {
        case 1:
            return React__default.createElement("h2", { className: cssClass + ' ' + props.positionClass },
                React__default.createElement(HeaderLink, { headerLink: props.headerLink },
                    React__default.createElement("span", null, props.header)));
        case 3:
            return React__default.createElement("h4", { className: cssClass + ' ' + props.positionClass },
                React__default.createElement(HeaderLink, { headerLink: props.headerLink },
                    React__default.createElement("span", null, props.header)));
        case 4:
            return React__default.createElement("h5", { className: cssClass + ' ' + props.positionClass },
                React__default.createElement(HeaderLink, { headerLink: props.headerLink },
                    React__default.createElement("span", null, props.header)));
        case 5:
            return React__default.createElement("h6", { className: cssClass + ' ' + props.positionClass },
                React__default.createElement(HeaderLink, { headerLink: props.headerLink },
                    React__default.createElement("span", null, props.header)));
        case 100:
            return React__default.createElement(React__default.Fragment, null);
        default:
            return React__default.createElement("h3", { className: cssClass + ' ' + props.positionClass },
                React__default.createElement(HeaderLink, { headerLink: props.headerLink },
                    React__default.createElement("span", null, props.header)));
    }
};

var HeaderDate = function (props) {
    //TODO: Date initialisieren, toLocaleDateString...
    return React__default.createElement("p", { className: props.positionClass }, props.date);
};

var AllHeader = function (props) {
    var _a = props.data.content, header = _a.header, subheader = _a.subheader, date = _a.date, headerPosition = _a.headerPosition, headerLink = _a.headerLink, headerLayout = _a.headerLayout;
    var content = React__default.createElement(React__default.Fragment, null);
    if (props.data.content.hasOwnProperty('headerLayout') && headerLayout !== 100) {
        if (header !== '' || subheader !== '' || date !== '') {
            content = React__default.createElement("div", { className: "frame-header" },
                header.length > 0 &&
                    React__default.createElement(Header$1, { layout: headerLayout, positionClass: headerPosition ? 'text-' + headerPosition : '', header: header, headerLink: headerLink !== '' ? headerLink : null }),
                subheader.length > 0 &&
                    React__default.createElement(Subheader, { layout: headerLayout, positionClass: headerPosition ? 'text-' + headerPosition : '', header: subheader, headerLink: headerLink !== '' ? headerLink : null }),
                date.length > 0 &&
                    React__default.createElement(HeaderDate, { date: date, positionClass: headerPosition ? 'text-' + headerPosition : '' }));
        }
    }
    return content;
};

var Text = function (props) {
    var bodytext = props.data.content.bodytext;
    return React__default.createElement(React__default.Fragment, null,
        React__default.createElement(AllHeader, { data: props.data }),
        React__default.createElement("div", { dangerouslySetInnerHTML: { __html: bodytext } }),
        props.children);
};

var lib = {exports: {}};

var Modal$2 = {};

var ModalPortal = {exports: {}};

var focusManager = {};

var tabbable = {exports: {}};

(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findTabbableDescendants;
/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */

var DISPLAY_NONE = "none";
var DISPLAY_CONTENTS = "contents";

var tabbableNode = /input|select|textarea|button|object|iframe/;

function isNotOverflowing(element, style) {
  return style.getPropertyValue("overflow") !== "visible" ||
  // if 'overflow: visible' set, check if there is actually any overflow
  element.scrollWidth <= 0 && element.scrollHeight <= 0;
}

function hidesContents(element) {
  var zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;

  // If the node is empty, this is good enough
  if (zeroSize && !element.innerHTML) return true;

  try {
    // Otherwise we need to check some styles
    var style = window.getComputedStyle(element);
    var displayValue = style.getPropertyValue("display");
    return zeroSize ? displayValue !== DISPLAY_CONTENTS && isNotOverflowing(element, style) : displayValue === DISPLAY_NONE;
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.warn("Failed to inspect element style");
    return false;
  }
}

function visible(element) {
  var parentElement = element;
  var rootNode = element.getRootNode && element.getRootNode();
  while (parentElement) {
    if (parentElement === document.body) break;

    // if we are not hidden yet, skip to checking outside the Web Component
    if (rootNode && parentElement === rootNode) parentElement = rootNode.host.parentNode;

    if (hidesContents(parentElement)) return false;
    parentElement = parentElement.parentNode;
  }
  return true;
}

function focusable(element, isTabIndexNotNaN) {
  var nodeName = element.nodeName.toLowerCase();
  var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === "a" ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
  return res && visible(element);
}

function tabbable(element) {
  var tabIndex = element.getAttribute("tabindex");
  if (tabIndex === null) tabIndex = undefined;
  var isTabIndexNaN = isNaN(tabIndex);
  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
}

function findTabbableDescendants(element) {
  var descendants = [].slice.call(element.querySelectorAll("*"), 0).reduce(function (finished, el) {
    return finished.concat(!el.shadowRoot ? [el] : findTabbableDescendants(el.shadowRoot));
  }, []);
  return descendants.filter(tabbable);
}
module.exports = exports["default"];
}(tabbable, tabbable.exports));

Object.defineProperty(focusManager, "__esModule", {
  value: true
});
focusManager.resetState = resetState$4;
focusManager.log = log$4;
focusManager.handleBlur = handleBlur;
focusManager.handleFocus = handleFocus;
focusManager.markForFocusLater = markForFocusLater;
focusManager.returnFocus = returnFocus;
focusManager.popWithoutFocus = popWithoutFocus;
focusManager.setupScopedFocus = setupScopedFocus;
focusManager.teardownScopedFocus = teardownScopedFocus;

var _tabbable = tabbable.exports;

var _tabbable2 = _interopRequireDefault$4(_tabbable);

function _interopRequireDefault$4(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var focusLaterElements = [];
var modalElement = null;
var needToFocus = false;

/* eslint-disable no-console */
/* istanbul ignore next */
function resetState$4() {
  focusLaterElements = [];
}

/* istanbul ignore next */
function log$4() {
  if (process.env.NODE_ENV !== "production") {
    console.log("focusManager ----------");
    focusLaterElements.forEach(function (f) {
      var check = f || {};
      console.log(check.nodeName, check.className, check.id);
    });
    console.log("end focusManager ----------");
  }
}
/* eslint-enable no-console */

function handleBlur() {
  needToFocus = true;
}

function handleFocus() {
  if (needToFocus) {
    needToFocus = false;
    if (!modalElement) {
      return;
    }
    // need to see how jQuery shims document.on('focusin') so we don't need the
    // setTimeout, firefox doesn't support focusin, if it did, we could focus
    // the element outside of a setTimeout. Side-effect of this implementation
    // is that the document.body gets focus, and then we focus our element right
    // after, seems fine.
    setTimeout(function () {
      if (modalElement.contains(document.activeElement)) {
        return;
      }
      var el = (0, _tabbable2.default)(modalElement)[0] || modalElement;
      el.focus();
    }, 0);
  }
}

function markForFocusLater() {
  focusLaterElements.push(document.activeElement);
}

/* eslint-disable no-console */
function returnFocus() {
  var preventScroll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var toFocus = null;
  try {
    if (focusLaterElements.length !== 0) {
      toFocus = focusLaterElements.pop();
      toFocus.focus({ preventScroll: preventScroll });
    }
    return;
  } catch (e) {
    console.warn(["You tried to return focus to", toFocus, "but it is not in the DOM anymore"].join(" "));
  }
}
/* eslint-enable no-console */

function popWithoutFocus() {
  focusLaterElements.length > 0 && focusLaterElements.pop();
}

function setupScopedFocus(element) {
  modalElement = element;

  if (window.addEventListener) {
    window.addEventListener("blur", handleBlur, false);
    document.addEventListener("focus", handleFocus, true);
  } else {
    window.attachEvent("onBlur", handleBlur);
    document.attachEvent("onFocus", handleFocus);
  }
}

function teardownScopedFocus() {
  modalElement = null;

  if (window.addEventListener) {
    window.removeEventListener("blur", handleBlur);
    document.removeEventListener("focus", handleFocus);
  } else {
    window.detachEvent("onBlur", handleBlur);
    document.detachEvent("onFocus", handleFocus);
  }
}

var scopeTab = {exports: {}};

(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scopeTab;

var _tabbable = tabbable.exports;

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getActiveElement() {
  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

  return el.activeElement.shadowRoot ? getActiveElement(el.activeElement.shadowRoot) : el.activeElement;
}

function scopeTab(node, event) {
  var tabbable = (0, _tabbable2.default)(node);

  if (!tabbable.length) {
    // Do nothing, since there are no elements that can receive focus.
    event.preventDefault();
    return;
  }

  var target = void 0;

  var shiftKey = event.shiftKey;
  var head = tabbable[0];
  var tail = tabbable[tabbable.length - 1];
  var activeElement = getActiveElement();

  // proceed with default browser behavior on tab.
  // Focus on last element on shift + tab.
  if (node === activeElement) {
    if (!shiftKey) return;
    target = tail;
  }

  if (tail === activeElement && !shiftKey) {
    target = head;
  }

  if (head === activeElement && shiftKey) {
    target = tail;
  }

  if (target) {
    event.preventDefault();
    target.focus();
    return;
  }

  // Safari radio issue.
  //
  // Safari does not move the focus to the radio button,
  // so we need to force it to really walk through all elements.
  //
  // This is very error prone, since we are trying to guess
  // if it is a safari browser from the first occurence between
  // chrome or safari.
  //
  // The chrome user agent contains the first ocurrence
  // as the 'chrome/version' and later the 'safari/version'.
  var checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
  var isSafariDesktop = checkSafari != null && checkSafari[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;

  // If we are not in safari desktop, let the browser control
  // the focus
  if (!isSafariDesktop) return;

  var x = tabbable.indexOf(activeElement);

  if (x > -1) {
    x += shiftKey ? -1 : 1;
  }

  target = tabbable[x];

  // If the tabbable element does not exist,
  // focus head/tail based on shiftKey
  if (typeof target === "undefined") {
    event.preventDefault();
    target = shiftKey ? tail : head;
    target.focus();
    return;
  }

  event.preventDefault();

  target.focus();
}
module.exports = exports["default"];
}(scopeTab, scopeTab.exports));

var ariaAppHider$1 = {};

var safeHTMLElement = {};

var exenv = {exports: {}};

/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/

(function (module) {
/* global define */

(function () {

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (module.exports) {
		module.exports = ExecutionEnvironment;
	} else {
		window.ExecutionEnvironment = ExecutionEnvironment;
	}

}());
}(exenv));

Object.defineProperty(safeHTMLElement, "__esModule", {
  value: true
});
safeHTMLElement.canUseDOM = safeHTMLElement.SafeNodeList = safeHTMLElement.SafeHTMLCollection = undefined;

var _exenv = exenv.exports;

var _exenv2 = _interopRequireDefault$3(_exenv);

function _interopRequireDefault$3(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EE = _exenv2.default;

var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};

safeHTMLElement.SafeHTMLCollection = EE.canUseDOM ? window.HTMLCollection : {};

safeHTMLElement.SafeNodeList = EE.canUseDOM ? window.NodeList : {};

safeHTMLElement.canUseDOM = EE.canUseDOM;

safeHTMLElement.default = SafeHTMLElement;

Object.defineProperty(ariaAppHider$1, "__esModule", {
  value: true
});
ariaAppHider$1.resetState = resetState$3;
ariaAppHider$1.log = log$3;
ariaAppHider$1.assertNodeList = assertNodeList;
ariaAppHider$1.setElement = setElement;
ariaAppHider$1.validateElement = validateElement;
ariaAppHider$1.hide = hide;
ariaAppHider$1.show = show;
ariaAppHider$1.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;

var _warning = warning_1;

var _warning2 = _interopRequireDefault$2(_warning);

var _safeHTMLElement$1 = safeHTMLElement;

function _interopRequireDefault$2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var globalElement = null;

/* eslint-disable no-console */
/* istanbul ignore next */
function resetState$3() {
  if (globalElement) {
    if (globalElement.removeAttribute) {
      globalElement.removeAttribute("aria-hidden");
    } else if (globalElement.length != null) {
      globalElement.forEach(function (element) {
        return element.removeAttribute("aria-hidden");
      });
    } else {
      document.querySelectorAll(globalElement).forEach(function (element) {
        return element.removeAttribute("aria-hidden");
      });
    }
  }
  globalElement = null;
}

/* istanbul ignore next */
function log$3() {
  if (process.env.NODE_ENV !== "production") {
    var check = globalElement || {};
    console.log("ariaAppHider ----------");
    console.log(check.nodeName, check.className, check.id);
    console.log("end ariaAppHider ----------");
  }
}
/* eslint-enable no-console */

function assertNodeList(nodeList, selector) {
  if (!nodeList || !nodeList.length) {
    throw new Error("react-modal: No elements were found for selector " + selector + ".");
  }
}

function setElement(element) {
  var useElement = element;
  if (typeof useElement === "string" && _safeHTMLElement$1.canUseDOM) {
    var el = document.querySelectorAll(useElement);
    assertNodeList(el, useElement);
    useElement = el;
  }
  globalElement = useElement || globalElement;
  return globalElement;
}

function validateElement(appElement) {
  var el = appElement || globalElement;
  if (el) {
    return Array.isArray(el) || el instanceof HTMLCollection || el instanceof NodeList ? el : [el];
  } else {
    (0, _warning2.default)(false, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" "));

    return [];
  }
}

function hide(appElement) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = validateElement(appElement)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var el = _step.value;

      el.setAttribute("aria-hidden", "true");
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function show(appElement) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = validateElement(appElement)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var el = _step2.value;

      el.removeAttribute("aria-hidden");
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

function documentNotReadyOrSSRTesting() {
  globalElement = null;
}

var classList = {};

Object.defineProperty(classList, "__esModule", {
  value: true
});
classList.resetState = resetState$2;
classList.log = log$2;
var htmlClassList = {};
var docBodyClassList = {};

/* eslint-disable no-console */
/* istanbul ignore next */
function removeClass(at, cls) {
  at.classList.remove(cls);
}

/* istanbul ignore next */
function resetState$2() {
  var htmlElement = document.getElementsByTagName("html")[0];
  for (var cls in htmlClassList) {
    removeClass(htmlElement, htmlClassList[cls]);
  }

  var body = document.body;
  for (var _cls in docBodyClassList) {
    removeClass(body, docBodyClassList[_cls]);
  }

  htmlClassList = {};
  docBodyClassList = {};
}

/* istanbul ignore next */
function log$2() {
  if (process.env.NODE_ENV !== "production") {
    var classes = document.getElementsByTagName("html")[0].className;
    var buffer = "Show tracked classes:\n\n";

    buffer += "<html /> (" + classes + "):\n  ";
    for (var x in htmlClassList) {
      buffer += "  " + x + " " + htmlClassList[x] + "\n  ";
    }

    classes = document.body.className;

    buffer += "\n\ndoc.body (" + classes + "):\n  ";
    for (var _x in docBodyClassList) {
      buffer += "  " + _x + " " + docBodyClassList[_x] + "\n  ";
    }

    buffer += "\n";

    console.log(buffer);
  }
}
/* eslint-enable no-console */

/**
 * Track the number of reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var incrementReference = function incrementReference(poll, className) {
  if (!poll[className]) {
    poll[className] = 0;
  }
  poll[className] += 1;
  return className;
};

/**
 * Drop the reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var decrementReference = function decrementReference(poll, className) {
  if (poll[className]) {
    poll[className] -= 1;
  }
  return className;
};

/**
 * Track a class and add to the given class list.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be tracked.
 */
var trackClass = function trackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    incrementReference(poll, className);
    classListRef.add(className);
  });
};

/**
 * Untrack a class and remove from the given class list if the reference
 * reaches 0.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be untracked.
 */
var untrackClass = function untrackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    decrementReference(poll, className);
    poll[className] === 0 && classListRef.remove(className);
  });
};

/**
 * Public inferface to add classes to the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
classList.add = function add(element, classString) {
  return trackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};

/**
 * Public inferface to remove classes from the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
classList.remove = function remove(element, classString) {
  return untrackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};

var portalOpenInstances$1 = {};

Object.defineProperty(portalOpenInstances$1, "__esModule", {
  value: true
});
portalOpenInstances$1.log = log$1;
portalOpenInstances$1.resetState = resetState$1;

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Tracks portals that are open and emits events to subscribers

var PortalOpenInstances = function PortalOpenInstances() {
  var _this = this;

  _classCallCheck$2(this, PortalOpenInstances);

  this.register = function (openInstance) {
    if (_this.openInstances.indexOf(openInstance) !== -1) {
      if (process.env.NODE_ENV !== "production") {
        // eslint-disable-next-line no-console
        console.warn("React-Modal: Cannot register modal instance that's already open");
      }
      return;
    }
    _this.openInstances.push(openInstance);
    _this.emit("register");
  };

  this.deregister = function (openInstance) {
    var index = _this.openInstances.indexOf(openInstance);
    if (index === -1) {
      if (process.env.NODE_ENV !== "production") {
        // eslint-disable-next-line no-console
        console.warn("React-Modal: Unable to deregister " + openInstance + " as " + "it was never registered");
      }
      return;
    }
    _this.openInstances.splice(index, 1);
    _this.emit("deregister");
  };

  this.subscribe = function (callback) {
    _this.subscribers.push(callback);
  };

  this.emit = function (eventType) {
    _this.subscribers.forEach(function (subscriber) {
      return subscriber(eventType,
      // shallow copy to avoid accidental mutation
      _this.openInstances.slice());
    });
  };

  this.openInstances = [];
  this.subscribers = [];
};

var portalOpenInstances = new PortalOpenInstances();

/* eslint-disable no-console */
/* istanbul ignore next */
function log$1() {
  console.log("portalOpenInstances ----------");
  console.log(portalOpenInstances.openInstances.length);
  portalOpenInstances.openInstances.forEach(function (p) {
    return console.log(p);
  });
  console.log("end portalOpenInstances ----------");
}

/* istanbul ignore next */
function resetState$1() {
  portalOpenInstances = new PortalOpenInstances();
}
/* eslint-enable no-console */

portalOpenInstances$1.default = portalOpenInstances;

var bodyTrap$1 = {};

Object.defineProperty(bodyTrap$1, "__esModule", {
  value: true
});
bodyTrap$1.resetState = resetState;
bodyTrap$1.log = log;

var _portalOpenInstances = portalOpenInstances$1;

var _portalOpenInstances2 = _interopRequireDefault$1(_portalOpenInstances);

function _interopRequireDefault$1(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Body focus trap see Issue #742

var before = void 0,
    after = void 0,
    instances = [];

/* eslint-disable no-console */
/* istanbul ignore next */
function resetState() {
  var _arr = [before, after];

  for (var _i = 0; _i < _arr.length; _i++) {
    var item = _arr[_i];
    if (!item) continue;
    item.parentNode && item.parentNode.removeChild(item);
  }
  before = after = null;
  instances = [];
}

/* istanbul ignore next */
function log() {
  console.log("bodyTrap ----------");
  console.log(instances.length);
  var _arr2 = [before, after];
  for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
    var item = _arr2[_i2];
    var check = item || {};
    console.log(check.nodeName, check.className, check.id);
  }
  console.log("edn bodyTrap ----------");
}
/* eslint-enable no-console */

function focusContent() {
  if (instances.length === 0) {
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.warn("React-Modal: Open instances > 0 expected");
    }
    return;
  }
  instances[instances.length - 1].focusContent();
}

function bodyTrap(eventType, openInstances) {
  if (!before && !after) {
    before = document.createElement("div");
    before.setAttribute("data-react-modal-body-trap", "");
    before.style.position = "absolute";
    before.style.opacity = "0";
    before.setAttribute("tabindex", "0");
    before.addEventListener("focus", focusContent);
    after = before.cloneNode();
    after.addEventListener("focus", focusContent);
  }

  instances = openInstances;

  if (instances.length > 0) {
    // Add focus trap
    if (document.body.firstChild !== before) {
      document.body.insertBefore(before, document.body.firstChild);
    }
    if (document.body.lastChild !== after) {
      document.body.appendChild(after);
    }
  } else {
    // Remove focus trap
    if (before.parentElement) {
      before.parentElement.removeChild(before);
    }
    if (after.parentElement) {
      after.parentElement.removeChild(after);
    }
  }
}

_portalOpenInstances2.default.subscribe(bodyTrap);

(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = React__default;

var _propTypes = propTypes$2.exports;

var _propTypes2 = _interopRequireDefault(_propTypes);

var _focusManager = focusManager;

var focusManager$1 = _interopRequireWildcard(_focusManager);

var _scopeTab = scopeTab.exports;

var _scopeTab2 = _interopRequireDefault(_scopeTab);

var _ariaAppHider = ariaAppHider$1;

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _classList = classList;

var classList$1 = _interopRequireWildcard(_classList);

var _safeHTMLElement = safeHTMLElement;

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

var _portalOpenInstances = portalOpenInstances$1;

var _portalOpenInstances2 = _interopRequireDefault(_portalOpenInstances);



function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// so that our CSS is statically analyzable
var CLASS_NAMES = {
  overlay: "ReactModal__Overlay",
  content: "ReactModal__Content"
};

/**
 * We need to support the deprecated `KeyboardEvent.keyCode` in addition to
 * `KeyboardEvent.code` for apps that still support IE11. Can be removed when
 * `react-modal` only supports React >18 (which dropped IE support).
 */
var isTabKey = function isTabKey(event) {
  return event.code === "Tab" || event.keyCode === 9;
};
var isEscKey = function isEscKey(event) {
  return event.code === "Escape" || event.keyCode === 27;
};

var ariaHiddenInstances = 0;

var ModalPortal = function (_Component) {
  _inherits(ModalPortal, _Component);

  function ModalPortal(props) {
    _classCallCheck(this, ModalPortal);

    var _this = _possibleConstructorReturn(this, (ModalPortal.__proto__ || Object.getPrototypeOf(ModalPortal)).call(this, props));

    _this.setOverlayRef = function (overlay) {
      _this.overlay = overlay;
      _this.props.overlayRef && _this.props.overlayRef(overlay);
    };

    _this.setContentRef = function (content) {
      _this.content = content;
      _this.props.contentRef && _this.props.contentRef(content);
    };

    _this.afterClose = function () {
      var _this$props = _this.props,
          appElement = _this$props.appElement,
          ariaHideApp = _this$props.ariaHideApp,
          htmlOpenClassName = _this$props.htmlOpenClassName,
          bodyOpenClassName = _this$props.bodyOpenClassName,
          parentSelector = _this$props.parentSelector;


      var parentDocument = parentSelector && parentSelector().ownerDocument || document;

      // Remove classes.
      bodyOpenClassName && classList$1.remove(parentDocument.body, bodyOpenClassName);

      htmlOpenClassName && classList$1.remove(parentDocument.getElementsByTagName("html")[0], htmlOpenClassName);

      // Reset aria-hidden attribute if all modals have been removed
      if (ariaHideApp && ariaHiddenInstances > 0) {
        ariaHiddenInstances -= 1;

        if (ariaHiddenInstances === 0) {
          ariaAppHider.show(appElement);
        }
      }

      if (_this.props.shouldFocusAfterRender) {
        if (_this.props.shouldReturnFocusAfterClose) {
          focusManager$1.returnFocus(_this.props.preventScroll);
          focusManager$1.teardownScopedFocus();
        } else {
          focusManager$1.popWithoutFocus();
        }
      }

      if (_this.props.onAfterClose) {
        _this.props.onAfterClose();
      }

      _portalOpenInstances2.default.deregister(_this);
    };

    _this.open = function () {
      _this.beforeOpen();
      if (_this.state.afterOpen && _this.state.beforeClose) {
        clearTimeout(_this.closeTimer);
        _this.setState({ beforeClose: false });
      } else {
        if (_this.props.shouldFocusAfterRender) {
          focusManager$1.setupScopedFocus(_this.node);
          focusManager$1.markForFocusLater();
        }

        _this.setState({ isOpen: true }, function () {
          _this.openAnimationFrame = requestAnimationFrame(function () {
            _this.setState({ afterOpen: true });

            if (_this.props.isOpen && _this.props.onAfterOpen) {
              _this.props.onAfterOpen({
                overlayEl: _this.overlay,
                contentEl: _this.content
              });
            }
          });
        });
      }
    };

    _this.close = function () {
      if (_this.props.closeTimeoutMS > 0) {
        _this.closeWithTimeout();
      } else {
        _this.closeWithoutTimeout();
      }
    };

    _this.focusContent = function () {
      return _this.content && !_this.contentHasFocus() && _this.content.focus({ preventScroll: true });
    };

    _this.closeWithTimeout = function () {
      var closesAt = Date.now() + _this.props.closeTimeoutMS;
      _this.setState({ beforeClose: true, closesAt: closesAt }, function () {
        _this.closeTimer = setTimeout(_this.closeWithoutTimeout, _this.state.closesAt - Date.now());
      });
    };

    _this.closeWithoutTimeout = function () {
      _this.setState({
        beforeClose: false,
        isOpen: false,
        afterOpen: false,
        closesAt: null
      }, _this.afterClose);
    };

    _this.handleKeyDown = function (event) {
      if (isTabKey(event)) {
        (0, _scopeTab2.default)(_this.content, event);
      }

      if (_this.props.shouldCloseOnEsc && isEscKey(event)) {
        event.stopPropagation();
        _this.requestClose(event);
      }
    };

    _this.handleOverlayOnClick = function (event) {
      if (_this.shouldClose === null) {
        _this.shouldClose = true;
      }

      if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
        if (_this.ownerHandlesClose()) {
          _this.requestClose(event);
        } else {
          _this.focusContent();
        }
      }
      _this.shouldClose = null;
    };

    _this.handleContentOnMouseUp = function () {
      _this.shouldClose = false;
    };

    _this.handleOverlayOnMouseDown = function (event) {
      if (!_this.props.shouldCloseOnOverlayClick && event.target == _this.overlay) {
        event.preventDefault();
      }
    };

    _this.handleContentOnClick = function () {
      _this.shouldClose = false;
    };

    _this.handleContentOnMouseDown = function () {
      _this.shouldClose = false;
    };

    _this.requestClose = function (event) {
      return _this.ownerHandlesClose() && _this.props.onRequestClose(event);
    };

    _this.ownerHandlesClose = function () {
      return _this.props.onRequestClose;
    };

    _this.shouldBeClosed = function () {
      return !_this.state.isOpen && !_this.state.beforeClose;
    };

    _this.contentHasFocus = function () {
      return document.activeElement === _this.content || _this.content.contains(document.activeElement);
    };

    _this.buildClassName = function (which, additional) {
      var classNames = (typeof additional === "undefined" ? "undefined" : _typeof(additional)) === "object" ? additional : {
        base: CLASS_NAMES[which],
        afterOpen: CLASS_NAMES[which] + "--after-open",
        beforeClose: CLASS_NAMES[which] + "--before-close"
      };
      var className = classNames.base;
      if (_this.state.afterOpen) {
        className = className + " " + classNames.afterOpen;
      }
      if (_this.state.beforeClose) {
        className = className + " " + classNames.beforeClose;
      }
      return typeof additional === "string" && additional ? className + " " + additional : className;
    };

    _this.attributesFromObject = function (prefix, items) {
      return Object.keys(items).reduce(function (acc, name) {
        acc[prefix + "-" + name] = items[name];
        return acc;
      }, {});
    };

    _this.state = {
      afterOpen: false,
      beforeClose: false
    };

    _this.shouldClose = null;
    _this.moveFromContentToOverlay = null;
    return _this;
  }

  _createClass(ModalPortal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isOpen) {
        this.open();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (process.env.NODE_ENV !== "production") {
        if (prevProps.bodyOpenClassName !== this.props.bodyOpenClassName) {
          // eslint-disable-next-line no-console
          console.warn('React-Modal: "bodyOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
        }
        if (prevProps.htmlOpenClassName !== this.props.htmlOpenClassName) {
          // eslint-disable-next-line no-console
          console.warn('React-Modal: "htmlOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
        }
      }

      if (this.props.isOpen && !prevProps.isOpen) {
        this.open();
      } else if (!this.props.isOpen && prevProps.isOpen) {
        this.close();
      }

      // Focus only needs to be set once when the modal is being opened
      if (this.props.shouldFocusAfterRender && this.state.isOpen && !prevState.isOpen) {
        this.focusContent();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.isOpen) {
        this.afterClose();
      }
      clearTimeout(this.closeTimer);
      cancelAnimationFrame(this.openAnimationFrame);
    }
  }, {
    key: "beforeOpen",
    value: function beforeOpen() {
      var _props = this.props,
          appElement = _props.appElement,
          ariaHideApp = _props.ariaHideApp,
          htmlOpenClassName = _props.htmlOpenClassName,
          bodyOpenClassName = _props.bodyOpenClassName,
          parentSelector = _props.parentSelector;


      var parentDocument = parentSelector && parentSelector().ownerDocument || document;

      // Add classes.
      bodyOpenClassName && classList$1.add(parentDocument.body, bodyOpenClassName);

      htmlOpenClassName && classList$1.add(parentDocument.getElementsByTagName("html")[0], htmlOpenClassName);

      if (ariaHideApp) {
        ariaHiddenInstances += 1;
        ariaAppHider.hide(appElement);
      }

      _portalOpenInstances2.default.register(this);
    }

    // Don't steal focus from inner elements

  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          id = _props2.id,
          className = _props2.className,
          overlayClassName = _props2.overlayClassName,
          defaultStyles = _props2.defaultStyles,
          children = _props2.children;

      var contentStyles = className ? {} : defaultStyles.content;
      var overlayStyles = overlayClassName ? {} : defaultStyles.overlay;

      if (this.shouldBeClosed()) {
        return null;
      }

      var overlayProps = {
        ref: this.setOverlayRef,
        className: this.buildClassName("overlay", overlayClassName),
        style: _extends({}, overlayStyles, this.props.style.overlay),
        onClick: this.handleOverlayOnClick,
        onMouseDown: this.handleOverlayOnMouseDown
      };

      var contentProps = _extends({
        id: id,
        ref: this.setContentRef,
        style: _extends({}, contentStyles, this.props.style.content),
        className: this.buildClassName("content", className),
        tabIndex: "-1",
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleContentOnMouseDown,
        onMouseUp: this.handleContentOnMouseUp,
        onClick: this.handleContentOnClick,
        role: this.props.role,
        "aria-label": this.props.contentLabel
      }, this.attributesFromObject("aria", _extends({ modal: true }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), {
        "data-testid": this.props.testId
      });

      var contentElement = this.props.contentElement(contentProps, children);
      return this.props.overlayElement(overlayProps, contentElement);
    }
  }]);

  return ModalPortal;
}(_react.Component);

ModalPortal.defaultProps = {
  style: {
    overlay: {},
    content: {}
  },
  defaultStyles: {}
};
ModalPortal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  defaultStyles: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  parentSelector: _propTypes2.default.func,
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  ariaHideApp: _propTypes2.default.bool,
  appElement: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(_safeHTMLElement2.default), _propTypes2.default.instanceOf(_safeHTMLElement.SafeHTMLCollection), _propTypes2.default.instanceOf(_safeHTMLElement.SafeNodeList), _propTypes2.default.arrayOf(_propTypes2.default.instanceOf(_safeHTMLElement2.default))]),
  onAfterOpen: _propTypes2.default.func,
  onAfterClose: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  preventScroll: _propTypes2.default.bool,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  children: _propTypes2.default.node,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func,
  id: _propTypes2.default.string,
  overlayElement: _propTypes2.default.func,
  contentElement: _propTypes2.default.func,
  testId: _propTypes2.default.string
};
exports.default = ModalPortal;
module.exports = exports["default"];
}(ModalPortal, ModalPortal.exports));

var require$$6 = /*@__PURE__*/getAugmentedNamespace(reactLifecyclesCompat_es);

Object.defineProperty(Modal$2, "__esModule", {
  value: true
});
Modal$2.bodyOpenClassName = Modal$2.portalClassName = undefined;

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = React__default;

var _react2 = _interopRequireDefault(_react);

var _reactDom = ReactDOM;

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = propTypes$2.exports;

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ModalPortal = ModalPortal.exports;

var _ModalPortal2 = _interopRequireDefault(_ModalPortal);

var _ariaAppHider = ariaAppHider$1;

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _safeHTMLElement = safeHTMLElement;

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

var _reactLifecyclesCompat = require$$6;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var portalClassName = Modal$2.portalClassName = "ReactModalPortal";
var bodyOpenClassName = Modal$2.bodyOpenClassName = "ReactModal__Body--open";

var isReact16 = _safeHTMLElement.canUseDOM && _reactDom2.default.createPortal !== undefined;

var createHTMLElement = function createHTMLElement(name) {
  return document.createElement(name);
};

var getCreatePortal = function getCreatePortal() {
  return isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;
};

function getParentElement(parentSelector) {
  return parentSelector();
}

var Modal$1 = function (_Component) {
  _inherits$1(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck$1(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$1(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.removePortal = function () {
      !isReact16 && _reactDom2.default.unmountComponentAtNode(_this.node);
      var parent = getParentElement(_this.props.parentSelector);
      if (parent && parent.contains(_this.node)) {
        parent.removeChild(_this.node);
      } else {
        // eslint-disable-next-line no-console
        console.warn('React-Modal: "parentSelector" prop did not returned any DOM ' + "element. Make sure that the parent element is unmounted to " + "avoid any memory leaks.");
      }
    }, _this.portalRef = function (ref) {
      _this.portal = ref;
    }, _this.renderPortal = function (props) {
      var createPortal = getCreatePortal();
      var portal = createPortal(_this, _react2.default.createElement(_ModalPortal2.default, _extends$1({ defaultStyles: Modal.defaultStyles }, props)), _this.node);
      _this.portalRef(portal);
    }, _temp), _possibleConstructorReturn$1(_this, _ret);
  }

  _createClass$1(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!_safeHTMLElement.canUseDOM) return;

      if (!isReact16) {
        this.node = createHTMLElement("div");
      }
      this.node.className = this.props.portalClassName;

      var parent = getParentElement(this.props.parentSelector);
      parent.appendChild(this.node);

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      var prevParent = getParentElement(prevProps.parentSelector);
      var nextParent = getParentElement(this.props.parentSelector);
      return { prevParent: prevParent, nextParent: nextParent };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, _, snapshot) {
      if (!_safeHTMLElement.canUseDOM) return;
      var _props = this.props,
          isOpen = _props.isOpen,
          portalClassName = _props.portalClassName;


      if (prevProps.portalClassName !== portalClassName) {
        this.node.className = portalClassName;
      }

      var prevParent = snapshot.prevParent,
          nextParent = snapshot.nextParent;

      if (nextParent !== prevParent) {
        prevParent.removeChild(this.node);
        nextParent.appendChild(this.node);
      }

      // Stop unnecessary renders if modal is remaining closed
      if (!prevProps.isOpen && !isOpen) return;

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!_safeHTMLElement.canUseDOM || !this.node || !this.portal) return;

      var state = this.portal.state;
      var now = Date.now();
      var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);

      if (closesAt) {
        if (!state.beforeClose) {
          this.portal.closeWithTimeout();
        }

        setTimeout(this.removePortal, closesAt - now);
      } else {
        this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!_safeHTMLElement.canUseDOM || !isReact16) {
        return null;
      }

      if (!this.node && isReact16) {
        this.node = createHTMLElement("div");
      }

      var createPortal = getCreatePortal();
      return createPortal(_react2.default.createElement(_ModalPortal2.default, _extends$1({
        ref: this.portalRef,
        defaultStyles: Modal.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function setAppElement(element) {
      ariaAppHider.setElement(element);
    }

    /* eslint-disable react/no-unused-prop-types */

    /* eslint-enable react/no-unused-prop-types */

  }]);

  return Modal;
}(_react.Component);

Modal$1.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  portalClassName: _propTypes2.default.string,
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  appElement: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(_safeHTMLElement2.default), _propTypes2.default.instanceOf(_safeHTMLElement.SafeHTMLCollection), _propTypes2.default.instanceOf(_safeHTMLElement.SafeNodeList), _propTypes2.default.arrayOf(_propTypes2.default.instanceOf(_safeHTMLElement2.default))]),
  onAfterOpen: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  ariaHideApp: _propTypes2.default.bool,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  preventScroll: _propTypes2.default.bool,
  parentSelector: _propTypes2.default.func,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func,
  id: _propTypes2.default.string,
  overlayElement: _propTypes2.default.func,
  contentElement: _propTypes2.default.func
};
Modal$1.defaultProps = {
  isOpen: false,
  portalClassName: portalClassName,
  bodyOpenClassName: bodyOpenClassName,
  role: "dialog",
  ariaHideApp: true,
  closeTimeoutMS: 0,
  shouldFocusAfterRender: true,
  shouldCloseOnEsc: true,
  shouldCloseOnOverlayClick: true,
  shouldReturnFocusAfterClose: true,
  preventScroll: false,
  parentSelector: function parentSelector() {
    return document.body;
  },
  overlayElement: function overlayElement(props, contentEl) {
    return _react2.default.createElement(
      "div",
      props,
      contentEl
    );
  },
  contentElement: function contentElement(props, children) {
    return _react2.default.createElement(
      "div",
      props,
      children
    );
  }
};
Modal$1.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  }
};


(0, _reactLifecyclesCompat.polyfill)(Modal$1);

if (process.env.NODE_ENV !== "production") {
  Modal$1.setCreateHTMLElement = function (fn) {
    return createHTMLElement = fn;
  };
}

Modal$2.default = Modal$1;

(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Modal = Modal$2;

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Modal2.default;
module.exports = exports["default"];
}(lib, lib.exports));

var Modal = /*@__PURE__*/getDefaultExportFromCjs(lib.exports);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

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

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/**
 * Placeholder for future translate functionality
 */
function translate(str) {
  var replaceStrings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!str) {
    return '';
  }

  var translated = str;

  if (replaceStrings) {
    Object.keys(replaceStrings).forEach(function (placeholder) {
      translated = translated.replace(placeholder, replaceStrings[placeholder]);
    });
  }

  return translated;
}
function getWindowWidth() {
  return typeof global.window !== 'undefined' ? global.window.innerWidth : 0;
}
function getWindowHeight() {
  return typeof global.window !== 'undefined' ? global.window.innerHeight : 0;
}

var isCrossOriginFrame = function isCrossOriginFrame() {
  try {
    return global.window.location.hostname !== global.window.parent.location.hostname;
  } catch (e) {
    return true;
  }
}; // Get the highest window context that isn't cross-origin
// (When in an iframe)


function getHighestSafeWindowContext() {
  var self = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : global.window.self;

  // If we reached the top level, return self
  if (self === global.window.top) {
    return self;
  } // If parent is the same origin, we can move up one context
  // Reference: https://stackoverflow.com/a/21965342/1601953


  if (!isCrossOriginFrame()) {
    return getHighestSafeWindowContext(self.parent);
  } // If a different origin, we consider the current level
  // as the top reachable one


  return self;
}

// Min image zoom level
var MIN_ZOOM_LEVEL = 0; // Max image zoom level

var MAX_ZOOM_LEVEL = 300; // Size ratio between previous and next zoom levels

var ZOOM_RATIO = 1.007; // How much to increase/decrease the zoom level when the zoom buttons are clicked

var ZOOM_BUTTON_INCREMENT_SIZE = 100; // Used to judge the amount of horizontal scroll needed to initiate a image move

var WHEEL_MOVE_X_THRESHOLD = 200; // Used to judge the amount of vertical scroll needed to initiate a zoom action

var WHEEL_MOVE_Y_THRESHOLD = 1;
var KEYS = {
  ESC: 27,
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39
}; // Actions

var ACTION_NONE = 0;
var ACTION_MOVE = 1;
var ACTION_SWIPE = 2;
var ACTION_PINCH = 3;

var SOURCE_ANY = 0;
var SOURCE_MOUSE = 1;
var SOURCE_TOUCH = 2;
var SOURCE_POINTER = 3; // Minimal swipe distance

var MIN_SWIPE_DISTANCE = 200;

var ReactImageLightbox = /*#__PURE__*/function (_Component) {
  _inherits(ReactImageLightbox, _Component);

  var _super = _createSuper(ReactImageLightbox);

  function ReactImageLightbox(props) {
    var _this;

    _classCallCheck(this, ReactImageLightbox);

    _this = _super.call(this, props);
    _this.state = {
      //-----------------------------
      // Animation
      //-----------------------------
      // Lightbox is closing
      // When Lightbox is mounted, if animation is enabled it will open with the reverse of the closing animation
      isClosing: !props.animationDisabled,
      // Component parts should animate (e.g., when images are moving, or image is being zoomed)
      shouldAnimate: false,
      //-----------------------------
      // Zoom settings
      //-----------------------------
      // Zoom level of image
      zoomLevel: MIN_ZOOM_LEVEL,
      //-----------------------------
      // Image position settings
      //-----------------------------
      // Horizontal offset from center
      offsetX: 0,
      // Vertical offset from center
      offsetY: 0,
      // image load error for srcType
      loadErrorStatus: {}
    }; // Refs

    _this.outerEl = /*#__PURE__*/React__default.createRef();
    _this.zoomInBtn = /*#__PURE__*/React__default.createRef();
    _this.zoomOutBtn = /*#__PURE__*/React__default.createRef();
    _this.caption = /*#__PURE__*/React__default.createRef();
    _this.closeIfClickInner = _this.closeIfClickInner.bind(_assertThisInitialized(_this));
    _this.handleImageDoubleClick = _this.handleImageDoubleClick.bind(_assertThisInitialized(_this));
    _this.handleImageMouseWheel = _this.handleImageMouseWheel.bind(_assertThisInitialized(_this));
    _this.handleKeyInput = _this.handleKeyInput.bind(_assertThisInitialized(_this));
    _this.handleMouseUp = _this.handleMouseUp.bind(_assertThisInitialized(_this));
    _this.handleMouseDown = _this.handleMouseDown.bind(_assertThisInitialized(_this));
    _this.handleMouseMove = _this.handleMouseMove.bind(_assertThisInitialized(_this));
    _this.handleOuterMousewheel = _this.handleOuterMousewheel.bind(_assertThisInitialized(_this));
    _this.handleTouchStart = _this.handleTouchStart.bind(_assertThisInitialized(_this));
    _this.handleTouchMove = _this.handleTouchMove.bind(_assertThisInitialized(_this));
    _this.handleTouchEnd = _this.handleTouchEnd.bind(_assertThisInitialized(_this));
    _this.handlePointerEvent = _this.handlePointerEvent.bind(_assertThisInitialized(_this));
    _this.handleCaptionMousewheel = _this.handleCaptionMousewheel.bind(_assertThisInitialized(_this));
    _this.handleWindowResize = _this.handleWindowResize.bind(_assertThisInitialized(_this));
    _this.handleZoomInButtonClick = _this.handleZoomInButtonClick.bind(_assertThisInitialized(_this));
    _this.handleZoomOutButtonClick = _this.handleZoomOutButtonClick.bind(_assertThisInitialized(_this));
    _this.requestClose = _this.requestClose.bind(_assertThisInitialized(_this));
    _this.requestMoveNext = _this.requestMoveNext.bind(_assertThisInitialized(_this));
    _this.requestMovePrev = _this.requestMovePrev.bind(_assertThisInitialized(_this)); // Timeouts - always clear it before umount

    _this.timeouts = []; // Current action

    _this.currentAction = ACTION_NONE; // Events source

    _this.eventsSource = SOURCE_ANY; // Empty pointers list

    _this.pointerList = []; // Prevent inner close

    _this.preventInnerClose = false;
    _this.preventInnerCloseTimeout = null; // Used to disable animation when changing props.mainSrc|nextSrc|prevSrc

    _this.keyPressed = false; // Used to store load state / dimensions of images

    _this.imageCache = {}; // Time the last keydown event was called (used in keyboard action rate limiting)

    _this.lastKeyDownTime = 0; // Used for debouncing window resize event

    _this.resizeTimeout = null; // Used to determine when actions are triggered by the scroll wheel

    _this.wheelActionTimeout = null;
    _this.resetScrollTimeout = null;
    _this.scrollX = 0;
    _this.scrollY = 0; // Used in panning zoomed images

    _this.moveStartX = 0;
    _this.moveStartY = 0;
    _this.moveStartOffsetX = 0;
    _this.moveStartOffsetY = 0; // Used to swipe

    _this.swipeStartX = 0;
    _this.swipeStartY = 0;
    _this.swipeEndX = 0;
    _this.swipeEndY = 0; // Used to pinch

    _this.pinchTouchList = null;
    _this.pinchDistance = 0; // Used to differentiate between images with identical src

    _this.keyCounter = 0; // Used to detect a move when all src's remain unchanged (four or more of the same image in a row)

    _this.moveRequested = false;
    return _this;
  }

  _createClass(ReactImageLightbox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!this.props.animationDisabled) {
        // Make opening animation play
        this.setState({
          isClosing: false
        });
      } // Prevents cross-origin errors when using a cross-origin iframe


      this.windowContext = getHighestSafeWindowContext();
      this.listeners = {
        resize: this.handleWindowResize,
        mouseup: this.handleMouseUp,
        touchend: this.handleTouchEnd,
        touchcancel: this.handleTouchEnd,
        pointerdown: this.handlePointerEvent,
        pointermove: this.handlePointerEvent,
        pointerup: this.handlePointerEvent,
        pointercancel: this.handlePointerEvent
      };
      Object.keys(this.listeners).forEach(function (type) {
        _this2.windowContext.addEventListener(type, _this2.listeners[type]);
      });
      this.loadAllImages();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var _this3 = this;

      this.getSrcTypes().forEach(function (srcType) {
        if (_this3.props[srcType.name] !== nextProps[srcType.name]) {
          _this3.moveRequested = false;
        }
      }); // Wait for move...

      return !this.moveRequested;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this4 = this;

      var sourcesChanged = false;
      var prevSrcDict = {};
      var nextSrcDict = {};
      this.getSrcTypes().forEach(function (srcType) {
        if (prevProps[srcType.name] !== _this4.props[srcType.name]) {
          sourcesChanged = true;
          prevSrcDict[prevProps[srcType.name]] = true;
          nextSrcDict[_this4.props[srcType.name]] = true;
        }
      });

      if (sourcesChanged || this.moveRequested) {
        // Reset the loaded state for images not rendered next
        Object.keys(prevSrcDict).forEach(function (prevSrc) {
          if (!(prevSrc in nextSrcDict) && prevSrc in _this4.imageCache) {
            _this4.imageCache[prevSrc].loaded = false;
          }
        });
        this.moveRequested = false; // Load any new images

        this.loadAllImages(this.props);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this5 = this;

      this.didUnmount = true;
      Object.keys(this.listeners).forEach(function (type) {
        _this5.windowContext.removeEventListener(type, _this5.listeners[type]);
      });
      this.timeouts.forEach(function (tid) {
        return clearTimeout(tid);
      });
    }
  }, {
    key: "setTimeout",
    value: function (_setTimeout) {
      function setTimeout(_x, _x2) {
        return _setTimeout.apply(this, arguments);
      }

      setTimeout.toString = function () {
        return _setTimeout.toString();
      };

      return setTimeout;
    }(function (func, time) {
      var _this6 = this;

      var id = setTimeout(function () {
        _this6.timeouts = _this6.timeouts.filter(function (tid) {
          return tid !== id;
        });
        func();
      }, time);
      this.timeouts.push(id);
      return id;
    })
  }, {
    key: "setPreventInnerClose",
    value: function setPreventInnerClose() {
      var _this7 = this;

      if (this.preventInnerCloseTimeout) {
        this.clearTimeout(this.preventInnerCloseTimeout);
      }

      this.preventInnerClose = true;
      this.preventInnerCloseTimeout = this.setTimeout(function () {
        _this7.preventInnerClose = false;
        _this7.preventInnerCloseTimeout = null;
      }, 100);
    } // Get info for the best suited image to display with the given srcType

  }, {
    key: "getBestImageForType",
    value: function getBestImageForType(srcType) {
      var imageSrc = this.props[srcType];
      var fitSizes = {};

      if (this.isImageLoaded(imageSrc)) {
        // Use full-size image if available
        fitSizes = this.getFitSizes(this.imageCache[imageSrc].width, this.imageCache[imageSrc].height);
      } else if (this.isImageLoaded(this.props["".concat(srcType, "Thumbnail")])) {
        // Fall back to using thumbnail if the image has not been loaded
        imageSrc = this.props["".concat(srcType, "Thumbnail")];
        fitSizes = this.getFitSizes(this.imageCache[imageSrc].width, this.imageCache[imageSrc].height, true);
      } else {
        return null;
      }

      return {
        src: imageSrc,
        height: this.imageCache[imageSrc].height,
        width: this.imageCache[imageSrc].width,
        targetHeight: fitSizes.height,
        targetWidth: fitSizes.width
      };
    } // Get sizing for when an image is larger than the window

  }, {
    key: "getFitSizes",
    value: function getFitSizes(width, height, stretch) {
      var boxSize = this.getLightboxRect();
      var maxHeight = boxSize.height - this.props.imagePadding * 2;
      var maxWidth = boxSize.width - this.props.imagePadding * 2;

      if (!stretch) {
        maxHeight = Math.min(maxHeight, height);
        maxWidth = Math.min(maxWidth, width);
      }

      var maxRatio = maxWidth / maxHeight;
      var srcRatio = width / height;

      if (maxRatio > srcRatio) {
        // height is the constraining dimension of the photo
        return {
          width: width * maxHeight / height,
          height: maxHeight
        };
      }

      return {
        width: maxWidth,
        height: height * maxWidth / width
      };
    }
  }, {
    key: "getMaxOffsets",
    value: function getMaxOffsets() {
      var zoomLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.zoomLevel;
      var currentImageInfo = this.getBestImageForType('mainSrc');

      if (currentImageInfo === null) {
        return {
          maxX: 0,
          minX: 0,
          maxY: 0,
          minY: 0
        };
      }

      var boxSize = this.getLightboxRect();
      var zoomMultiplier = this.getZoomMultiplier(zoomLevel);
      var maxX = 0;

      if (zoomMultiplier * currentImageInfo.width - boxSize.width < 0) {
        // if there is still blank space in the X dimension, don't limit except to the opposite edge
        maxX = (boxSize.width - zoomMultiplier * currentImageInfo.width) / 2;
      } else {
        maxX = (zoomMultiplier * currentImageInfo.width - boxSize.width) / 2;
      }

      var maxY = 0;

      if (zoomMultiplier * currentImageInfo.height - boxSize.height < 0) {
        // if there is still blank space in the Y dimension, don't limit except to the opposite edge
        maxY = (boxSize.height - zoomMultiplier * currentImageInfo.height) / 2;
      } else {
        maxY = (zoomMultiplier * currentImageInfo.height - boxSize.height) / 2;
      }

      return {
        maxX: maxX,
        maxY: maxY,
        minX: -1 * maxX,
        minY: -1 * maxY
      };
    } // Get image src types

  }, {
    key: "getSrcTypes",
    value: function getSrcTypes() {
      return [{
        name: 'mainSrc',
        keyEnding: "i".concat(this.keyCounter)
      }, {
        name: 'mainSrcThumbnail',
        keyEnding: "t".concat(this.keyCounter)
      }, {
        name: 'nextSrc',
        keyEnding: "i".concat(this.keyCounter + 1)
      }, {
        name: 'nextSrcThumbnail',
        keyEnding: "t".concat(this.keyCounter + 1)
      }, {
        name: 'prevSrc',
        keyEnding: "i".concat(this.keyCounter - 1)
      }, {
        name: 'prevSrcThumbnail',
        keyEnding: "t".concat(this.keyCounter - 1)
      }];
    }
    /**
     * Get sizing when the image is scaled
     */

  }, {
    key: "getZoomMultiplier",
    value: function getZoomMultiplier() {
      var zoomLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.zoomLevel;
      return Math.pow(ZOOM_RATIO, zoomLevel);
    }
    /**
     * Get the size of the lightbox in pixels
     */

  }, {
    key: "getLightboxRect",
    value: function getLightboxRect() {
      if (this.outerEl.current) {
        return this.outerEl.current.getBoundingClientRect();
      }

      return {
        width: getWindowWidth(),
        height: getWindowHeight(),
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      };
    }
  }, {
    key: "clearTimeout",
    value: function (_clearTimeout) {
      function clearTimeout(_x3) {
        return _clearTimeout.apply(this, arguments);
      }

      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };

      return clearTimeout;
    }(function (id) {
      this.timeouts = this.timeouts.filter(function (tid) {
        return tid !== id;
      });
      clearTimeout(id);
    } // Change zoom level
    )
  }, {
    key: "changeZoom",
    value: function changeZoom(zoomLevel, clientX, clientY) {
      // Ignore if zoom disabled
      if (!this.props.enableZoom) {
        return;
      } // Constrain zoom level to the set bounds


      var nextZoomLevel = Math.max(MIN_ZOOM_LEVEL, Math.min(MAX_ZOOM_LEVEL, zoomLevel)); // Ignore requests that don't change the zoom level

      if (nextZoomLevel === this.state.zoomLevel) {
        return;
      }

      if (nextZoomLevel === MIN_ZOOM_LEVEL) {
        // Snap back to center if zoomed all the way out
        this.setState({
          zoomLevel: nextZoomLevel,
          offsetX: 0,
          offsetY: 0
        });
        return;
      }

      var imageBaseSize = this.getBestImageForType('mainSrc');

      if (imageBaseSize === null) {
        return;
      }

      var currentZoomMultiplier = this.getZoomMultiplier();
      var nextZoomMultiplier = this.getZoomMultiplier(nextZoomLevel); // Default to the center of the image to zoom when no mouse position specified

      var boxRect = this.getLightboxRect();
      var pointerX = typeof clientX !== 'undefined' ? clientX - boxRect.left : boxRect.width / 2;
      var pointerY = typeof clientY !== 'undefined' ? clientY - boxRect.top : boxRect.height / 2;
      var currentImageOffsetX = (boxRect.width - imageBaseSize.width * currentZoomMultiplier) / 2;
      var currentImageOffsetY = (boxRect.height - imageBaseSize.height * currentZoomMultiplier) / 2;
      var currentImageRealOffsetX = currentImageOffsetX - this.state.offsetX;
      var currentImageRealOffsetY = currentImageOffsetY - this.state.offsetY;
      var currentPointerXRelativeToImage = (pointerX - currentImageRealOffsetX) / currentZoomMultiplier;
      var currentPointerYRelativeToImage = (pointerY - currentImageRealOffsetY) / currentZoomMultiplier;
      var nextImageRealOffsetX = pointerX - currentPointerXRelativeToImage * nextZoomMultiplier;
      var nextImageRealOffsetY = pointerY - currentPointerYRelativeToImage * nextZoomMultiplier;
      var nextImageOffsetX = (boxRect.width - imageBaseSize.width * nextZoomMultiplier) / 2;
      var nextImageOffsetY = (boxRect.height - imageBaseSize.height * nextZoomMultiplier) / 2;
      var nextOffsetX = nextImageOffsetX - nextImageRealOffsetX;
      var nextOffsetY = nextImageOffsetY - nextImageRealOffsetY; // When zooming out, limit the offset so things don't get left askew

      if (this.currentAction !== ACTION_PINCH) {
        var maxOffsets = this.getMaxOffsets();

        if (this.state.zoomLevel > nextZoomLevel) {
          nextOffsetX = Math.max(maxOffsets.minX, Math.min(maxOffsets.maxX, nextOffsetX));
          nextOffsetY = Math.max(maxOffsets.minY, Math.min(maxOffsets.maxY, nextOffsetY));
        }
      }

      this.setState({
        zoomLevel: nextZoomLevel,
        offsetX: nextOffsetX,
        offsetY: nextOffsetY
      });
    }
  }, {
    key: "closeIfClickInner",
    value: function closeIfClickInner(event) {
      if (!this.preventInnerClose && event.target.className.search(/\bril-inner\b/) > -1) {
        this.requestClose(event);
      }
    }
    /**
     * Handle user keyboard actions
     */

  }, {
    key: "handleKeyInput",
    value: function handleKeyInput(event) {
      event.stopPropagation(); // Ignore key input during animations

      if (this.isAnimating()) {
        return;
      } // Allow slightly faster navigation through the images when user presses keys repeatedly


      if (event.type === 'keyup') {
        this.lastKeyDownTime -= this.props.keyRepeatKeyupBonus;
        return;
      }

      var keyCode = event.which || event.keyCode; // Ignore key presses that happen too close to each other (when rapid fire key pressing or holding down the key)
      // But allow it if it's a lightbox closing action

      var currentTime = new Date();

      if (currentTime.getTime() - this.lastKeyDownTime < this.props.keyRepeatLimit && keyCode !== KEYS.ESC) {
        return;
      }

      this.lastKeyDownTime = currentTime.getTime();

      switch (keyCode) {
        // ESC key closes the lightbox
        case KEYS.ESC:
          event.preventDefault();
          this.requestClose(event);
          break;
        // Left arrow key moves to previous image

        case KEYS.LEFT_ARROW:
          if (!this.props.prevSrc) {
            return;
          }

          event.preventDefault();
          this.keyPressed = true;
          this.requestMovePrev(event);
          break;
        // Right arrow key moves to next image

        case KEYS.RIGHT_ARROW:
          if (!this.props.nextSrc) {
            return;
          }

          event.preventDefault();
          this.keyPressed = true;
          this.requestMoveNext(event);
          break;
      }
    }
    /**
     * Handle a mouse wheel event over the lightbox container
     */

  }, {
    key: "handleOuterMousewheel",
    value: function handleOuterMousewheel(event) {
      var _this8 = this;

      // Prevent scrolling of the background
      event.stopPropagation();
      var xThreshold = WHEEL_MOVE_X_THRESHOLD;
      var actionDelay = 0;
      var imageMoveDelay = 500;
      this.clearTimeout(this.resetScrollTimeout);
      this.resetScrollTimeout = this.setTimeout(function () {
        _this8.scrollX = 0;
        _this8.scrollY = 0;
      }, 300); // Prevent rapid-fire zoom behavior

      if (this.wheelActionTimeout !== null || this.isAnimating()) {
        return;
      }

      if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) {
        // handle horizontal scrolls with image moves
        this.scrollY = 0;
        this.scrollX += event.deltaX;
        var bigLeapX = xThreshold / 2; // If the scroll amount has accumulated sufficiently, or a large leap was taken

        if (this.scrollX >= xThreshold || event.deltaX >= bigLeapX) {
          // Scroll right moves to next
          this.requestMoveNext(event);
          actionDelay = imageMoveDelay;
          this.scrollX = 0;
        } else if (this.scrollX <= -1 * xThreshold || event.deltaX <= -1 * bigLeapX) {
          // Scroll left moves to previous
          this.requestMovePrev(event);
          actionDelay = imageMoveDelay;
          this.scrollX = 0;
        }
      } // Allow successive actions after the set delay


      if (actionDelay !== 0) {
        this.wheelActionTimeout = this.setTimeout(function () {
          _this8.wheelActionTimeout = null;
        }, actionDelay);
      }
    }
  }, {
    key: "handleImageMouseWheel",
    value: function handleImageMouseWheel(event) {
      var yThreshold = WHEEL_MOVE_Y_THRESHOLD;

      if (Math.abs(event.deltaY) >= Math.abs(event.deltaX)) {
        event.stopPropagation(); // If the vertical scroll amount was large enough, perform a zoom

        if (Math.abs(event.deltaY) < yThreshold) {
          return;
        }

        this.scrollX = 0;
        this.scrollY += event.deltaY;
        this.changeZoom(this.state.zoomLevel - event.deltaY, event.clientX, event.clientY);
      }
    }
    /**
     * Handle a double click on the current image
     */

  }, {
    key: "handleImageDoubleClick",
    value: function handleImageDoubleClick(event) {
      if (this.state.zoomLevel > MIN_ZOOM_LEVEL) {
        // A double click when zoomed in zooms all the way out
        this.changeZoom(MIN_ZOOM_LEVEL, event.clientX, event.clientY);
      } else {
        // A double click when zoomed all the way out zooms in
        this.changeZoom(this.state.zoomLevel + ZOOM_BUTTON_INCREMENT_SIZE, event.clientX, event.clientY);
      }
    }
  }, {
    key: "shouldHandleEvent",
    value: function shouldHandleEvent(source) {
      if (this.eventsSource === source) {
        return true;
      }

      if (this.eventsSource === SOURCE_ANY) {
        this.eventsSource = source;
        return true;
      }

      switch (source) {
        case SOURCE_MOUSE:
          return false;

        case SOURCE_TOUCH:
          this.eventsSource = SOURCE_TOUCH;
          this.filterPointersBySource();
          return true;

        case SOURCE_POINTER:
          if (this.eventsSource === SOURCE_MOUSE) {
            this.eventsSource = SOURCE_POINTER;
            this.filterPointersBySource();
            return true;
          }

          return false;

        default:
          return false;
      }
    }
  }, {
    key: "addPointer",
    value: function addPointer(pointer) {
      this.pointerList.push(pointer);
    }
  }, {
    key: "removePointer",
    value: function removePointer(pointer) {
      this.pointerList = this.pointerList.filter(function (_ref) {
        var id = _ref.id;
        return id !== pointer.id;
      });
    }
  }, {
    key: "filterPointersBySource",
    value: function filterPointersBySource() {
      var _this9 = this;

      this.pointerList = this.pointerList.filter(function (_ref2) {
        var source = _ref2.source;
        return source === _this9.eventsSource;
      });
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(event) {
      if (this.shouldHandleEvent(SOURCE_MOUSE) && ReactImageLightbox.isTargetMatchImage(event.target)) {
        this.addPointer(ReactImageLightbox.parseMouseEvent(event));
        this.multiPointerStart(event);
      }
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(event) {
      if (this.shouldHandleEvent(SOURCE_MOUSE)) {
        this.multiPointerMove(event, [ReactImageLightbox.parseMouseEvent(event)]);
      }
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(event) {
      if (this.shouldHandleEvent(SOURCE_MOUSE)) {
        this.removePointer(ReactImageLightbox.parseMouseEvent(event));
        this.multiPointerEnd(event);
      }
    }
  }, {
    key: "handlePointerEvent",
    value: function handlePointerEvent(event) {
      if (this.shouldHandleEvent(SOURCE_POINTER)) {
        switch (event.type) {
          case 'pointerdown':
            if (ReactImageLightbox.isTargetMatchImage(event.target)) {
              this.addPointer(ReactImageLightbox.parsePointerEvent(event));
              this.multiPointerStart(event);
            }

            break;

          case 'pointermove':
            this.multiPointerMove(event, [ReactImageLightbox.parsePointerEvent(event)]);
            break;

          case 'pointerup':
          case 'pointercancel':
            this.removePointer(ReactImageLightbox.parsePointerEvent(event));
            this.multiPointerEnd(event);
            break;
        }
      }
    }
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart(event) {
      var _this10 = this;

      if (this.shouldHandleEvent(SOURCE_TOUCH) && ReactImageLightbox.isTargetMatchImage(event.target)) {
        [].forEach.call(event.changedTouches, function (eventTouch) {
          return _this10.addPointer(ReactImageLightbox.parseTouchPointer(eventTouch));
        });
        this.multiPointerStart(event);
      }
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(event) {
      if (this.shouldHandleEvent(SOURCE_TOUCH)) {
        this.multiPointerMove(event, [].map.call(event.changedTouches, function (eventTouch) {
          return ReactImageLightbox.parseTouchPointer(eventTouch);
        }));
      }
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd(event) {
      var _this11 = this;

      if (this.shouldHandleEvent(SOURCE_TOUCH)) {
        [].map.call(event.changedTouches, function (touch) {
          return _this11.removePointer(ReactImageLightbox.parseTouchPointer(touch));
        });
        this.multiPointerEnd(event);
      }
    }
  }, {
    key: "decideMoveOrSwipe",
    value: function decideMoveOrSwipe(pointer) {
      if (this.state.zoomLevel <= MIN_ZOOM_LEVEL) {
        this.handleSwipeStart(pointer);
      } else {
        this.handleMoveStart(pointer);
      }
    }
  }, {
    key: "multiPointerStart",
    value: function multiPointerStart(event) {
      this.handleEnd(null);

      switch (this.pointerList.length) {
        case 1:
          {
            event.preventDefault();
            this.decideMoveOrSwipe(this.pointerList[0]);
            break;
          }

        case 2:
          {
            event.preventDefault();
            this.handlePinchStart(this.pointerList);
            break;
          }
      }
    }
  }, {
    key: "multiPointerMove",
    value: function multiPointerMove(event, pointerList) {
      switch (this.currentAction) {
        case ACTION_MOVE:
          {
            event.preventDefault();
            this.handleMove(pointerList[0]);
            break;
          }

        case ACTION_SWIPE:
          {
            event.preventDefault();
            this.handleSwipe(pointerList[0]);
            break;
          }

        case ACTION_PINCH:
          {
            event.preventDefault();
            this.handlePinch(pointerList);
            break;
          }
      }
    }
  }, {
    key: "multiPointerEnd",
    value: function multiPointerEnd(event) {
      if (this.currentAction !== ACTION_NONE) {
        this.setPreventInnerClose();
        this.handleEnd(event);
      }

      switch (this.pointerList.length) {
        case 0:
          {
            this.eventsSource = SOURCE_ANY;
            break;
          }

        case 1:
          {
            event.preventDefault();
            this.decideMoveOrSwipe(this.pointerList[0]);
            break;
          }

        case 2:
          {
            event.preventDefault();
            this.handlePinchStart(this.pointerList);
            break;
          }
      }
    }
  }, {
    key: "handleEnd",
    value: function handleEnd(event) {
      switch (this.currentAction) {
        case ACTION_MOVE:
          this.handleMoveEnd(event);
          break;

        case ACTION_SWIPE:
          this.handleSwipeEnd(event);
          break;

        case ACTION_PINCH:
          this.handlePinchEnd(event);
          break;
      }
    } // Handle move start over the lightbox container
    // This happens:
    // - On a mouseDown event
    // - On a touchstart event

  }, {
    key: "handleMoveStart",
    value: function handleMoveStart(_ref3) {
      var clientX = _ref3.x,
          clientY = _ref3.y;

      if (!this.props.enableZoom) {
        return;
      }

      this.currentAction = ACTION_MOVE;
      this.moveStartX = clientX;
      this.moveStartY = clientY;
      this.moveStartOffsetX = this.state.offsetX;
      this.moveStartOffsetY = this.state.offsetY;
    } // Handle dragging over the lightbox container
    // This happens:
    // - After a mouseDown and before a mouseUp event
    // - After a touchstart and before a touchend event

  }, {
    key: "handleMove",
    value: function handleMove(_ref4) {
      var clientX = _ref4.x,
          clientY = _ref4.y;
      var newOffsetX = this.moveStartX - clientX + this.moveStartOffsetX;
      var newOffsetY = this.moveStartY - clientY + this.moveStartOffsetY;

      if (this.state.offsetX !== newOffsetX || this.state.offsetY !== newOffsetY) {
        this.setState({
          offsetX: newOffsetX,
          offsetY: newOffsetY
        });
      }
    }
  }, {
    key: "handleMoveEnd",
    value: function handleMoveEnd() {
      var _this12 = this;

      this.currentAction = ACTION_NONE;
      this.moveStartX = 0;
      this.moveStartY = 0;
      this.moveStartOffsetX = 0;
      this.moveStartOffsetY = 0; // Snap image back into frame if outside max offset range

      var maxOffsets = this.getMaxOffsets();
      var nextOffsetX = Math.max(maxOffsets.minX, Math.min(maxOffsets.maxX, this.state.offsetX));
      var nextOffsetY = Math.max(maxOffsets.minY, Math.min(maxOffsets.maxY, this.state.offsetY));

      if (nextOffsetX !== this.state.offsetX || nextOffsetY !== this.state.offsetY) {
        this.setState({
          offsetX: nextOffsetX,
          offsetY: nextOffsetY,
          shouldAnimate: true
        });
        this.setTimeout(function () {
          _this12.setState({
            shouldAnimate: false
          });
        }, this.props.animationDuration);
      }
    }
  }, {
    key: "handleSwipeStart",
    value: function handleSwipeStart(_ref5) {
      var clientX = _ref5.x,
          clientY = _ref5.y;
      this.currentAction = ACTION_SWIPE;
      this.swipeStartX = clientX;
      this.swipeStartY = clientY;
      this.swipeEndX = clientX;
      this.swipeEndY = clientY;
    }
  }, {
    key: "handleSwipe",
    value: function handleSwipe(_ref6) {
      var clientX = _ref6.x,
          clientY = _ref6.y;
      this.swipeEndX = clientX;
      this.swipeEndY = clientY;
    }
  }, {
    key: "handleSwipeEnd",
    value: function handleSwipeEnd(event) {
      var xDiff = this.swipeEndX - this.swipeStartX;
      var xDiffAbs = Math.abs(xDiff);
      var yDiffAbs = Math.abs(this.swipeEndY - this.swipeStartY);
      this.currentAction = ACTION_NONE;
      this.swipeStartX = 0;
      this.swipeStartY = 0;
      this.swipeEndX = 0;
      this.swipeEndY = 0;

      if (!event || this.isAnimating() || xDiffAbs < yDiffAbs * 1.5) {
        return;
      }

      if (xDiffAbs < MIN_SWIPE_DISTANCE) {
        var boxRect = this.getLightboxRect();

        if (xDiffAbs < boxRect.width / 4) {
          return;
        }
      }

      if (xDiff > 0 && this.props.prevSrc) {
        event.preventDefault();
        this.requestMovePrev();
      } else if (xDiff < 0 && this.props.nextSrc) {
        event.preventDefault();
        this.requestMoveNext();
      }
    }
  }, {
    key: "calculatePinchDistance",
    value: function calculatePinchDistance() {
      var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.pinchTouchList,
          _ref8 = _slicedToArray(_ref7, 2),
          a = _ref8[0],
          b = _ref8[1];

      return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
    }
  }, {
    key: "calculatePinchCenter",
    value: function calculatePinchCenter() {
      var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.pinchTouchList,
          _ref10 = _slicedToArray(_ref9, 2),
          a = _ref10[0],
          b = _ref10[1];

      return {
        x: a.x - (a.x - b.x) / 2,
        y: a.y - (a.y - b.y) / 2
      };
    }
  }, {
    key: "handlePinchStart",
    value: function handlePinchStart(pointerList) {
      if (!this.props.enableZoom) {
        return;
      }

      this.currentAction = ACTION_PINCH;
      this.pinchTouchList = pointerList.map(function (_ref11) {
        var id = _ref11.id,
            x = _ref11.x,
            y = _ref11.y;
        return {
          id: id,
          x: x,
          y: y
        };
      });
      this.pinchDistance = this.calculatePinchDistance();
    }
  }, {
    key: "handlePinch",
    value: function handlePinch(pointerList) {
      this.pinchTouchList = this.pinchTouchList.map(function (oldPointer) {
        for (var i = 0; i < pointerList.length; i += 1) {
          if (pointerList[i].id === oldPointer.id) {
            return pointerList[i];
          }
        }

        return oldPointer;
      });
      var newDistance = this.calculatePinchDistance();
      var zoomLevel = this.state.zoomLevel + newDistance - this.pinchDistance;
      this.pinchDistance = newDistance;

      var _this$calculatePinchC = this.calculatePinchCenter(this.pinchTouchList),
          clientX = _this$calculatePinchC.x,
          clientY = _this$calculatePinchC.y;

      this.changeZoom(zoomLevel, clientX, clientY);
    }
  }, {
    key: "handlePinchEnd",
    value: function handlePinchEnd() {
      this.currentAction = ACTION_NONE;
      this.pinchTouchList = null;
      this.pinchDistance = 0;
    } // Handle the window resize event

  }, {
    key: "handleWindowResize",
    value: function handleWindowResize() {
      this.clearTimeout(this.resizeTimeout);
      this.resizeTimeout = this.setTimeout(this.forceUpdate.bind(this), 100);
    }
  }, {
    key: "handleZoomInButtonClick",
    value: function handleZoomInButtonClick() {
      var nextZoomLevel = this.state.zoomLevel + ZOOM_BUTTON_INCREMENT_SIZE;
      this.changeZoom(nextZoomLevel);

      if (nextZoomLevel === MAX_ZOOM_LEVEL) {
        this.zoomOutBtn.current.focus();
      }
    }
  }, {
    key: "handleZoomOutButtonClick",
    value: function handleZoomOutButtonClick() {
      var nextZoomLevel = this.state.zoomLevel - ZOOM_BUTTON_INCREMENT_SIZE;
      this.changeZoom(nextZoomLevel);

      if (nextZoomLevel === MIN_ZOOM_LEVEL) {
        this.zoomInBtn.current.focus();
      }
    }
  }, {
    key: "handleCaptionMousewheel",
    value: function handleCaptionMousewheel(event) {
      event.stopPropagation();

      if (!this.caption.current) {
        return;
      }

      var _this$caption$current = this.caption.current.getBoundingClientRect(),
          height = _this$caption$current.height;

      var _this$caption$current2 = this.caption.current,
          scrollHeight = _this$caption$current2.scrollHeight,
          scrollTop = _this$caption$current2.scrollTop;

      if (event.deltaY > 0 && height + scrollTop >= scrollHeight || event.deltaY < 0 && scrollTop <= 0) {
        event.preventDefault();
      }
    } // Detach key and mouse input events

  }, {
    key: "isAnimating",
    value: function isAnimating() {
      return this.state.shouldAnimate || this.state.isClosing;
    } // Check if image is loaded

  }, {
    key: "isImageLoaded",
    value: function isImageLoaded(imageSrc) {
      return imageSrc && imageSrc in this.imageCache && this.imageCache[imageSrc].loaded;
    } // Load image from src and call callback with image width and height on load

  }, {
    key: "loadImage",
    value: function loadImage(srcType, imageSrc, done) {
      var _this13 = this;

      // Return the image info if it is already cached
      if (this.isImageLoaded(imageSrc)) {
        this.setTimeout(function () {
          done();
        }, 1);
        return;
      }

      var inMemoryImage = new global.Image();

      if (this.props.imageCrossOrigin) {
        inMemoryImage.crossOrigin = this.props.imageCrossOrigin;
      }

      inMemoryImage.onerror = function (errorEvent) {
        _this13.props.onImageLoadError(imageSrc, srcType, errorEvent); // failed to load so set the state loadErrorStatus


        _this13.setState(function (prevState) {
          return {
            loadErrorStatus: _objectSpread2(_objectSpread2({}, prevState.loadErrorStatus), {}, _defineProperty({}, srcType, true))
          };
        });

        done(errorEvent);
      };

      inMemoryImage.onload = function () {
        _this13.props.onImageLoad(imageSrc, srcType, inMemoryImage);

        _this13.imageCache[imageSrc] = {
          loaded: true,
          width: inMemoryImage.width,
          height: inMemoryImage.height
        };
        done();
      };

      inMemoryImage.src = imageSrc;
    } // Load all images and their thumbnails

  }, {
    key: "loadAllImages",
    value: function loadAllImages() {
      var _this14 = this;

      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      var generateLoadDoneCallback = function generateLoadDoneCallback(srcType, imageSrc) {
        return function (err) {
          // Give up showing image on error
          if (err) {
            return;
          } // Don't rerender if the src is not the same as when the load started
          // or if the component has unmounted


          if (_this14.props[srcType] !== imageSrc || _this14.didUnmount) {
            return;
          } // Force rerender with the new image


          _this14.forceUpdate();
        };
      }; // Load the images


      this.getSrcTypes().forEach(function (srcType) {
        var type = srcType.name; // there is no error when we try to load it initially

        if (props[type] && _this14.state.loadErrorStatus[type]) {
          _this14.setState(function (prevState) {
            return {
              loadErrorStatus: _objectSpread2(_objectSpread2({}, prevState.loadErrorStatus), {}, _defineProperty({}, type, false))
            };
          });
        } // Load unloaded images


        if (props[type] && !_this14.isImageLoaded(props[type])) {
          _this14.loadImage(type, props[type], generateLoadDoneCallback(type, props[type]));
        }
      });
    } // Request that the lightbox be closed

  }, {
    key: "requestClose",
    value: function requestClose(event) {
      var _this15 = this;

      // Call the parent close request
      var closeLightbox = function closeLightbox() {
        return _this15.props.onCloseRequest(event);
      };

      if (this.props.animationDisabled || event.type === 'keydown' && !this.props.animationOnKeyInput) {
        // No animation
        closeLightbox();
        return;
      } // With animation
      // Start closing animation


      this.setState({
        isClosing: true
      }); // Perform the actual closing at the end of the animation

      this.setTimeout(closeLightbox, this.props.animationDuration);
    }
  }, {
    key: "requestMove",
    value: function requestMove(direction, event) {
      var _this16 = this;

      // Reset the zoom level on image move
      var nextState = {
        zoomLevel: MIN_ZOOM_LEVEL,
        offsetX: 0,
        offsetY: 0
      }; // Enable animated states

      if (!this.props.animationDisabled && (!this.keyPressed || this.props.animationOnKeyInput)) {
        nextState.shouldAnimate = true;
        this.setTimeout(function () {
          return _this16.setState({
            shouldAnimate: false
          });
        }, this.props.animationDuration);
      }

      this.keyPressed = false;
      this.moveRequested = true;

      if (direction === 'prev') {
        this.keyCounter -= 1;
        this.setState(nextState);
        this.props.onMovePrevRequest(event);
      } else {
        this.keyCounter += 1;
        this.setState(nextState);
        this.props.onMoveNextRequest(event);
      }
    } // Request to transition to the next image

  }, {
    key: "requestMoveNext",
    value: function requestMoveNext(event) {
      this.requestMove('next', event);
    } // Request to transition to the previous image

  }, {
    key: "requestMovePrev",
    value: function requestMovePrev(event) {
      this.requestMove('prev', event);
    }
  }, {
    key: "render",
    value: function render() {
      var _this17 = this;

      var _this$props = this.props,
          animationDisabled = _this$props.animationDisabled,
          animationDuration = _this$props.animationDuration,
          clickOutsideToClose = _this$props.clickOutsideToClose,
          discourageDownloads = _this$props.discourageDownloads,
          enableZoom = _this$props.enableZoom,
          imageTitle = _this$props.imageTitle,
          nextSrc = _this$props.nextSrc,
          prevSrc = _this$props.prevSrc,
          toolbarButtons = _this$props.toolbarButtons,
          reactModalStyle = _this$props.reactModalStyle,
          _onAfterOpen = _this$props.onAfterOpen,
          imageCrossOrigin = _this$props.imageCrossOrigin,
          reactModalProps = _this$props.reactModalProps,
          loader = _this$props.loader;
      var _this$state = this.state,
          zoomLevel = _this$state.zoomLevel,
          offsetX = _this$state.offsetX,
          offsetY = _this$state.offsetY,
          isClosing = _this$state.isClosing,
          loadErrorStatus = _this$state.loadErrorStatus;
      var boxSize = this.getLightboxRect();
      var transitionStyle = {}; // Transition settings for sliding animations

      if (!animationDisabled && this.isAnimating()) {
        transitionStyle = _objectSpread2(_objectSpread2({}, transitionStyle), {}, {
          transition: "transform ".concat(animationDuration, "ms")
        });
      } // Key endings to differentiate between images with the same src


      var keyEndings = {};
      this.getSrcTypes().forEach(function (_ref12) {
        var name = _ref12.name,
            keyEnding = _ref12.keyEnding;
        keyEndings[name] = keyEnding;
      }); // Images to be displayed

      var images = [];

      var addImage = function addImage(srcType, imageClass, transforms) {
        // Ignore types that have no source defined for their full size image
        if (!_this17.props[srcType]) {
          return;
        }

        var bestImageInfo = _this17.getBestImageForType(srcType);

        var imageStyle = _objectSpread2(_objectSpread2({}, transitionStyle), ReactImageLightbox.getTransform(_objectSpread2(_objectSpread2({}, transforms), bestImageInfo)));

        if (zoomLevel > MIN_ZOOM_LEVEL) {
          imageStyle.cursor = 'move';
        } // support IE 9 and 11


        var hasTrueValue = function hasTrueValue(object) {
          return Object.keys(object).some(function (key) {
            return object[key];
          });
        }; // when error on one of the loads then push custom error stuff


        if (bestImageInfo === null && hasTrueValue(loadErrorStatus)) {
          images.push( /*#__PURE__*/React__default.createElement("div", {
            className: "".concat(imageClass, " ril__image ril-errored"),
            style: imageStyle,
            key: _this17.props[srcType] + keyEndings[srcType]
          }, /*#__PURE__*/React__default.createElement("div", {
            className: "ril__errorContainer"
          }, _this17.props.imageLoadErrorMessage)));
          return;
        }

        if (bestImageInfo === null) {
          var loadingIcon = loader !== undefined ? loader : /*#__PURE__*/React__default.createElement("div", {
            className: "ril-loading-circle ril__loadingCircle ril__loadingContainer__icon"
          }, _toConsumableArray(new Array(12)).map(function (_, index) {
            return /*#__PURE__*/React__default.createElement("div", {
              // eslint-disable-next-line react/no-array-index-key
              key: index,
              className: "ril-loading-circle-point ril__loadingCirclePoint"
            });
          })); // Fall back to loading icon if the thumbnail has not been loaded

          images.push( /*#__PURE__*/React__default.createElement("div", {
            className: "".concat(imageClass, " ril__image ril-not-loaded"),
            style: imageStyle,
            key: _this17.props[srcType] + keyEndings[srcType]
          }, /*#__PURE__*/React__default.createElement("div", {
            className: "ril__loadingContainer"
          }, loadingIcon)));
          return;
        }

        var imageSrc = bestImageInfo.src;

        if (discourageDownloads) {
          imageStyle.backgroundImage = "url('".concat(imageSrc, "')");
          images.push( /*#__PURE__*/React__default.createElement("div", {
            className: "".concat(imageClass, " ril__image ril__imageDiscourager"),
            onDoubleClick: _this17.handleImageDoubleClick,
            onWheel: _this17.handleImageMouseWheel,
            style: imageStyle,
            key: imageSrc + keyEndings[srcType]
          }, /*#__PURE__*/React__default.createElement("div", {
            className: "ril-download-blocker ril__downloadBlocker"
          })));
        } else {
          images.push( /*#__PURE__*/React__default.createElement("img", _extends({}, imageCrossOrigin ? {
            crossOrigin: imageCrossOrigin
          } : {}, {
            className: "".concat(imageClass, " ril__image"),
            onDoubleClick: _this17.handleImageDoubleClick,
            onWheel: _this17.handleImageMouseWheel,
            onDragStart: function onDragStart(e) {
              return e.preventDefault();
            },
            style: imageStyle,
            src: imageSrc,
            key: imageSrc + keyEndings[srcType],
            alt: typeof imageTitle === 'string' ? imageTitle : translate('Image'),
            draggable: false
          })));
        }
      };

      var zoomMultiplier = this.getZoomMultiplier(); // Next Image (displayed on the right)

      addImage('nextSrc', 'ril-image-next ril__imageNext', {
        x: boxSize.width
      }); // Main Image

      addImage('mainSrc', 'ril-image-current', {
        x: -1 * offsetX,
        y: -1 * offsetY,
        zoom: zoomMultiplier
      }); // Previous Image (displayed on the left)

      addImage('prevSrc', 'ril-image-prev ril__imagePrev', {
        x: -1 * boxSize.width
      });
      var modalStyle = {
        overlay: _objectSpread2({
          zIndex: 1000,
          backgroundColor: 'transparent'
        }, reactModalStyle.overlay),
        content: _objectSpread2({
          backgroundColor: 'transparent',
          overflow: 'hidden',
          // Needed, otherwise keyboard shortcuts scroll the page
          border: 'none',
          borderRadius: 0,
          padding: 0,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }, reactModalStyle.content)
      };
      return /*#__PURE__*/React__default.createElement(Modal, _extends({
        isOpen: true,
        onRequestClose: clickOutsideToClose ? this.requestClose : undefined,
        onAfterOpen: function onAfterOpen() {
          // Focus on the div with key handlers
          if (_this17.outerEl.current) {
            _this17.outerEl.current.focus();
          }

          _onAfterOpen();
        },
        style: modalStyle,
        contentLabel: translate('Lightbox'),
        appElement: typeof global.window !== 'undefined' ? global.window.document.body : undefined
      }, reactModalProps), /*#__PURE__*/React__default.createElement("div", {
        // eslint-disable-line jsx-a11y/no-static-element-interactions
        // Floating modal with closing animations
        className: "ril-outer ril__outer ril__outerAnimating ".concat(this.props.wrapperClassName, " ").concat(isClosing ? 'ril-closing ril__outerClosing' : ''),
        style: {
          transition: "opacity ".concat(animationDuration, "ms"),
          animationDuration: "".concat(animationDuration, "ms"),
          animationDirection: isClosing ? 'normal' : 'reverse'
        },
        ref: this.outerEl,
        onWheel: this.handleOuterMousewheel,
        onMouseMove: this.handleMouseMove,
        onMouseDown: this.handleMouseDown,
        onTouchStart: this.handleTouchStart,
        onTouchMove: this.handleTouchMove,
        tabIndex: "-1" // Enables key handlers on div
        ,
        onKeyDown: this.handleKeyInput,
        onKeyUp: this.handleKeyInput
      }, /*#__PURE__*/React__default.createElement("div", {
        // eslint-disable-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
        // Image holder
        className: "ril-inner ril__inner",
        onClick: clickOutsideToClose ? this.closeIfClickInner : undefined
      }, images), prevSrc && /*#__PURE__*/React__default.createElement("button", {
        // Move to previous image button
        type: "button",
        className: "ril-prev-button ril__navButtons ril__navButtonPrev",
        key: "prev",
        "aria-label": this.props.prevLabel,
        title: this.props.prevLabel,
        onClick: !this.isAnimating() ? this.requestMovePrev : undefined // Ignore clicks during animation

      }), nextSrc && /*#__PURE__*/React__default.createElement("button", {
        // Move to next image button
        type: "button",
        className: "ril-next-button ril__navButtons ril__navButtonNext",
        key: "next",
        "aria-label": this.props.nextLabel,
        title: this.props.nextLabel,
        onClick: !this.isAnimating() ? this.requestMoveNext : undefined // Ignore clicks during animation

      }), /*#__PURE__*/React__default.createElement("div", {
        // Lightbox toolbar
        className: "ril-toolbar ril__toolbar"
      }, /*#__PURE__*/React__default.createElement("ul", {
        className: "ril-toolbar-left ril__toolbarSide ril__toolbarLeftSide"
      }, /*#__PURE__*/React__default.createElement("li", {
        className: "ril-toolbar__item ril__toolbarItem"
      }, /*#__PURE__*/React__default.createElement("span", {
        className: "ril-toolbar__item__child ril__toolbarItemChild"
      }, imageTitle))), /*#__PURE__*/React__default.createElement("ul", {
        className: "ril-toolbar-right ril__toolbarSide ril__toolbarRightSide"
      }, toolbarButtons && toolbarButtons.map(function (button, i) {
        return /*#__PURE__*/React__default.createElement("li", {
          key: "button_".concat(i + 1),
          className: "ril-toolbar__item ril__toolbarItem"
        }, button);
      }), enableZoom && /*#__PURE__*/React__default.createElement("li", {
        className: "ril-toolbar__item ril__toolbarItem"
      }, /*#__PURE__*/React__default.createElement("button", {
        // Lightbox zoom in button
        type: "button",
        key: "zoom-in",
        "aria-label": this.props.zoomInLabel,
        title: this.props.zoomInLabel,
        className: ['ril-zoom-in', 'ril__toolbarItemChild', 'ril__builtinButton', 'ril__zoomInButton'].concat(_toConsumableArray(zoomLevel === MAX_ZOOM_LEVEL ? ['ril__builtinButtonDisabled'] : [])).join(' '),
        ref: this.zoomInBtn,
        disabled: this.isAnimating() || zoomLevel === MAX_ZOOM_LEVEL,
        onClick: !this.isAnimating() && zoomLevel !== MAX_ZOOM_LEVEL ? this.handleZoomInButtonClick : undefined
      })), enableZoom && /*#__PURE__*/React__default.createElement("li", {
        className: "ril-toolbar__item ril__toolbarItem"
      }, /*#__PURE__*/React__default.createElement("button", {
        // Lightbox zoom out button
        type: "button",
        key: "zoom-out",
        "aria-label": this.props.zoomOutLabel,
        title: this.props.zoomOutLabel,
        className: ['ril-zoom-out', 'ril__toolbarItemChild', 'ril__builtinButton', 'ril__zoomOutButton'].concat(_toConsumableArray(zoomLevel === MIN_ZOOM_LEVEL ? ['ril__builtinButtonDisabled'] : [])).join(' '),
        ref: this.zoomOutBtn,
        disabled: this.isAnimating() || zoomLevel === MIN_ZOOM_LEVEL,
        onClick: !this.isAnimating() && zoomLevel !== MIN_ZOOM_LEVEL ? this.handleZoomOutButtonClick : undefined
      })), /*#__PURE__*/React__default.createElement("li", {
        className: "ril-toolbar__item ril__toolbarItem"
      }, /*#__PURE__*/React__default.createElement("button", {
        // Lightbox close button
        type: "button",
        key: "close",
        "aria-label": this.props.closeLabel,
        title: this.props.closeLabel,
        className: "ril-close ril-toolbar__item__child ril__toolbarItemChild ril__builtinButton ril__closeButton",
        onClick: !this.isAnimating() ? this.requestClose : undefined // Ignore clicks during animation

      })))), this.props.imageCaption &&
      /*#__PURE__*/
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      React__default.createElement("div", {
        // Image caption
        onWheel: this.handleCaptionMousewheel,
        onMouseDown: function onMouseDown(event) {
          return event.stopPropagation();
        },
        className: "ril-caption ril__caption",
        ref: this.caption
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "ril-caption-content ril__captionContent"
      }, this.props.imageCaption))));
    }
  }], [{
    key: "isTargetMatchImage",
    value: function isTargetMatchImage(target) {
      return target && /ril-image-current/.test(target.className);
    }
  }, {
    key: "parseMouseEvent",
    value: function parseMouseEvent(mouseEvent) {
      return {
        id: 'mouse',
        source: SOURCE_MOUSE,
        x: parseInt(mouseEvent.clientX, 10),
        y: parseInt(mouseEvent.clientY, 10)
      };
    }
  }, {
    key: "parseTouchPointer",
    value: function parseTouchPointer(touchPointer) {
      return {
        id: touchPointer.identifier,
        source: SOURCE_TOUCH,
        x: parseInt(touchPointer.clientX, 10),
        y: parseInt(touchPointer.clientY, 10)
      };
    }
  }, {
    key: "parsePointerEvent",
    value: function parsePointerEvent(pointerEvent) {
      return {
        id: pointerEvent.pointerId,
        source: SOURCE_POINTER,
        x: parseInt(pointerEvent.clientX, 10),
        y: parseInt(pointerEvent.clientY, 10)
      };
    } // Request to transition to the previous image

  }, {
    key: "getTransform",
    value: function getTransform(_ref13) {
      var _ref13$x = _ref13.x,
          x = _ref13$x === void 0 ? 0 : _ref13$x,
          _ref13$y = _ref13.y,
          y = _ref13$y === void 0 ? 0 : _ref13$y,
          _ref13$zoom = _ref13.zoom,
          zoom = _ref13$zoom === void 0 ? 1 : _ref13$zoom,
          width = _ref13.width,
          targetWidth = _ref13.targetWidth;
      var nextX = x;
      var windowWidth = getWindowWidth();

      if (width > windowWidth) {
        nextX += (windowWidth - width) / 2;
      }

      var scaleFactor = zoom * (targetWidth / width);
      return {
        transform: "translate3d(".concat(nextX, "px,").concat(y, "px,0) scale3d(").concat(scaleFactor, ",").concat(scaleFactor, ",1)")
      };
    }
  }]);

  return ReactImageLightbox;
}(Component);

ReactImageLightbox.propTypes = {
  //-----------------------------
  // Image sources
  //-----------------------------
  // Main display image url
  mainSrc: PropTypes.string.isRequired,
  // eslint-disable-line react/no-unused-prop-types
  // Previous display image url (displayed to the left)
  // If left undefined, movePrev actions will not be performed, and the button not displayed
  prevSrc: PropTypes.string,
  // Next display image url (displayed to the right)
  // If left undefined, moveNext actions will not be performed, and the button not displayed
  nextSrc: PropTypes.string,
  //-----------------------------
  // Image thumbnail sources
  //-----------------------------
  // Thumbnail image url corresponding to props.mainSrc
  mainSrcThumbnail: PropTypes.string,
  // eslint-disable-line react/no-unused-prop-types
  // Thumbnail image url corresponding to props.prevSrc
  prevSrcThumbnail: PropTypes.string,
  // eslint-disable-line react/no-unused-prop-types
  // Thumbnail image url corresponding to props.nextSrc
  nextSrcThumbnail: PropTypes.string,
  // eslint-disable-line react/no-unused-prop-types
  //-----------------------------
  // Event Handlers
  //-----------------------------
  // Close window event
  // Should change the parent state such that the lightbox is not rendered
  onCloseRequest: PropTypes.func.isRequired,
  // Move to previous image event
  // Should change the parent state such that props.prevSrc becomes props.mainSrc,
  //  props.mainSrc becomes props.nextSrc, etc.
  onMovePrevRequest: PropTypes.func,
  // Move to next image event
  // Should change the parent state such that props.nextSrc becomes props.mainSrc,
  //  props.mainSrc becomes props.prevSrc, etc.
  onMoveNextRequest: PropTypes.func,
  // Called when an image fails to load
  // (imageSrc: string, srcType: string, errorEvent: object): void
  onImageLoadError: PropTypes.func,
  // Called when image successfully loads
  onImageLoad: PropTypes.func,
  // Open window event
  onAfterOpen: PropTypes.func,
  //-----------------------------
  // Download discouragement settings
  //-----------------------------
  // Enable download discouragement (prevents [right-click -> Save Image As...])
  discourageDownloads: PropTypes.bool,
  //-----------------------------
  // Animation settings
  //-----------------------------
  // Disable all animation
  animationDisabled: PropTypes.bool,
  // Disable animation on actions performed with keyboard shortcuts
  animationOnKeyInput: PropTypes.bool,
  // Animation duration (ms)
  animationDuration: PropTypes.number,
  //-----------------------------
  // Keyboard shortcut settings
  //-----------------------------
  // Required interval of time (ms) between key actions
  // (prevents excessively fast navigation of images)
  keyRepeatLimit: PropTypes.number,
  // Amount of time (ms) restored after each keyup
  // (makes rapid key presses slightly faster than holding down the key to navigate images)
  keyRepeatKeyupBonus: PropTypes.number,
  //-----------------------------
  // Image info
  //-----------------------------
  // Image title
  imageTitle: PropTypes.node,
  // Image caption
  imageCaption: PropTypes.node,
  // Optional crossOrigin attribute
  imageCrossOrigin: PropTypes.string,
  //-----------------------------
  // Lightbox style
  //-----------------------------
  // Set z-index style, etc., for the parent react-modal (format: https://github.com/reactjs/react-modal#styles )
  reactModalStyle: PropTypes.shape({}),
  // Padding (px) between the edge of the window and the lightbox
  imagePadding: PropTypes.number,
  wrapperClassName: PropTypes.string,
  //-----------------------------
  // Other
  //-----------------------------
  // Array of custom toolbar buttons
  toolbarButtons: PropTypes.arrayOf(PropTypes.node),
  // When true, clicks outside of the image close the lightbox
  clickOutsideToClose: PropTypes.bool,
  // Set to false to disable zoom functionality and hide zoom buttons
  enableZoom: PropTypes.bool,
  // Override props set on react-modal (https://github.com/reactjs/react-modal)
  reactModalProps: PropTypes.shape({}),
  // Aria-labels
  nextLabel: PropTypes.string,
  prevLabel: PropTypes.string,
  zoomInLabel: PropTypes.string,
  zoomOutLabel: PropTypes.string,
  closeLabel: PropTypes.string,
  imageLoadErrorMessage: PropTypes.node,
  // custom loader
  loader: PropTypes.node
};
ReactImageLightbox.defaultProps = {
  imageTitle: null,
  imageCaption: null,
  toolbarButtons: null,
  reactModalProps: {},
  animationDisabled: false,
  animationDuration: 300,
  animationOnKeyInput: false,
  clickOutsideToClose: true,
  closeLabel: 'Close lightbox',
  discourageDownloads: false,
  enableZoom: true,
  imagePadding: 10,
  imageCrossOrigin: null,
  keyRepeatKeyupBonus: 40,
  keyRepeatLimit: 180,
  mainSrcThumbnail: null,
  nextLabel: 'Next image',
  nextSrc: null,
  nextSrcThumbnail: null,
  onAfterOpen: function onAfterOpen() {},
  onImageLoadError: function onImageLoadError() {},
  onImageLoad: function onImageLoad() {},
  onMoveNextRequest: function onMoveNextRequest() {},
  onMovePrevRequest: function onMovePrevRequest() {},
  prevLabel: 'Previous image',
  prevSrc: null,
  prevSrcThumbnail: null,
  reactModalStyle: {},
  wrapperClassName: '',
  zoomInLabel: 'Zoom in',
  zoomOutLabel: 'Zoom out',
  imageLoadErrorMessage: 'This image failed to load',
  loader: undefined
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
        return React__default.createElement(ReactImageLightbox, { mainSrc: props.images[props.photoIndex], nextSrc: props.images[(props.photoIndex + 1) % props.images.length], prevSrc: props.images[(props.photoIndex + props.images.length - 1) % props.images.length], onCloseRequest: onClose, onMovePrevRequest: prevSrc, onMoveNextRequest: nextSrc });
    }
    return React__default.createElement(React__default.Fragment, null);
};

/******************************************************************************
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

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var Image$2 = function (props) {
    var _a, _b;
    var file = props.file, className = props.className;
    var properties = file.properties, cropVariants = file.cropVariants, publicUrl = file.publicUrl;
    var link = properties.link, linkData = properties.linkData;
    var crops = Object.keys(properties.crop);
    var sources = crops.map(function (cropIdentifier, index) {
        var src;
        var media;
        switch (cropIdentifier) {
            case 'extrasmall':
                media = '(max-width: 575px)';
                src = cropVariants ? cropVariants.extrasmall.publicUrl : publicUrl;
                break;
            case 'small':
                media = '(min-width: 576px)';
                src = cropVariants ? cropVariants.small.publicUrl : publicUrl;
                break;
            case 'medium':
                media = '(min-width: 768px)';
                src = cropVariants ? cropVariants.medium.publicUrl : publicUrl;
                break;
            case 'large':
                media = '(min-width: 992px)';
                src = cropVariants ? cropVariants.large.publicUrl : publicUrl;
                break;
            default:
                media = '(min-width: 1200px)';
                src = cropVariants ? cropVariants.default.publicUrl : publicUrl;
                break;
        }
        return React__default.createElement("source", { key: index, srcSet: src, media: media });
    });
    var cssClasses = 'img-fluid';
    if (className) {
        cssClasses += ' ' + className;
    }
    var imageContent = React__default.createElement("picture", null,
        sources,
        React__default.createElement(FigureImage$1, { loading: "lazy", className: cssClasses, src: publicUrl, title: (_a = properties.title) === null || _a === void 0 ? void 0 : _a.replace(/&quot;/gi, '"'), alt: properties.alternative }));
    if ((link !== null && link.length > 0) || (linkData !== undefined && linkData !== null)) {
        var linkProperties = {
            className: '',
            href: link,
            target: null,
            title: null
        };
        if (linkData !== undefined && linkData !== null) {
            linkProperties = __assign(__assign(__assign({}, linkProperties), { className: linkData['class'], href: linkData.href, target: linkData.target, title: (_b = linkData.title) === null || _b === void 0 ? void 0 : _b.replace(/&quot;/gi, '"') }), linkData.additionalAttributes);
        }
        imageContent = React__default.createElement("a", __assign({}, linkProperties), imageContent);
    }
    return imageContent;
};

var Image$1 = function (props) {
    var file = props.file, className = props.className;
    var caption = file.properties.description ?
        React__default.createElement(Figure$1.Caption, { className: "caption" }, file.properties.description) : React__default.createElement(React__default.Fragment, null);
    return React__default.createElement(Figure$1, { className: 'image' },
        React__default.createElement(Image$2, { file: file, className: className }),
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
    return React__default.createElement(React__default.Fragment, null,
        React__default.createElement(ImageLightbox, { images: images, setShowLightbox: setShowlightbox, showLightbox: showLightbox, photoIndex: photoIndex, setPhotoIndex: setPhotoIndex }),
        Object.keys(props.data.gallery.rows).map(function (rowKey) {
            return Object.keys(props.data.gallery.rows[rowKey].columns).map(function (columnKey) {
                var file = props.data.gallery.rows[rowKey].columns[columnKey];
                var image = React__default.createElement(Image$1, { file: file });
                var colContent = image;
                if (props.data.enlargeImageOnClick) {
                    colContent = React__default.createElement("a", { onClick: function (e) {
                            e.preventDefault();
                            setPhotoIndex(images.indexOf(file.publicUrl));
                            setShowlightbox(true);
                            return true;
                        }, href: file.publicUrl }, image);
                }
                return React__default.createElement(Col$1, { className: "gallery-item  gallery-item-size-" + props.data.gallery.count.columns, key: rowKey + '-' + columnKey }, colContent);
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
    return React__default.createElement(Row$1, { className: "textpic textpic-" + textpicClassName },
        React__default.createElement(Col$1, { className: "textpic-item textpic-gallery", md: textpicClassName === props.data.content.gallery.position.vertical ? "auto" : "6" },
            React__default.createElement(Row$1, null,
                React__default.createElement(ImageCols, { data: props.data.content }))),
        React__default.createElement(Col$1, { className: "textpic-item textpic-text", md: "6" },
            React__default.createElement(AllHeader, { data: props.data }),
            React__default.createElement("div", { dangerouslySetInnerHTML: { __html: props.data.content.bodytext } }),
            props.children));
};

var Image = function (props) {
    return React__default.createElement(React__default.Fragment, null,
        React__default.createElement("div", { className: "image" },
            React__default.createElement(AllHeader, { data: props.data }),
            React__default.createElement("div", { className: "gallery-row" },
                React__default.createElement(Row$1, null,
                    React__default.createElement(ImageCols, { data: props.data.content })))),
        props.children);
};

var Div = function (props) {
    return React__default.createElement(React__default.Fragment, null,
        React__default.createElement(AllHeader, { data: props.data }),
        React__default.createElement("div", { className: "div" },
            React__default.createElement("hr", null)),
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
    return React__default.createElement(Row$1, { className: "textmedia textmedia-" + textmediaClassName },
        React__default.createElement(Col$1, { className: "textmedia-item textmedia-gallery", md: textmediaClassName === props.data.content.gallery.position.vertical ? "auto" : "6" },
            React__default.createElement(Row$1, null, Object.keys(props.data.content.gallery.rows).map(function (rowKey) {
                return Object.keys(props.data.content.gallery.rows[rowKey].columns).map(function (columnKey) {
                    switch (props.data.content.gallery.rows[rowKey].columns[columnKey].properties.mimeType) {
                        case 'video/youtube':
                            return React__default.createElement(Col$1, { className: "gallery-item  gallery-item-size-" + props.data.content.gallery.count.columns },
                                React__default.createElement("iframe", { src: props.data.content.gallery.rows[rowKey].columns[columnKey].publicUrl, className: "embed-responsive-item w-100" }),
                                props.data.content.gallery.rows[rowKey].columns[columnKey].properties.description);
                        case 'image/jpeg':
                            return React__default.createElement(Col$1, { className: "gallery-item  gallery-item-size-" + props.data.content.gallery.count.columns },
                                React__default.createElement("img", { src: props.data.content.gallery.rows[rowKey].columns[columnKey].publicUrl, className: "embed-responsive-item", alt: props.data.content.gallery.rows[rowKey].columns[columnKey].properties.title }),
                                props.data.content.gallery.rows[rowKey].columns[columnKey].properties.description);
                        case 'image/svg+xml':
                            return React__default.createElement(Col$1, { className: "gallery-item  gallery-item-size-" + props.data.content.gallery.count.columns },
                                React__default.createElement("img", { src: props.data.content.gallery.rows[rowKey].columns[columnKey].publicUrl, className: "embed-responsive-item", alt: props.data.content.gallery.rows[rowKey].columns[columnKey].properties.title }),
                                props.data.content.gallery.rows[rowKey].columns[columnKey].properties.description);
                        case 'video/mp4':
                            return React__default.createElement(Col$1, { className: "gallery-item  gallery-item-size-" + props.data.content.gallery.count.columns },
                                React__default.createElement("video", { controls: true },
                                    React__default.createElement("source", { type: "video/mp4", src: props.data.content.gallery.rows[rowKey].columns[columnKey].publicUrl })),
                                props.data.content.gallery.rows[rowKey].columns[columnKey].properties.description);
                        case 'video/vimeo':
                            return React__default.createElement(Col$1, { className: "gallery-item  gallery-item-size-" + props.data.content.gallery.count.columns },
                                React__default.createElement("video", { controls: true },
                                    React__default.createElement("source", { type: "video/mp4", src: props.data.content.gallery.rows[rowKey].columns[columnKey].publicUrl })),
                                props.data.content.gallery.rows[rowKey].columns[columnKey].properties.description);
                        default:
                            return React__default.createElement(React__default.Fragment, null);
                    }
                });
            }))),
        React__default.createElement(Col$1, { className: "textmedia-item textmedia-text" },
            React__default.createElement(AllHeader, { data: props.data }),
            React__default.createElement("div", { dangerouslySetInnerHTML: { __html: props.data.content.bodytext } }),
            props.children));
};

var Shortcut = function (props) {
    return React__default.createElement(React__default.Fragment, null,
        React__default.createElement(AllHeader, { data: props.data }),
        React__default.createElement("div", { className: "shortcut" }, props.data.content.shortcut.map(function (cObject) {
            return RenderContent(cObject, props.pageProps);
        })),
        props.children);
};

var Html = function (props) {
    return React__default.createElement(React__default.Fragment, null,
        React__default.createElement(AllHeader, { data: props.data }),
        React__default.createElement("div", { dangerouslySetInnerHTML: { __html: props.data.content.bodytext } }),
        props.children);
};

var Uploads = function (props) {
    return React__default.createElement(React__default.Fragment, null,
        React__default.createElement(AllHeader, { data: props.data }),
        React__default.createElement("div", { className: "uploads" },
            React__default.createElement("ul", { className: "media-list filelink-list" }, Object.keys(props.data.content.media).map(function (key) {
                var description = props.data.content.displayDescription === '1' ?
                    React__default.createElement("p", { className: 'filelink-filedescription' }, props.data.content.media[key].properties.description) : null;
                var filesize = props.data.content.displayFileSizeInformation === '1' ?
                    React__default.createElement("span", { className: 'filelink-filesize ms-2 small' }, props.data.content.media[key].properties.size) : null;
                var title = props.data.content.media[key].properties.title;
                if (title === null || title === '') {
                    title = props.data.content.media[key].properties.filename;
                }
                var heading = function (contentBefore) {
                    if (contentBefore === void 0) { contentBefore = null; }
                    return React__default.createElement("span", { className: 'title' },
                        React__default.createElement("h5", { className: 'filelink-heading ' },
                            React__default.createElement("a", { href: props.data.content.media[key].publicUrl },
                                contentBefore,
                                title),
                            filesize));
                };
                var content;
                switch (props.data.content.displayInformation) {
                    case "1":
                        content = React__default.createElement(React__default.Fragment, null,
                            heading(props.data.content.media[key].properties.type === 'video' ?
                                React__default.createElement("i", { className: "bi bi-camera-video-fill me-2" }) :
                                React__default.createElement("i", { className: "bi bi-file-image me-2" })),
                            description);
                        break;
                    case "2":
                        var media = null;
                        switch (props.data.content.media[key].properties.type) {
                            case 'video':
                                media = React__default.createElement("iframe", { src: props.data.content.media[key].publicUrl, className: 'mw-100' });
                                break;
                            //TODO: add preview for application/*
                            case 'application':
                                if (props.data.content.media[key].properties.mimeType === 'application/pdf') {
                                    media =
                                        React__default.createElement("iframe", { src: props.data.content.media[key].publicUrl, className: 'mw-100' });
                                }
                                break;
                            default:
                                media =
                                    React__default.createElement("img", { src: props.data.content.media[key].publicUrl, alt: title, className: 'img-fluid' });
                        }
                        content = React__default.createElement(Row$1, null,
                            React__default.createElement(Col$1, { className: 'filelink-media', xs: 3, sm: 3, md: 3, lg: 2, xl: 2, xxl: 2 }, media),
                            React__default.createElement(Col$1, { className: 'filelink-body' },
                                heading(),
                                description));
                        break;
                    default:
                        content = React__default.createElement(React__default.Fragment, null,
                            heading(),
                            description);
                }
                return React__default.createElement("li", { className: 'filelink-item mb-2', key: key }, content);
            }))),
        props.children);
};

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
            return React__default.createElement(Image$1, { file: file });
        default:
            return React__default.createElement(Alert$1, { variant: "info" },
                "Filetype unknown ",
                file.properties.filename);
    }
};

var Gallery = function (props) {
    var _a = props.data.content, items = _a.items, imagecols = _a.imagecols;
    var galleryItems = items.map(function (image, index) {
        return React__default.createElement(Col$1, { key: "".concat(index), className: "gallery-item gallery-item-size-".concat(imagecols), md: imagecols },
            React__default.createElement(Type, { data: props.data, file: image }));
    });
    return React__default.createElement(React__default.Fragment, null,
        React__default.createElement(AllHeader, { data: props.data }),
        React__default.createElement("div", { className: 'gallery-row' }, galleryItems),
        props.children);
};

var Accordion = function (props) {
    var _a;
    var accordionItems = props.data.content.items;
    var activeElement = (_a = props.data.flexform.default_element) !== null && _a !== void 0 ? _a : '';
    if (!accordionItems || accordionItems.length < 0) {
        return React__default.createElement(React__default.Fragment, null);
    }
    var accorditionItemsTemplate = accordionItems.map(function (accordionItem, index) {
        var galleryTemplate = React__default.createElement(React__default.Fragment, null);
        if (accordionItem.media.length > 0) {
            galleryTemplate = React__default.createElement(Gallery, { children: props.children, data: { content: __assign({ items: accordionItem.media }, accordionItem) } });
        }
        return React__default.createElement(ReactAccordion.Item, { key: accordionItem.id, eventKey: accordionItem.id.toString() },
            React__default.createElement(ReactAccordion.Header, { as: "h4", id: "accordion-heading-".concat(accordionItem.id) },
                React__default.createElement("span", { className: "accordion-title-link-text" }, accordionItem.header)),
            React__default.createElement(ReactAccordion.Body, null,
                React__default.createElement("div", { className: "accordion-content accordion-content-".concat(accordionItem.mediaorient) },
                    galleryTemplate,
                    React__default.createElement("div", { className: 'accordion-content-item accordion-content-text', dangerouslySetInnerHTML: { __html: accordionItem.bodytext } }))));
    });
    return React__default.createElement(React__default.Fragment, null,
        React__default.createElement(AllHeader, { data: props.data }),
        React__default.createElement(ReactAccordion, { defaultActiveKey: activeElement }, accorditionItemsTemplate),
        props.children);
};

var Link = function (props) {
    var href = props.href, target = props.target, className = props.className, title = props.title, linkText = props.linkText;
    return React__default.createElement("a", { href: href, target: target, className: "btn ".concat(className), title: title }, linkText);
};

var CardGroup = function (props) {
    var items = props.data.content.items;
    var flexform = props.data.flexform;
    var cards = items.map(function (cardData, index_number) {
        var header = cardData.header, subheader = cardData.subheader, bodytext = cardData.bodytext, image = cardData.image, link = cardData.link, linkTitle = cardData.linkTitle, linkClass = cardData.linkClass;
        var imageTemplate = image ? image.map(function (imageData, index) { return React__default.createElement(Card$1.Img, { key: "image-data-".concat(index), variant: "top", src: imageData.publicUrl }); }) : React__default.createElement(React__default.Fragment, null);
        var linkButton = React__default.createElement(React__default.Fragment, null);
        if (link) {
            if (linkTitle && linkTitle.length > 0) {
                link.title = linkTitle;
            }
            if (linkClass && linkClass.length > 0) {
                link["class"] = "".concat(link["class"], " btn-").concat(linkClass);
            }
            linkButton = React__default.createElement(Link, { href: link.href, title: link.title, className: link['class'], target: link.target, linkText: link.linkText });
        }
        return React__default.createElement(Col$1, { key: "card-group-col-".concat(index_number) },
            React__default.createElement(Card$1, null,
                header.length > 0 && React__default.createElement(Card$1.Header, null, header),
                imageTemplate,
                React__default.createElement(Card$1.Body, null,
                    subheader.length > 0 && React__default.createElement(Card$1.Title, null, subheader),
                    bodytext.length > 0 && React__default.createElement(Card$1.Text, { as: "div" },
                        React__default.createElement("div", { dangerouslySetInnerHTML: { __html: bodytext } })),
                    linkButton)));
    });
    var alignment = 'justify-content-left';
    if (flexform.align.length > 0) {
        alignment = "justify-content-".concat(flexform.align);
    }
    return React__default.createElement(React__default.Fragment, null,
        React__default.createElement(AllHeader, { data: props.data }),
        React__default.createElement(Row$1, { xs: 1, md: flexform.columns, className: "card-group ".concat(alignment) }, cards),
        props.children);
};

var TextColumns = function (props) {
    var bodytext = props.data.content.bodytext;
    return React__default.createElement(React__default.Fragment, null,
        React__default.createElement(AllHeader, { data: props.data }),
        React__default.createElement("div", { className: "text-column" },
            React__default.createElement("div", { dangerouslySetInnerHTML: { __html: bodytext } })),
        props.children);
};

var Quote = function (props) {
    var _a = props.data.content, bodytext = _a.bodytext, quoteSource = _a.quoteSource, quoteLink = _a.quoteLink;
    var sourceLink = function () {
        if (typeof quoteLink === 'object' && quoteLink !== null) {
            var href = quoteLink.href, target = quoteLink.target, title = quoteLink.title, linkText = quoteLink.linkText;
            var className = quoteLink['class'];
            return React__default.createElement("span", null,
                "(",
                React__default.createElement("a", { href: href, target: target, title: title, className: className }, linkText),
                ")");
        }
        return React__default.createElement(React__default.Fragment, null);
    };
    var bodyTemplate = function () {
        return (bodytext.length > 0) ?
            React__default.createElement("blockquote", { className: 'blockquote', dangerouslySetInnerHTML: { __html: bodytext } }) : React__default.createElement(React__default.Fragment, null);
    };
    var figcaptionTemplate = function () {
        if (quoteSource.length > 0) {
            return React__default.createElement("figcaption", { className: "blockquote-footer" },
                React__default.createElement("cite", { title: quoteSource },
                    quoteSource,
                    sourceLink()));
        }
        return React__default.createElement(React__default.Fragment, null);
    };
    return React__default.createElement(React__default.Fragment, null,
        React__default.createElement(AllHeader, { data: props.data }),
        React__default.createElement("figure", null,
            bodyTemplate(),
            figcaptionTemplate()),
        props.children);
};

var Header = function (props) {
    return React__default.createElement(React__default.Fragment, null,
        React__default.createElement(AllHeader, { data: props.data }),
        React__default.createElement("div", { className: "header" }),
        props.children);
};

var carouselItem = function (itemHeadless, isFirst) {
    if (isFirst === void 0) { isFirst = false; }
    var itemType = itemHeadless.itemType, layout = itemHeadless.layout, image = itemHeadless.image;
    var item = React__default.createElement(React__default.Fragment, null);
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
            item = React__default.createElement("div", { className: "carousel-image" },
                React__default.createElement(Image$1, { file: image[0], className: '' }));
            break;
        default:
            item = React__default.createElement("div", { className: 'carousel-text-inner' },
                React__default.createElement(Alert$1, { variant: "danger" },
                    React__default.createElement(Alert$1.Heading, null, "Templatetype unknown"),
                    React__default.createElement("p", null,
                        itemType,
                        " has no Template")));
    }
    return React__default.createElement(Carousel$2.Item, { key: image[0].publicUrl, className: itemClass },
        React__default.createElement("div", { className: 'carousel-content' },
            React__default.createElement("div", { className: 'carousel-content-inner' }, item)));
};
var Carousel = function (props) {
    var _a = props.data, content = _a.content; _a.type; var flexform = _a.flexform;
    content.header; content.subheader; var items = content.items;
    var _b = useState(0); _b[0]; _b[1];
    var itemsTemplate = items.map(function (itemHeadless, index) {
        return carouselItem(itemHeadless, index === 0);
    });
    return React__default.createElement(React__default.Fragment, null,
        React__default.createElement(AllHeader, { data: props.data }),
        React__default.createElement(Carousel$2, { fade: flexform.transition === 'fade', interval: flexform.interval, wrap: flexform.wrap }, itemsTemplate));
};

var MenuCardDir$1 = function (props) {
    var _a = props.data, flexform = _a.flexform, content = _a.content;
    var items = content.items, readmoreLabel = content.readmoreLabel;
    var itemsTemplate = items.map(function (item) {
        var _a;
        var title = item.title, description = item.description, link = item.link, target = item.target, thumbnail = item.thumbnail;
        return React__default.createElement("div", { key: link, className: "card-menu-item ".concat((thumbnail && ((_a = thumbnail[0]) === null || _a === void 0 ? void 0 : _a.publicUrl) ? 'hasImage' : 'noImage')) },
            React__default.createElement(Card$1, null,
                thumbnail && thumbnail.length > 0 &&
                    React__default.createElement(Card$1.Link, { href: link, target: target, title: title, "data-toggle": "tooltip" },
                        React__default.createElement(Card$1.Img, { variant: "top", src: thumbnail[0].publicUrl })),
                React__default.createElement(Card$1.Body, null,
                    title && title.length > 0 &&
                        React__default.createElement(Card$1.Title, { as: 'h3' },
                            React__default.createElement(Card$1.Link, { href: link, target: target, title: title, "data-toggle": "tooltip" }, title)),
                    description &&
                        React__default.createElement(Card$1.Text, { as: "p" }, description),
                    props.children),
                (readmoreLabel && readmoreLabel.length > 0) && React__default.createElement(Card$1.Footer, null,
                    React__default.createElement(Card$1.Link, { href: link, target: target, title: title, "data-toggle": "tooltip" }, readmoreLabel))));
    });
    return React__default.createElement(React__default.Fragment, null,
        React__default.createElement(AllHeader, { data: props.data }),
        React__default.createElement("div", { className: "card-menu card-menu card-menu-align-".concat(flexform.align, " card-menu-columns-").concat(flexform.columns) }, itemsTemplate));
};

var MenuCardList = function (props) {
    return React__default.createElement(MenuCardDir$1, __assign({}, props));
};

var MenuCardDir = function (props) {
    return React__default.createElement(MenuCardDir$1, __assign({}, props));
};

var MenuThumbnailBase = function (props) {
    var _a = props.data, flexform = _a.flexform, content = _a.content;
    var items = content.items;
    var itemsTemplate = items.map(function (item, index) {
        var title = item.title, link = item.link, target = item.target, thumbnail = item.thumbnail, subtitle = item.subtitle;
        return React__default.createElement("div", { key: link, className: "thumbnail-menu-item" },
            React__default.createElement("a", { href: link, target: target, title: title, "data-toggle": "tooltip", className: 'thumbnail-menu-link' },
                React__default.createElement("span", { className: 'thumbnail-menu-image' }, thumbnail && thumbnail.length > 0 ?
                    React__default.createElement(Image$1, { file: thumbnail[0] })
                    :
                        React__default.createElement("span", { className: 'no-image' })),
                React__default.createElement("span", { className: 'thumbnail-menu-caption' },
                    React__default.createElement("span", { className: 'thumbnail-menu-caption-inner' },
                        title && title.length > 0 &&
                            React__default.createElement("span", { className: 'h3 thumbnail-menu-caption-title' }, title),
                        subtitle && subtitle.length > 0 &&
                            React__default.createElement("p", { className: 'thumbnail-menu-caption-subtitle' }, subtitle)))),
            props.children);
    });
    return React__default.createElement(React__default.Fragment, null,
        React__default.createElement(AllHeader, { data: props.data }),
        React__default.createElement("div", { className: "thumbnail-menu thumbnail-menu-align-".concat(flexform.align, " thumbnail-menu-columns-").concat(flexform.columns) }, itemsTemplate));
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
	Carousel: Carousel,
	MenuCardList: MenuCardList,
	MenuCardDir: MenuCardDir,
	MenuThumbnailBase: MenuThumbnailBase,
	MediaType: Type
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
    return React__default.createElement("div", { className: "frame-backgroundimage-container" },
        React__default.createElement("div", { id: backgroundImageIdentifier, className: backgroundImageClasses, style: { backgroundImage: 'url("' + backgroundImageObject.publicUrl + '")' } }));
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
        content = React__default.createElement("div", { id: "c" + props.data.id, className: "frame frame-size-default " +
                frameClass + " " +
                typeClass + " " +
                layoutClass + " " +
                backgroundClass + " " +
                backgroundImageClass + " " +
                spaceBeforeClass + " " +
                spaceAfterClass },
            React__default.createElement(BackgroundImage, { data: props.data }),
            React__default.createElement("div", { className: "frame-container" },
                React__default.createElement("div", { className: "frame-inner" },
                    props.data._localizedUid ? React__default.createElement("a", { id: "c" + props.data._localizedUid }) : null,
                    props.children)));
    }
    else {
        content = React__default.createElement(React__default.Fragment, null,
            React__default.createElement("a", { id: "c" + props.data.id }),
            props.data._localizedUid ? React__default.createElement("a", { id: "c" + props.data._localizedUid }) : null,
            props.data.appearance.spaceBefore ? React__default.createElement("div", { className: spaceBeforeClass }) : null,
            props.children,
            props.data.appearance.spaceAfter ? React__default.createElement("div", { className: spaceAfterClass }) : null);
    }
    return content;
};

var FooterContent = function (_a) {
    var pageProps = _a.pageProps;
    return React__default.createElement("footer", { className: "section footer-section footer-section-content" },
        React__default.createElement(Container$1, null,
            React__default.createElement(Row$1, null,
                React__default.createElement(Col$1, { className: "footer-section-content-column footer-section-content-column-left" },
                    React__default.createElement(Content, { colPos: '10', pageProps: pageProps })),
                React__default.createElement(Col$1, { className: " footer-section-content-column footer-section-content-column-middle" },
                    React__default.createElement(Content, { colPos: '11', pageProps: pageProps })),
                React__default.createElement(Col$1, { className: " footer-section-content-column footer-section-content-column-right" },
                    React__default.createElement(Content, { colPos: '12', pageProps: pageProps })))));
};

var getGridElement = function (element, pageProps, index) {
    var _a, _b;
    var headlessData = pageProps.headlessData; pageProps.contentElementLayouts; pageProps.contentElementTemplates;
    headlessData.content;
    switch (element.type) {
        case 'row':
            var children = element.children.map(function (child, index) {
                return getGridElement(child, pageProps, index);
            });
            return React__default.createElement(Row$1, { as: (_a = element.tag) !== null && _a !== void 0 ? _a : 'div', key: index }, children);
        case 'col':
            return React__default.createElement(Col$1, { as: (_b = element.tag) !== null && _b !== void 0 ? _b : 'div', lg: element.colspan, md: element.colspan, sm: element.colspan, xl: element.colspan, key: index },
                React__default.createElement(Content, { colPos: element.colPos, pageProps: pageProps }));
        default:
            return React__default.createElement(React__default.Fragment, null);
    }
};
var GenericPage = function (_a) {
    var pageProps = _a.pageProps;
    var content = React__default.createElement(React__default.Fragment, null);
    if (pageProps.headlessData.appearance.pageContentRows) {
        content = pageProps.headlessData.appearance.pageContentRows.map(function (gridElement, index) {
            return getGridElement(gridElement, pageProps, index);
        });
    }
    return content;
};

var pageLayouts = {
    //TODO: implement example
    'layout-0': function (pageProps, pageTemplate) { return React__default.createElement("div", { className: 'backendlayout-' + pageProps.headlessData.appearance.backendLayout },
        React__default.createElement("header", null),
        React__default.createElement("section", null,
            React__default.createElement(section, { name: 'main', pageTemplate: pageTemplate, pageProps: pageProps })),
        React__default.createElement("footer", null,
            React__default.createElement(section, { name: 'footer', pageTemplate: pageTemplate, pageProps: pageProps }))); },
    __generic: function (pageProps, pageTemplate) { return React__default.createElement(React__default.Fragment, null,
        React__default.createElement(__GenericLayout, { pageProps: pageProps, pageTemplate: pageTemplate })); },
    Default: function (pageProps, pageTemplate) { return React__default.createElement(React__default.Fragment, null,
        React__default.createElement(__GenericLayout, { pageProps: pageProps, pageTemplate: pageTemplate })); }
};
var pageTemplates = {
    __generic: function (pageProps) {
        return {
            main: React__default.createElement(GenericPage, { pageProps: pageProps })
        };
    },
    default: function (pageProps) {
        return {
            border: React__default.createElement(Row$1, null,
                React__default.createElement(Col$1, null,
                    React__default.createElement(Content, { colPos: '3', pageProps: pageProps }))),
            main: React__default.createElement(React__default.Fragment, null,
                React__default.createElement(Row$1, null,
                    React__default.createElement(Col$1, null,
                        React__default.createElement(Content, { colPos: '8', pageProps: pageProps }))),
                React__default.createElement("div", { className: "section section-default" },
                    React__default.createElement(Row$1, null,
                        React__default.createElement(Col$1, null,
                            React__default.createElement(Content, { colPos: '0', pageProps: pageProps })))),
                React__default.createElement(Row$1, null,
                    React__default.createElement(Col$1, null,
                        React__default.createElement(Content, { colPos: '9', pageProps: pageProps })))),
            footer: React__default.createElement(FooterContent, { pageProps: pageProps }),
        };
    },
    simple: function (pageProps) {
        return {
            border: React__default.createElement(Row$1, null,
                React__default.createElement(Col$1, null,
                    React__default.createElement(Content, { colPos: '3', pageProps: pageProps }))),
            main: React__default.createElement(React__default.Fragment, null,
                React__default.createElement(Row$1, null,
                    React__default.createElement(Col$1, null,
                        React__default.createElement(Content, { colPos: '8', pageProps: pageProps }))),
                React__default.createElement("div", { className: "section section-default" },
                    React__default.createElement(Row$1, null,
                        React__default.createElement(Col$1, null,
                            React__default.createElement(Content, { colPos: '0', pageProps: pageProps })))),
                React__default.createElement(Row$1, null,
                    React__default.createElement(Col$1, null,
                        React__default.createElement(Content, { colPos: '9', pageProps: pageProps })))),
        };
    },
    '2_columns': function (pageProps) {
        return {
            border: React__default.createElement(Row$1, null,
                React__default.createElement(Col$1, null,
                    React__default.createElement(Content, { colPos: '3', pageProps: pageProps }))),
            main: React__default.createElement(React__default.Fragment, null,
                React__default.createElement(Row$1, null,
                    React__default.createElement(Col$1, null,
                        React__default.createElement(Content, { colPos: '8', pageProps: pageProps }))),
                React__default.createElement("div", { className: "section section-default" },
                    React__default.createElement(Container$1, null,
                        React__default.createElement(Row$1, null,
                            React__default.createElement(Col$1, { md: "8", as: "main", className: " maincontent-wrap", role: "main" },
                                React__default.createElement(Content, { colPos: '0', pageProps: pageProps })),
                            React__default.createElement(Col$1, { className: " subcontent-wrap ", md: "4" },
                                React__default.createElement(Content, { colPos: '2', pageProps: pageProps }))))),
                React__default.createElement(Row$1, null,
                    React__default.createElement(Col$1, null,
                        React__default.createElement(Content, { colPos: '9', pageProps: pageProps })))),
            footer: React__default.createElement(FooterContent, { pageProps: pageProps }),
        };
    },
    '2_columns_25_75': function (pageProps) {
        return {
            border: React__default.createElement(Row$1, null,
                React__default.createElement(Col$1, null,
                    React__default.createElement(Content, { colPos: '3', pageProps: pageProps }))),
            main: React__default.createElement(React__default.Fragment, null,
                React__default.createElement(Row$1, null,
                    React__default.createElement(Col$1, null,
                        React__default.createElement(Content, { colPos: '8', pageProps: pageProps }))),
                React__default.createElement("div", { className: "section section-default" },
                    React__default.createElement(Container$1, null,
                        React__default.createElement(Row$1, null,
                            React__default.createElement(Col$1, { md: "8", as: "main", className: " maincontent-wrap", role: "main" },
                                React__default.createElement(Content, { colPos: '0', pageProps: pageProps })),
                            React__default.createElement(Col$1, { className: " subcontent-wrap", md: "4" },
                                React__default.createElement(Content, { colPos: '1', pageProps: pageProps }))))),
                React__default.createElement(Row$1, null,
                    React__default.createElement(Col$1, null,
                        React__default.createElement(Content, { colPos: '9', pageProps: pageProps })))),
            footer: React__default.createElement(FooterContent, { pageProps: pageProps }),
        };
    },
    '2_columns_50_50': function (pageProps) {
        return {
            border: React__default.createElement(Row$1, null,
                React__default.createElement(Col$1, null,
                    React__default.createElement(Content, { colPos: '3', pageProps: pageProps }))),
            main: React__default.createElement(React__default.Fragment, null,
                React__default.createElement(Row$1, null,
                    React__default.createElement(Col$1, null,
                        React__default.createElement(Content, { colPos: '8', pageProps: pageProps }))),
                React__default.createElement("div", { className: "section section-default" },
                    React__default.createElement(Container$1, null,
                        React__default.createElement(Row$1, null,
                            React__default.createElement(Col$1, { md: "6", as: "main", className: " maincontent-wrap", role: "main" },
                                React__default.createElement(Content, { colPos: '0', pageProps: pageProps })),
                            React__default.createElement(Col$1, { className: " subcontent-wrap ", md: "6" },
                                React__default.createElement(Content, { colPos: '2', pageProps: pageProps }))))),
                React__default.createElement(Row$1, null,
                    React__default.createElement(Col$1, null,
                        React__default.createElement(Content, { colPos: '9', pageProps: pageProps })))),
            footer: React__default.createElement(FooterContent, { pageProps: pageProps }),
        };
    },
    '3_columns': function (pageProps) {
        return {
            border: React__default.createElement(Row$1, null,
                React__default.createElement(Col$1, null,
                    React__default.createElement(Content, { colPos: '3', pageProps: pageProps }))),
            main: React__default.createElement(React__default.Fragment, null,
                React__default.createElement(Row$1, null,
                    React__default.createElement(Col$1, null,
                        React__default.createElement(Content, { colPos: '8', pageProps: pageProps }))),
                React__default.createElement("div", { className: "section section-default" },
                    React__default.createElement(Container$1, null,
                        React__default.createElement(Row$1, null,
                            React__default.createElement(Col$1, { lg: "6", as: "main", className: " maincontent-wrap ", role: "main" },
                                React__default.createElement(Content, { colPos: '0', pageProps: pageProps })),
                            React__default.createElement(Col$1, { className: " subcontent-wrap ", lg: "3" },
                                React__default.createElement(Content, { colPos: '1', pageProps: pageProps })),
                            React__default.createElement(Col$1, { className: " subcontent-wrap ", lg: "3" },
                                React__default.createElement(Content, { colPos: '2', pageProps: pageProps }))))),
                React__default.createElement(Row$1, null,
                    React__default.createElement(Col$1, null,
                        React__default.createElement(Content, { colPos: '9', pageProps: pageProps })))),
            footer: React__default.createElement(FooterContent, { pageProps: pageProps }),
        };
    },
    'special_feature': function (pageProps) {
        return {
            border: React__default.createElement(Row$1, null,
                React__default.createElement(Col$1, null,
                    React__default.createElement(Content, { colPos: '3', pageProps: pageProps }))),
            main: React__default.createElement(React__default.Fragment, null,
                React__default.createElement(Row$1, null,
                    React__default.createElement(Col$1, null,
                        React__default.createElement(Content, { colPos: '8', pageProps: pageProps }))),
                React__default.createElement("div", { className: "section section-default" },
                    React__default.createElement(Row$1, null,
                        React__default.createElement(Col$1, null,
                            React__default.createElement(Content, { colPos: '0', pageProps: pageProps })))),
                React__default.createElement("div", { className: "section section-primary" },
                    React__default.createElement(Container$1, null,
                        React__default.createElement(Row$1, null,
                            React__default.createElement(Col$1, { className: "section-column-half ", md: "6" },
                                React__default.createElement(Content, { colPos: '30', pageProps: pageProps })),
                            React__default.createElement(Col$1, { className: "section-column-half ", md: "6" },
                                React__default.createElement(Content, { colPos: '31', pageProps: pageProps }))))),
                React__default.createElement("div", { className: "section section-primary" },
                    React__default.createElement(Container$1, null,
                        React__default.createElement(Row$1, null,
                            React__default.createElement(Col$1, { className: "section-column-half ", md: "6" },
                                React__default.createElement(Content, { colPos: '32', pageProps: pageProps })),
                            React__default.createElement(Col$1, { className: "section-column-half ", md: "6" },
                                React__default.createElement(Content, { colPos: '33', pageProps: pageProps }))))),
                React__default.createElement("div", { className: "section section-default" },
                    React__default.createElement(Row$1, null,
                        React__default.createElement(Col$1, null,
                            React__default.createElement(Content, { colPos: '4', pageProps: pageProps })))),
                React__default.createElement("div", { className: "section section-light" },
                    React__default.createElement(Container$1, null,
                        React__default.createElement(Row$1, null,
                            React__default.createElement(Col$1, { className: "section-column-half ", md: "6" },
                                React__default.createElement(Content, { colPos: '34', pageProps: pageProps })),
                            React__default.createElement(Col$1, { className: "section-column-half ", md: "6" },
                                React__default.createElement(Content, { colPos: '35', pageProps: pageProps }))))),
                React__default.createElement("div", { className: "section section-light" },
                    React__default.createElement(Container$1, null,
                        React__default.createElement(Row$1, null,
                            React__default.createElement(Col$1, { className: "section-column-half ", md: "6" },
                                React__default.createElement(Content, { colPos: '36', pageProps: pageProps })),
                            React__default.createElement(Col$1, { className: "section-column-half ", md: "6" },
                                React__default.createElement(Content, { colPos: '37', pageProps: pageProps }))))),
                React__default.createElement(Row$1, null,
                    React__default.createElement(Col$1, null,
                        React__default.createElement(Content, { colPos: '9', pageProps: pageProps })))),
            footer: React__default.createElement(FooterContent, { pageProps: pageProps }),
        };
    },
    'special_start': function (pageProps) {
        return {
            border: React__default.createElement(Row$1, null,
                React__default.createElement(Col$1, null,
                    React__default.createElement(Content, { colPos: '3', pageProps: pageProps }))),
            main: React__default.createElement(React__default.Fragment, null,
                React__default.createElement(Row$1, null,
                    React__default.createElement(Col$1, null,
                        React__default.createElement(Content, { colPos: '8', pageProps: pageProps }))),
                React__default.createElement("div", { className: "section section-default" },
                    React__default.createElement(Container$1, null,
                        React__default.createElement(Row$1, null,
                            React__default.createElement(Col$1, { className: "section-column-third ", md: "4" },
                                React__default.createElement(Content, { colPos: '20', pageProps: pageProps })),
                            React__default.createElement(Col$1, { className: "section-column-third ", md: "4" },
                                React__default.createElement(Content, { colPos: '21', pageProps: pageProps })),
                            React__default.createElement(Col$1, { className: "section-column-third ", md: "4" },
                                React__default.createElement(Content, { colPos: '22', pageProps: pageProps }))))),
                React__default.createElement("div", { className: "section section-light" },
                    React__default.createElement(Row$1, null,
                        React__default.createElement(Col$1, null,
                            React__default.createElement(Content, { colPos: '0', pageProps: pageProps })))),
                React__default.createElement(Row$1, null,
                    React__default.createElement(Col$1, null,
                        React__default.createElement(Content, { colPos: '9', pageProps: pageProps })))),
            footer: React__default.createElement(FooterContent, { pageProps: pageProps }),
        };
    },
};
var contentElementLayouts = {
    __generic: function (props) {
        return React__default.createElement(Layout0, { data: props.content }, props.children);
    },
};
var contentElementTemplates = {
    //Resources/Private/Templates/ContentElements/**
    __generic: function (headlessContentData, pageProps) {
        return React__default.createElement(React__default.Fragment, null,
            headlessContentData.type,
            " has no Template");
    },
    text: function (headlessContentData, pageProps) { return React__default.createElement(Text, { data: headlessContentData, children: headlessContentData.children, pageProps: pageProps }); },
    html: function (headlessContentData, pageProps) { return React__default.createElement(Html, { data: headlessContentData, children: headlessContentData.children, pageProps: pageProps }); },
    textpic: function (headlessContentData, pageProps) { return React__default.createElement(Textpic, { data: headlessContentData, children: headlessContentData.children, pageProps: pageProps }); },
    image: function (headlessContentData, pageProps) { return React__default.createElement(Image, { data: headlessContentData, children: headlessContentData.children, pageProps: pageProps }); },
    shortcut: function (headlessContentData, pageProps) { return React__default.createElement(Shortcut, { data: headlessContentData, children: headlessContentData.children, pageProps: pageProps }); },
    div: function (headlessContentData, pageProps) { return React__default.createElement(Div, { data: headlessContentData, children: headlessContentData.children, pageProps: pageProps }); },
    uploads: function (headlessContentData, pageProps) { return React__default.createElement(Uploads, { data: headlessContentData, children: headlessContentData.children, pageProps: pageProps }); },
    accordion: function (headlessContentData, pageProps) { return React__default.createElement(Accordion, { data: headlessContentData, children: headlessContentData.children, pageProps: pageProps }); },
    gallery: function (headlessContentData, pageProps) { return React__default.createElement(Gallery, { data: headlessContentData, children: headlessContentData.children, pageProps: pageProps }); },
    textmedia: function (headlessContentData, pageProps) { return React__default.createElement(Textmedia, { data: headlessContentData, children: headlessContentData.children, pageProps: pageProps }); },
    card_group: function (headlessContentData, pageProps) { return React__default.createElement(CardGroup, { data: headlessContentData, children: headlessContentData.children, pageProps: pageProps }); },
    textcolumn: function (headlessContentData, pageProps) { return React__default.createElement(TextColumns, { data: headlessContentData, children: headlessContentData.children, pageProps: pageProps }); },
    quote: function (headlessContentData, pageProps) { return React__default.createElement(Quote, { data: headlessContentData, children: headlessContentData.children, pageProps: pageProps }); },
    header: function (headlessContentData, pageProps) { return React__default.createElement(Header, { data: headlessContentData, children: headlessContentData.children, pageProps: pageProps }); },
    carousel: function (headlessContentData, pageProps) { return React__default.createElement(Carousel, { data: headlessContentData, children: headlessContentData.children, pageProps: pageProps }); },
    menu_card_list: function (headlessContentData, pageProps) { return React__default.createElement(MenuCardList, { data: headlessContentData, children: headlessContentData.children, pageProps: pageProps }); },
    menu_card_dir: function (headlessContentData, pageProps) { return React__default.createElement(MenuCardDir, { data: headlessContentData, children: headlessContentData.children, pageProps: pageProps }); },
    menu_thumbnail_dir: function (headlessContentData, pageProps) { return React__default.createElement(MenuThumbnailBase, { data: headlessContentData, children: headlessContentData.children, pageProps: pageProps }); },
    menu_thumbnail_list: function (headlessContentData, pageProps) { return React__default.createElement(MenuThumbnailBase, { data: headlessContentData, children: headlessContentData.children, pageProps: pageProps }); },
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
    return React__default.createElement(Page, { pageProps: {
            headlessData: props.headlessData,
            pageLayouts: _pageLayouts,
            pageTemplates: _pageTemplates,
            contentElementLayouts: _contentElementLayouts,
            contentElementTemplates: _contentElementTemplates,
            additionalParams: props.additionalParams,
        } });
};
var TYPO3Page$1 = React__default.memo(TYPO3Page);

export { AllHeader, Content, ContentElements, Type as MediaType, Page, section as Section, TYPO3Page$1 as TYPO3Page };
//# sourceMappingURL=index.es.js.map
