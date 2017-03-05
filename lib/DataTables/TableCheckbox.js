(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', '../SelectionControls/SelectionControl'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('../SelectionControls/SelectionControl'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.SelectionControl);
    global.TableCheckbox = mod.exports;
  }
})(this, function (exports, _react, _SelectionControl) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

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
            index = _props.index,
            props = _objectWithoutProperties(_props, ['checked', 'index']);

        var _context = this.context,
            checkedIconChildren = _context.checkedIconChildren,
            checkedIconClassName = _context.checkedIconClassName,
            uncheckedIconChildren = _context.uncheckedIconChildren,
            uncheckedIconClassName = _context.uncheckedIconClassName,
            indeterminateIconChildren = _context.indeterminateIconChildren,
            indeterminateIconClassName = _context.indeterminateIconClassName,
            indeterminate = _context.indeterminate,
            header = _context.header,
            rowId = _context.rowId,
            baseName = _context.baseName,
            checkboxHeaderLabel = _context.checkboxHeaderLabel,
            checkboxLabelTemplate = _context.checkboxLabelTemplate;


        var Cell = header ? 'th' : 'td';
        var label = void 0;
        if (header) {
          label = checkboxHeaderLabel;
        } else if (typeof checkboxLabelTemplate === 'function') {
          label = checkboxLabelTemplate(index);
        } else {
          label = checkboxLabelTemplate.replace(/{{row}}/g, index);
        }

        return _react2.default.createElement(
          Cell,
          { className: 'md-table-checkbox', scope: header ? 'col' : undefined },
          _react2.default.createElement(_SelectionControl2.default, _extends({}, props, {
            id: rowId,
            name: baseName + '-checkbox',
            type: 'checkbox',
            checked: checked,
            uncheckedCheckboxIconChildren: header && indeterminate ? indeterminateIconChildren : uncheckedIconChildren,
            uncheckedCheckboxIconClassName: header && indeterminate ? indeterminateIconClassName : uncheckedIconClassName,
            checkedCheckboxIconChildren: checkedIconChildren,
            checkedCheckboxIconClassName: checkedIconClassName,
            'aria-label': label
          }))
        );
      }
    }]);

    return TableCheckbox;
  }(_react.Component);

  TableCheckbox.propTypes = {
    index: _react.PropTypes.number,
    checked: _react.PropTypes.bool
  };
  TableCheckbox.contextTypes = {
    rowId: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]).isRequired,
    baseName: _react.PropTypes.string.isRequired,
    header: _react.PropTypes.bool,
    indeterminate: _react.PropTypes.bool,
    checkedIconChildren: _react.PropTypes.node,
    checkedIconClassName: _react.PropTypes.string,
    uncheckedIconChildren: _react.PropTypes.node,
    uncheckedIconClassName: _react.PropTypes.string,
    indeterminateIconChildren: _react.PropTypes.node,
    indeterminateIconClassName: _react.PropTypes.string,
    checkboxHeaderLabel: _react.PropTypes.string.isRequired,
    checkboxLabelTemplate: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired
  };
  exports.default = TableCheckbox;
});