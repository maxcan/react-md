(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-prop-types/lib/deprecated', 'react-prop-types/lib/isRequiredForA11y', '../utils/PropTypes/controlled', './SelectionControl'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-prop-types/lib/deprecated'), require('react-prop-types/lib/isRequiredForA11y'), require('../utils/PropTypes/controlled'), require('./SelectionControl'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.deprecated, global.isRequiredForA11y, global.controlled, global.SelectionControl);
    global.Checkbox = mod.exports;
  }
})(this, function (exports, _react, _deprecated, _isRequiredForA11y, _controlled, _SelectionControl) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _deprecated2 = _interopRequireDefault(_deprecated);

  var _isRequiredForA11y2 = _interopRequireDefault(_isRequiredForA11y);

  var _controlled2 = _interopRequireDefault(_controlled);

  var _SelectionControl2 = _interopRequireDefault(_SelectionControl);

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

  var Checkbox = function (_PureComponent) {
    _inherits(Checkbox, _PureComponent);

    function Checkbox() {
      _classCallCheck(this, Checkbox);

      return _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
    }

    _createClass(Checkbox, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            checkedIconChildren = _props.checkedIconChildren,
            checkedIconClassName = _props.checkedIconClassName,
            uncheckedIconChildren = _props.uncheckedIconChildren,
            uncheckedIconClassName = _props.uncheckedIconClassName,
            props = _objectWithoutProperties(_props, ['checkedIconChildren', 'checkedIconClassName', 'uncheckedIconChildren', 'uncheckedIconClassName']);

        return _react2.default.createElement(_SelectionControl2.default, _extends({
          type: 'checkbox',
          checkedCheckboxIconChildren: checkedIconChildren,
          checkedCheckboxIconClassName: checkedIconClassName,
          uncheckedCheckboxIconChildren: uncheckedIconChildren,
          uncheckedCheckboxIconClassName: uncheckedIconClassName,
          __superSecreteProp: true
        }, props));
      }
    }]);

    return Checkbox;
  }(_react.PureComponent);

  Checkbox.propTypes = {
    /**
     * An id to use with the checkbox. This is used for accessibility and so that the label
     * triggers the checkbox toggle.
     */
    id: (0, _isRequiredForA11y2.default)(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])),

    /**
     * An optional style to apply to the checkbox's container.
     */
    style: _react.PropTypes.object,

    /**
     * An optional className to apply to the checkbox's container.
     */
    className: _react.PropTypes.string,

    /**
     * A label to display with the checkbox. This is required for accessibility and triggering
     * the toggle.
     */
    label: _react.PropTypes.node,

    /**
     * Boolean if the label should appear before the checkbox icon.
     */
    labelBefore: _react.PropTypes.bool,

    /**
     * A name to use for the `Checkbox`. This is required for accessibility. If the checkbox is
     * part of a group, it is recommended to make this a string ending in `[]` so that the
     * value can be found from `document.querySelector('input[name="someName[]"]').value`.
     */
    name: (0, _isRequiredForA11y2.default)(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])),

    /**
     * Boolean if the `Checkbox` is disabled.
     */
    disabled: _react.PropTypes.bool,

    /**
     * An optional function to call when the `checked` state of the `Checkbox` changes.
     * The callback will incude the new checked state and the changeEvent.
     *
     * ```js
     * onChange(changeEvent.target.checked, changeEvent);
     * ```
     */
    onChange: _react.PropTypes.func,

    /**
     * An optional value for the `Checkbox`. It is recommended to use a value though.
     */
    value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),

    /**
     * Boolean if the `Checkbox` is checked by default.
     */
    defaultChecked: _react.PropTypes.bool,

    /**
     * A boolean if the `Checkbox` is currently checked. This will required the `onChange` prop
     * to be defined.
     */
    checked: (0, _controlled2.default)(_react.PropTypes.bool, 'onChange', 'defaultChecked'),

    /**
     * Boolean if the `Checkbox` should be displayed inline.
     */
    inline: _react.PropTypes.bool,

    /**
     * Any children to use for the checked `FontIcon` of the `Checkbox`.
     */
    checkedIconChildren: _react.PropTypes.node,

    /**
     * An icon className to use for the checked `FontIcon` of the `Checkbox`.
     */
    checkedIconClassName: _react.PropTypes.string,

    /**
     * Any children to use for the unchecked `FontIcon` of the `Checkbox`.
     */
    uncheckedIconChildren: _react.PropTypes.node,

    /**
     * An icon className to use for the unchecked `FontIcon` of the `Checkbox`.
     */
    uncheckedIconClassName: _react.PropTypes.string,

    checkedIcon: (0, _deprecated2.default)(_react.PropTypes.node, 'Use the `checkedIconChildren` and `checkedIconClassName` props instead'),
    uncheckedIcon: (0, _deprecated2.default)(_react.PropTypes.node, 'Use the `uncheckedIconChildren` and `uncheckedIconClassName` props instead')
  };
  Checkbox.defaultProps = {
    checkedIconChildren: 'check_box',
    uncheckedIconChildren: 'check_box_outline_blank'
  };
  exports.default = Checkbox;
});