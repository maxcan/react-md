(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames', '../utils/PropTypes/requiredForA11yIfNot', '../utils/PropTypes/invalidIf', './contextTypes'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'), require('../utils/PropTypes/requiredForA11yIfNot'), require('../utils/PropTypes/invalidIf'), require('./contextTypes'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.requiredForA11yIfNot, global.invalidIf, global.contextTypes);
    global.DataTable = mod.exports;
  }
})(this, function (exports, _react, _classnames, _requiredForA11yIfNot, _invalidIf, _contextTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _requiredForA11yIfNot2 = _interopRequireDefault(_requiredForA11yIfNot);

  var _invalidIf2 = _interopRequireDefault(_invalidIf);

  var _contextTypes2 = _interopRequireDefault(_contextTypes);

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

  var DataTable = function (_PureComponent) {
    _inherits(DataTable, _PureComponent);

    function DataTable(props) {
      _classCallCheck(this, DataTable);

      var _this = _possibleConstructorReturn(this, (DataTable.__proto__ || Object.getPrototypeOf(DataTable)).call(this, props));

      _this.state = {
        header: true,
        allSelected: false,
        selectedRows: props.defaultSelectedRows,
        indeterminate: props.indeterminate ? false : undefined
      };

      _this._initializeRows = _this._initializeRows.bind(_this);
      _this._toggleSelectedRow = _this._toggleSelectedRow.bind(_this);
      return _this;
    }

    _createClass(DataTable, [{
      key: 'getChildContext',
      value: function getChildContext() {
        var _props = this.props,
            checkedIconChildren = _props.checkedIconChildren,
            checkedIconClassName = _props.checkedIconClassName,
            uncheckedIconChildren = _props.uncheckedIconChildren,
            uncheckedIconClassName = _props.uncheckedIconClassName,
            indeterminateIconChildren = _props.indeterminateIconChildren,
            indeterminateIconClassName = _props.indeterminateIconClassName,
            plain = _props.plain,
            baseId = _props.baseId,
            selectableRows = _props.selectableRows,
            checkboxHeaderLabel = _props.checkboxHeaderLabel,
            checkboxLabelTemplate = _props.checkboxLabelTemplate;


        return {
          checkedIconChildren: checkedIconChildren,
          checkedIconClassName: checkedIconClassName,
          uncheckedIconChildren: uncheckedIconChildren,
          uncheckedIconClassName: uncheckedIconClassName,
          indeterminateIconChildren: indeterminateIconChildren,
          indeterminateIconClassName: indeterminateIconClassName,
          indeterminate: this.state.indeterminate,
          plain: plain,
          allSelected: this.state.allSelected,
          selectedRows: this.state.selectedRows,
          toggleSelectedRow: this._toggleSelectedRow,
          baseId: baseId,
          baseName: baseId + '-control',
          selectableRows: selectableRows,
          checkboxHeaderLabel: checkboxHeaderLabel,
          checkboxLabelTemplate: checkboxLabelTemplate
        };
      }
    }, {
      key: '_toggleSelectedRow',
      value: function _toggleSelectedRow(row, header, e) {
        var selectedRows = void 0;
        var allSelected = this.state.allSelected;
        var selectedCount = 0;
        var i = this.state.header ? row - 1 : row;
        var checked = e.target.checked;

        if (header) {
          selectedRows = this.state.selectedRows.map(function () {
            return checked;
          });
          allSelected = checked;
          selectedCount = !checked ? 0 : selectedRows.length;
        } else {
          selectedRows = this.state.selectedRows.slice();
          selectedRows[i] = !selectedRows[i];
          selectedCount = selectedRows.filter(function (b) {
            return b;
          }).length;
          allSelected = selectedCount === selectedRows.length;
        }

        if (this.props.onRowToggle) {
          this.props.onRowToggle(row, checked, selectedCount, e);
        }

        var indeterminate = this.props.indeterminate && !allSelected && selectedCount > 0;

        this.setState({ selectedRows: selectedRows, allSelected: allSelected, indeterminate: indeterminate });
      }
    }, {
      key: '_initializeRows',
      value: function _initializeRows(table) {
        if (!table) {
          return;
        }

        var header = !!table.querySelector('thead');
        var rows = table.querySelectorAll('tbody tr').length;
        var nextState = void 0;
        if (rows !== this.state.selectedRows.length) {
          var selectedRows = [];
          for (var i = 0; i < rows; i++) {
            selectedRows[i] = this.state.selectedRows[i] || false;
          }

          var selectedLength = selectedRows.filter(function (b) {
            return b;
          }).length;
          nextState = {
            selectedRows: selectedRows,
            allSelected: selectedLength === rows,
            indeterminate: selectedLength > 0 && selectedLength !== rows
          };
        }

        if (header !== this.state.header) {
          nextState = nextState || {};
          nextState.header = header;
        }

        if (nextState) {
          this.setState(nextState);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props2 = this.props,
            className = _props2.className,
            children = _props2.children,
            plain = _props2.plain,
            responsive = _props2.responsive,
            checkedIconChildren = _props2.checkedIconChildren,
            checkedIconClassName = _props2.checkedIconClassName,
            uncheckedIconChildren = _props2.uncheckedIconChildren,
            uncheckedIconClassName = _props2.uncheckedIconClassName,
            indeterminateIconChildren = _props2.indeterminateIconChildren,
            indeterminateIconClassName = _props2.indeterminateIconClassName,
            indeterminate = _props2.indeterminate,
            defaultSelectedRows = _props2.defaultSelectedRows,
            baseId = _props2.baseId,
            onRowToggle = _props2.onRowToggle,
            selectableRows = _props2.selectableRows,
            checkboxHeaderLabel = _props2.checkboxHeaderLabel,
            checkboxLabelTemplate = _props2.checkboxLabelTemplate,
            props = _objectWithoutProperties(_props2, ['className', 'children', 'plain', 'responsive', 'checkedIconChildren', 'checkedIconClassName', 'uncheckedIconChildren', 'uncheckedIconClassName', 'indeterminateIconChildren', 'indeterminateIconClassName', 'indeterminate', 'defaultSelectedRows', 'baseId', 'onRowToggle', 'selectableRows', 'checkboxHeaderLabel', 'checkboxLabelTemplate']);

        var table = _react2.default.createElement(
          'table',
          _extends({}, props, {
            ref: function ref(tableEl) {
              return _this2._initializeRows(tableEl);
            },
            className: (0, _classnames2.default)('md-data-table', {
              'md-data-table--plain': plain
            }, className)
          }),
          children
        );

        return responsive ? _react2.default.createElement(
          'div',
          { className: 'md-data-table--responsive' },
          table
        ) : table;
      }
    }]);

    return DataTable;
  }(_react.PureComponent);

  DataTable.propTypes = {
    /**
     * A base id to use for every checkbox or `EditDialogColumn` in the data table. This is
     * required for a11y if the data table is not plain.
     */
    baseId: (0, _requiredForA11yIfNot2.default)(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]), 'plain'),

    /**
     * Optional style to apply to the table.
     */
    style: _react.PropTypes.object,

    /**
     * An optional className to apply to the table.
     */
    className: _react.PropTypes.string,

    /**
     * The table contents to display. This *should* be a list of `TableHeader` and `TableBody`
     * components.
     */
    children: _react.PropTypes.node.isRequired,

    /**
     * An optional array of booleans denoting if a row is selected.
     * This is an associative array so the index must match the row
     * number in the `TableBody` component.
     */
    defaultSelectedRows: _react.PropTypes.arrayOf(_react.PropTypes.bool).isRequired,

    /**
     * Boolean if the table is responsive. This will wrap the table in a container
     * that allows scrolling to the right if overflow exists.
     */
    responsive: _react.PropTypes.bool.isRequired,

    /**
     * Boolean if this table should not include the checkboxes on each row.
     * This really means that the entire table is unselectable and you wish
     * to display as a normal table.
     */
    plain: _react.PropTypes.bool,

    /**
     * The icon className to use for the unchecked row icon. This value
     * will be passed down as `context`.
     */
    uncheckedIconClassName: _react.PropTypes.string,

    /**
     * The icon children to use for the unchecked row icon. This value
     * will be passed down as `context`.
     */
    uncheckedIconChildren: _react.PropTypes.node,

    /**
     * The icon className to use for the checked row icon. This value
     * will be passed down as `context`.
     */
    checkedIconClassName: _react.PropTypes.string,

    /**
     * The icon children to use for the checked row icon. This value
     * will be passed down as `context`.
     */
    checkedIconChildren: _react.PropTypes.node,

    /**
     * An optional function to call when a non-plain data table has a row toggled. The callback
     * will include:
     * - the row id
     * - boolean if the row is now checked
     * - the total count of rows selected
     * - the change event
     *
     * All rows will be toggled on or off when the row id is 0 and a `thead` exists in the table.
     */
    onRowToggle: (0, _invalidIf2.default)(_react.PropTypes.func, 'plain'),

    /**
     * Boolean if the `DataTable` should inject checkboxes at the start of each row.
     */
    selectableRows: _react.PropTypes.bool,

    /**
     * Boolean if the checkboxes in the table should also include an _indeterminate_ state.
     * It will use the `indeterminateIconChildren` and `indeterminateIconClassName` when at least
     * 1 row has been checked, but not all rows.
     */
    indeterminate: _react.PropTypes.bool,

    /**
     * Any children required to display the indeterminate checkbox.
     */
    indeterminateIconChildren: _react.PropTypes.node,

    /**
     * The icon className to use for the indeterminate checkbox.
     */
    indeterminateIconClassName: _react.PropTypes.string,

    /**
     * This is the aria-label to apply to the checkbox in the table's header. This
     * is just used for accessibility since the checkboxes have no visible label.
     */
    checkboxHeaderLabel: _react.PropTypes.string.isRequired,

    /**
     * This is the aria-label to apply to a checkbox in the table's body. This can either
     * be a constant string that will replace `{{row}}` with the current row index, or
     * a function that takes the row index and returns a string.
     *
     * ```js
     * checkboxLabelTemplate={rowIndex => `Toggle row ${row}`}
     * ```
     */
    checkboxLabelTemplate: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired
  };
  DataTable.defaultProps = {
    checkedIconChildren: 'check_box',
    uncheckedIconChildren: 'check_box_outline_blank',
    indeterminateIconChildren: 'indeterminate_check_box',
    defaultSelectedRows: [],
    responsive: true,
    selectableRows: true,
    checkboxHeaderLabel: 'Toggle All Rows',
    checkboxLabelTemplate: 'Toggle row {{row}}'
  };
  DataTable.childContextTypes = _contextTypes2.default;
  exports.default = DataTable;
});