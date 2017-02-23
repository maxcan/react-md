(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-dom', 'classnames', '../constants/media', '../utils/getField', '../utils/mapToListParts', '../utils/PropTypes/controlled', '../Papers/Paper', '../Helpers/Portal', '../Lists/List', './isType', './DrawerTypes'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-dom'), require('classnames'), require('../constants/media'), require('../utils/getField'), require('../utils/mapToListParts'), require('../utils/PropTypes/controlled'), require('../Papers/Paper'), require('../Helpers/Portal'), require('../Lists/List'), require('./isType'), require('./DrawerTypes'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactDom, global.classnames, global.media, global.getField, global.mapToListParts, global.controlled, global.Paper, global.Portal, global.List, global.isType, global.DrawerTypes);
    global.Drawer = mod.exports;
  }
})(this, function (exports, _react, _reactDom, _classnames, _media, _getField, _mapToListParts, _controlled, _Paper, _Portal, _List, _isType, _DrawerTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _getField2 = _interopRequireDefault(_getField);

  var _mapToListParts2 = _interopRequireDefault(_mapToListParts);

  var _controlled2 = _interopRequireDefault(_controlled);

  var _Paper2 = _interopRequireDefault(_Paper);

  var _Portal2 = _interopRequireDefault(_Portal);

  var _List2 = _interopRequireDefault(_List);

  var _DrawerTypes2 = _interopRequireDefault(_DrawerTypes);

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

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
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

  var oneOfDrawerTypes = _react.PropTypes.oneOf([_DrawerTypes2.default.FULL_HEIGHT, _DrawerTypes2.default.CLIPPED, _DrawerTypes2.default.FLOATING, _DrawerTypes2.default.PERSISTENT, _DrawerTypes2.default.PERSISTENT_MINI, _DrawerTypes2.default.TEMPORARY, _DrawerTypes2.default.TEMPORARY_MINI]);

  /**
   * The `Drawer` component is used for having a sliding panel of content or navigation
   * that appears from the side of a screen.
   *
   * If the `Drawer` uses any of the `_MINI` drawer types, you will need to also create another
   * `Drawer` that is not `_MINI`. Transitioning the `width` on mobile devices is very sluggish,
   * and it isn't much more work to create another drawer.
   */

  var Drawer = function (_PureComponent) {
    _inherits(Drawer, _PureComponent);

    _createClass(Drawer, null, [{
      key: 'getCurrentMedia',
      value: function getCurrentMedia() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Drawer.defaultProps;
        var mobileMinWidth = props.mobileMinWidth,
            tabletMinWidth = props.tabletMinWidth,
            desktopMinWidth = props.desktopMinWidth,
            mobileType = props.mobileType,
            tabletType = props.tabletType,
            desktopType = props.desktopType;

        if (typeof window === 'undefined') {
          return { mobile: true, tablet: false, desktop: false, type: mobileType };
        }

        var mobile = Drawer.matchesMedia(mobileMinWidth, tabletMinWidth - 1);
        var tablet = Drawer.matchesMedia(tabletMinWidth, desktopMinWidth);
        var desktop = Drawer.matchesMedia(desktopMinWidth);

        var type = void 0;
        if (desktop) {
          type = desktopType;
        } else if (tablet) {
          type = tabletType;
        } else {
          type = mobileType;
        }

        return { type: type, mobile: mobile, tablet: tablet, desktop: desktop };
      }
    }, {
      key: 'matchesMedia',
      value: function matchesMedia(min, max) {
        var media = 'screen and (min-width: ' + min + 'px)';
        if (max) {
          media += ' and (max-width: ' + max + 'px)';
        }

        return window.matchMedia(media).matches;
      }
    }]);

    function Drawer(props) {
      _classCallCheck(this, Drawer);

      var _this = _possibleConstructorReturn(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call(this, props));

      var defaultVisible = props.defaultVisible,
          defaultMedia = props.defaultMedia;


      _this.state = {
        mobile: defaultMedia === 'mobile',
        tablet: defaultMedia === 'tablet',
        desktop: defaultMedia === 'desktop',
        animating: false,
        overlayActive: false,
        drawerActive: false
      };

      if (typeof props.type === 'undefined') {
        _this.state.type = props[defaultMedia + 'Type'];
      }

      var type = (0, _getField2.default)(props, _this.state, 'type');

      if (typeof props.visible === 'undefined') {
        _this.state.visible = typeof defaultVisible !== 'undefined' ? defaultVisible : (0, _isType.isPermanent)(type);
      }

      var visible = (0, _getField2.default)(props, _this.state, 'visible');

      _this.state.overlayActive = (0, _isType.isTemporary)(type) && visible && !_this.state.desktop;
      _this.state.drawerActive = visible;

      _this._animate = _this._animate.bind(_this);
      _this._closeDrawer = _this._closeDrawer.bind(_this);
      _this._setNavigation = _this._setNavigation.bind(_this);
      _this._handleNavClick = _this._handleNavClick.bind(_this);
      _this._updateType = _this._updateType.bind(_this);
      _this._updateMedia = _this._updateMedia.bind(_this);
      return _this;
    }

    _createClass(Drawer, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        window.addEventListener('resize', this._updateMedia);
        this._updateType(this.props);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _props = this.props,
            mobileMinWidth = _props.mobileMinWidth,
            mobileType = _props.mobileType,
            tabletMinWidth = _props.tabletMinWidth,
            tabletType = _props.tabletType,
            desktopMinWidth = _props.desktopMinWidth,
            desktopType = _props.desktopType;


        if (nextProps.mobileMinWidth !== mobileMinWidth || nextProps.mobileType !== mobileType || nextProps.tabletMinWidth !== tabletMinWidth || nextProps.tabletType !== tabletType || nextProps.desktopMinWidth !== desktopMinWidth || nextProps.desktopType !== desktopType) {
          this._updateType(nextProps);
        }

        var visible = nextProps.visible,
            transitionDuration = nextProps.transitionDuration,
            overlay = nextProps.overlay;

        if (this.props.visible === nextProps.visible) {
          return;
        }

        var type = (0, _getField2.default)(nextProps, this.state, 'type');
        this._animate(visible, type, transitionDuration, overlay, this.state.desktop);
      }
    }, {
      key: 'componentWillUpdate',
      value: function componentWillUpdate(nextProps, nextState) {
        var visible = nextState.visible;

        if (typeof nextProps.visible !== 'undefined' || this.state.visible === visible) {
          return;
        }
        var type = (0, _getField2.default)(nextProps, nextState, 'type');
        this._animate(visible, type, nextProps.transitionDuration, nextProps.overlay, nextState.desktop);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this._timeout) {
          clearTimeout(this._timeout);
        }

        if (this._closeTimeout) {
          clearTimeout(this._closeTimeout);
        }

        window.removeEventListener('resize', this._updateMedia);
      }
    }, {
      key: '_updateType',
      value: function _updateType(props) {
        var _this2 = this;

        var onMediaTypeChange = props.onMediaTypeChange,
            onVisibilityToggle = props.onVisibilityToggle;


        var state = Drawer.getCurrentMedia(props);
        var diffType = (0, _getField2.default)(props, this.state, 'type') !== state.type;

        if (onMediaTypeChange && (diffType || ['mobile', 'tablet', 'desktop'].filter(function (key) {
          return state[key] !== _this2.state[key];
        }).length)) {
          onMediaTypeChange(state.type, { mobile: state.mobile, tablet: state.tablet, desktop: state.desktop });
        }

        if (typeof props.type !== 'undefined') {
          delete state.type;
        }

        var type = (0, _getField2.default)(props, state, 'type');
        var visible = (0, _isType.isPermanent)(type);
        if (onVisibilityToggle && (0, _getField2.default)(props, this.state, 'visible') !== visible) {
          onVisibilityToggle(visible);
        }

        if (typeof props.visible === 'undefined' && diffType) {
          state.visible = visible;
        }

        this.setState(state);
      }
    }, {
      key: '_updateMedia',
      value: function _updateMedia() {
        this._updateType(this.props);
      }
    }, {
      key: '_animate',
      value: function _animate(visible, type, timeout, overlay, desktop) {
        var _this3 = this;

        if (visible) {
          this.timeout = setTimeout(function () {
            _this3.timeout = null;

            _this3.setState({
              overlayActive: overlay || (0, _isType.isTemporary)(type) && !desktop,
              drawerActive: true,
              animating: true
            });
          }, 17);
        } else {
          this._timeout = setTimeout(function () {
            _this3._timeout = null;

            _this3.setState({ animating: false });
          }, timeout);
          this.setState({ animating: true, overlayActive: false, drawerActive: false });
        }
      }
    }, {
      key: '_setNavigation',
      value: function _setNavigation(navigation) {
        this._navigation = (0, _reactDom.findDOMNode)(navigation);
      }
    }, {
      key: '_handleNavClick',
      value: function _handleNavClick(e) {
        var _this4 = this;

        if (!this.props.closeOnNavItemClick || !(0, _isType.isTemporary)((0, _getField2.default)(this.props, this.state, 'type'))) {
          return;
        }

        var target = e.target;

        while (target && this._navigation.contains(target)) {
          if (target.classList.contains('md-list-tile')) {
            // Clicked a nav item that has a nested list
            if (target.getAttribute('aria-expanded') !== null) {
              return;
            }

            this._closeTimeout = setTimeout(function () {
              _this4._closeTimeout = null;

              _this4._closeDrawer(e);
            }, 450);
            return;
          }

          target = target.parentNode;
        }
      }
    }, {
      key: '_closeDrawer',
      value: function _closeDrawer(e) {
        if (this.props.onVisibilityToggle) {
          this.props.onVisibilityToggle(false, e);
        }

        if (typeof this.props.visible === 'undefined') {
          this.setState({ visible: false });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _cn;

        var _state = this.state,
            overlayActive = _state.overlayActive,
            drawerActive = _state.drawerActive,
            animating = _state.animating;

        var _props2 = this.props,
            style = _props2.style,
            className = _props2.className,
            navStyle = _props2.navStyle,
            navClassName = _props2.navClassName,
            component = _props2.component,
            navItems = _props2.navItems,
            header = _props2.header,
            children = _props2.children,
            inline = _props2.inline,
            position = _props2.position,
            overlay = _props2.overlay,
            autoclose = _props2.autoclose,
            clickableDesktopOverlay = _props2.clickableDesktopOverlay,
            lastChild = _props2.lastChild,
            props = _objectWithoutProperties(_props2, ['style', 'className', 'navStyle', 'navClassName', 'component', 'navItems', 'header', 'children', 'inline', 'position', 'overlay', 'autoclose', 'clickableDesktopOverlay', 'lastChild']);

        delete props.renderNode;
        delete props.visible;
        delete props.defaultVisible;
        delete props.type;
        delete props.defaultMedia;
        delete props.mobileType;
        delete props.mobileMinWidth;
        delete props.tabletType;
        delete props.tabletMinWidth;
        delete props.desktopType;
        delete props.desktopMinWidth;
        delete props.transitionDuration;
        delete props.onVisibilityToggle;
        delete props.onMediaTypeChange;
        delete props.closeOnNavItemClick;

        var desktop = this.state.desktop;

        var renderNode = (0, _getField2.default)(this.props, this.context, 'renderNode');
        var visible = (0, _getField2.default)(this.props, this.state, 'visible');
        var type = (0, _getField2.default)(this.props, this.state, 'type');
        var mini = (0, _isType.isMini)(type);
        var temporary = (0, _isType.isTemporary)(type);
        var floating = _DrawerTypes2.default.FLOATING === type;
        var permanent = (0, _isType.isPermanent)(type);

        var Component = void 0;
        if (component) {
          Component = component;
        } else if (navItems) {
          Component = 'nav';
        } else {
          Component = 'aside';
        }

        var navigation = void 0;
        if (navItems) {
          navigation = _react2.default.createElement(
            _List2.default,
            {
              ref: this._setNavigation,
              key: 'navigation',
              style: navStyle,
              className: (0, _classnames2.default)('md-list--drawer', {
                'md-toolbar-relative': mini && !visible,
                'md-background': floating
              }, navClassName),
              onClick: autoclose ? this._handleNavClick : null
            },
            navItems.map(_mapToListParts2.default)
          );
        }
        var zDepth = 1;
        if (floating || inline) {
          zDepth = 0;
        } else if (temporary && visible) {
          zDepth = 5;
        }

        var overlayVisible = (!desktop || clickableDesktopOverlay) && (overlay || temporary) && (animating || visible);

        var drawer = _react2.default.createElement(
          _Paper2.default,
          _extends({}, props, {
            key: 'drawer',
            component: Component,
            zDepth: zDepth,
            raiseOnHover: false,
            style: style,
            className: (0, _classnames2.default)('md-drawer', (_cn = {}, _defineProperty(_cn, 'md-drawer--' + position, !inline), _defineProperty(_cn, 'md-drawer--fixed', !inline), _defineProperty(_cn, 'md-drawer--inline', inline), _defineProperty(_cn, 'md-drawer--active', mini || drawerActive), _defineProperty(_cn, 'md-drawer--mini', mini), _defineProperty(_cn, 'md-transition--decceleration', visible), _defineProperty(_cn, 'md-transition--acceleration', !visible), _defineProperty(_cn, 'md-background', inline || floating), _defineProperty(_cn, 'md-background--card', !floating && !inline), _cn), className)
          }),
          header,
          navigation,
          children,
          _react2.default.createElement(
            _Portal2.default,
            { visible: overlayVisible, renderNode: renderNode },
            _react2.default.createElement('div', {
              className: (0, _classnames2.default)('md-overlay md-overlay--drawer md-pointer--hover', {
                'md-overlay--active': overlayActive
              }),
              onClick: this._closeDrawer
            })
          )
        );

        if (inline || permanent) {
          return drawer;
        }

        return _react2.default.createElement(
          _Portal2.default,
          { visible: mini || animating || visible, renderNode: renderNode, lastChild: lastChild },
          drawer
        );
      }
    }]);

    return Drawer;
  }(_react.PureComponent);

  Drawer.DrawerTypes = _DrawerTypes2.default;
  Drawer.propTypes = {
    /**
     * An optional style to apply.
     */
    style: _react.PropTypes.object,

    /**
     * An optional className to apply.
     */
    className: _react.PropTypes.string,

    /**
     * An optional style to apply to the `List` surrounding the `navItems`.
     */
    navStyle: _react.PropTypes.object,

    /**
     * An optional className to apply to the `List` surrounding the `navItems`.
     */
    navClassName: _react.PropTypes.string,

    /**
     * An optional component to render the drawer in. When this prop is undefined, the drawer
     * will be rendered as a `nav` if the `navItems` prop is defined, otherwise an `aside`.
     */
    component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.element]),

    /**
     * An optional list of navigation items to display in the drawer. This list can either contain
     * a valid child component for a `List` or an object used to create a `Divider`, `Subheader`,
     * or `ListItem`.
     *
     * - To create a divider in the list, set a `divider` key to `true`. Any other keys will be
     * passed to the `Divider` component.
     * - To create a subheader in the list, set the `subheader` key to `true`. Any other keys will
     * be passed to the `Subheader` component.
     * - To create a list item, just create an object with any normal `ListItem` props.
     */
    navItems: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.shape({
      divider: _react.PropTypes.bool,
      subheader: _react.PropTypes.bool,
      primaryText: _react.PropTypes.string
    })])),

    /**
     * Boolean if a temporary drawer should close when a nav item is clicked.
     */
    autoclose: _react.PropTypes.bool,

    /**
     * An optional header to display. This _should_ normally be a toolbar.
     */
    header: _react.PropTypes.node,

    /**
     * Any additional children to display after the `header` and `navItems`.
     */
    children: _react.PropTypes.node,

    /**
     * The drawer type to use when the current device matches the mobile
     * media query.
     */
    mobileType: _react.PropTypes.oneOf([Drawer.DrawerTypes.TEMPORARY, Drawer.DrawerTypes.TEMPORARY_MINI]).isRequired,

    /**
     * The min-width to use for the mobile media query.
     */
    mobileMinWidth: _react.PropTypes.number.isRequired,

    /**
     * The drawer type to use when the current device matches the tablet
     * media query.
     */
    tabletType: oneOfDrawerTypes.isRequired,

    /**
     * The min-width to use for the tablet media query.
     */
    tabletMinWidth: _react.PropTypes.number.isRequired,

    /**
     * The drawer type to use when the current device matches the desktop media
     * query.
     */
    desktopType: oneOfDrawerTypes.isRequired,

    /**
     * The min-width for a desktop screen.
     */
    desktopMinWidth: _react.PropTypes.number.isRequired,

    /**
     * An optional type to enforce across all media sizes. Since `mobile` devices are
     * included, you are required to manually specify when the `type` should be `temporary`.
     *
     * When the `type` is not one of the `temporary` types, the `onMediaTypeChange` prop
     * must be provided.
     */
    type: function type(props, propName, component) {
      for (var _len = arguments.length, others = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        others[_key - 3] = arguments[_key];
      }

      var type = props[propName];
      if ((0, _isType.isTemporary)(type)) {
        return oneOfDrawerTypes.apply(undefined, [props, propName, component].concat(others));
      }

      var err = oneOfDrawerTypes.apply(undefined, [props, propName, component].concat(others));
      if (!err && typeof type !== 'undefined' && !(0, _isType.isMini)(type) && typeof props.onMediaTypeChange === 'undefined') {
        err = new Error('You provided a `' + propName + '` prop to the ' + component + ' without the `onMediaTypeChange` ' + ('handler. The `onMediaTypeChange` prop must be specified when the `' + propName + '` is not ') + 'one of the `temporary` types.');
      }

      return err;
    },

    /**
     * An optional function to call when the drawer's type changes when the screen resizes.
     * The callback will include the new `type` that should be used for the screen size,
     * and an object containing the media matches for `mobile`, `tablet`, and `desktop`.
     *
     * ```js
     * this.props.onMediaTypeChange(Drawer.DrawerTypes.TEMPORARY, {
     *   mobile: true,
     *   tablet: false,
     *   desktop: false,
     * });
     * ```
     */
    onMediaTypeChange: _react.PropTypes.func,

    /**
     * The default drawer type to display on initial render. The drawer will automatically
     * adjust itself to the correct media once it has mounted. This prop is really only useful
     * for server side rendering.
     */
    defaultMedia: _react.PropTypes.oneOf(['mobile', 'tablet', 'desktop']).isRequired,

    /**
     * Boolean if there should be a visible overlay when the drawer is visible. The default behavior
     * is to only include a visible overlay when the `type` is `TEMPORARY` or `TEMPORARY_MINI` and
     * the device is not a desktop.
     */
    overlay: _react.PropTypes.bool,

    /**
     * An optional DOM Node to render the drawer into. The default is to render as
     * the first child in the `body`.
     *
     * > This prop will not be used when the drawer is of the permanent type or `inline` is specified
     * since the `Portal` component will not be used.
     */
    renderNode: _react.PropTypes.object,

    /**
     * Boolean if the drawer should be rendered as the last child instead of the first child
     * in the `renderNode` or `body`.
     *
     * > This prop will not be used when the drawer is of the permanent type or `inline` is specified
     * since the `Portal` component will not be used.
     */
    lastChild: _react.PropTypes.bool,

    /**
     * Boolean if the drawer is visible by default. If this is omitted, the drawer will be visible
     * if the current drawer type is NOT `Drawer.DrawerTypes.TEMPORARY` or `Drawer.DrawerTypes.TEMPORARY_MINI`.
     *
     * This basically means that if you are using the default configuration, a mobile device's drawer
     * will be hidden while tablets and desktops will be visible.
     */
    defaultVisible: _react.PropTypes.bool,

    /**
     * Boolean if the drawer is visible. This will force the component to define the `onVisibilityToggle`
     * prop as well as manually updating the drawer's visibility.
     */
    visible: (0, _controlled2.default)(_react.PropTypes.bool, 'onVisibilityToggle', 'defaultVisible'),

    /**
     * An optional function to call when the visibility of the drawer is changed. The function will
     * be called with the new visibility state and an event that triggered the visibility change.
     *
     * ```js
     * onVisibilityToggle(!currentlyVisible, event);
     * ```
     */
    onVisibilityToggle: _react.PropTypes.func,

    /**
     * The drawer's position on the page when it is not `inline`. When the drawer's position is `left`,
     * the width will be `calc(100vw - 56px)` on mobile devices and `$md-drawer-desktop-width` on desktops.
     *
     * When the position is `right`, the width will be `100vw` for mobile devices and scaling to the drawer's
     * children width on desktops.
     */
    position: _react.PropTypes.oneOf(['left', 'right']).isRequired,

    /**
     * Boolean if the drawer should be displayed inline instead of fixed to the page. When this prop
     * is enabled, the `position` prop will not be used.
     */
    inline: _react.PropTypes.bool,

    /**
     * The `$md-drawer-transition-time` value from sass.
     */
    transitionDuration: _react.PropTypes.number.isRequired,

    /**
     * Boolean if the temporary drawer's overlay should be created on desktop screens. This is really used so that
     * the drawer will close when a user clicks anywhere on the page except in the drawer.
     */
    clickableDesktopOverlay: _react.PropTypes.bool,

    /**
     * Boolean if the navigation drawer should automatically close when a nav item has been clicked.
     */
    closeOnNavItemClick: _react.PropTypes.bool
  };
  Drawer.defaultProps = {
    defaultMedia: 'mobile',
    mobileType: Drawer.DrawerTypes.TEMPORARY,
    mobileMinWidth: _media.MOBILE_MIN_WIDTH,
    tabletType: Drawer.DrawerTypes.PERSISTENT,
    tabletMinWidth: _media.TABLET_MIN_WIDTH,
    desktopType: Drawer.DrawerTypes.FULL_HEIGHT,
    desktopMinWidth: _media.DESKTOP_MIN_WIDTH,
    position: 'left',
    transitionDuration: 300,
    autoclose: true,
    clickableDesktopOverlay: true,
    closeOnNavItemClick: true
  };
  Drawer.contextTypes = {
    renderNode: _react.PropTypes.object
  };
  exports.default = Drawer;
});