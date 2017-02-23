(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', '../SelectionControls/SelectionControl', './checkboxContextTypes'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('../SelectionControls/SelectionControl'), require('./checkboxContextTypes'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.SelectionControl, global.checkboxContextTypes);
    global.TableCheckbox = mod.exports;
  }
})(this, function (exports, _react, _SelectionControl, _checkboxContextTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _SelectionControl2 = _interopRequireDefault(_SelectionControl);

  var _checkboxContextTypes2 = _interopRequireDefault(_checkboxContextTypes);

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

  var TableCheckbox = function (_Component) {
    _inherits(TableCheckbox, _Component);

    function TableCheckbox() {
      _classCallCheck(this, TableCheckbox);

      return _possibleConstructorReturn(this, (TableCheckbox.__proto__ || Object.getPrototypeOf(TableCheckbox)).apply(this, arguments));
    }

    _createClass(TableCheckbox, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            checked = _props.checked,
            props = _objectWithoutProperties(_props, ['checked']);

        var _context = this.context,
            uncheckedIconChildren = _context.uncheckedIconChildren,
            uncheckedIconClassName = _context.uncheckedIconClassName,
            checkedIconChildren = _context.checkedIconChildren,
            checkedIconClassName = _context.checkedIconClassName,
            rowId = _context.rowId,
            baseName = _context.baseName;


        return _react2.default.createElement(
          'td',
          { className: 'md-table-checkbox' },
          _react2.default.createElement(_SelectionControl2.default, _extends({}, props, {
            id: rowId,
            name: baseName + '-checkbox',
            type: 'checkbox',
            checked: checked,
            uncheckedCheckboxIconChildren: uncheckedIconChildren,
            uncheckedCheckboxIconClassName: uncheckedIconClassName,
            checkedCheckboxIconChildren: checkedIconChildren,
            checkedCheckboxIconClassName: checkedIconClassName
          }))
        );
      }
    }]);

    return TableCheckbox;
  }(_react.Component);

  TableCheckbox.propTypes = {
    checked: _react.PropTypes.bool
  };
  TableCheckbox.contextTypes = _checkboxContextTypes2.default;
  exports.default = TableCheckbox;
});