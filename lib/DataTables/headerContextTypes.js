(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', './contextTypes'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('./contextTypes'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.contextTypes);
    global.headerContextTypes = mod.exports;
  }
})(this, function (exports, _react, _contextTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  exports.default = _extends({}, _contextTypes2.default, { header: _react.PropTypes.bool });
});