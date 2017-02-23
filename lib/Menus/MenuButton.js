(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-prop-types/lib/isRequiredForA11y', './Menu', '../Buttons/Button', './Positions'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-prop-types/lib/isRequiredForA11y'), require('./Menu'), require('../Buttons/Button'), require('./Positions'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.isRequiredForA11y, global.Menu, global.Button, global.Positions);
    global.MenuButton = mod.exports;
  }
})(this, function (exports, _react, _isRequiredForA11y, _Menu, _Button, _Positions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _isRequiredForA11y2 = _interopRequireDefault(_isRequiredForA11y);

  var _Menu2 = _interopRequireDefault(_Menu);

  var _Button2 = _interopRequireDefault(_Button);

  var _Positions2 = _interopRequireDefault(_Positions);

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

  var MenuButton = function (_PureComponent) {
    _inherits(MenuButton, _PureComponent);

    function MenuButton(props) {
      _classCallCheck(this, MenuButton);

      var _this = _possibleConstructorReturn(this, (MenuButton.__proto__ || Object.getPrototypeOf(MenuButton)).call(this, props));

      _this.state = {
        isOpen: props.defaultOpen || false
      };
      _this._toggleMenu = _this._toggleMenu.bind(_this);
      _this._closeMenu = _this._closeMenu.bind(_this);
      return _this;
    }

    _createClass(MenuButton, [{
      key: '_toggleMenu',
      value: function _toggleMenu(e) {
        var isOpen = !this.state.isOpen;
        if (this.props.onClick) {
          this.props.onClick(e);
        }

        if (this.props.onMenuToggle) {
          this.props.onMenuToggle(isOpen, e);
        }

        this.setState({ isOpen: isOpen });
      }
    }, {
      key: '_closeMenu',
      value: function _closeMenu(e) {
        if (this.props.onMenuToggle) {
          this.props.onMenuToggle(false, e);
        }

        this.setState({ isOpen: false });
      }
    }, {
      key: 'render',
      value: function render() {
        var isOpen = this.state.isOpen;

        var _props = this.props,
            id = _props.id,
            listId = _props.listId,
            buttonId = _props.buttonId,
            menuStyle = _props.menuStyle,
            menuClassName = _props.menuClassName,
            buttonChildren = _props.buttonChildren,
            children = _props.children,
            fullWidth = _props.fullWidth,
            position = _props.position,
            contained = _props.contained,
            transitionName = _props.transitionName,
            transitionEnterTimeout = _props.transitionEnterTimeout,
            transitionLeaveTimeout = _props.transitionLeaveTimeout,
            props = _objectWithoutProperties(_props, ['id', 'listId', 'buttonId', 'menuStyle', 'menuClassName', 'buttonChildren', 'children', 'fullWidth', 'position', 'contained', 'transitionName', 'transitionEnterTimeout', 'transitionLeaveTimeout']);

        delete props.onClick;
        delete props.defaultOpen;

        var toggle = _react2.default.createElement(
          _Button2.default,
          _extends({
            key: 'menu-button'
          }, props, {
            id: buttonId,
            onClick: this._toggleMenu
          }),
          buttonChildren
        );

        return _react2.default.createElement(
          _Menu2.default,
          {
            id: id,
            listId: listId,
            style: menuStyle,
            className: menuClassName,
            toggle: toggle,
            isOpen: isOpen,
            onClose: this._closeMenu,
            contained: contained,
            position: position,
            fullWidth: fullWidth,
            transitionName: transitionName,
            transitionEnterTimeout: transitionEnterTimeout,
            transitionLeaveTimeout: transitionLeaveTimeout
          },
          children
        );
      }
    }]);

    return MenuButton;
  }(_react.PureComponent);

  MenuButton.Positions = _Positions2.default;
  MenuButton.propTypes = {
    /**
     * An id to use for the menu button. This is required for a11y
     */
    id: (0, _isRequiredForA11y2.default)(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])),

    /**
     * An optional id to give the button instead of the menu.
     */
    buttonId: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),

    /**
     * An optional id to give the list that appears in the menu.
     */
    listId: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),

    /**
     * An optional style to apply to the button.
     */
    style: _react.PropTypes.object,

    /**
     * An optional className to apply to the button.
     */
    className: _react.PropTypes.string,

    /**
     * An optional style to apply to the menu.
     */
    menuStyle: _react.PropTypes.object,

    /**
     * An optional className to apply to the menu.
     */
    menuClassName: _react.PropTypes.string,

    /**
     * An optional style to apply to the menu's list when it is open.
     */
    listStyle: _react.PropTypes.object,

    /**
     * An optional className to apply to the menu's list when it is open.
     */
    listClassName: _react.PropTypes.string,

    /**
     * Any children used to render icons or anything else for the button.
     */
    buttonChildren: _react.PropTypes.node,

    /**
     * An optional function to call when the button is clicked.
     */
    onClick: _react.PropTypes.func,

    /**
     * An optional function to call when the menu's visiblity is toggled. The callback
     * will include the next `open` state and the click event.
     */
    onMenuToggle: _react.PropTypes.func,

    /**
     * Boolean if the MenuButton is open by default.
     */
    defaultOpen: _react.PropTypes.bool,

    /**
     * The position for the menu.
     */
    position: _react.PropTypes.oneOf([_Positions2.default.TOP_LEFT, _Positions2.default.TOP_RIGHT, _Positions2.default.BOTTOM_LEFT, _Positions2.default.BOTTOM_RIGHT, _Positions2.default.BELOW]),

    /**
     * A list of `ListItem`s to render when the Menu is toggled open.
     */
    children: _react.PropTypes.node,

    /**
     * Boolean if the `Menu` is displayed as full width.
     */
    fullWidth: _react.PropTypes.bool,

    /**
     * Boolean if the max width of the menu's list should be equal to the `Button`.
     */
    contained: _react.PropTypes.bool,

    /**
     * An optional transition name to use for the menu transitions.
     */
    transitionName: _react.PropTypes.string,

    /**
     * An optional transition leave timeout to use for the menu transitions.
     */
    transitionEnterTimeout: _react.PropTypes.number,

    /**
     * An optional transition leave timeout to use for the menu transitions.
     */
    transitionLeaveTimeout: _react.PropTypes.number
  };
  exports.default = MenuButton;
});