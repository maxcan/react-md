(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames', '../utils/getField', '../utils/PropTypes/controlled', './SelectionControl'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'), require('../utils/getField'), require('../utils/PropTypes/controlled'), require('./SelectionControl'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.getField, global.controlled, global.SelectionControl);
    global.SelectionControlGroup = mod.exports;
  }
})(this, function (exports, _react, _classnames, _getField, _controlled, _SelectionControl) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _getField2 = _interopRequireDefault(_getField);

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

  /**
   * A custom PropTypes validator to make sure that each `control` in the `controls` prop
   * contains the given `propName`, or the `SelectionControlGroup` has defined that prop.
   */
  function requiredByAllControls(validator) {
    return function validate(props, propName, component) {
      for (var _len = arguments.length, others = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        others[_key - 3] = arguments[_key];
      }

      var err = validator.apply(undefined, [props, propName, component].concat(others));

      if (!err && typeof props[propName] === 'undefined') {
        var invalids = props.controls.filter(function (c) {
          return !c[propName];
        }).map(function (_, i) {
          return i;
        });
        if (invalids.length) {
          var invalidPrefix = invalids.length === props.controls.length ? 'All `controls`' : 'The `controls` at indexes `' + invalids.join('`, `') + '`';
          var invalidMsg = invalidPrefix + ' are missing the `' + propName + '` prop.';

          err = new Error('The `' + propName + '` prop is required to make `' + component + '` accessible for users of ' + ('assistive technologies such as screen readers. Either add the `' + propName + '` to the `' + component + '` ') + ('or add the `' + propName + '` to each `control` in the `controls` prop. ' + invalidMsg));
        }
      }

      return err;
    };
  }

  /**
   * The `SelectionControlGroup` component is used to simplify the generation of a list
   * of `SelectionControl`. Any common props are extracted to this component and passed
   * to the `SelectionControl`.
   */

  var SelectionControlGroup = function (_PureComponent) {
    _inherits(SelectionControlGroup, _PureComponent);

    function SelectionControlGroup(props) {
      _classCallCheck(this, SelectionControlGroup);

      var _this = _possibleConstructorReturn(this, (SelectionControlGroup.__proto__ || Object.getPrototypeOf(SelectionControlGroup)).call(this, props));

      _this.state = {};
      if (typeof props.value === 'undefined') {
        _this.state.value = props.defaultValue;

        if (typeof props.defaultValue === 'undefined') {
          _this.state.value = props.type === 'radio' ? props.controls[0].value : '';
        }
      }
      _this._handleChange = _this._handleChange.bind(_this);
      return _this;
    }

    _createClass(SelectionControlGroup, [{
      key: '_isChecked',
      value: function _isChecked(value, controlValue, type) {
        return type === 'radio' ? value === controlValue : value.split(',').indexOf(controlValue) !== -1;
      }
    }, {
      key: '_handleChange',
      value: function _handleChange(e) {
        var value = e.target.value;
        if (this.props.type === 'checkbox') {
          var checked = e.target.checked;


          var values = (0, _getField2.default)(this.props, this.state, 'value').split(',');
          var index = values.indexOf(value);
          if (checked) {
            values.push(value);
          } else {
            values.splice(index, 1);
          }

          value = values.join(',');
        }

        if (this.props.onChange) {
          this.props.onChange(value, e);
        }

        if (typeof this.props.value === 'undefined') {
          this.setState({ value: value });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            id = _props.id,
            name = _props.name,
            type = _props.type,
            label = _props.label,
            labelClassName = _props.labelClassName,
            className = _props.className,
            controlStyle = _props.controlStyle,
            controlClassName = _props.controlClassName,
            Component = _props.component,
            LabelComponent = _props.labelComponent,
            inline = _props.inline,
            props = _objectWithoutProperties(_props, ['id', 'name', 'type', 'label', 'labelClassName', 'className', 'controlStyle', 'controlClassName', 'component', 'labelComponent', 'inline']);

        delete props.value;
        delete props.controls;
        delete props.defaultValue;

        var value = (0, _getField2.default)(this.props, this.state, 'value');

        var controls = this.props.controls.map(function (control, i) {
          var controlProps = Object.assign({
            id: '' + id + i,
            key: 'control' + i,
            name: '' + name + (type === 'checkbox' ? '[]' : ''),
            type: type,
            inline: inline,
            checked: _this2._isChecked(value, control.value, type)
          }, control, {
            style: Object.assign({}, control.style, controlStyle),
            className: (0, _classnames2.default)(controlClassName, control.className)
          });

          return _react2.default.createElement(_SelectionControl2.default, controlProps);
        });

        var ariaLabel = void 0;
        if (label) {
          ariaLabel = _react2.default.createElement(
            LabelComponent,
            { className: labelClassName },
            label
          );
        }

        return _react2.default.createElement(
          Component,
          _extends({}, props, {
            className: (0, _classnames2.default)('md-selection-control-group', className),
            onChange: this._handleChange
          }),
          ariaLabel,
          controls
        );
      }
    }]);

    return SelectionControlGroup;
  }(_react.PureComponent);

  SelectionControlGroup.propTypes = {
    /**
     * An optional style to apply to the container.
     */
    style: _react.PropTypes.object,

    /**
     * An optional className to apply to the container.
     */
    className: _react.PropTypes.string,

    /**
     * An optional style to apply to every `SelectionControl`. This will be merged with any `style`
     * that a `control` might have.
     */
    controlStyle: _react.PropTypes.object,

    /**
     * An optional className to apply to every `SelectionControl`. This will be merged with any
     * `className` that a `control` might have.
     */
    controlClassName: _react.PropTypes.string,

    /**
     * An optional base id to apply to each `SelectionControl`. When this is included, the id for
     * each control will start with this and end with their current index. If this is ommitted,
     * each `control` in the `controls` prop *must* have an `id` prop. This is required for
     * accessibility.
     */
    id: requiredByAllControls(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])),

    /**
     * The type to apply to each `SelectionControl` in the group. Only `checkbox` and `radio` is
     * valid for a grouping.
     */
    type: _react.PropTypes.oneOf(['checkbox', 'radio']).isRequired,

    /**
     * The component to render the `SelectionControlGroup` in.
     */
    component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]).isRequired,

    /**
     * An optional label to display above the group of `SelectionControl`s.
     */
    label: _react.PropTypes.node,

    /**
     * An optional className to apply to the node surrounding the `label` prop.
     */
    labelClassName: _react.PropTypes.string,

    /**
     * The component to render the optional `label` in.
     */
    labelComponent: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]).isRequired,

    /**
     * An optional function to call when any `SelectionControl`'s `checked` state is changed
     * in the group. If the `type` of the group is `radio`, the `value` of the `checked` radio
     * will be given in the callback. If the `type` of the group is `checkbox`, a comma-delimited
     * string of all `checked` checkboxes values will be given.
     *
     * ```js
     * // checkbox
     * onChange('Alpha,Omega', changeEvent);
     *
     * // radio
     * onChange('Omega', changeEvent);
     * ```
     */
    onChange: _react.PropTypes.func,

    /**
     * A name to use for each `SelectionControl` in the group. If the `type` of the group is
     * `checkbox`, the name will be updated to be an array name so that using
     * `document.querySelector('input[name="yourName[]"].value` will give the comma-delimited
     * string of checked checkboxes.
     *
     * It is either required to have this prop set or every `control` in the `controls` prop to
     * have the `name` prop.
     */
    name: requiredByAllControls(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])),

    /**
     * The default value for the `SelectionControlGroup`. This can either be a single value
     * or a comma-delimited string of checkbox values. When the `type` of the group is `radio`
     * and the group is uncontrolled, it is recommened to set this prop. Otherwise the first
     * value of the `controls` prop will be used as the defalt value.
     */
    defaultValue: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),

    /**
     * An optional value to use for the `SelectionControlGroup`. This will make the component
     * controlled and require the `onChange` prop to be defined. Like the `defaultValue`, this
     * can either be a single value or a comma-delimited list of checkbox values.
     */
    value: (0, _controlled2.default)(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]), 'onChange'),

    /**
     * A list of objects to create the `SelectControl` components. The shape of the object
     * is the `propTypes` of the `SelectionControl` component, except that `value` prop is
     * now required.
     *
     * The `SelectionControl` will inherit any inheritable props from the `SelectionControlGroup`.
     */
    controls: _react.PropTypes.arrayOf(_react.PropTypes.shape({
      key: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
      label: _react.PropTypes.node.isRequired,
      value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired
    })).isRequired,

    /**
     * Boolean if the `SelectionControl` should be displayed inline.
     */
    inline: _react.PropTypes.bool
  };
  SelectionControlGroup.defaultProps = {
    component: 'fieldset',
    labelComponent: 'legend',
    labelClassName: 'md-subheading-1'
  };
  exports.default = SelectionControlGroup;
});