'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _testResults = require('../constants/testResults');

var _testResults2 = _interopRequireDefault(_testResults);

var _submitResults = require('../constants/submitResults');

var _submitResults2 = _interopRequireDefault(_submitResults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Result = function Result() {
  (0, _classCallCheck3.default)(this, Result);


  this.resultId = '';

  this.testResult = _testResults2.default.notRun;
  this.testDatestamp = null;
  this.testDescription = '';
  this.testExceptions = [];
  this.testSubmitted = _submitResults2.default.notSubmitted;
};

exports = module.exports = Result;