'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SuiteResult = exports.Result = exports.TestPen = undefined;

var _testpen = require('./testpen');

var _testpen2 = _interopRequireDefault(_testpen);

var _Result = require('./model/Result');

var _Result2 = _interopRequireDefault(_Result);

var _SuiteResult = require('./model/SuiteResult');

var _SuiteResult2 = _interopRequireDefault(_SuiteResult);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.TestPen = _testpen2.default;
exports.Result = _Result2.default;
exports.SuiteResult = _SuiteResult2.default;