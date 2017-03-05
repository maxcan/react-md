(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-dom', 'classnames', 'react-prop-types/lib/isRequiredForA11y', '../utils/PropTypes/oneRequiredForA11y', '../Helpers/FocusContainer', '../Papers/Paper', './DialogTitle', './DialogFooter'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-dom'), require('classnames'), require('react-prop-types/lib/isRequiredForA11y'), require('../utils/PropTypes/oneRequiredForA11y'), require('../Helpers/FocusContainer'), require('../Papers/Paper'), require('./DialogTitle'), require('./DialogFooter'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactDom, global.classnames, global.isRequiredForA11y, global.oneRequiredForA11y, global.FocusContainer, global.Paper, global.DialogTitle, global.DialogFooter);
    global.Dialog = mod.exports;
  }
})(this, function (exports, _react, _reactDom, _classnames, _isRequiredForA11y, _oneRequiredForA11y, _FocusContainer, _Paper, _DialogTitle, _DialogFooter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _isRequiredForA11y2 = _interopRequireDefault(_isRequiredForA11y);

  var _oneRequiredForA11y2 = _interopRequireDefault(_oneRequiredForA11y);

  var _FocusContainer2 = _interopRequireDefault(_FocusContainer);

  var _Paper2 = _interopRequireDefault(_Paper);

  var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

  var _DialogFooter2 = _interopRequireDefault(_DialogFooter);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
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

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var Dialog = function (_PureComponent) {
    _inherits(Dialog, _PureComponent);

    function Dialog(props) {
      _classCallCheck(this, Dialog);

      var _this = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));

      _this._setRenderNode = function (dialog) {
        _this._renderNode = (0, _reactDom.findDOMNode)(dialog);
      };

      _this.state = { transformOrigin: null };
      _this._setContent = _this._setContent.bind(_this);
      return _this;
    }
    /* eslint-disable max-len */


    _createClass(Dialog, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return { renderNode: this._renderNode };
      }
    }, {
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _props = this.props,
            pageX = _props.pageX,
            containerX = _props.containerX,
            pageY = _props.pageY,
            containerY = _props.containerY;

        if (!pageX || !pageY) {
          return;
        }

        this.setState({
          transformOrigin: pageX - containerX + 'px ' + (pageY - containerY) + 'px'
        });
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.onOpen) {
          this.props.onOpen();
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.props.onLeave) {
          this.props.onLeave();
        }
      }
    }, {
      key: '_setContent',
      value: function _setContent(content) {
        if (content !== null) {
          this._content = (0, _reactDom.findDOMNode)(content);
          var contentPadded = this._content.querySelectorAll('.md-list').length === 0;

          this.setState({ contentPadded: contentPadded });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            contentPadded = _state.contentPadded,
            transformOrigin = _state.transformOrigin;

        var _props2 = this.props,
            id = _props2.id,
            className = _props2.className,
            contentStyle = _props2.contentStyle,
            contentClassName = _props2.contentClassName,
            title = _props2.title,
            Content = _props2.contentComponent,
            contentProps = _props2.contentProps,
            actions = _props2.actions,
            children = _props2.children,
            fullPage = _props2.fullPage,
            centered = _props2.centered,
            autopadContent = _props2.autopadContent,
            paddedContent = _props2.paddedContent,
            propStyle = _props2.style,
            pageX = _props2.pageX,
            pageY = _props2.pageY,
            containerX = _props2.containerX,
            containerY = _props2.containerY,
            onOpen = _props2.onOpen,
            onLeave = _props2.onLeave,
            props = _objectWithoutProperties(_props2, ['id', 'className', 'contentStyle', 'contentClassName', 'title', 'contentComponent', 'contentProps', 'actions', 'children', 'fullPage', 'centered', 'autopadContent', 'paddedContent', 'style', 'pageX', 'pageY', 'containerX', 'containerY', 'onOpen', 'onLeave']);

        var _props3 = this.props,
            labelledBy = _props3['aria-labelledby'],
            style = _props3.style;

        var titleId = id + '-title';
        if (!labelledBy && title) {
          labelledBy = titleId;
        }

        var padDefined = typeof paddedContent !== 'undefined';
        var dialogChildren = fullPage ? children : [_react2.default.createElement(
          _DialogTitle2.default,
          { key: 'title', id: titleId },
          title
        ), _react2.default.createElement(
          Content,
          _extends({
            ref: !padDefined && autopadContent ? this._setContent : null,
            key: 'content'
          }, contentProps, {
            style: contentStyle,
            className: (0, _classnames2.default)('md-dialog-content', {
              'md-dialog-content--padded': padDefined ? paddedContent : contentPadded
            }, contentClassName)
          }),
          children
        ), _react2.default.createElement(_DialogFooter2.default, { key: 'footer', actions: actions })];

        if (transformOrigin) {
          style = Object.assign({}, style, { transformOrigin: transformOrigin });
        }

        return _react2.default.createElement(
          _Paper2.default,
          _extends({}, props, {
            id: id,
            component: _FocusContainer2.default,
            ref: this._setRenderNode,
            style: style,
            className: (0, _classnames2.default)('md-dialog', {
              'md-dialog--full-page': fullPage,
              'md-dialog--centered': centered
            }, className),
            role: 'dialog',
            'aria-labelledby': labelledBy
          }),
          dialogChildren
        );
      }
    }]);

    return Dialog;
  }(_react.PureComponent);

  Dialog.propTypes = {
    /**
     * @see {@link Dialogs/DialogContainer#id}
     */
    id: (0, _isRequiredForA11y2.default)(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])),
    /* eslint-enable max-len */

    /**
     * @see {@link Dialogs/DialogContainer#aria-describedby}
     */
    'aria-describedby': (0, _oneRequiredForA11y2.default)(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]), 'title', 'aria-labelledby', 'aria-label'),

    /**
     * @see {@link Dialogs/DialogContainer#aria-labelledby}
     */
    'aria-labelledby': _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),

    /**
     * @see {@link Dialogs/DialogContainer#aria-label}
     */
    'aria-label': _react.PropTypes.string,

    /**
     * An optional style to apply to the dialog.
     */
    style: _react.PropTypes.object,

    /**
     * An optional className to apply to the dialog.
     */
    className: _react.PropTypes.string,

    /**
     * An optional style to apply to the dialog's content.
     */
    contentStyle: _react.PropTypes.object,

    /**
     * An optional className to apply to the dialog's content.
     */
    contentClassName: _react.PropTypes.string,

    /**
     * The component to render the content as. This is helpful if you would like to use
     * the CSSTransitionGroup. This really just saves a tiny bit of markup.
     *
     * ```js
     * <Dialog
     *   contentComponent={CSSTransitionGroup}
     *   contentProps={{
     *     transitionName: 'md-cross-fade',
     *     transitionLeave: false,
     *     transitionEnterTimeout: 150,
     *   }}
     * >
     *   {dynamicContent}
     * </Dialog>
     * ```
     */
    contentComponent: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]).isRequired,

    /**
     * Any additional props to pass to the content component.
     */
    contentProps: _react.PropTypes.object,

    /**
     * An optional title to display in the dialog.
     */
    title: _react.PropTypes.node,

    /**
     * Any children to display in the content of the dialog.
     */
    children: _react.PropTypes.node,

    /**
     * A single action or a list of actions to display in the dialog. This can either be a list
     * of `FlatButton` props or `<Button flat {...props} />` elements.
     */
    actions: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.object, _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.object]))]),

    /**
     * @see {@link Helpers/FocusContainer#additionalFocusKeys}
     */
    additionalFocusKeys: _FocusContainer2.default.propTypes.additionalFocusKeys,

    /**
     * @see {@link Helpers/FocusContainer#initialFocus}
     */
    initialFocus: _FocusContainer2.default.propTypes.initialFocus,

    /**
     * @see {@link Helpers/FocusContainer#focusOnMount}
     */
    focusOnMount: _FocusContainer2.default.propTypes.focusOnMount,

    /**
     * @see {@link Helpers/FocusContainer#containFocus}
     */
    containFocus: _FocusContainer2.default.propTypes.containFocus,

    /**
     * An optional x coordinate on the page that caused a full page dialog
     * to be created. This is really just used for a `transformOrigin` style.
     */
    pageX: _react.PropTypes.number,

    /**
     * An optional y coordinate on the page that caused a full page dialog
     * to be created. This is really just used for a `transformOrigin` style.
     */
    pageY: _react.PropTypes.number,

    /**
     * An optional x scroll position of the container holding the dialog. This
     * is really just used for a `transformOrigin` style on full page dialogs.
     */
    containerX: _react.PropTypes.number,

    /**
     * An optional y scroll position of the container holding the dialog. This
     * is really just used for a `transformOrigin` style on full page dialogs.
     */
    containerY: _react.PropTypes.number,

    /**
     * Boolean if the dialog should be rendered as a full page dialog.
     */
    fullPage: _react.PropTypes.bool,

    /**
     * The zDepth to use for the dialog.
     */
    zDepth: _react.PropTypes.number.isRequired,

    /**
     * An optional function to call when the dialog has been opened. This is
     * really just used for the `DialogContainer`.
     */
    onOpen: _react.PropTypes.func,

    /**
     * An optional function to call when the dialog has been closed. This is
     * really just used for the `DialogContainer`.
     */
    onLeave: _react.PropTypes.func,

    /**
     * Boolean if the dialog should be centered in the page.
     */
    centered: _react.PropTypes.bool,

    /**
     * Boolean if the content should be padded. This will take precidence
     * over the `autopadContent` prop. So if this is defined, that value
     * will be used instead of any thing that was was caclulated in this
     * component.
     *
     * @see {@link #autopadContent}
     */
    paddedContent: _react.PropTypes.bool,

    /**
     * Boolean if the dialog should automatically try to determine if the content
     * should be padded. It will be padded if the dialog does not contain a `List`.
     */
    autopadContent: _react.PropTypes.bool
  };
  Dialog.defaultProps = {
    autopadContent: true,
    contentComponent: 'section',
    zDepth: 5
  };
  Dialog.childContextTypes = {
    renderNode: _react.PropTypes.object
  };
  exports.default = Dialog;
});