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
    uncheckedIconClassName: _react.PropTypes.string.isRequired,
    uncheckedIconChildren: _react.PropTypes.node,
    checkedIconClassName: _react.PropTypes.string.isRequired,
    checkedIconChildren: _react.PropTypes.node,
    plain: _react.PropTypes.bool,
    allSelected: _react.PropTypes.bool.isRequired,
    selectedRows: _react.PropTypes.arrayOf(_react.PropTypes.bool).isRequired,
    toggleAllRows: _react.PropTypes.func.isRequired,
    toggleSelectedRow: _react.PropTypes.func.isRequired,
    baseId: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    baseName: _react.PropTypes.string
  };
});