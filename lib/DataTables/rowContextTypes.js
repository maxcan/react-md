(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', './headerContextTypes', '../utils/omit'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('./headerContextTypes'), require('../utils/omit'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.headerContextTypes, global.omit);
    global.rowContextTypes = mod.exports;
  }
})(this, function (exports, _react, _headerContextTypes, _omit) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _headerContextTypes2 = _interopRequireDefault(_headerContextTypes);

  var _omit2 = _interopRequireDefault(_omit);

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

  var rowContextTypes = (0, _omit2.default)(_extends({}, _headerContextTypes2.default, {
    rowId: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
  }), ['baseId']);

  exports.default = rowContextTypes;
});