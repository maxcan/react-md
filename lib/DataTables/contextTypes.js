(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.contextTypes = mod.exports;
  }
})(this, function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    checkedIconChildren: _react.PropTypes.node,
    checkedIconClassName: _react.PropTypes.string,
    uncheckedIconChildren: _react.PropTypes.node,
    uncheckedIconClassName: _react.PropTypes.string,
    indeterminateIconChildren: _react.PropTypes.node,
    indeterminateIconClassName: _react.PropTypes.string,
    indeterminate: _react.PropTypes.bool,
    plain: _react.PropTypes.bool,
    selectableRows: _react.PropTypes.bool.isRequired,
    allSelected: _react.PropTypes.bool.isRequired,
    selectedRows: _react.PropTypes.arrayOf(_react.PropTypes.bool).isRequired,
    toggleSelectedRow: _react.PropTypes.func.isRequired,
    baseId: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    baseName: _react.PropTypes.string,
    checkboxHeaderLabel: _react.PropTypes.string.isRequired,
    checkboxLabelTemplate: _react.PropTypes.string.isRequired
  };
});