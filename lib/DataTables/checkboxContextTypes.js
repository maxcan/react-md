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
    global.checkboxContextTypes = mod.exports;
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
    rowId: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]).isRequired,
    baseName: _react.PropTypes.string.isRequired
  };
});