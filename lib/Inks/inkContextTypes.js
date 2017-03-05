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
    global.inkContextTypes = mod.exports;
  }
})(this, function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    inkDisabled: _react.PropTypes.bool,
    inkDisabledInteractions: _react.PropTypes.arrayOf(_react.PropTypes.oneOf(['keyboard', 'mouse', 'touch']))
  };
});