'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var testResults = require('../constants/testResults');
var submitResults = require('../constants/submitResults');

var Result = function Result() {
  (0, _classCallCheck3.default)(this, Result);


  this.resultId = '';

  this.testResult = testResults.notRun;
  this.testDatestamp = null;
  this.testDescription = '';
  this.testExceptions = [];
  this.testSubmitted = submitResults.notSubmitted;
};

exports = module.exports = Result;