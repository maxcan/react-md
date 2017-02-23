(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames', 'react-prop-types/lib/isRequiredForA11y', 'react-prop-types/lib/deprecated', '../constants/keyCodes', '../utils/getField', '../utils/PropTypes/controlled', '../utils/DateUtils/DateTimeFormat', '../utils/DateUtils/formatTime', '../utils/DateUtils/extractTimeParts', '../Dialogs/DialogContainer', '../FontIcons/FontIcon', '../TextFields/TextField', '../Helpers/Collapse', './TimePicker'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'), require('react-prop-types/lib/isRequiredForA11y'), require('react-prop-types/lib/deprecated'), require('../constants/keyCodes'), require('../utils/getField'), require('../utils/PropTypes/controlled'), require('../utils/DateUtils/DateTimeFormat'), require('../utils/DateUtils/formatTime'), require('../utils/DateUtils/extractTimeParts'), require('../Dialogs/DialogContainer'), require('../FontIcons/FontIcon'), require('../TextFields/TextField'), require('../Helpers/Collapse'), require('./TimePicker'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.isRequiredForA11y, global.deprecated, global.keyCodes, global.getField, global.controlled, global.DateTimeFormat, global.formatTime, global.extractTimeParts, global.DialogContainer, global.FontIcon, global.TextField, global.Collapse, global.TimePicker);
    global.TimePickerContainer = mod.exports;
  }
})(this, function (exports, _react, _classnames, _isRequiredForA11y, _deprecated, _keyCodes, _getField, _controlled, _DateTimeFormat, _formatTime, _extractTimeParts, _DialogContainer, _FontIcon, _TextField, _Collapse, _TimePicker) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _isRequiredForA11y2 = _interopRequireDefault(_isRequiredForA11y);

  var _deprecated2 = _interopRequireDefault(_deprecated);

  var _getField2 = _interopRequireDefault(_getField);

  var _controlled2 = _interopRequireDefault(_controlled);

  var _DateTimeFormat2 = _interopRequireDefault(_DateTimeFormat);

  var _formatTime2 = _interopRequireDefault(_formatTime);

  var _extractTimeParts2 = _interopRequireDefault(_extractTimeParts);

  var _DialogContainer2 = _interopRequireDefault(_DialogContainer);

  var _FontIcon2 = _interopRequireDefault(_FontIcon);

  var _TextField2 = _interopRequireDefault(_TextField);

  var _Collapse2 = _interopRequireDefault(_Collapse);

  var _TimePicker2 = _interopRequireDefault(_TimePicker);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
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

  var TimePickerContainer = function (_PureComponent) {
    _inherits(TimePickerContainer, _PureComponent);

    function TimePickerContainer(props) {
      _classCallCheck(this, TimePickerContainer);

      var _this = _possibleConstructorReturn(this, (TimePickerContainer.__proto__ || Object.getPrototypeOf(TimePickerContainer)).call(this, props));

      var initialDate = void 0;
      if (props.defaultValue) {
        initialDate = new Date(props.defaultValue);
      } else if (props.value) {
        initialDate = new Date(props.value);
      } else {
        initialDate = new Date();
      }

      var visible = typeof props.initiallyOpen !== 'undefined' ? props.initiallyOpen : !!props.defaultVisible;

      _this.state = _extends({
        visible: visible
      }, _this._getTimeParts(initialDate, props), {
        value: props.defaultValue,
        time: initialDate,
        timeMode: props.initialTimeMode || props.defaultTimeMode,
        tempTime: initialDate
      });

      _this._setContainer = _this._setContainer.bind(_this);
      _this._toggleOpen = _this._toggleOpen.bind(_this);
      _this._closeOnEsc = _this._closeOnEsc.bind(_this);
      _this._handleOutsideClick = _this._handleOutsideClick.bind(_this);
      _this._getTextFieldValue = _this._getTextFieldValue.bind(_this);
      _this._setTimeMode = _this._setTimeMode.bind(_this);
      _this._setTempTime = _this._setTempTime.bind(_this);
      _this._handleOkClick = _this._handleOkClick.bind(_this);
      _this._handleKeyDown = _this._handleKeyDown.bind(_this);
      _this._handleCancelClick = _this._handleCancelClick.bind(_this);
      return _this;
    }

    _createClass(TimePickerContainer, [{
      key: 'componentWillUpdate',
      value: function componentWillUpdate(nextProps, nextState) {
        if ((0, _getField2.default)(this.props, this.state, 'value') !== (0, _getField2.default)(nextProps, nextState, 'value')) {
          this.setState(this._getTimeParts((0, _getField2.default)(nextProps, nextState, 'value'), nextProps));
        } else if (this.state.tempValue !== nextState.tempTime) {
          this.setState(this._getTimeParts(nextState.tempTime, nextProps));
        }
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps, prevState) {
        var _props = this.props,
            inline = _props.inline,
            isOpen = _props.isOpen;

        var visible = typeof isOpen !== 'undefined' ? isOpen : (0, _getField2.default)(this.props, this.state, 'visible');
        var pVisible = typeof prevProps.isOpen !== 'undefined' ? prevProps.isOpen : (0, _getField2.default)(prevProps, prevState, 'visible');

        if (visible === pVisible) {
          return;
        }

        if (visible) {
          if (inline) {
            window.addEventListener('click', this._handleOutsideClick);
            window.addEventListener('keydown', this._closeOnEsc);
          }
        } else if (inline) {
          window.removeEventListener('click', this._handleOutsideClick);
          window.removeEventListener('keydown', this._closeOnEsc);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        var visible = typeof this.props.isOpen !== 'undefined' ? this.props.isOpen : (0, _getField2.default)(this.props, this.state, 'visible');
        if (visible && this.props.inline) {
          window.removeEventListener('click', this._handleOutsideClick);
          window.removeEventListener('keydown', this._closeOnEsc);
        }
      }
    }, {
      key: '_setContainer',
      value: function _setContainer(container) {
        this._container = container;
      }
    }, {
      key: '_getTimeParts',
      value: function _getTimeParts(date, props) {
        return (0, _extractTimeParts2.default)(props.DateTimeFormat, props.locales, date);
      }
    }, {
      key: '_closeOnEsc',
      value: function _closeOnEsc(e) {
        if ((e.which || e.keyCode) === _keyCodes.ESC) {
          this._handleCancelClick(e);
        }
      }
    }, {
      key: '_handleOutsideClick',
      value: function _handleOutsideClick(e) {
        if (this._container && !this._container.contains(e.target)) {
          this._handleCancelClick(e);
        }
      }
    }, {
      key: '_toggleOpen',
      value: function _toggleOpen(e) {
        var visible = !(typeof this.props.isOpen !== 'undefined' ? this.props.isOpen : (0, _getField2.default)(this.props, this.state, 'visible'));

        if (this.props.onVisibilityChange) {
          this.props.onVisibilityChange(visible, e);
        }

        if (typeof this.props.isOpen === 'undefined' && typeof this.props.visible === 'undefined') {
          this.setState({ visible: visible });
        }
      }
    }, {
      key: '_setTimeMode',
      value: function _setTimeMode(timeMode) {
        if (this.state.timeMode === timeMode) {
          return;
        }

        this.setState({ timeMode: timeMode });
      }
    }, {
      key: '_setTempTime',
      value: function _setTempTime(time) {
        if (this.state.tempTime === time) {
          return;
        }

        this.setState({ tempTime: time });
      }
    }, {
      key: '_handleKeyDown',
      value: function _handleKeyDown(e) {
        if ((e.which || e.keyCode) === _keyCodes.ENTER) {
          this._toggleOpen(e);
        }
      }
    }, {
      key: '_handleOkClick',
      value: function _handleOkClick(e) {
        var _props2 = this.props,
            onVisibilityChange = _props2.onVisibilityChange,
            onChange = _props2.onChange,
            DateTimeFormat = _props2.DateTimeFormat,
            locales = _props2.locales;

        var value = new Date(this.state.tempTime);
        if (onChange) {
          onChange((0, _formatTime2.default)(DateTimeFormat, locales, value), value, e);
        }

        if (onVisibilityChange) {
          onVisibilityChange(false, e);
        }

        var state = void 0;
        if (typeof this.props.value === 'undefined') {
          state = { value: value };
        }

        if (typeof this.props.isOpen === 'undefined' && typeof this.props.visible === 'undefined') {
          state = state || {};
          state.visible = false;
        }

        if (state) {
          this.setState(state);
        }
      }
    }, {
      key: '_handleCancelClick',
      value: function _handleCancelClick(e) {
        if (this.props.onVisibilityChange) {
          this.props.onVisibilityChange(false, e);
        }

        var state = { visible: false, tempTime: this.state.time };
        if (typeof this.props.isOpen !== 'undefined' || typeof this.props.visible !== 'undefined') {
          delete state.visible;
        }

        this.setState(state);
      }
    }, {
      key: '_getTextFieldValue',
      value: function _getTextFieldValue(props, state) {
        var DateTimeFormat = props.DateTimeFormat,
            locales = props.locales;

        var value = (0, _getField2.default)(props, state, 'value');
        if (!value) {
          return '';
        } else if (value instanceof Date) {
          return (0, _formatTime2.default)(DateTimeFormat, locales, value);
        } else {
          // currently don't support value of string
          return value;
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            timeMode = _state.timeMode,
            tempTime = _state.tempTime,
            hours = _state.hours,
            minutes = _state.minutes,
            timePeriod = _state.timePeriod;

        var _props3 = this.props,
            style = _props3.style,
            className = _props3.className,
            pickerStyle = _props3.pickerStyle,
            pickerClassName = _props3.pickerClassName,
            inputStyle = _props3.inputStyle,
            inputClassName = _props3.inputClassName,
            textFieldStyle = _props3.textFieldStyle,
            textFieldClassName = _props3.textFieldClassName,
            id = _props3.id,
            disabled = _props3.disabled,
            label = _props3.label,
            placeholder = _props3.placeholder,
            icon = _props3.icon,
            inline = _props3.inline,
            displayMode = _props3.displayMode,
            fullWidth = _props3.fullWidth,
            lineDirection = _props3.lineDirection,
            closeOnEsc = _props3.closeOnEsc,
            renderNode = _props3.renderNode,
            lastChild = _props3.lastChild,
            block = _props3.block,
            paddedBlock = _props3.paddedBlock,
            active = _props3.active,
            error = _props3.error,
            floating = _props3.floating,
            required = _props3.required,
            leftIconStateful = _props3.leftIconStateful,
            rightIcon = _props3.rightIcon,
            rightIconStateful = _props3.rightIconStateful,
            customSize = _props3.customSize,
            errorText = _props3.errorText,
            helpText = _props3.helpText,
            helpOnFocus = _props3.helpOnFocus,
            inlineIndicator = _props3.inlineIndicator,
            ariaLabel = _props3['aria-label'],
            props = _objectWithoutProperties(_props3, ['style', 'className', 'pickerStyle', 'pickerClassName', 'inputStyle', 'inputClassName', 'textFieldStyle', 'textFieldClassName', 'id', 'disabled', 'label', 'placeholder', 'icon', 'inline', 'displayMode', 'fullWidth', 'lineDirection', 'closeOnEsc', 'renderNode', 'lastChild', 'block', 'paddedBlock', 'active', 'error', 'floating', 'required', 'leftIconStateful', 'rightIcon', 'rightIconStateful', 'customSize', 'errorText', 'helpText', 'helpOnFocus', 'inlineIndicator', 'aria-label']);

        delete props.value;
        delete props.onVisibilityChange;
        delete props.onChange;
        delete props.defaultValue;
        delete props.defaultVisible;
        delete props.defaultTimeMode;

        // Delete deprecated
        delete props.isOpen;
        delete props.initialTimeMode;
        delete props.initiallyOpen;

        var visible = typeof this.props.isOpen !== 'undefined' ? this.props.isOpen : (0, _getField2.default)(this.props, this.state, 'visible');

        var picker = _react2.default.createElement(_TimePicker2.default, _extends({}, props, {
          inline: inline,
          icon: !!icon,
          tempTime: tempTime,
          timeMode: timeMode,
          hours: hours,
          minutes: minutes,
          timePeriod: timePeriod,
          style: pickerStyle,
          className: pickerClassName,
          displayMode: displayMode,
          onOkClick: this._handleOkClick,
          onCancelClick: this._handleCancelClick,
          setTimeMode: this._setTimeMode,
          setTempTime: this._setTempTime
        }));

        var content = void 0;
        if (inline) {
          content = _react2.default.createElement(
            _Collapse2.default,
            { collapsed: !visible },
            picker
          );
        } else {
          content = _react2.default.createElement(
            _DialogContainer2.default,
            {
              id: id + 'Dialog',
              visible: visible,
              onHide: this._handleCancelClick,
              dialogClassName: 'md-dialog--picker',
              contentClassName: 'md-dialog-content--picker',
              'aria-label': ariaLabel,
              closeOnEsc: closeOnEsc,
              lastChild: lastChild,
              renderNode: renderNode,
              focusOnMount: false
            },
            picker
          );
        }

        return _react2.default.createElement(
          'div',
          { style: style, className: (0, _classnames2.default)('md-picker-container', className), ref: this._setContainer },
          _react2.default.createElement(_TextField2.default, {
            id: id,
            style: textFieldStyle,
            className: (0, _classnames2.default)({ 'md-pointer--hover': !disabled }, textFieldClassName),
            inputStyle: inputStyle,
            inputClassName: (0, _classnames2.default)({ 'md-pointer--hover': !disabled }, inputClassName),
            active: active || visible,
            error: error,
            floating: floating || visible,
            required: required,
            disabled: disabled,
            leftIcon: icon,
            leftIconStateful: leftIconStateful,
            rightIcon: rightIcon,
            rightIconStateful: rightIconStateful,
            inlineIndicator: inlineIndicator,
            block: block,
            paddedBlock: paddedBlock,
            fullWidth: fullWidth,
            lineDirection: lineDirection,
            customSize: customSize,
            helpText: helpText,
            helpOnFocus: helpOnFocus,
            errorText: errorText,
            label: label,
            placeholder: placeholder,
            onClick: this._toggleOpen,
            onKeyDown: this._handleKeyDown,
            value: this._getTextFieldValue(this.props, this.state),
            readOnly: true
          }),
          content
        );
      }
    }]);

    return TimePickerContainer;
  }(_react.PureComponent);

  TimePickerContainer.propTypes = {
    /**
     * An id for the text field in the time picker. This is require for a11u.
     */
    id: (0, _isRequiredForA11y2.default)(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])),

    /**
     * An aria-label to apply to the dialog when it has been opened. This is required for
     * a11y.
     */
    'aria-label': (0, _isRequiredForA11y2.default)(_react.PropTypes.string),

    /**
     * An optional style to apply to the time picker's container.
     */
    style: _react.PropTypes.object,

    /**
     * An optional className to apply to the time picker's container.
     */
    className: _react.PropTypes.string,

    /**
     * An optional style to apply to the time picker.
     */
    pickerStyle: _react.PropTypes.object,

    /**
     * An optional className to apply to the time picker.
     */
    pickerClassName: _react.PropTypes.string,

    /**
     * An optional style to apply to the input tag.
     */
    inputStyle: _react.PropTypes.object,

    /**
     * An optional className to apply to the input tag.
     */
    inputClassName: _react.PropTypes.string,

    /**
     * An optional style to apply to the text field's container.
     */
    textFieldStyle: _react.PropTypes.object,

    /**
     * An optional className to apply to the text field's container.
     */
    textFieldClassName: _react.PropTypes.string,

    /**
     * An optional icon to display with the time picker.
     */
    icon: _react.PropTypes.node,

    /**
     * Boolean if the time picker is open by default.
     */
    defaultVisible: _react.PropTypes.bool,

    /**
     * An optional label to be displayed in the time picker's text
     * field.
     */
    label: _react.PropTypes.string,

    /**
     * An optional placeholder to be displayed in the time picker's text field.
     */
    placeholder: _react.PropTypes.string,

    /**
     * The value of the time picker. This will make the time picker
     * be a controlled component.
     */
    value: (0, _controlled2.default)(_react.PropTypes.instanceOf(Date), 'onChange', 'defaultValue'),

    /**
     * An optional function to call when the selected date is changed
     * by hitting the OK button. The newly formatted time string,
     * the new Date object, and the change event will be given.
     *
     * `onChange(timeString, dateObject, event)`.
     */
    onChange: _react.PropTypes.func,

    /**
     * An optional default value to give for the year picker.
     */
    defaultValue: _react.PropTypes.instanceOf(Date),

    /**
     * A function to format the dates since it should be formatted to the user's
     * locale. This _should_ be the `Intl.DateTimeFormat` function. You
     * can also create your own if you really wanted. Unadvisable though.
     *
     * See [intl-polyfill](https://github.com/andyearnshaw/Intl.js/) for more info.
     */
    DateTimeFormat: _react.PropTypes.func.isRequired,

    /**
     * The locales to use for formatting the date. This will default to using
     * the user's language in the browser or `'en-US'` when server renering.
     */
    locales: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.arrayOf(_react.PropTypes.string)]).isRequired,

    /**
     * The label to use for the ok button on the year picker.
     */
    okLabel: _react.PropTypes.string.isRequired,

    /**
     * Boolean if the ok button should be styled with the primary color.
     */
    okPrimary: _react.PropTypes.bool,

    /**
     * The label to use for the cancel button on the year picker.
     */
    cancelLabel: _react.PropTypes.string.isRequired,

    /**
     * Boolean if the cancel button should be styled with the primary color.
     */
    cancelPrimary: _react.PropTypes.bool,

    /**
     * The default mode to open the time picker in.
     */
    defaultTimeMode: _react.PropTypes.oneOf(['hour', 'minute']),

    /**
     * Boolean if the date should automatically be selected when a user clicks
     * on a new date instead of making them hit the ok button.
     */
    autoOk: _react.PropTypes.bool,

    /**
     * Boolean if the date picker should be displayed inline instead of in a
     * dialog.
     */
    inline: _react.PropTypes.bool,

    /**
     * An optional force of the display mode of the date picker.
     * This _should_ not really be used since there are media queries
     * to use the correct mode based on device orientation.
     */
    displayMode: _react.PropTypes.oneOf(['landscape', 'portrait']),

    /**
     * Boolean if the text field for the Time Picker should be displayed as full width.
     */
    fullWidth: _react.PropTypes.bool,

    /**
     * The direction that the text field divider expands from when the text field
     * in the date picker gains focus.
     */
    lineDirection: _react.PropTypes.oneOf(['left', 'center', 'right']),

    /**
     * An optional boolean if the time picker is current visible by dialog or inline.
     * If this is set, the `onVisibilityChange` function is required.
     */
    visible: (0, _controlled2.default)(_react.PropTypes.bool, 'onVisibilityChange', 'defaultVisible'),

    /**
     * An optional function to call when the date picker is opened in either a dialog, or
     * inline. The callback will include the next state.
     *
     * ```js
     * onVisibilityChange(!visible, e);
     * ```
     */
    onVisibilityChange: _react.PropTypes.func,

    /**
     * Boolean if the time picker is disabled.
     */
    disabled: _react.PropTypes.bool,

    /**
     * Boolean if the dialog should be able to close if a keyboard user presses the escape key.
     */
    closeOnEsc: _react.PropTypes.bool,

    /**
     * Boolean if the time is required.
     *
     * @see [TextField](/components/text-fields?tab=1)
     */
    required: _react.PropTypes.bool,

    /**
     * @see [TextField](/components/text-fields?tab=1)
     */
    block: _TextField2.default.propTypes.block,

    /**
     * @see [TextField](/components/text-fields?tab=1)
     */
    paddedBlock: _TextField2.default.propTypes.paddedBlock,

    /**
     * @see [TextField](/components/text-fields?tab=1)
     */
    active: _TextField2.default.propTypes.active,

    /**
     * @see [TextField](/components/text-fields?tab=1)
     */
    error: _TextField2.default.propTypes.error,

    /**
     * @see [TextField](/components/text-fields?tab=1)
     */
    floating: _TextField2.default.propTypes.floating,

    /**
     * @see [TextField](/components/text-fields?tab=1)
     */
    leftIconStateful: _TextField2.default.propTypes.leftIconStateful,

    /**
     * @see [TextField](/components/text-fields?tab=1)
     */
    rightIcon: _TextField2.default.propTypes.rightIcon,

    /**
     * @see [TextField](/components/text-fields?tab=1)
     */
    rightIconStateful: _TextField2.default.propTypes.rightIconStateful,

    /**
     * @see [TextField](/components/text-fields?tab=1)
     */
    customSize: _TextField2.default.propTypes.customSize,

    /**
     * @see [TextField](/components/text-fields?tab=1)
     */
    errorText: _TextField2.default.propTypes.errorText,

    /**
     * @see [TextField](/components/text-fields?tab=1)
     */
    helpText: _TextField2.default.propTypes.helpText,

    /**
     * @see [TextField](/components/text-fields?tab=1)
     */
    helpOnFocus: _TextField2.default.propTypes.helpOnFocus,

    /**
     * @see [TextField](/components/text-fields?tab=1)
     */
    inlineIndicator: _TextField2.default.propTypes.helpOnFocus,

    /**
     * An optional DOM Node to render the dialog into. The default is to render as the first child
     * in the `body`.
     */
    renderNode: _react.PropTypes.object,

    /**
     * Boolean if the dialog should be rendered as the last child of the `renderNode` or `body` instead
     * of the first.
     */
    lastChild: _react.PropTypes.bool,
    isOpen: (0, _deprecated2.default)(_react.PropTypes.bool, 'Use `visible` instead'),
    initiallyOpen: (0, _deprecated2.default)(_react.PropTypes.bool, 'Use `defaultVisible` instead'),
    initialTimeMode: (0, _deprecated2.default)(_react.PropTypes.oneOf(['hour', 'minute']), 'Use `defaultTimeMode` instead')
  };
  TimePickerContainer.defaultProps = {
    defaultTimeMode: 'hour',
    icon: _react2.default.createElement(
      _FontIcon2.default,
      null,
      'access_time'
    ),
    DateTimeFormat: _DateTimeFormat2.default, // eslint-disable-line object-shorthand
    locales: typeof window !== 'undefined' ? window.navigator.userLanguage || window.navigator.language : 'en-US',
    okLabel: 'Ok',
    okPrimary: true,
    cancelLabel: 'Cancel',
    cancelPrimary: true,
    closeOnEsc: true,
    'aria-label': 'Select a time'
  };
  exports.default = TimePickerContainer;
});