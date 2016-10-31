'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var testResults = require('../constants/testResults');
var submitResults = require('../constants/submitResults');

var SuiteResult = function SuiteResult() {
  (0, _classCallCheck3.default)(this, SuiteResult);


  this.resultId = '';
  this.author = '';

  this.suiteResult = testResults.notRun;
  this.suiteDatestamp = null;
  this.suiteDescription = '';
  this.suiteExceptions = [];
  this.suiteSubmitted = submitResults.notSubmitted;
};

exports = module.exports = SuiteResult;