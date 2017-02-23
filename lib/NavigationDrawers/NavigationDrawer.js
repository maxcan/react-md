(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames', 'react-addons-css-transition-group', 'react-prop-types/lib/deprecated', 'react-prop-types/lib/isRequiredForA11y', '../utils/getField', '../utils/PropTypes/controlled', '../utils/PropTypes/invalidIf', '../Buttons/Button', '../Drawers/Drawer', '../Lists/List', '../Toolbars/Toolbar', '../Drawers/isType', './JumpToContentLink', './CloseButton', './MiniListItem'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'), require('react-addons-css-transition-group'), require('react-prop-types/lib/deprecated'), require('react-prop-types/lib/isRequiredForA11y'), require('../utils/getField'), require('../utils/PropTypes/controlled'), require('../utils/PropTypes/invalidIf'), require('../Buttons/Button'), require('../Drawers/Drawer'), require('../Lists/List'), require('../Toolbars/Toolbar'), require('../Drawers/isType'), require('./JumpToContentLink'), require('./CloseButton'), require('./MiniListItem'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.reactAddonsCssTransitionGroup, global.deprecated, global.isRequiredForA11y, global.getField, global.controlled, global.invalidIf, global.Button, global.Drawer, global.List, global.Toolbar, global.isType, global.JumpToContentLink, global.CloseButton, global.MiniListItem);
    global.NavigationDrawer = mod.exports;
  }
})(this, function (exports, _react, _classnames, _reactAddonsCssTransitionGroup, _deprecated, _isRequiredForA11y, _getField, _controlled, _invalidIf, _Button, _Drawer, _List, _Toolbar, _isType, _JumpToContentLink, _CloseButton, _MiniListItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

  var _deprecated2 = _interopRequireDefault(_deprecated);

  var _isRequiredForA11y2 = _interopRequireDefault(_isRequiredForA11y);

  var _getField2 = _interopRequireDefault(_getField);

  var _controlled2 = _interopRequireDefault(_controlled);

  var _invalidIf2 = _interopRequireDefault(_invalidIf);

  var _Button2 = _interopRequireDefault(_Button);

  var _Drawer2 = _interopRequireDefault(_Drawer);

  var _List2 = _interopRequireDefault(_List);

  var _Toolbar2 = _interopRequireDefault(_Toolbar);

  var _JumpToContentLink2 = _interopRequireDefault(_JumpToContentLink);

  var _CloseButton2 = _interopRequireDefault(_CloseButton);

  var _MiniListItem2 = _interopRequireDefault(_MiniListItem);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
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

  var DrawerTypes = _Drawer2.default.DrawerTypes;


  function getNonMiniType(type) {
    var pMini = DrawerTypes.PERSISTENT_MINI,
        tMini = DrawerTypes.TEMPORARY_MINI;

    if ([pMini, tMini].indexOf(type) === -1) {
      return type;
    }

    return pMini === type ? DrawerTypes.PERSISTENT : DrawerTypes.TEMPORARY;
  }

  function toMiniListItem(item, index) {
    if ((0, _react.isValidElement)(item)) {
      return item;
    }

    var divider = item.divider,
        subheader = item.subheader,
        key = item.key,
        itemProps = _objectWithoutProperties(item, ['divider', 'subheader', 'key']);

    if (divider || subheader) {
      return null;
    }

    delete itemProps.primaryText;
    delete itemProps.secondaryText;
    delete itemProps.rightIcon;
    delete itemProps.rightAvatar;
    delete itemProps.threeLines;
    delete itemProps.nestedItems;
    delete itemProps.expanderIconChildren;
    delete itemProps.expanderIconClassName;
    delete itemProps.children;

    return _react2.default.createElement(_MiniListItem2.default, _extends({ key: key || index }, itemProps));
  }

  /**
   * The `NavigationDrawer` is used when you want a full layout configuration. It is a combination
   * of the `Toolbar` component and the `Drawer` component.
   *
   * The main benfit of using this component is that it will manage adding respective offset
   * classes automatically for you to the content and the drawer. It will also manage using
   * a mini drawer type for you.
   */

  var NavigationDrawer = function (_PureComponent) {
    _inherits(NavigationDrawer, _PureComponent);

    _createClass(NavigationDrawer, null, [{
      key: 'getCurrentMedia',
      value: function getCurrentMedia() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : NavigationDrawer.defaultProps;

        var mobileType = props.mobileDrawerType,
            tabletType = props.tabletDrawerType,
            desktopType = props.desktopDrawerType,
            others = _objectWithoutProperties(props, ['mobileDrawerType', 'tabletDrawerType', 'desktopDrawerType']);

        return _Drawer2.default.getCurrentMedia(_extends({ mobileType: mobileType, tabletType: tabletType, desktopType: desktopType }, others));
      }
    }]);

    function NavigationDrawer(props) {
      _classCallCheck(this, NavigationDrawer);

      var _this = _possibleConstructorReturn(this, (NavigationDrawer.__proto__ || Object.getPrototypeOf(NavigationDrawer)).call(this, props));

      var defaultMedia = props.defaultMedia,
          defaultVisible = props.defaultVisible,
          initialDrawerType = props.initialDrawerType;


      _this.state = {
        mobile: initialDrawerType || defaultMedia === 'mobile',
        tablet: initialDrawerType || defaultMedia === 'tablet',
        desktop: initialDrawerType || defaultMedia === 'desktop'
      };

      if (typeof props.drawerType === 'undefined') {
        _this.state.drawerType = props[(initialDrawerType || defaultMedia) + 'DrawerType'];
      }

      var type = (0, _getField2.default)(props, _this.state, 'drawerType');

      if (typeof props.visible === 'undefined') {
        _this.state.visible = typeof defaultVisible !== 'undefined' ? defaultVisible : (0, _isType.isPermanent)(type);
      }

      _this._handleTypeChange = _this._handleTypeChange.bind(_this);
      _this._handleVisibility = _this._handleVisibility.bind(_this);
      _this._toggleVisibility = _this._toggleVisibility.bind(_this);
      return _this;
    }

    _createClass(NavigationDrawer, [{
      key: 'getChildContext',
      value: function getChildContext() {
        var _props = this.props,
            persistentIconChildren = _props.persistentIconChildren,
            persistentIconClassName = _props.persistentIconClassName,
            closeIconChildren = _props.closeIconChildren,
            closeIconClassName = _props.closeIconClassName,
            id = _props.contentId,
            label = _props.jumpLabel;


        return {
          id: id,
          label: label,
          closeChildren: closeIconChildren || persistentIconChildren,
          closeIconClassName: closeIconClassName || persistentIconClassName,
          onCloseClick: this._toggleVisibility,
          renderNode: this.context.renderNode
        };
      }
    }, {
      key: 'componentWillUpdate',
      value: function componentWillUpdate(nextProps, nextState) {
        var _this2 = this;

        var visible = (0, _getField2.default)(this.props, this.state, 'visible');
        var nVisible = (0, _getField2.default)(nextProps, nextState, 'visible');
        var drawerType = (0, _getField2.default)(nextProps, nextState, 'drawerType');

        if (!(0, _isType.isTemporary)(drawerType) && visible !== nVisible) {
          if (this._timeout) {
            clearTimeout(this._timeout);
          }

          this._timeout = setTimeout(function () {
            _this2.setState({ contentActive: false });
          }, nextProps.drawerTransitionDuration);

          this.setState({ contentActive: true });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this._timeout) {
          clearTimeout(this._timeout);
        }
      }
    }, {
      key: '_toggleVisibility',
      value: function _toggleVisibility(e) {
        var _props2 = this.props,
            onVisibilityToggle = _props2.onVisibilityToggle,
            onDrawerChange = _props2.onDrawerChange;

        var visible = !(0, _getField2.default)(this.props, this.state, 'visible');
        if (onVisibilityToggle || onDrawerChange) {
          (onDrawerChange || onVisibilityToggle)(visible, e);
        }

        if (typeof this.props.visible === 'undefined') {
          this.setState({ visible: visible });
        }
      }
    }, {
      key: '_handleVisibility',
      value: function _handleVisibility(visible, e) {
        if (this.props.onVisibilityToggle) {
          this.props.onVisibilityToggle(visible, e);
        }

        if (typeof this.props.visible === 'undefined') {
          this.setState({ visible: visible });
        }
      }
    }, {
      key: '_handleTypeChange',
      value: function _handleTypeChange(drawerType, mediaState) {
        var onMediaTypeChange = this.props.onMediaTypeChange;

        if (onMediaTypeChange) {
          onMediaTypeChange(drawerType, mediaState);
        }

        if (typeof this.props.drawerType === 'undefined') {
          mediaState.drawerType = drawerType;
        }

        var _state = this.state,
            mobile = _state.mobile,
            tablet = _state.tablet,
            desktop = _state.desktop;

        if (typeof this.props.visible === 'undefined' && (mediaState.mobile !== mobile || mediaState.tablet !== tablet || mediaState.desktop !== desktop)) {
          mediaState.visible = (0, _isType.isPermanent)(drawerType);
        }

        this.setState(mediaState);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props3 = this.props,
            style = _props3.style,
            className = _props3.className,
            toolbarStyle = _props3.toolbarStyle,
            toolbarClassName = _props3.toolbarClassName,
            drawerStyle = _props3.drawerStyle,
            drawerClassName = _props3.drawerClassName,
            contentStyle = _props3.contentStyle,
            contentClassName = _props3.contentClassName,
            Content = _props3.contentComponent,
            navItems = _props3.navItems,
            children = _props3.children,
            drawerTitle = _props3.drawerTitle,
            drawerChildren = _props3.drawerChildren,
            drawerHeaderChildren = _props3.drawerHeaderChildren,
            drawerTransitionDuration = _props3.drawerTransitionDuration,
            toolbarTitle = _props3.toolbarTitle,
            toolbarTitleMenu = _props3.toolbarTitleMenu,
            toolbarTitleStyle = _props3.toolbarTitleStyle,
            toolbarTitleClassName = _props3.toolbarTitleClassName,
            toolbarActions = _props3.toolbarActions,
            toolbarProminent = _props3.toolbarProminent,
            toolbarProminentTitle = _props3.toolbarProminentTitle,
            toolbarThemeType = _props3.toolbarThemeType,
            toolbarSingleColor = _props3.toolbarSingleColor,
            toolbarChildren = _props3.toolbarChildren,
            mobileType = _props3.mobileDrawerType,
            tabletType = _props3.tabletDrawerType,
            desktopType = _props3.desktopDrawerType,
            transitionName = _props3.transitionName,
            transitionEnterTimeout = _props3.transitionEnterTimeout,
            transitionLeaveTimeout = _props3.transitionLeaveTimeout,
            extractMini = _props3.extractMini,
            miniDrawerHeader = _props3.miniDrawerHeader,
            miniDrawerChildren = _props3.miniDrawerChildren,
            temporaryIconChildren = _props3.temporaryIconChildren,
            temporaryIconClassName = _props3.temporaryIconClassName,
            menuIconChildren = _props3.menuIconChildren,
            menuIconClassName = _props3.menuIconClassName,
            footer = _props3.footer,
            includeDrawerHeader = _props3.includeDrawerHeader,
            contentId = _props3.contentId,
            contentProps = _props3.contentProps,
            props = _objectWithoutProperties(_props3, ['style', 'className', 'toolbarStyle', 'toolbarClassName', 'drawerStyle', 'drawerClassName', 'contentStyle', 'contentClassName', 'contentComponent', 'navItems', 'children', 'drawerTitle', 'drawerChildren', 'drawerHeaderChildren', 'drawerTransitionDuration', 'toolbarTitle', 'toolbarTitleMenu', 'toolbarTitleStyle', 'toolbarTitleClassName', 'toolbarActions', 'toolbarProminent', 'toolbarProminentTitle', 'toolbarThemeType', 'toolbarSingleColor', 'toolbarChildren', 'mobileDrawerType', 'tabletDrawerType', 'desktopDrawerType', 'transitionName', 'transitionEnterTimeout', 'transitionLeaveTimeout', 'extractMini', 'miniDrawerHeader', 'miniDrawerChildren', 'temporaryIconChildren', 'temporaryIconClassName', 'menuIconChildren', 'menuIconClassName', 'footer', 'includeDrawerHeader', 'contentId', 'contentProps']);

        delete props.drawerType;
        delete props.drawerHeader;
        delete props.persistentIconChildren;
        delete props.persistentIconClassName;
        delete props.jumpLabel;
        delete props.renderNode;

        // Deprecated deletes
        delete props.onDrawerChange;
        delete props.closeIconChildren;
        delete props.closeIconClassName;

        var drawerHeader = this.props.drawerHeader;
        var _state2 = this.state,
            desktop = _state2.desktop,
            tablet = _state2.tablet,
            contentActive = _state2.contentActive;


        var drawerType = (0, _getField2.default)(this.props, this.state, 'drawerType');
        var visible = (0, _getField2.default)(this.props, this.state, 'visible');
        var renderNode = (0, _getField2.default)(this.props, this.context, 'renderNode');
        var mini = (0, _isType.isMini)(drawerType);
        var temporary = (0, _isType.isTemporary)(drawerType);
        var persistent = (0, _isType.isPersistent)(drawerType);
        var clipped = drawerType === DrawerTypes.CLIPPED;
        var floating = drawerType === DrawerTypes.FLOATING;

        var offset = desktop || tablet ? !temporary && visible : visible;
        var toolbarRelative = (0, _classnames2.default)({
          'md-toolbar-relative': !toolbarProminent && !toolbarProminentTitle,
          'md-toolbar-relative--prominent': toolbarProminent || toolbarProminentTitle
        });

        var nav = void 0;
        if (temporary || persistent) {
          nav = _react2.default.createElement(
            _Button2.default,
            {
              key: 'nav',
              onClick: this._toggleVisibility,
              disabled: persistent && visible,
              icon: true,
              iconClassName: menuIconClassName || temporaryIconClassName
            },
            menuIconChildren || temporaryIconChildren
          );
        }

        var closeButton = void 0;
        if (persistent) {
          closeButton = _react2.default.createElement(_CloseButton2.default, null);
        }

        if (!drawerHeader && includeDrawerHeader) {
          drawerHeader = _react2.default.createElement(
            _Toolbar2.default,
            {
              key: 'drawer-header',
              title: drawerTitle,
              actions: visible && nav ? closeButton : null,
              className: (0, _classnames2.default)('md-divider-border md-divider-border--bottom', _defineProperty({}, toolbarRelative, clipped || floating))
            },
            drawerHeaderChildren,
            _react2.default.createElement(_JumpToContentLink2.default, null)
          );
        }
        var miniDrawer = void 0;
        if (mini) {
          var miniList = void 0;
          if (extractMini) {
            miniList = navItems.map(toMiniListItem);
            miniList = _react2.default.createElement(
              _List2.default,
              { key: 'mini-nav-items', className: toolbarRelative },
              miniList
            );
          }

          miniDrawer = _react2.default.createElement(
            _Drawer2.default,
            { key: 'mini-drawer', type: drawerType, renderNode: renderNode, 'aria-hidden': visible },
            miniDrawerHeader,
            miniList,
            miniDrawerChildren
          );
        }

        var desktopOffset = !clipped && !floating && offset;

        return _react2.default.createElement(
          'div',
          { style: style, className: className },
          _react2.default.createElement(
            _Toolbar2.default,
            {
              colored: toolbarThemeType === 'colored',
              themed: toolbarThemeType === 'themed',
              singleColor: toolbarSingleColor,
              style: toolbarStyle,
              className: (0, _classnames2.default)({
                'md-toolbar--over-drawer': clipped || floating || mini && !visible
              }, toolbarClassName),
              title: toolbarTitle,
              titleMenu: toolbarTitleMenu,
              prominent: toolbarProminent,
              prominentTitle: toolbarProminentTitle,
              titleStyle: toolbarTitleStyle,
              titleClassName: (0, _classnames2.default)({
                'md-title--drawer-active': contentActive,
                'md-transition--decceleration': offset && visible,
                'md-transition--acceleration': offset && !visible,
                'md-title--permanent-offset': desktopOffset && (0, _isType.isPermanent)(drawerType),
                'md-title--persistent-offset': desktopOffset && persistent
              }, toolbarTitleClassName),
              nav: nav,
              actions: toolbarActions,
              fixed: true
            },
            toolbarChildren
          ),
          miniDrawer,
          _react2.default.createElement(
            _Drawer2.default,
            _extends({}, props, {
              transitionDuration: drawerTransitionDuration,
              header: drawerHeader,
              style: drawerStyle,
              className: drawerClassName,
              navItems: navItems,
              renderNode: renderNode,
              mobileType: mobileType,
              tabletType: tabletType,
              desktopType: desktopType,
              type: getNonMiniType(drawerType),
              visible: visible,
              onVisibilityToggle: this._handleVisibility,
              onMediaTypeChange: this._handleTypeChange
            }),
            drawerChildren
          ),
          _react2.default.createElement(
            _reactAddonsCssTransitionGroup2.default,
            _extends({}, contentProps, {
              id: contentId,
              component: Content,
              transitionName: transitionName,
              transitionEnter: !!transitionEnterTimeout,
              transitionEnterTimeout: transitionEnterTimeout,
              transitionLeave: !!transitionLeaveTimeout,
              transitionLeaveTimeout: transitionLeaveTimeout,
              tabIndex: -1,
              style: contentStyle,
              className: (0, _classnames2.default)('md-navigation-drawer-content', {
                'md-navigation-drawer-content--active': contentActive,
                'md-navigation-drawer-content--inactive': !visible,
                'md-navigation-drawer-content--prominent-offset': toolbarProminent || toolbarProminentTitle,
                'md-transition--decceleration': visible,
                'md-transition--acceleration': !visible,
                'md-drawer-relative': offset,
                'md-drawer-relative--mini': mini && (!visible || temporary)
              }, toolbarRelative, contentClassName)
            }),
            children
          ),
          footer
        );
      }
    }]);

    return NavigationDrawer;
  }(_react.PureComponent);

  NavigationDrawer.DrawerType = { // deprecated
    /* eslint-disable no-console */
    _warned: false,
    _msg: 'Invalid use of `NavigationDrawer.DrawerType.{{TYPE}}`. The `NavigationDrawer.DrawerType` ' + 'has been deprecated and will be removed in the next release. Please use the ' + '`NavigationDrawer.DrawerTypes.{{TYPE}}` instead.',

    get FULL_HEIGHT() {
      if (!this._warned) {
        console.error(this._msg.replace(/{{TYPE}}/g, 'FULL_HEIGHT'));
      }
      this._warned = true;

      return DrawerTypes.FULL_HEIGHT;
    },

    get CLIPPED() {
      if (!this._warned) {
        console.error(this._msg.replace(/{{TYPE}}/g, 'CLIPPED'));
      }
      this._warned = true;

      return DrawerTypes.CLIPPED;
    },

    get FLOATING() {
      if (!this._warned) {
        console.error(this._msg.replace(/{{TYPE}}/g, 'FLOATING'));
      }
      this._warned = true;

      return DrawerTypes.FLOATING;
    },

    get PERSISTENT() {
      if (!this._warned) {
        console.error(this._msg.replace(/{{TYPE}}/g, 'PERSISTENT'));
      }
      this._warned = true;

      return DrawerTypes.PERSISTENT;
    },

    get PERSISTENT_MINI() {
      if (!this._warned) {
        console.error(this._msg.replace(/{{TYPE}}/g, 'PERSISTENT_MINI'));
      }
      this._warned = true;

      return DrawerTypes.PERSISTENT_MINI;
    },

    get TEMPORARY() {
      if (!this._warned) {
        console.error(this._msg.replace(/{{TYPE}}/g, 'TEMPORARY'));
      }
      this._warned = true;

      return DrawerTypes.TEMPORARY;
    },

    get TEMPORARY_MINI() {
      if (!this._warned) {
        console.error(this._msg.replace(/{{TYPE}}/g, 'TEMPORARY_MINI'));
      }
      this._warned = true;

      return DrawerTypes.TEMPORARY_MINI;
    }
  };
  NavigationDrawer.DrawerTypes = DrawerTypes;
  NavigationDrawer.propTypes = {
    /**
     * An optional style to apply to the surrounding container.
     */
    style: _react.PropTypes.object,

    /**
     * An optional className to apply to the surrounding container.
     */
    className: _react.PropTypes.string,

    /**
     * An optional style to apply to the main toolbar.
     */
    toolbarStyle: _react.PropTypes.object,

    /**
     * An optional className to apply to the toolbar.
     */
    toolbarClassName: _react.PropTypes.string,

    /**
     * An optional style to apply to the main toolbar's title.
     */
    toolbarTitleStyle: _react.PropTypes.object,

    /**
     * An optional className to apply to the main toolbar's title.
     */
    toolbarTitleClassName: _react.PropTypes.string,

    /**
     * An optional style to apply to the drawer.
     */
    drawerStyle: _react.PropTypes.object,

    /**
     * An optional className to apply to the drawer.
     */
    drawerClassName: _react.PropTypes.string,

    /**
     * An optional style to apply to the content. This is the container surrounding whatever
     * `children` are passed in.
     */
    contentStyle: _react.PropTypes.object,

    /**
     * An optional className to apply to the content. This is the container surrounding whatever
     * `children` are passed in.
     */
    contentClassName: _react.PropTypes.string,

    /**
     * The children to display in the main content.
     */
    children: _react.PropTypes.node,

    /**
     * Boolean if the `drawerHeader` component should be built if the `drawerHeader` prop is not
     * passed in.
     */
    includeDrawerHeader: _react.PropTypes.bool,

    /**
     * An optional header to display in the drawer. This will normally be the `Toolbar` component
     * or any other type of header. You can either use this prop with the `CloseButton` component
     * when displaying a persistent drawer, or use the `drawerTitle` and `drawerHeaderChildren` prop
     * to build a toolbar.
     */
    drawerHeader: _react.PropTypes.node,

    /**
     * An optional title to use for the drawer's header toolbar. If the `drawerHeader` prop is defined,
     * this is invalid.
     */
    drawerTitle: (0, _invalidIf2.default)(_react.PropTypes.node, 'drawerHeader'),

    /**
     * Any additional children to display in the drawer's header `Toolbar`. If the `drawerHeader` prop is defined,
     * this is invalud.
     */
    drawerHeaderChildren: (0, _invalidIf2.default)(_react.PropTypes.node, 'drawerHeader'),

    /**
     * Any additional children to display after the `drawerHeader` and `navItems` list in the drawer.
     */
    drawerChildren: _react.PropTypes.node,

    /**
     * The position for the drawer to be displayed.
     */
    position: _react.PropTypes.oneOf(['left', 'right']).isRequired,

    /**
     * An optional list of elements or props to use to build a navigational list in the drawer.
     * When the item is an object of props, it will build a `ListItem` component unless a key of
     * `divider` or `subheader` is set to true. It will then create the Divider or Subheader component
     * with any other remaining keys.
     */
    navItems: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.shape({
      divider: _react.PropTypes.bool,
      subheader: _react.PropTypes.bool,
      primaryText: _react.PropTypes.string
    })])),

    /**
     * The drawer type to use for mobile devices.
     */
    mobileDrawerType: _react.PropTypes.oneOf([DrawerTypes.TEMPORARY, DrawerTypes.TEMPORARY_MINI]).isRequired,

    /**
     * The drawer tye to use for tablets.
     */
    tabletDrawerType: _react.PropTypes.oneOf([DrawerTypes.FULL_HEIGHT, DrawerTypes.CLIPPED, DrawerTypes.FLOATING, DrawerTypes.PERSISTENT, DrawerTypes.PERSISTENT_MINI, DrawerTypes.TEMPORARY, DrawerTypes.TEMPORARY_MINI]).isRequired,

    /**
     * The drawer type to use for desktop displays.
     */
    desktopDrawerType: _react.PropTypes.oneOf([DrawerTypes.FULL_HEIGHT, DrawerTypes.CLIPPED, DrawerTypes.FLOATING, DrawerTypes.PERSISTENT, DrawerTypes.PERSISTENT_MINI, DrawerTypes.TEMPORARY, DrawerTypes.TEMPORARY_MINI]).isRequired,

    /**
     * An optional drawer type to enforce on all screen sizes. If the drawer type is not
     * `temporary`, you are required to define the `onMediaTypeChange` prop to handle switching
     * to temporary when the media matches a mobile device.
     * ```
     */
    drawerType: _react.PropTypes.oneOf([DrawerTypes.FULL_HEIGHT, DrawerTypes.CLIPPED, DrawerTypes.FLOATING, DrawerTypes.PERSISTENT, DrawerTypes.PERSISTENT_MINI, DrawerTypes.TEMPORARY, DrawerTypes.TEMPORARY_MINI]),

    /**
     * The default media match for the drawer. This will be what is displayed on first render.
     * The component will adjust itself to the current media after it has mounted, but this
     * is mostly used for server side rendering.
     */
    defaultMedia: _react.PropTypes.oneOf(['mobile', 'tablet', 'desktop']),

    /**
     * The min width to use for a mobile media query. This prop should match the `md-mobile-min-width`
     * variable.
     *
     * The media query for a mobile device will be:
     *
     * ```js
     * window.matchMedia(
     *   `screen and (min-width: ${mobileMinWidth}px) and (max-width: ${tabletMinWidth - 1}px`
     * ).matches;
     * ```
     */
    mobileMinWidth: _react.PropTypes.number.isRequired,

    /**
     * The min width to use for a tablet media query. This prop should match the `md-tablet-min-width`
     * variable.
     *
     * The media query for a tablet device will be:
     *
     * ```js
     * window.matchMedia(
     *   `screen and (min-width: ${tabletMinWidth}px) and (max-width: ${desktopWidth - 1}px`
     * ).matches;
     * ```
     */
    tabletMinWidth: _react.PropTypes.number.isRequired,

    /**
     * The min width to use for a desktop media query. This prop should match the `md-desktop-min-width`
     * variable.
     *
     * The media query for a tablet device will be:
     *
     * ```js
     * window.matchMedia(`screen and (min-width: ${tabletMinWidth}px)`).matches;
     * ```
     */
    desktopMinWidth: _react.PropTypes.number.isRequired,

    /**
     * An optional function to call when the type of the drawer changes because of the
     * new media queries. The callback will include the newly selected drawer type
     * and an object containing the media matches of `mobile`, `tablet`, and `desktop`.
     *
     * ```js
     * this.props.onMediaTypeChange(NavigationDrawer.DrawerTypes.TEMPORARY, {
     *   mobile: true,
     *   tablet: false,
     *   desktop: false,
     * });
     * ```
     */
    onMediaTypeChange: _react.PropTypes.func,

    /**
     * Boolean if the temporary or persistent drawers are visible by default.
     */
    defaultVisible: _react.PropTypes.bool,

    /**
     * Boolean if the temporary or persistent drawers are visible. If this is defined,
     * it will make the component controlled and require the `onVisibilityToggle` prop
     * to be defined.
     */
    visible: (0, _controlled2.default)(_react.PropTypes.bool, 'onVisibilityToggle', 'defaultVisible'),

    /**
     * An optional function to call when the visibility of the drawer changes. The callback
     * will include the new visibility and the event that triggered the change.
     *
     * ```js
     * this.props.onVisibilityToggle(false, event);
     * ```
     */
    onVisibilityToggle: _react.PropTypes.func,

    /**
     * A boolean if the mini drawer's list should be generated from the `navItems` prop. When building
     * the list, it will extract the `leftIcon` or `leftAvatar` from the `navItem` and then create a
     * mini `ListItem` containing only that icon or image. Any other event listeners will also be applied.
     *
     *
     * @see miniDrawerHeader
     * @see miniDrawerChildren
     */
    extractMini: _react.PropTypes.bool,

    /**
     * An optional header to display in the mini drawer. This will be displayed above the optional
     * mini nav list that get generated if the `extractMini` prop is `true` and the `miniDrawerChildren`.
     *
     * @see extractMini
     */
    miniDrawerHeader: _react.PropTypes.node,

    /**
     * Any additional children to display in the mini drawer. This will be displayed after the `miniDrawerHeader`
     * and the optional mini nav list that gets generated if the `extractMini` prop is `true`.
     *
     * @see extractMini
     */
    miniDrawerChildren: _react.PropTypes.node,

    /**
     * Boolean if the drawer should automatically close after a nav item has been clicked for `temporary` drawers.
     */
    autoclose: _react.PropTypes.bool,

    /**
     * An optional title to display in the main toolbar. Either the `toolbarTitle` or the `toolbarTitleMenu`
     * may be defined, not both.
     */
    toolbarTitle: (0, _invalidIf2.default)(_react.PropTypes.node, 'toolbarTitleMenu'),

    /**
     * An optional select field menu to display in the main toolbar. Either the `toolbarTitle` or the `toolbarTitleMenu`
     * may be defined, not both.
     */
    toolbarTitleMenu: _react.PropTypes.element,

    /**
     * The theme style for the main toolbar.
     *
     * @see [toolbars](/components/toolbars#prop-types-toolbar)
     */
    toolbarThemeType: _react.PropTypes.oneOf(['default', 'colored', 'themed']).isRequired,

    /**
     * Boolean if the toolbar's nav, actions, and title should share the same color.
     */
    toolbarSingleColor: _react.PropTypes.bool,

    /**
     * A boolean if the toolbar should be prominent.
     */
    toolbarProminent: _react.PropTypes.bool,

    /**
     * A boolean if the toolbar's title should be prominent.
     */
    toolbarProminentTitle: _react.PropTypes.bool,

    /**
     * A list of elements or a single element to display to the right of the
     * toolbar's nav, title, and children.
     *
     * @see [toolbars](/components/toolbars#prop-types-toolbar)
     */
    toolbarActions: _Toolbar2.default.propTypes.actions,

    /**
     * Any children to display in the toolbar. This will be displayed between the optional title and
     * actions.
     */
    toolbarChildren: _Toolbar2.default.propTypes.children,

    /**
     * The component to render the content in.
     */
    contentComponent: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,

    /**
     * An optional footer display after the main content.
     */
    footer: _react.PropTypes.node,

    /**
     * Any children used to render a button that will toggle the visibility of the
     * navigation drawer for `temporary` and `persistent` drawers. This is normally a
     * hamburger menu.
     */
    temporaryIconChildren: _react.PropTypes.node,

    /**
     * The icon className used to render a button that will toggle the visibility of the
     * navigation drawer for `temporary` and `persistent` drawers. This is normally a
     * hamburger menu.
     */
    temporaryIconClassName: _react.PropTypes.string,

    /**
     * Any children used to render a button that appears on a persistent drawer's open
     * header. This is used to create the `CloseButton` for drawers. When a persistent
     * drawer is closed, the `temporaryIconChildren` and `temporaryIconClassName` props
     * will be used to create a button to open the drawer.
     *
     * If the `drawerHeader` prop is defined, you will have to either include the `CloseButton`
     * in your header manually, or create your own controlled button to close the drawer.
     */
    persistentIconChildren: _react.PropTypes.node,

    /**
     * The icon classNameused to render a button that appears on a persistent drawer's open
     * header. This is used to create the `CloseButton` for drawers. When a persistent
     * drawer is closed, the `temporaryIconChildren` and `temporaryIconClassName` props
     * will be used to create a button to open the drawer.
     *
     * If the `drawerHeader` prop is defined, you will have to either include the `CloseButton`
     * in your header manually, or create your own controlled button to close the drawer.
     */
    persistentIconClassName: _react.PropTypes.string,

    /**
     * The transition name to use when the page's content changes. If you want to disable
     * transitions, set both the `transitionEnterTimeout` and `transitionLeaveTimeout` props
     * to a false-ish value. (`null`, `undefined`, or `0`).
     */
    transitionName: _react.PropTypes.string.isRequired,

    /**
     * The transition enter timeout when the page's content changes. If you want to disable
     * the enter transition, set this to a false-ish value (`null`, `undefined`, or `0`).
     */
    transitionEnterTimeout: _react.PropTypes.number,

    /**
     * The transition leave timeout when the page's content changes. If you want to disable
     * the leave transition, set this to a false-ish value (`null`, `undefined`, or `0`).
     */
    transitionLeaveTimeout: _react.PropTypes.number,

    /**
     * The transition duration for the drawer when sliding in and out of view.
     */
    drawerTransitionDuration: _react.PropTypes.number.isRequired,

    /**
     * Any additional props to provide to the main content. This will be applied before any of the generated props,
     * so this should not include `style`, `className`, or `component`.
     */
    contentProps: _react.PropTypes.object,

    /**
     * An id to give the main content. A hidden link is created in the main drawer's header that links to the main
     * content. This is used for keyboard only users to jump the navigation and jump straight to the content.
     *
     * If you provide your own `drawerHeader`, it is suggested to include the link yourself.
     */
    contentId: (0, _isRequiredForA11y2.default)(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])),

    /**
     * The label to use for a keyboard accessibility link that jumps all the navigation and allows a user to focus
     * the main content. This is created in the drawer's header.
     */
    jumpLabel: _react.PropTypes.string.isRequired,

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

    menuIconChildren: (0, _deprecated2.default)(_react.PropTypes.node, 'Use `temporaryIconChildren` instead'),
    menuIconClassName: (0, _deprecated2.default)(_react.PropTypes.string, 'Use `temporaryIconClassName` instead'),
    closeIconChildren: (0, _deprecated2.default)(_react.PropTypes.node, 'Use `persistentIconChildren` instead'),
    closeIconClassName: (0, _deprecated2.default)(_react.PropTypes.string, 'Use `persistentIconClassName` instead'),
    onDrawerChange: (0, _deprecated2.default)(_react.PropTypes.func, 'Use `onVisibilityToggle` or `onMediaTypeChange` instead'),
    contentTransitionName: (0, _deprecated2.default)(_react.PropTypes.string, 'Use `transitionName` instead'),
    contentTransitionEnterTimeout: (0, _deprecated2.default)(_react.PropTypes.number, 'Use `transtionEnterTimeout` instead'),
    contentTransitionLeaveTimeout: (0, _deprecated2.default)(_react.PropTypes.number, 'Use `transtionLeaveTimeout` instead'),
    initialDrawerType: (0, _deprecated2.default)(_react.PropTypes.oneOf(['mobile', 'tablet', 'desktop']), 'Use `defaultMedia` instead')
  };
  NavigationDrawer.contextTypes = {
    renderNode: _react.PropTypes.object
  };
  NavigationDrawer.childContextTypes = {
    closeIconClassName: _react.PropTypes.string,
    closeChildren: _react.PropTypes.node,
    onCloseClick: _react.PropTypes.func,
    id: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]).isRequired,
    label: _react.PropTypes.string.isRequired,
    renderNode: _react.PropTypes.object
  };
  NavigationDrawer.defaultProps = {
    autoclose: _Drawer2.default.defaultProps.autoclose,
    contentId: 'main-content',
    jumpLabel: 'Jump to content',
    extractMini: true,
    position: _Drawer2.default.defaultProps.position,
    defaultMedia: _Drawer2.default.defaultProps.defaultMedia,
    mobileDrawerType: _Drawer2.default.defaultProps.mobileType,
    tabletDrawerType: _Drawer2.default.defaultProps.tabletType,
    desktopDrawerType: _Drawer2.default.defaultProps.desktopType,
    mobileMinWidth: _Drawer2.default.defaultProps.mobileMinWidth,
    tabletMinWidth: _Drawer2.default.defaultProps.tabletMinWidth,
    desktopMinWidth: _Drawer2.default.defaultProps.desktopMinWidth,
    includeDrawerHeader: true,
    contentComponent: 'main',
    temporaryIconChildren: 'menu',
    toolbarThemeType: 'colored',
    persistentIconChildren: 'arrow_back',
    transitionName: 'md-cross-fade',
    transitionEnterTimeout: 300,
    drawerTransitionDuration: _Drawer2.default.defaultProps.transitionDuration
  };
  exports.default = NavigationDrawer;
});